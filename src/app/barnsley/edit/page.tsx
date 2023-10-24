import React from "react"
import { Children, ViewButton, ViewPanel } from "@tolokoban/ui"

import {
    BarnsleyFunc,
    getBarnsleyPreset,
    getBarnsleyPresetNames,
    useBarnsleyParams,
} from "@/data/data"
import { makeGoto } from "@/utils/goto"

import Styles from "./page.module.css"
import { Input } from "@/components/Input"
import { AffineTransfo } from "@/components/AffineTransfo"

export default function PageEdit() {
    const defaultParams = useBarnsleyParams()
    const [params, setParams] = React.useState(defaultParams)
    const handlePreset = (name: string) => {
        const preset = getBarnsleyPreset(name)
        setParams(preset)
    }
    const handleParamChange = (col: number, row: number, value: number) => {
        const newParams = structuredClone(params)
        newParams.functions[col][row] = value
        setParams(newParams)
    }
    const handleFunctionChange = (
        index: number,
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number
    ): void => {
        const functions = [...params.functions] as [
            BarnsleyFunc,
            BarnsleyFunc,
            BarnsleyFunc,
            BarnsleyFunc,
        ]
        functions[index] = [a, b, c, d, e, f, functions[index][6]]
        setParams({
            ...params,
            functions,
        })
    }
    return (
        <ViewPanel
            position="absolute"
            color="neutral-1"
            display="flex"
            overflow="auto"
            justifyContent="space-around"
            alignItems="flex-start"
            flexWrap="wrap"
            gap="M"
            padding="M"
            width="100%"
            height="100%"
        >
            <Section>
                <ViewButton
                    onClick={makeGoto(
                        `/barnsley/view/${encodeURIComponent(
                            JSON.stringify(params)
                        )}`
                    )}
                >
                    View this fractal
                </ViewButton>
            </Section>
            <Section>
                <h2>Functions</h2>
                <ViewPanel
                    display="grid"
                    gridTemplateColumns="auto repeat(4, 1fr)"
                    placeItems="stretch"
                    gap="XS"
                    width="100%"
                >
                    {range(-1, 6).map((row) =>
                        range(-1, 3).map((col) => {
                            const key = `${row}/${col}`
                            if (row < 0) {
                                if (col < 0) return <div key={key}></div>
                                return (
                                    <ViewPanel
                                        key={key}
                                        display="grid"
                                        placeItems="center"
                                    >
                                        <div>
                                            f<sub>{col + 1}</sub>
                                        </div>
                                    </ViewPanel>
                                )
                            }
                            if (col < 0) {
                                return (
                                    <ViewPanel key={key}>
                                        {"abcdef%".charAt(row)}
                                    </ViewPanel>
                                )
                            }
                            return (
                                <Input
                                    key={key}
                                    value={params.functions[col][row]}
                                    onChange={(value) =>
                                        handleParamChange(col, row, value)
                                    }
                                />
                            )
                        })
                    )}
                </ViewPanel>
                <ViewPanel
                    className={Styles.formula}
                    display="flex"
                    justifyContent="space-between"
                    margin={["M", 0]}
                >
                    <div className={Styles.formula}>f(x) = ax + by + c</div>
                    <div className={Styles.formula}>f(y) = dx + ey + f</div>
                </ViewPanel>
                <hr />
                <AffineTransfo onFunctionChange={handleFunctionChange} />
            </Section>
            <Section>
                <h2>Presets</h2>
                {getBarnsleyPresetNames().map((name) => (
                    <ViewButton
                        width="100%"
                        margin={["XS", 0]}
                        variant="text"
                        onClick={() => handlePreset(name)}
                    >
                        {name}
                    </ViewButton>
                ))}
            </Section>
            <Section>
                <ViewButton
                    onClick={makeGoto(
                        `/barnsley/view/${encodeURIComponent(
                            JSON.stringify(params)
                        )}`
                    )}
                >
                    View this fractal
                </ViewButton>
            </Section>
        </ViewPanel>
    )
}

function Section({ children }: { children: Children }) {
    return (
        <ViewPanel
            color="neutral-5"
            borderRadius="S"
            padding="S"
            width="480px"
            maxWidth="99vw"
        >
            {children}
        </ViewPanel>
    )
}

function range(a: number, b: number) {
    const min = Math.min(a, b)
    const max = Math.max(a, b)
    const arr = [min]
    let val = min + 1
    while (val <= max) {
        arr.push(val)
        val++
    }
    return arr
}
