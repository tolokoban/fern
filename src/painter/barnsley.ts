import { barnsley_fern_paint } from "@rust/index"
import { BarnsleyParams } from "./../data/data"

class Painter {
    private _canvas: null | HTMLCanvasElement = null
    private _params: null | BarnsleyParams = null
    private ctx: null | CanvasRenderingContext2D = null
    private bitmap: ImageData = {
        width: 0,
        height: 0,
        colorSpace: "srgb",
        data: new Uint8ClampedArray(),
    }
    /**
     * -1: Restart
     * 0: Stop rendering
     * n: Render
     */
    private loops = 0
    private readonly observer: ResizeObserver

    constructor() {
        window.requestAnimationFrame(this.paint)
        this.observer = new ResizeObserver(this.reset)
    }

    readonly reset = () => {
        this.loops = -1
    }

    readonly stop = () => {
        this.loops = 0
    }

    set canvas(value: HTMLCanvasElement | null) {
        this.ctx = null
        if (this._canvas) {
            this.observer.unobserve(this._canvas)
        }
        this._canvas = value
        if (value) {
            this.observer.observe(value)
            this.ctx = value.getContext("2d", {
                alpha: false,
            })
            this.reset()
        } else {
            this.stop()
        }
    }

    get params() {
        return this._params
    }

    set params(value: BarnsleyParams | null) {
        this._params = value
        this.reset()
    }

    private readonly paint = (time: number) => {
        window.requestAnimationFrame(this.paint)
        const { ctx, params } = this
        if (!ctx || !params) return

        if (this.loops === 0) return

        const { width, height } = resizeCanvas(ctx)
        if (this.loops < 0) {
            ctx.fillStyle = "#000"
            ctx.fillRect(0, 0, width, height)
            this.loops = Math.ceil(width * height * 1e-4)
            this.bitmap = ctx.getImageData(0, 0, width, height)
        }
        if (this.bitmap.width !== width || this.bitmap.height !== height) {
            this.reset()
            return
        }
        actualPaint(this.bitmap.data, width, height, time, params)
        ctx.putImageData(this.bitmap, 0, 0)
        this.loops--
    }
}

function actualPaint(
    data: Uint8ClampedArray,
    w: number,
    h: number,
    time: number,
    {
        functions: [f1, f2, f3, f4],
        bounds: [minX, minY, maxX, maxY],
    }: BarnsleyParams
) {
    const [f1a, f1b, f1c, f1d, f1e, f1f, f1p] = f1
    const [f2a, f2b, f2c, f2d, f2e, f2f, f2p] = f2
    const [f3a, f3b, f3c, f3d, f3e, f3f, f3p] = f3
    const [f4a, f4b, f4c, f4d, f4e, f4f, f4p] = f4
    const x = (minX + maxX) / 2
    const y = (minY + maxY) / 2
    const ratioParams = Math.abs((maxX - minX) / (maxY - minY))
    const ratioScreen = w / h
    const scaleX = ratioScreen > ratioParams ? ratioScreen / ratioParams : 1
    const scaleY = ratioScreen > ratioParams ? 1 : ratioParams / ratioScreen
    // prettier-ignore
    barnsley_fern_paint(
        data as unknown as Uint8Array,
        w,
        h,
        time,
        f1a, f1b, f1c, f1d, f1e, f1f, Math.ceil(f1p),
        f2a, f2b, f2c, f2d, f2e, f2f, Math.ceil(f2p),
        f3a, f3b, f3c, f3d, f3e, f3f, Math.ceil(f3p),
        f4a, f4b, f4c, f4d, f4e, f4f, Math.ceil(f4p),
        x + scaleX * (minX - x), 
        y + scaleY * (minY - y), 
        x + scaleX * (maxX - x), 
        y + scaleY * (maxY - y)
    )
}

function resizeCanvas(ctx: CanvasRenderingContext2D): {
    width: number
    height: number
} {
    const { canvas } = ctx
    const width = Math.ceil(canvas.clientWidth)
    const height = Math.ceil(canvas.clientHeight)
    canvas.width = width
    canvas.height = height
    return { width, height }
}

export const PainterBarnsley = new Painter()
