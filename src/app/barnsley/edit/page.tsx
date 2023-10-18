import React from "react"
import { Children, IconShow, ViewButton, ViewPanel } from "@tolokoban/ui"

import {
    getBarnsleyPreset,
    getBarnsleyPresetNames,
    useBarnsleyParams,
} from "@/data/data"

import Styles from "./page.module.css"
import { makeGoto } from "@/utils/goto"

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

interface InputProps {
    value: number
    onChange(value: number): void
}

function Input({ value, onChange }: InputProps) {
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(evt.target.value)
        if (!Number.isNaN(value)) onChange(value)
    }
    return (
        <input
            className={Styles.Input}
            type="number"
            value={value}
            onInput={handleChange}
        />
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
