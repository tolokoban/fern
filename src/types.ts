export interface Preset {
    functions: [
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number,
        p: number
    ][]
    bounds: Bounds
}

export interface Presets {
    [name: string]: Preset
}

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

export type Bounds = [minX: number, minY: number, maxX: number, maxY: number]
