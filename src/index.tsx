import React from "react"
import { createRoot } from "react-dom/client"

import App from "./app"

import "./index.css"

const container = document.getElementById("app")
if (!container) throw Error("Missing element with id #app!")
createRoot(container).render(<App />)
