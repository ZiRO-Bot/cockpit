import { selectAuth } from "@/data/redux/auth"
import { useSelector } from "@/lib/hooks/typed-redux"
import ButtonType from "@/model/enum/button-type"
import { LoadingStateType } from "@/model/loading"
import { MouseEventHandler } from "react"
import Button from "./buttons/button"
import Discord from "./icon/discord"
import { Spinner } from "./spinner"

export const UserAvatarOrLogin = ({ onClick }: { onClick: MouseEventHandler }) => {
    const isLoggedIn = useSelector(selectAuth)
    const user = useSelector((state) => state.auth.user)

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

    return <img alt="User's avatar" width={48} height={48} src={user.data?.avatar || ""} />
}
