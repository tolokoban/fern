import AtomicState from "@tolokoban/react-state"
import { TypeDef, isType } from "@tolokoban/type-guards"

import { BarnsleyFunc, BarnsleyParams } from "./data/data"
import { Bounds } from "./types"

export const State = {
    barnsley: {
        bounds: new AtomicState<Bounds>([-2, -2, 2, 2], {
            storage: {
                id: "barnsley/bounds",
                guard: makeGuard(["array(4)", "number"]),
            },
        }),
        functions: new AtomicState<
            [BarnsleyFunc, BarnsleyFunc, BarnsleyFunc, BarnsleyFunc]
        >(
            [
                [1, 0, 0, 1, 0, 0, 10],
                [1, 0, 0, 1, 0, 0, 10],
                [1, 0, 0, 1, 0, 0, 10],
                [1, 0, 0, 1, 0, 0, 10],
            ],
            {
                storage: {
                    id: "barnsley/functions",
                    guard: makeGuard(["array(4)", ["array(7)", "number"]]),
                },
            }
        ),
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
