import React from "react";
import Body from "./layout/Body";
import Sidebar from "./layout/Sidebar"

function Layout() {
    return(
        <div className="layout">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="body">
                <Body />
            </div>
        </div>
    )
};

export default Layout;