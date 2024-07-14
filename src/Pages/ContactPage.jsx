import React from "react";
import Contact from "../Components/Contact";

const ContactPage = ({ theme }) => {
    return(
        <div className="flex flex-col w-full">
            <div className="flex flex-row gap-4 items-center justify-center mt-6">
                <Contact theme={theme} />
            </div>
        </div>
    )

}

export default ContactPage;