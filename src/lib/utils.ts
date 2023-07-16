export const getInitials = (string: string) => {
    const initials = string.replace(/[^a-zA-Z- \/]/g, "").match(/(?:\b\w|\/)/g) || []

    if (initials.length <= 0) return string.substring(0, 3)

    try {
        return initials.join("")
    } catch (_error) {
        return string.substring(0, 3)
    }
}
