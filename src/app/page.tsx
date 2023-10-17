import React from "react"

import { makeGoto } from "@/utils/goto"

export default function Page() {
    React.useEffect(makeGoto("/view"), [])
    return <div>Redirecting...</div>
}
