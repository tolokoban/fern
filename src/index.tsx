import { createRoot } from "react-dom/client"
import App from "./components/App"
import "./index.css"

async function start() {
    const container = document.getElementById("app")
    if (!container) throw Error("Missing element with id #app!")

    createRoot(container).render(<App />)
}

start()
