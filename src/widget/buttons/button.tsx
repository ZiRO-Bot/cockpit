"use client"

import { COMMON_TW } from "@/lib/constants"
import ButtonType from "@/model/enum/button-type"
import Link from "next/link"
import { AriaAttributes, MouseEventHandler, ReactNode } from "react"

interface ButtonProps extends AriaAttributes {
    children: ReactNode
    buttonType?: ButtonType
    className?: string
    padding?: String
    href?: string
    onClick?: MouseEventHandler
}

const Button = ({
    children,
    buttonType = ButtonType.PRIMARY,
    className = "",
    href = undefined,
    padding = undefined,
    onClick = undefined,
    ...args
}: ButtonProps) => {
    const isNav = buttonType <= ButtonType.NAV
    if (!padding && !isNav) padding = "py-4 px-6 sm:px-8"
    let builder = `text-md ${
        isNav
            ? "flex items-center justify-center h-12 px-4"
            : "active:scale-95 transition-transform"
    } ${padding} transition-[background-color] ${
        buttonType === ButtonType.DROPDOWN || buttonType === ButtonType.ACTIVE_DROPDOWN
            ? "rounded-lg"
            : "rounded-full"
    } `
    switch (buttonType) {
        case ButtonType.ACTIVE_NAV:
            builder += "font-bold bg-sky-500/[0.1] text-sky-600"
            break
        case ButtonType.NAV:
            builder += "font-bold hover:bg-gray-200 dark:hover:bg-gray-50/[0.1]"
            break
        case ButtonType.PRIMARY_NAV || ButtonType.PRIMARY:
            builder += "font-bold bg-sky-500 hover:bg-opacity-80 text-white"
            break
        case ButtonType.GRAY:
            builder += "font-bold bg-gray-600 hover:bg-opacity-80  text-white"
            break
        case ButtonType.OUTLINE:
            builder += `font-bold bg-transparent hover:bg-gray-200/[0.75] dark:hover:bg-gray-50/[0.02] ${COMMON_TW.BORDER_LIKE_SHADOW_BTN}`
            break
        case ButtonType.ACTIVE_DROPDOWN:
            builder += "bg-gray-400/[0.25] dark:bg-gray-500/[0.3]"
        case ButtonType.DROPDOWN:
            builder +=
                " font-semibold hover:bg-gray-500/[0.2] dark:hover:bg-gray-600/[0.3] text-black dark:text-white"
            break
    }
    className = `${builder} ${className}`
    return href === undefined ? (
        <button className={className} onClick={onClick} {...args}>
            {children}
        </button>
    ) : (
        <Link className={className} href={href} {...args}>
            {children}
        </Link>
    )
}

export default Button
