import React from "react"

import Styles from "./Input.module.css"

interface InputProps {
    value: number
    onChange(value: number): void
}

export function Input({ value, onChange }: InputProps) {
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
