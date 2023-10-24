import React from "react"
import { ViewButton, ViewPanel } from "@tolokoban/ui"

import { Input } from "../Input"

export interface AffineTransfoProps {
    onFunctionChange(
        index: number,
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number
    ): void
}

export function AffineTransfo({ onFunctionChange }: AffineTransfoProps) {
    const [tx, setTx] = React.useState(0)
    const [ty, setTy] = React.useState(0)
    const [sx, setSx] = React.useState(1)
    const [sy, setSy] = React.useState(1)
    const [rotation, setRotation] = React.useState(0)
    const handleClick = (index: number): void => {
        const angle = (rotation * Math.PI) / 180
        const C = Math.cos(angle)
        const S = Math.sin(angle)
        const a = C * sx
        const b = -S
        const c = tx
        const d = S
        const e = C * sy
        const f = ty
        onFunctionChange(index, a, b, c, d, e, f)
    }
    return (
        <>
            <ViewPanel
                display="grid"
                gridTemplateColumns="auto 1fr 1fr"
                gap="S"
            >
                <div>Translate:</div>
                <Input value={tx} onChange={setTx} />
                <Input value={ty} onChange={setTy} />
                <div>Scale:</div>
                <Input value={sx} onChange={setSx} />
                <Input value={sy} onChange={setSy} />
                <div>Rotate:</div>
                <Input value={rotation} onChange={setRotation} />
                <div>(degrees)</div>
            </ViewPanel>
            <ViewPanel display="flex" justifyContent="space-around">
                {[0, 1, 2, 3].map((index) => (
                    <ViewButton key={index} onClick={() => handleClick(index)}>
                        <span>
                            f<sub>{index + 1}</sub>
                        </span>
                    </ViewButton>
                ))}
            </ViewPanel>
        </>
    )
}
