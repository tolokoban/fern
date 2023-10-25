import AtomicState from "@tolokoban/react-state"
import { TypeDef, isType } from "@tolokoban/type-guards"

import { BarnsleyParams, getDefaultBarnsleyPreset } from "./data/data"

export const State = {
    barnsley: {
        bounds: new AtomicState(getDefaultBarnsleyPreset().bounds, {
            storage: {
                id: "barnsley/bounds",
                guard: makeGuard(["array(4)", "number"]),
            },
        }),
        functions: new AtomicState(getDefaultBarnsleyPreset().functions, {
            storage: {
                id: "barnsley/functions",
                guard: makeGuard(["array(4)", ["array(7)", "number"]]),
            },
        }),
    },
}

export function useBarnsleyParamsState(): [
    params: BarnsleyParams,
    setParams: (params: BarnsleyParams) => void,
] {
    const [bounds, setBounds] = State.barnsley.bounds.useState()
    const [functions, setFunctions] = State.barnsley.functions.useState()
    return [
        { bounds, functions },
        (params: BarnsleyParams) => {
            setBounds(params.bounds)
            setFunctions(params.functions)
        },
    ]
}

function makeGuard<T>(type: TypeDef): (data: unknown) => data is T {
    return (data: unknown): data is T => isType<T>(data, type)
}
