import axios from "axios";

const FASTAPI_URL = "http://localhost:8080/predict";

export async function predictRisk(latitude: number, longitude: number) {
    try {
        const response = await axios.post(FASTAPI_URL, {
            latitude,
            longitude
        });

        return response.data;
    } catch (error) {
        console.error("FastAPI error:", error);
        throw new Error("FastAPI unreachable");
    }
}
