import { DashboardNavBar } from "@/widget/navbar/dashboard-nav"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DashboardNavBar />
            {children}
        </>
    )
}
