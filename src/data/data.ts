import { assertType } from "@tolokoban/type-guards"
import React from "react"

import { useRouteParams } from "@/app"
import { State } from "@/state"

export type BarnsleyFunc = [
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    // Probability
    p: number,
]

type Bounds = [minX: number, minY: number, maxX: number, maxY: number]

export interface BarnsleyParams {
    functions: [BarnsleyFunc, BarnsleyFunc, BarnsleyFunc, BarnsleyFunc]
    bounds: Bounds
}

export type BarnsleyPresets = Record<string, BarnsleyParams>

const BARNSLEY_PRESETS: BarnsleyPresets = {
    Barnsley: {
        functions: [
            [0, 0, 0, 0.16, 0, 0, 1],
            [0.85, 0.04, -0.04, 0.85, 0, 1.6, 85],
            [0.2, -0.26, 0.23, 0.22, 0, 1.6, 7],
            [-0.15, 0.28, 0.26, 0.24, 0, 0.44, 7],
        ],
        bounds: [-2.182, -0.0001, 2.6568 * 2.5, 9.9983],
    },
    Cyclosorus: {
        functions: [
            [0, 0, 0, 0.25, 0, -0.4, 2],
            [0.95, 0.005, -0.005, 0.93, -0.002, 0.5, 84],
            [0.035, -0.2, 0.16, 0.04, -0.09, 0.02, 7],
            [-0.04, 0.2, 0.16, 0.04, 0.083, 0.12, 7],
        ],
        bounds: [0, 0, 2, 7],
    },
    Culcita: {
        functions: [
            [0, 0, 0, 0.25, 0, -0.14, 2],
            [0.85, 0.02, -0.02, 0.83, 0, 1, 84],
            [0.09, -0.28, 0.3, 0.11, 0, 0.6, 7],
            [-0.09, 0.28, 0.3, 0.09, 0, 0.7, 7],
        ],
        bounds: [-4, 0, 2, 6],
    },
    Fishbone: {
        functions: [
            [0, 0, 0, 0.25, 0, -0.4, 2],
            [0.95, 0.002, -0.002, 0.93, -0.002, 0.5, 84],
            [0.035, -0.11, 0.27, 0.01, -0.05, 0.005, 7],
            [-0.04, 0.11, 0.27, 0.01, 0.047, 0.06, 7],
        ],
        bounds: [-5, -1, 2, 8],
    },
    Sierpiński: {
        functions: [
            [0.5, 0, 0, 0.5, -0.666, 0, 10],
            [0.5, 0, 0, 0.5, 0.666, 0, 10],
            [0.5, 0, 0, 0.5, 0, 1, 10],
            [0, 0, 0, 0, 0, 0, 0],
        ],
        bounds: [-2, 0, 2, 2],
    },
    Coch: {
        functions: [
            [0.5, 0.375, 0.5, -0.375, -0.0625, 0.5625, 10],
            [0.5, -0.375, -0.5, -0.375, 0.5625, 1.0625, 10],
            [1, 0, 0, 1, 0, 0, 0],
            [1, 0, 0, 1, 0, 0, 0],
        ],
        bounds: [0.2, 0.6, 1, 0.8],
    },
    Tree: {
        functions: [
            [0.4, 0, 0, 0.4, 0, 0, 5],
            [0.42, -0.42, 0.42, 0.42, 0, 2, 4],
            [0.42, 0.42, -0.42, 0.42, 0, 2, 4],
            [0, 0, 0, 0.5, 0, 0, 3],
        ],
        bounds: [-2.4, 0, 6.9, 4.5],
    },
    Hive: {
        functions: [
            [0.6178, 0, 0, -0.6178, 0, 10, 15],
            [0, -0.786, 0.786, 0, 0.786, 0, 15],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ],
        bounds: [-2.182, -0.0001, 2.6568 * 2.5, 9.9983],
    },
}

export function getBarnsleyPresetNames() {
    return Object.keys(BARNSLEY_PRESETS)
}

export function getBarnsleyPreset(name: string): BarnsleyParams {
    const preset = BARNSLEY_PRESETS[name]
    if (!preset) throw Error(`There is no preset with the name "${name}"!`)

    return preset
}

export function getDefaultBarnsleyPreset(): BarnsleyParams {
    return getBarnsleyPreset(getBarnsleyPresetNames()[0])
}

function isBarnsleyParams(data: unknown): data is BarnsleyParams {
    if (!data) return false

    try {
        assertType(data, {
            functions: ["array(4)", ["array(7)", "number"]],
            bounds: ["array(4)", "number"],
        })
        return true
    } catch (ex) {
        console.error("LocalStorage is corrupted!")
        console.error(ex)
        return false
    }
}

export function useBarnsleyRouteParams(): BarnsleyParams {
    const { params } = useRouteParams()
    const barnsleyParams = React.useMemo(() => {
        let barnsleyParams: BarnsleyParams = {
            bounds: State.barnsley.bounds.value,
            functions: State.barnsley.functions.value,
        }
        try {
            const data = JSON.parse(decodeURIComponent(params))
            if (isBarnsleyParams(data)) barnsleyParams = data
        } catch (ex) {
            console.error(ex)
        } finally {
            return barnsleyParams
        }
    }, [params])
    return barnsleyParams
}
