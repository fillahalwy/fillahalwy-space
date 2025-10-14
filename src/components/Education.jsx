import React from "react";

function Education({degree, instance, period}){
    return(
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 my-3">
            <h3 className="text-2xl font-semibold mb-1">{ degree }</h3>
            <p className=" mb-1 text-xl">{ instance }</p>
            <p className="text-lg text-gray-500">{ period }</p>
        </div>
    )
}

export default Education;