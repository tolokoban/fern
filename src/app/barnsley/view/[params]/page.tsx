import React from "react"

import { PainterBarnsley } from "@/painter/barnsley"

import Styles from "./page.module.css"
import { useBarnsleyRouteParams } from "@/data/data"
import { IconEdit, IconReload, ViewFloatingButton } from "@tolokoban/ui"
import { makeGoto } from "@/utils/goto"

export default function PageView() {
    const params = useBarnsleyRouteParams()
    const ref = React.useRef<null | HTMLCanvasElement>(null)
    React.useEffect(() => {
        PainterBarnsley.canvas = ref.current
        PainterBarnsley.params = params
        return () => {
            PainterBarnsley.canvas = null
        }
    }, [params])
    return (
        <div className={Styles.PageView}>
            <canvas ref={ref}></canvas>
            <menu>
                <ViewFloatingButton
                    icon={IconEdit}
                    onClick={makeGoto("/barnsley/edit")}
                />
                <ViewFloatingButton
                    icon={IconReload}
                    onClick={PainterBarnsley.reset}
                />
            </menu>
        </div>
    )
}
