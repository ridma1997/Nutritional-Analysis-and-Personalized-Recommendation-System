from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer)
    weight = db.Column(db.Float)
    height = db.Column(db.Float)
    health_goals = db.Column(db.Text)