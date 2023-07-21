import HomeView from "@/ui/views/home"
import { NextPage } from "next"

const getInviteLink = async (): Promise<string> => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/invite`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await resp.json()
    return data.invite
}

const HomePage: NextPage = async () => {
    let inviteLink
    try {
        inviteLink = await getInviteLink()
    } catch (ignored) {}

    return <HomeView inviteLink={inviteLink} />
}

export default HomePage
