import { Button } from "flowbite-react";
import { useState } from "react";

import AccountDetails from "./settingsPages/AccountDetails";
import Security from "./settingsPages/Security";

export default function Settings() {
    const [openMenu, setOpenMenu] = useState("account-details");

    return (
        <div className="profile-page min-w-screen min-h-screen flex flex-col justify-center p-10">
            <h1 className="text-4xl font-bold ml-6 mb-2">Settings</h1>
            <div className="w-full max-w-screen bg-white dark:bg-(--darkbg) min-h-200 rounded-2xl dark:border-(--darkbg) grid md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_4fr] py-2">
                <div className="sidebar p-4 flex flex-col gap-2 border-gray-200 dark:border-(--darkborder) border-r-2">
                    <Button color="sidebarButton" className="sidebar-item" onClick={() => setOpenMenu("account-details")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clipRule="evenodd" />
                        </svg>
                        Account details
                    </Button>
                    <Button color="sidebarButton" className="sidebar-item" onClick={() => setOpenMenu("security")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                        </svg>
                        Security
                    </Button>
                </div>
                <div className="px-4 py-2">
                    {openMenu === "account-details" && <AccountDetails />}
                    {openMenu === "security" && <Security />}
                </div>
            </div>
        </div>
    )
}