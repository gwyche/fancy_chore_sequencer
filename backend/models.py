from exts import db

"""
class Recipie:
    id:int primary key
    description:str(text)
"""

class Chore(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    description=db.Column(db.Text(),nullable=False)

    def __repr__(self):
        return f"<Chore {self.title} >"
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self,title,description):
        self.title=title
        self.description = description
        db.session.commit()

# user_model

"""
class User:
    id:integer
    username:string
    email:string
    password:string
"""

class User(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String(),nullable=False,unique=True)
    email=db.Column(db.String(80),nullable=False)
    password=db.Column(db.Text(),nullable=False)
    def save(self):
        db.session.add(self)
        db.session.commit()
    def __repr__(self):
        return f"<User {self.username}>"