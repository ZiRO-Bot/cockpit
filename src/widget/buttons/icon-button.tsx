"use client"

import { COMMON_TW } from "@/lib/constants"
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
    className = `w-12 h-12 flex items-center justify-center ${COMMON_TW.ICON_BUTTON} ${className}`
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default IconButton
