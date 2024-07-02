from flask import Flask,request,jsonify
from flask_restx import Namespace,Resource,fields
from models import Chore
from flask_jwt_extended import jwt_required

chores_ns=Namespace('chore',description="A namespace for Chores")

#serializer
chore_model=chores_ns.model(
    "Chore",
    {
        "id":fields.Integer(),
        "description":fields.String()
    }
)
@chores_ns.route('/hello')
class HelloResource(Resource):
    def get(self):
        return {"message":"hello world"}
    
@chores_ns.route('/')
class ChoreResource(Resource):   
    @chores_ns.marshal_list_with(chore_model)
    #@jwt_required()
    def get(self):
        """Get all chores"""
        chores = Chore.query.all()

        return chores
    @chores_ns.marshal_with(chore_model)
    @chores_ns.expect(chore_model)
    def post(self):
        """Create a new chore"""
        data = request.get_json()
        new_chore=Chore(
            description=data.get('description')
        )
        new_chore.save()
        return new_chore,201
        pass
@chores_ns.route('/<int:id>')
class ChoreResource(Resource):
    @chores_ns.marshal_with(chore_model)
    def get(self,id):
        """Get a particular Chore"""
        chore = Chore.query.get_or_404(id)
        return chore
    @chores_ns.marshal_with(chore_model)
    def put(self,id):
        """Update a chore"""
        chores_to_update=Chore.query.get_or_404(id)
        data=request.get_json()
        chores_to_update.update(data.get('description'))
        return chores_to_update
    @chores_ns.marshal_with(chore_model)
    def delete(self,id):
        """Delete a chore by id"""
        chore_to_delete=Chore.query.get_or_404(id)
        chore_to_delete.delete()
        return chore_to_delete
    