interface SpinnerAttribute {
    size?: number
    color?: string
    darkColor?: string
    strokeWidth?: number
    className?: string
}
export const Spinner = ({
    size = 48,
    color = "black",
    darkColor = "white",
    strokeWidth = 2,
    className = "",
}: SpinnerAttribute) => {
    return (
        <>
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${className} animate-spinner overflow-visible stroke-${color} dark:stroke-${darkColor}`}>
                <path
                    d="M23 12C23 18.0751 18.0751 23 12 23"
                    stroke-width={strokeWidth}
                    stroke-linecap="round"
                />
            </svg>
        </>
    )
}
