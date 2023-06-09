import { barnsley_fern_paint } from "@rust/index"
import Inputs from "./inputs"
import "./index.css"
import { Bounds, FernFunc } from "./types"

// Bounds of the fern.
// const MIN_X = -2.182
// const MIN_Y = -0.0001
// const MAX_X = 2.6568 * 2.5
// const MAX_Y = 9.9983
const MIN_X = 0.2
const MIN_Y = 0.5
const MAX_X = 1
const MAX_Y = 0.8

async function start() {
    const inputs = new Inputs()

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
            actualPaint(
                imageData.data as unknown as Uint8Array,
                w,
                h,
                time,
                inputs.getFunctions(),
                inputs.getBounds()
            )
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
    inputs.onRedraw = clear
}

function actualPaint(
    data: Uint8Array,
    w: number,
    h: number,
    time: number,
    [f1, f2, f3, f4]: FernFunc[],
    [minX, minY, maxX, maxY]: Bounds
) {
    // prettier-ignore
    barnsley_fern_paint(
        data,
        w,
        h,
        time,
        f1.a, f1.b, f1.c, f1.d, f1.e, f1.f, Math.ceil(f1.p),
        f2.a, f2.b, f2.c, f2.d, f2.e, f2.f, Math.ceil(f2.p),
        f3.a, f3.b, f3.c, f3.d, f3.e, f3.f, Math.ceil(f3.p),
        f4.a, f4.b, f4.c, f4.d, f4.e, f4.f, Math.ceil(f4.p),
        minX, minY, maxX, maxY
    )
}

start()
