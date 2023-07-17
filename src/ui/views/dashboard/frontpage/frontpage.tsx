"user client"

import { GuildDashboardParams } from "@/model/guild"
import ProtectedLayout from "@/ui/layouts/protected"
import Button from "@/widget/buttons/button"

const FrontPageView = ({ params }: { params: GuildDashboardParams }) => {
    return (
        <ProtectedLayout>
            <Button className="flex justify-center" href={`/dashboard/${params.id}/meta`}>
                Go to meta config
            </Button>
        </ProtectedLayout>
    )
}

export default FrontPageView
