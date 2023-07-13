export const getInitials = (string: string, glue: boolean = true) => {
    const initials = string.replace(/[^a-zA-Z- \/]/g, "").match(/(?:\b\w|\/)/g) || []

    if (glue) {
        try {
            return initials.join("")
        } catch (_error) {
            return string.substring(0, 3)
        }
    }

    return initials
}
