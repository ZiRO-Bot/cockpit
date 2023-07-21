import { logOut } from "@/data/api/user"
import { setIsLoggedIn } from "@/data/redux/auth"
import { useDispatch } from "@/lib/hooks/typed-redux"
import ButtonType from "@/model/enum/button-type"
import Button from "@/widget/buttons/button"
import { LogOut } from "lucide-react"

export const DashboardUserAvatar = () => {
    const dispatch = useDispatch()

    return (
        <div className="absolute min-w-[12rem] m-4 right-0 left-auto backdrop-blur p-4 rounded-xl bg-white/60 dark:bg-dark/60 shadow-border-like-btn dark:shadow-border-like-dark-btn z-[100]">
            <Button
                className="flex items-center gap-2 w-full"
                buttonType={ButtonType.DROPDOWN}
                padding="p-2"
                onClick={() =>
                    logOut().then(() => {
                        dispatch(setIsLoggedIn(false))
                    })
                }>
                <LogOut size={20} strokeWidth={2.5} />
                Log out
            </Button>
        </div>
    )
}
