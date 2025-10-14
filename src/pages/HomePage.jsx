import React from "react";
import About from "../components/About";
import EducationList from "../components/EducationList";
import ExperienceList from "../components/ExperienceList";
import BlogsPreview from "../components/BlogsPreview";
import { getAllEducations, getWorkExperience, getOtherExperience } from "../utils/local-data";

function HomePage(){
    const educations = getAllEducations()
    const workExperiences = getWorkExperience(); 
    const otherExperiences = getOtherExperience();
    return(
        <div className="homepage">
            <About />
            <EducationList educations={educations} />
            <ExperienceList workExperiences={workExperiences} otherExperiences={otherExperiences} />
            <hr/>
            <BlogsPreview />
        </div>
    )
}

export default HomePage;