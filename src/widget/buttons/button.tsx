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
    scroll?: boolean
    layout?: ({
        children,
        className = "",
    }: {
        children: ReactNode
        className: string
    }) => JSX.Element
}

const Button = ({
    children,
    buttonType = ButtonType.PRIMARY,
    className = "",
    href = undefined,
    padding = undefined,
    onClick = undefined,
    scroll = true,
    layout = undefined,
    ...args
}: ButtonProps) => {
    const isNav = buttonType <= ButtonType.NAV
    if (!padding && !isNav) padding = "py-4 px-6 sm:px-8"
    let builder = `text-md ${
        isNav
            ? "flex items-center justify-center h-12 px-4"
            : "active:scale-95 transition-transform"
    } ${padding || ""} transition-[background-color] ${
        buttonType === ButtonType.DROPDOWN || buttonType === ButtonType.ACTIVE_DROPDOWN
            ? "rounded-lg"
            : "rounded-full"
    } [&.disabled]:pointer-events-none [&.disabled]:cursor-default [&.disabled]:brightness-125 dark:[&.disabled]:brightness-90 `
    switch (buttonType) {
        case ButtonType.ACTIVE_NAV:
            builder += "font-bold bg-sky-500/[0.1] text-sky-600"
            break
        case ButtonType.NAV:
            builder +=
                "font-bold bg-opacity-0 dark:bg-opacity-0 [&:not(.disabled)]:hover:bg-opacity-10 bg-dark dark:bg-gray-50"
            break
        case ButtonType.PRIMARY_NAV:
        case ButtonType.PRIMARY:
            builder += "font-bold bg-sky-500 [&:not(.disabled)]:hover:bg-opacity-80 text-white"
            break
        case ButtonType.GRAY:
            builder += "font-bold bg-gray-600 [&:not(.disabled)]:hover:bg-opacity-80 text-white"
            break
        case ButtonType.OUTLINE:
            builder += `font-bold bg-transparent [&:not(.disabled)]:hover:bg-gray-200/[0.75] dark:[&:not(.disabled)]:hover:bg-gray-50/[0.02] ${COMMON_TW.BORDER_LIKE_SHADOW_BTN}`
            break
        case ButtonType.ACTIVE_DROPDOWN:
            builder += "bg-gray-400/[0.25] dark:bg-gray-500/[0.3]"
        case ButtonType.DROPDOWN:
            builder +=
                " font-semibold [&:not(.disabled)]:hover:bg-gray-600/[0.1] dark:[&:not(.disabled)]:hover:bg-gray-50/[0.1] text-black dark:text-white"
            break
    }
    className = `${builder} ${className}`

    if (layout) {
        const Layout = layout
        return <Layout className={className}>{children}</Layout>
    }

    return href === undefined ? (
        <button className={className} onClick={onClick} {...args}>
            {children}
        </button>
    ) : (
        <Link className={className} href={href} scroll={scroll} {...args}>
            {children}
        </Link>
    )
}

export default Button
