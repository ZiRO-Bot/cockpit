import HomeView from "@/ui/views/home"
import { NextPage } from "next"

const getInviteLink = async (): Promise<{ invite: string }> => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/invite`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    return await resp.json()
}

const HomePage: NextPage = async () => {
    const inviteLink = await getInviteLink()
    return <HomeView inviteLink={inviteLink.invite} />
}

export default HomePage
