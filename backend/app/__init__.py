from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    from app.routes.analysis_routes import analysis_bp
    from app.routes.user_routes import user_bp
    from app.routes.dashboard_routes import dashboard_bp

    app.register_blueprint(analysis_bp, url_prefix="/analysis")
    app.register_blueprint(user_bp, url_prefix="/user")
    app.register_blueprint(dashboard_bp, url_prefix="/dashboard")

    return app