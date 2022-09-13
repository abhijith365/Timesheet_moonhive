import { Outlet } from "react-router-dom"
import Header from "../../components/admin/navbar/Header"
import { SideNav } from "../../components/admin/navbar/SideNav"


function AdminHomePage() {
    return (
        <>
            <div className="relative min-h-screen md:flex">
                {/* side Nav */}
                <SideNav />

                {/* <!-- content --> */}
                <div className="flex-1">
                    <Header />
                    {/* <Timesheet /> */}
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminHomePage