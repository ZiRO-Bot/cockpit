export const fetchUser = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v2/@me`, {
        credentials: "include",
    }).then((resp) => {
        return resp.text()
    })
    return ""
}
