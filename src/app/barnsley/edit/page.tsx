import React from "react"
import {
    Children,
    IconShow,
    ViewButton,
    ViewFloatingButton,
    ViewPanel,
} from "@tolokoban/ui"

import {
    BarnsleyFunc,
    BarnsleyParams,
    getBarnsleyPreset,
    getBarnsleyPresetNames,
} from "@/data/data"
import { goto, makeGoto } from "@/utils/goto"
import { Input } from "@/components/Input"
import { AffineTransfo } from "@/components/AffineTransfo"

import Styles from "./page.module.css"
import { useBarnsleyParamsState } from "@/state"
import { BarnsleyBoundsEditor } from "@/components/BarnsleyBoundsEditor"

export default function PageEdit() {
    const [params, setParams] = useBarnsleyParamsState()
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
            <ButtonShow params={params} />
            <Section>
                <h2>Functions</h2>
                <ViewPanel
                    display="grid"
                    gridTemplateColumns="auto repeat(4, 1fr) auto"
                    placeItems="stretch"
                    gap="XS"
                    width="100%"
                >
                    {range(-1, 6).map((row) =>
                        range(-1, 4).map((col) => {
                            const key = `${row}/${col}`
                            if (row < 0) {
                                if (col < 0) return <div key={key}></div>
                                if (col > 3) return <div></div>
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
                            if (col > 3) {
                                return (
                                    <small>
                                        {
                                            [
                                                "x",
                                                "y",
                                                "x",
                                                "y",
                                                <span>
                                                    t<sub>x</sub>
                                                </span>,
                                                <span>
                                                    t<sub>y</sub>
                                                </span>,
                                            ][row]
                                        }
                                    </small>
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
                    <div className={Styles.formula}>f(x) = ax + by + e</div>
                    <div className={Styles.formula}>f(y) = cx + dy + f</div>
                </ViewPanel>
                <hr />
                <AffineTransfo onFunctionChange={handleFunctionChange} />
            </Section>
            <ButtonShow params={params} />
            <Section>
                <h2>Bounds</h2>
                <BarnsleyBoundsEditor />
            </Section>
            <ButtonShow params={params} />
            <Section>
                <h2>Presets</h2>
                <ViewPanel display="flex" flexWrap="wrap" alignItems="center">
                    {getBarnsleyPresetNames().map((name) => (
                        <ViewButton
                            margin={0}
                            variant="text"
                            onClick={() => handlePreset(name)}
                        >
                            {name}
                        </ViewButton>
                    ))}
                </ViewPanel>{" "}
            </Section>
            <ButtonShow params={params} />
        </ViewPanel>
    )
}

function ButtonShow({ params }: { params: BarnsleyParams }) {
    return (
        <ViewPanel display="flex" justifyContent="space-around">
            <ViewFloatingButton
                icon={IconShow}
                onClick={() =>
                    goto(
                        `/barnsley/view/${encodeURIComponent(
                            JSON.stringify(params)
                        )}`
                    )
                }
            />
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
0
