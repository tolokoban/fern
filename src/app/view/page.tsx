import React from "react"

import { startPainter } from "@/utils/painter"

import Styles from "./page.module.css"

export default function PageView() {
    return (
        <div className={Styles.PageView}>
            <canvas ref={startPainter}></canvas>
        </div>
    )
}
