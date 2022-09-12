import { Outlet } from "react-router-dom"
import Header from "../../components/user/navbar/Header"
import { SideNav } from "../../components/user/navbar/SideNav"
import { Timesheet } from "./Timesheet"

function HomePage() {
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

export default HomePage