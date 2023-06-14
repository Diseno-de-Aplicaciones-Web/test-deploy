const backendUrl = window.location.hostname === "localhost"
    ? "http://localhost:8000"
    : "https://test-deploy-backend-t2rn.onrender.com"

export {
    backendUrl
}