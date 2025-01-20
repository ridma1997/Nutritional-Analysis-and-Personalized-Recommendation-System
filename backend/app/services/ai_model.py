from tensorflow.keras.models import load_model

def analyze_food(input_data):
    model = load_model("path_to_model.h5")
    prediction = model.predict(input_data)
    return prediction