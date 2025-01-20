import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "mysql+pymysql://root:1r9i9d7M#@localhost:3306/nutrition_db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
