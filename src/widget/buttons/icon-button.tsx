"use client"

import { MouseEventHandler, ReactNode } from "react"

const IconButton = ({
    children,
    onClick,
    className,
}: {
    children: ReactNode
    onClick: MouseEventHandler
    className?: string
}) => {
    className = `w-12 h-12 flex rounded-full items-center justify-center active:scale-95 transition-transform hover:bg-gray-200 dark:hover:bg-gray-50/[0.1] ${className}`
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default IconButton
