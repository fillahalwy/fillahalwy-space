import React from "react";
import Education from "./Education";
import { FaGraduationCap } from "react-icons/fa6";

function EducationList({educations}){
    return(
        <article className="my-15">
            <h1 className="text-3xl font-bold"><FaGraduationCap className="inline"/> Educations</h1>
            {
                educations.map((education) => (
                    <Education degree={education.degree} instance={education.instance} period={education.period} />
                ))
            }
        </article>
    )
}

export default EducationList;