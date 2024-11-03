import React from "react";
import Birthday from "./Birthday";
import Christening from "./Christening";

const Page = () => {
    return (
        <div>
            <h1>Events</h1>
            <Christening />
            <Birthday />
        </div>
    );
}

export default Page;