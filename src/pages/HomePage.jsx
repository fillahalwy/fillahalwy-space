import React from "react";
import About from "../components/About";
import EducationList from "../components/EducationList";
import ExperienceList from "../components/ExperienceList";
import BlogLists from "../components/BlogLists";
import { getAllEducations, getWorkExperience, getOtherExperience, getBlogs } from "../utils/local-data";

function HomePage(){
    const educations = getAllEducations()
    const workExperiences = getWorkExperience(); 
    const otherExperiences = getOtherExperience();
    const blogs = getBlogs();
    return(
        <div className="homepage">
            <About />
            <EducationList educations={educations} />
            <ExperienceList workExperiences={workExperiences} otherExperiences={otherExperiences} />
            <hr/>
            <BlogLists blogs={blogs} />
        </div>
    )
}

export default HomePage;