import { createRoot } from "react-dom/client"
import { Theme } from "@tolokoban/ui"

import App from "./app"

import "./index.css"

const theme = new Theme({
    colors: {
        secondary: {
            hue: 0,
        },
        neutral: {
            hue: 240,
            lightness: [0, 1],
            chroma: 0.5,
        },
    },
})
theme.apply()
const container = document.getElementById("app")
if (!container) throw Error("Missing element with id #app!")
createRoot(container).render(<App />)
