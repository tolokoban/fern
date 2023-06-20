import { barnsley_fern_paint } from "@rust/index"
import "./index.css"

async function start() {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    if (!canvas) throw Error("Missing element with id #canvas!")

    const ctx = canvas.getContext("2d")
    if (!ctx) throw Error("Unable to create a 2D context!")

    ctx.fillStyle = "#000"
    let loops = 0

    const paint = (time: number) => {
        if (loops > 0) {
            const w = canvas.width
            const h = canvas.height
            const imageData = ctx.getImageData(0, 0, w, h)
            actualPaint(imageData.data as unknown as Uint8Array, w, h, time)
            ctx.putImageData(imageData, 0, 0)
            loops--
        }
        window.requestAnimationFrame(paint)
    }

    window.requestAnimationFrame(paint)
    const clear = () => {
        const w = canvas.clientWidth
        const h = canvas.clientHeight
        canvas.width = w
        canvas.height = h
        ctx.fillRect(0, 0, w, h)
        loops = Math.floor(w * h * 1e-4)
    }
    const observer = new ResizeObserver(clear)
    observer.observe(canvas)
    canvas.addEventListener("click", clear)
}

function actualPaint(data: Uint8Array, w: number, h: number, time: number) {
    // prettier-ignore
    barnsley_fern_paint(
        data,
        w,
        h,
        time,
         0.85,  0.04, -0.04,  0.85,  0.00,  1.60, 850,
         0.20, -0.26,  0.23,  0.22,  0.00,  1.60, 70,
        -0.15,  0.28,  0.26,  0.24,  0.00,  0.44, 70,
         0.00,  0.00,  0.00,  0.16,  0.00,  0.00, 10
    )
}

start()
