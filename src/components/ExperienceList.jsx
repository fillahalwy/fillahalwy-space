import React from "react";
import { FaGears } from "react-icons/fa6";
import Experience from "./Experience";

function ExperienceList({workExperiences, otherExperiences}){
    return(
        <section className="my-15">
            <h1 className="text-3xl font-bold"><FaGears className="inline" /> Experiences</h1>
            {/* Work Experiences */}
            <div className="my-5">
                <h3 className="text-2xl font-semibold">Work Experiences</h3>
                <ul className="list-none my-2 space-y-5">
                    {
                        workExperiences.map((workExperience) => (
                            <Experience 
                                title={workExperience.title} 
                                period={workExperience.period} 
                                description={workExperience.description} 
                            />

                        ))
                    }
                </ul>
            </div>

            {/* Other Experiences */}
            <div className="my-7">
                <h3 className="text-2xl font-semibold">Other Experiences</h3>
                <ul className="list-none my-5 space-y-5">
                    {
                        otherExperiences.map((otherExperience) => (
                            <Experience 
                                title={otherExperience.title} 
                                period={otherExperience.period} 
                                description={otherExperience.description} 
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default ExperienceList;