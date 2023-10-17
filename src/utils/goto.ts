export function goto(route: string) {
    window.location.hash = route
}

export function makeGoto(route: string) {
    return ()=>goto(route)
}
