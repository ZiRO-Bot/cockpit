"user client"

import { GuildDashboardParams } from "@/model/guild"
import Button from "@/widget/buttons/button"

const FrontPageView = ({ params }: { params: GuildDashboardParams }) => {
    return (
        <Button className="flex justify-center" href={`/dashboard/${params.id}/meta`}>
            Go to meta config
        </Button>
    )
}

export default FrontPageView
