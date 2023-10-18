export interface BarnsleyPreset {
    functions: [
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number,
        p: number,
    ][]
    bounds: Bounds
}

export interface BarnsleyPresets {
    [name: string]: BarnsleyPreset
}

export interface BarnsleyFernFunc {
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
    p: number
    index: number
}

export type Bounds = [minX: number, minY: number, maxX: number, maxY: number]
