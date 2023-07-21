"use client"

import { selectIsLoggedIn } from "@/data/redux/auth"
import { COMMON_TW, FAILED_AUTH, SUCCESS_AUTH } from "@/lib/constants"
import { useSelector } from "@/lib/hooks/typed-redux"
import ButtonType from "@/model/enum/button-type"
import { LoadingStateType } from "@/model/loading"
import { ReactNode, useState } from "react"
import Button from "../../buttons/button"
import Discord from "../../icon/discord"
import { Spinner } from "../../spinner"

export const UserAvatarOrLogin = ({ children }: { children: ReactNode }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const user = useSelector((state) => state.auth.user)
    const meta = useSelector((state) => state.meta)

    const spinner = <Spinner size={48} strokeWidth={3} className="p-2" />

    // -- oauth stuff
    const [isSigning, setIsSigning] = useState(false)
    const loginUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`
    const loginHandler = (event: MessageEvent) => {
        if (event.data.message === SUCCESS_AUTH) {
            window.location.reload()
        }
        if (event.data.message === SUCCESS_AUTH || event.data.message === FAILED_AUTH) {
            setIsSigning(false)
            window.removeEventListener("message", loginHandler)
        }
    }

    if (isLoggedIn === undefined) return spinner

    if (!isLoggedIn)
        return (
            <Button
                className={`gap-2 ${
                    (meta.botOnline === false || meta.nexusOnline === false) && "disabled"
                }`}
                onClick={() => {
                    if (!isSigning) {
                        window.addEventListener("message", loginHandler)
                        setIsSigning(true)
                    }
                    window.open(loginUrl, "_blank")
                }}
                buttonType={ButtonType.PRIMARY_NAV}>
                <Discord />
                Sign In with Discord
            </Button>
        )

    if (user.status === LoadingStateType.INITIAL || user.status === LoadingStateType.LOADING)
        return spinner

    return (
        <details className="group/dropdown">
            <summary
                className={
                    `w-12 h-12 flex justify-center items-center group-open/dropdown:bg-gray-200 dark:group-open/dropdown:bg-gray-50/[0.1] group-open/dropdown:active:scale-100 ${COMMON_TW.ICON_BUTTON}` +
                    "before:top-0 before:bottom-0 before:left-auto before:right-0 before:fixed before:cursor-default before:hidden group-open/dropdown:before:block before:content-[' '] before:bg-transparent before:w-screen before:h-screen before:z-[80]"
                }>
                <img
                    className="rounded-full"
                    alt="User's avatar"
                    width={24}
                    height={24}
                    src={user.data?.avatar || ""}
                />
            </summary>
            {children}
        </details>
    )
}
