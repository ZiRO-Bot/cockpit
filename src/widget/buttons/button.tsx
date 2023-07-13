"use client"

import ButtonType from "@/model/enum/button-type"
import Link from "next/link"
import { AriaAttributes, MouseEventHandler, ReactNode } from "react"

interface ButtonProps extends AriaAttributes {
    children: ReactNode
    buttonType: ButtonType
    className?: string
    href?: string
    onClick?: MouseEventHandler
}

const Button = ({
    children,
    buttonType,
    className = "",
    href = undefined,
    onClick = undefined,
    ...args
}: ButtonProps) => {
    let builder =
        "text-md font-bold py-4 px-6 sm:px-8 transition-[background-color] rounded-full active:scale-95 transition-transform "
    switch (buttonType) {
        case ButtonType.PRIMARY:
            builder += "bg-sky-500 hover:bg-opacity-80 text-white"
            break
        case ButtonType.OUTLINE:
            builder +=
                "bg-transparent hover:bg-gray-200/[0.75] dark:hover:bg-gray-50/[0.02] shadow-border-like-btn dark:shadow-border-like-dark-btn"
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
