import React from "react";

function Experience({title, period, description}){
    return(
        <li className="flex">
            {/* Bullet */}
            <div className="flex-shrink-0 mr-4">
                <span className="text-2xl font-bold">•</span>
            </div>
            <div>
                <h3 className="text-xl font-semibold mt-1">{ title }</h3>
                <p className="text-lg">({period})</p>
                <p className="text-lg">{ description }</p>
            </div>
        </li>
    )
}

export default Experience;