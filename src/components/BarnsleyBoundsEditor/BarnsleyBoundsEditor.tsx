import { ViewButton, ViewPanel } from "@tolokoban/ui"

import { barnsley_fern_compute_bounds } from "@rust/index"
import { State } from "@/state"
import { Input } from "../Input"
import { Bounds } from "@/types"

export function BarnsleyBoundsEditor() {
    const [bounds, setBounds] = State.barnsley.bounds.useState()
    const functions = State.barnsley.functions.useValue()
    const update = (index: number, value: number) => {
        const newBounds = [...bounds] as Bounds
        newBounds[index] = value
        setBounds(newBounds)
    }
    const handleComputeBounds = () => {
        const data = new Float32Array([0, 0, 0, 0])
        const [
            [f1a, f1b, f1c, f1d, f1e, f1f, f1p],
            [f2a, f2b, f2c, f2d, f2e, f2f, f2p],
            [f3a, f3b, f3c, f3d, f3e, f3f, f3p],
            [f4a, f4b, f4c, f4d, f4e, f4f, f4p],
        ] = functions
        barnsley_fern_compute_bounds(
            data,
            Date.now(),
            f1a,
            f1b,
            f1c,
            f1d,
            f1e,
            f1f,
            f1p,
            f2a,
            f2b,
            f2c,
            f2d,
            f2e,
            f2f,
            f2p,
            f3a,
            f3b,
            f3c,
            f3d,
            f3e,
            f3f,
            f3p,
            f4a,
            f4b,
            f4c,
            f4d,
            f4e,
            f4f,
            f4p
        )
        console.log("🚀 [BarnsleyBoundsEditor] data = ", data) // @FIXME: Remove this line written on 2023-10-25 at 14:43
        const newBounds = Array.from(data) as Bounds
        setBounds(newBounds)
    }
    return (
        <>
            <ViewPanel
                display="grid"
                gridTemplateColumns="auto 1fr 1fr"
                gap="S"
            >
                <div></div>
                <div>min</div>
                <div>max</div>
                <div>X</div>
                <Input
                    value={bounds[0]}
                    onChange={(value) => update(0, value)}
                />
                <Input
                    value={bounds[2]}
                    onChange={(value) => update(2, value)}
                />
                <div>Y</div>
                <Input
                    value={bounds[1]}
                    onChange={(value) => update(1, value)}
                />
                <Input
                    value={bounds[3]}
                    onChange={(value) => update(3, value)}
                />
            </ViewPanel>
            <ViewButton onClick={handleComputeBounds}>
                Compute bounds
            </ViewButton>
        </>
    )
}
