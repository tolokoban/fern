import React from "react"
import Styles from "./App.module.css" assert { type: "css" }
import { barnsley_fern_paint } from "@rust/index"

export default function App() {
    const refCanvas = React.useRef<null | HTMLCanvasElement>(null)
    const [width, setWidth] = React.useState(0)
    const [height, setHeight] = React.useState(0)
    React.useEffect(() => {
        const canvas = refCanvas.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        canvas.width = canvas.clientWidth
        canvas.height = canvas.clientHeight
        const w = canvas.width
        const h = canvas.height
        ctx.fillStyle = "#000"
        ctx.fillRect(0, 0, w, h)
        let loops = Math.floor(w * h * 1e-4)

        const anim = (time: number) => {
            const imageData = ctx.getImageData(0, 0, w, h)
            barnsley_fern_paint(
                imageData.data as unknown as Uint8Array,
                w,
                h,
                time
            )
            ctx.putImageData(imageData, 0, 0)
            loops--
            if (loops > 0) window.requestAnimationFrame(anim)
        }
        window.requestAnimationFrame(anim)

        const observer = new ResizeObserver(() => {
            if (canvas.clientWidth === width && canvas.clientHeight === height)
                return

            console.log("Resize...")
            loops = 0
            setWidth(canvas.clientWidth)
            setHeight(canvas.clientHeight)
        })
        observer.observe(canvas)
        return () => {
            observer.unobserve(canvas)
        }
    }, [width, height])
    return (
        <canvas
            className={Styles.App}
            ref={refCanvas}
            width={32}
            height={32}
        ></canvas>
    )
}
