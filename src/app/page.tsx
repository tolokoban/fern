import React from "react"

import { makeGoto } from "@/utils/goto"
import { useBarnsleyParams } from "@/data/data"

export default function Page() {
    const params = useBarnsleyParams()
    React.useEffect(makeGoto(`/barnsley/view/${JSON.stringify(params)}`), [])
    return <div>Redirecting...</div>
}
