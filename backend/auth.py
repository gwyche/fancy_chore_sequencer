from flask import Flask,request,jsonify,make_response
from flask_restx import Api, Resource,Namespace,fields
from models import User
from werkzeug.security import generate_password_hash,check_password_hash
from flask_jwt_extended import (JWTManager,
create_access_token,create_refresh_token,jwt_required,
get_jwt_identity)

auth_ns = Namespace('auth',description="A namespace for our Authentication")

signup_model = auth_ns.model(
    "SignUp",
    {
        "username":fields.String(),
        "email":fields.String(),
        "password":fields.String()
    }
)

login_model = auth_ns.model(
    "Login",
    {
        "username":fields.String(),
        "password":fields.String()
    }
)


@auth_ns.route('/signup')
class SignUp(Resource):
    @auth_ns.expect(signup_model)
    def post(self):
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')

        db_user = User.query.filter_by(username=username).first()
        if db_user is not None:
            return jsonify({"message":f"User with username {username} already exist"})
        

        db_user2 = User.query.filter_by(email=email).first()
        if db_user2 is not None:
            return jsonify({"message":f"User with email {email} already exist"})

        new_user = User(
            username = username,
            email = email,
            password = generate_password_hash(data.get('password'))
        )
        new_user.save()
        return make_response((jsonify({"message":f"User {username} created successfully"}),201))
    
@auth_ns.route('/login')
class Login(Resource):
    @auth_ns.expect(login_model)
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        db_user = User.query.filter_by(username=username).first()
        if db_user and check_password_hash(db_user.password, password):
            access_token = create_access_token(identity=db_user.username)
            refresh_token = create_refresh_token(identity=db_user.username)

            return jsonify(
                {"access_token":access_token,"refresh_token":refresh_token}
            )
        else:
            return jsonify(
                {"message":"password or username invalid"}
            )
@auth_ns.route('/refresh')
class RefreshResource(Resource):
    @jwt_required(refresh=True)
    def post(self):
        currentuser = get_jwt_identity()
        new_access_token=create_access_token(identity=currentuser)
        return make_response(jsonify({"access_token":new_access_token}),201)