import { selectIsLoggedIn } from "@/data/redux/auth"
import { COMMON_TW } from "@/lib/constants"
import { useSelector } from "@/lib/hooks/typed-redux"
import ButtonType from "@/model/enum/button-type"
import { LoadingStateType } from "@/model/loading"
import { usePathname } from "next/navigation"
import { MouseEventHandler } from "react"
import Button from "../buttons/button"
import Discord from "../icon/discord"
import { Spinner } from "../spinner"

export const UserAvatarOrLogin = ({ onClick }: { onClick: MouseEventHandler }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const user = useSelector((state) => state.auth.user)
    const pathname = usePathname()

    const spinner = <Spinner size={48} strokeWidth={3} className="p-2" />

    if (isLoggedIn === undefined) return spinner

    if (!isLoggedIn)
        return (
            <Button className="gap-2" onClick={onClick} buttonType={ButtonType.PRIMARY_NAV}>
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
            <div className="absolute min-w-[12rem] m-4 right-0 left-auto backdrop-blur p-4 rounded-xl bg-white/60 dark:bg-dark/60 shadow-border-like-btn dark:shadow-border-like-dark-btn z-[100]">
                <Button
                    className="flex flex-col gap-1"
                    buttonType={
                        pathname.startsWith("/dashboard")
                            ? ButtonType.ACTIVE_DROPDOWN
                            : ButtonType.DROPDOWN
                    }
                    padding="p-2"
                    href="/dashboard">
                    <span>@{user.data?.global_name || user.data?.username}</span>
                    <span>My servers</span>
                </Button>
            </div>
        </details>
    )
}
