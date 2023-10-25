import React from "react"

import Styles from "./Input.module.css"

interface InputProps {
    value: number
    onChange(value: number): void
}

const RX_NUMBER = /^\-?(([0-9]+(\.[0-9]+)?|\.[0-9]+))$/

export function Input({ value, onChange }: InputProps) {
    const [error, setError] = React.useState(false)
    const [text, setText] = React.useState(`${value}`)
    React.useEffect(() => {
        setError(false)
        setText(`${value}`)
    }, [value])
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target
        setText(value)
        console.log("🚀 [Input] value = ", value) // @FIXME: Remove this line written on 2023-10-25 at 15:40
        RX_NUMBER.lastIndex = -1
        if (RX_NUMBER.test(value)) {
            setError(false)
            onChange(Number(value))
        } else {
            console.warn("ERROR")
            setError(true)
        }
    }
    return (
        <input
            className={join(Styles.Input, error && Styles.error)}
            type="text"
            value={text}
            onChange={handleChange}
        />
    )
}

function join(...items: unknown[]) {
    return items.filter((item) => typeof item === "string").join(" ")
}
