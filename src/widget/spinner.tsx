interface SpinnerAttribute {
    size?: number
    color?: string
    strokeWidth?: number
    className?: string
}
export const Spinner = ({
    size = 48,
    color = "#FFFFFF",
    strokeWidth = 2,
    className = "",
}: SpinnerAttribute) => {
    return (
        <>
            <svg
                width={size}
                height={size}
                color={color}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={"flex animate-spinner " + className}>
                <path
                    d="M23 12C23 18.0751 18.0751 23 12 23"
                    stroke={color}
                    stroke-width={strokeWidth}
                    stroke-linecap="round"
                />
            </svg>
        </>
    )
}
