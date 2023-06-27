import { log } from "console"

export interface FernFunc {
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
    p: number
    index: number
}

const PRESETS: {
    [name: string]: [
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number,
        p: number
    ][]
} = {
    barnsley: [
        [0, 0, 0, 0.16, 0, 0, 1],
        [0.85, 0.04, -0.04, 0.85, 0, 1.6, 85],
        [0.2, -0.26, 0.23, 0.22, 0, 1.6, 7],
        [-0.15, 0.28, 0.26, 0.24, 0, 0.44, 7],
    ],
    cyclosorus: [
        [0, 0, 0, 0.25, 0, -0.4, 2],
        [0.95, 0.005, -0.005, 0.93, -0.002, 0.5, 84],
        [0.035, -0.2, 0.16, 0.04, -0.09, 0.02, 7],
        [-0.04, 0.2, 0.16, 0.04, 0.083, 0.12, 7],
    ],
    modified: [
        [0, 0, 0, 0.2, 0, -0.12, 1],
        [0.845, 0.035, -0.035, 0.82, 0, 1.6, 85],
        [0.2, -0.31, 0.255, 0.245, 0, 0.29, 7],
        [-0.15, 0.24, 0.25, 0.2, 0, 0.68, 7],
    ],
    culcita: [
        [0, 0, 0, 0.25, 0, -0.14, 2],
        [0.85, 0.02, -0.02, 0.83, 0, 1, 84],
        [0.09, -0.28, 0.3, 0.11, 0, 0.6, 7],
        [-0.09, 0.28, 0.3, 0.09, 0, 0.7, 7],
    ],
    fishbone: [
        [0, 0, 0, 0.25, 0, -0.4, 2],
        [0.95, 0.002, -0.002, 0.93, -0.002, 0.5, 84],
        [0.035, -0.11, 0.27, 0.01, -0.05, 0.005, 7],
        [-0.04, 0.11, 0.27, 0.01, 0.047, 0.06, 7],
    ],
    tree: [
        [0.4, 0, 0, 0.4, 0, 0, 5],
        [0.42, -0.42, 0.42, 0.42, 0, 2, 4],
        [0.42, 0.42, -0.42, 0.42, 0, 2, 4],
        [0, 0, 0, 0.5, 0, 0, 3],
    ],
    bee: [
        [0.6178, 0, 0, -0.6178, 0, 10, 15],
        [0, -0.786, 0.786, 0, 0.786, 0, 15],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ],
}

const KEYS: Array<keyof FernFunc> = ["a", "b", "c", "d", "e", "f", "p"]

export default class Inputs {
    public onRedraw: () => void = () => {}

    private lastconfig = ""

    private functions: [FernFunc, FernFunc, FernFunc, FernFunc] = [
        {
            a: 0.85,
            b: 0.04,
            c: -0.04,
            d: 0.85,
            e: 0.0,
            f: 1.6,
            p: 85,
            index: 0,
        },
        { a: 0.2, b: -0.26, c: 0.23, d: 0.22, e: 0.0, f: 1.6, p: 7, index: 1 },
        {
            a: -0.15,
            b: 0.28,
            c: 0.26,
            d: 0.24,
            e: 0.0,
            f: 0.44,
            p: 7,
            index: 2,
        },
        { a: 0.0, b: 0.0, c: 0.0, d: 0.16, e: 0.0, f: 0.0, p: 1, index: 3 },
    ]

    constructor() {
        const grid = document.getElementById("grid")
        if (!grid) throw Error("Missing element #grid!")

        for (const key of KEYS) {
            grid.appendChild(makeCoeff(key))
            for (const func of this.functions) {
                const input = this.makeInput(func, key)
                grid.appendChild(input)
            }
        }

        const preset = document.getElementById("preset") as HTMLSelectElement
        if (!preset) throw Error("Missing element #preset!")

        for (const key of Object.keys(PRESETS)) {
            const option = document.createElement("option")
            option.value = key
            option.textContent = key
            preset.appendChild(option)
        }
        preset.addEventListener("change", () => {
            this.reset(preset.value)
        })
    }

    getFunctions() {
        const funcs = [...this.functions]
        funcs.sort((a, b) => b.p - a.p)
        const [f1, f2, f3, f4] = funcs
        const config = JSON.stringify([
            [f1.a, f1.b, f1.c, f1.d, f1.e, f1.f, f1.p],
            [f2.a, f2.b, f2.c, f2.d, f2.e, f2.f, f2.p],
            [f3.a, f3.b, f3.c, f3.d, f3.e, f3.f, f3.p],
            [f4.a, f4.b, f4.c, f4.d, f4.e, f4.f, f4.p],
        ])
        if (config !== this.lastconfig) {
            console.log(config)
        }
        this.lastconfig = config
        return funcs
    }

    private reset(presetName: string) {
        const preset = PRESETS[presetName]
        if (!preset) return

        console.log("🚀 [inputs] preset = ", preset) // @FIXME: Remove this line written on 2023-06-21 at 15:21
        let row = 0
        for (const key of KEYS) {
            let col = 0
            for (const func of this.functions) {
                const value = preset[col][row]
                func[key] = value
                const id = `f${func.index}${key}`
                const input = document.getElementById(id) as HTMLInputElement
                if (!input) throw Error(`Unable to find input #${id}!`)

                input.value = `${value}`
                col++
            }
            row++
        }
        this.onRedraw()
    }

    private makeInput(func: FernFunc, key: keyof FernFunc) {
        const input = document.createElement("input")
        input.type = "number"
        input.value = `${func[key]}`
        input.id = `f${func.index}${key}`
        input.addEventListener("input", () => {
            const num = parseFloat(input.value)
            if (isNaN(num)) {
                input.classList.add("bad")
            } else {
                input.classList.remove("bad")
                this.update(func, key, num)
            }
        })
        return input
    }

    private update(func: FernFunc, key: keyof FernFunc, value: number) {
        func[key] = value
        this.onRedraw()
    }
}

function makeCoeff(key: string): any {
    const div = document.createElement("div")
    div.textContent = key
    div.classList.add("coeff")
    return div
}
