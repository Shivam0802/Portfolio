import React from "react";
import Study from "../Components/Education";

const Education = ({ theme }) => {
    return (
        <>
            <div className="flex flex-row gap-4 items-center justify-center mt-6">
                <Study theme={theme} />
            </div>
        </>
    )
}

export default Education;