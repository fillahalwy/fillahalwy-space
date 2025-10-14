const educations = [
    {
        degree: "S1 - Informatika",
        instance: "Universitas Amikom Yogyakarta",
        period: "2023 - 2027",
    },
    {
        degree: "Rekayasa Perangkat Lunak",
        instance: "SMK Negeri 1 Lahat",
        period: "2021 - 2023",
    },
];

const experiences = [
    {
        title: "Survivor - World",
        period: "2005 - present",
        description: "Successfully alive until now",
        isOther: false,
    },
    {
        title: "Human Resource Department - Amikom Computer Club",
        period: "Nov 2024 - present",
        description: "Manage Human Resources at Amikom Computer Club",
        isOther: false,
    },
    {
        title: "Internet of Things Instructor - Amikom Computer Club",
        period: "Nov 2024 - present",
        description: "Instructor of Internet of Things Division",
        isOther: false,
    },
    {
        title: "React & Back-End with AI - Asah Led by Dicoding",
        period: "Sept 2025 - present",
        description: "Learning about react, back-end javascript, and AI",
        isOther: true,
    },
    {
        title: "Chairman Commitee - Competition of Developers 5.0",
        period: "March 2025 - Aug 2025",
        description: "Led a team",
        isOther: true,
    },
    {
        title: "Event Division Coordinator - AMCC Goes To School 2025",
        period: "Jan 2025 - Feb 2025",
        description: "Designing the event structure",
        isOther: true,
    },
];

function getAllEducations(){
    return educations;
}

function getAllExperience(){
    return experiences;
}

function getWorkExperience(){
    const workExperience = experiences.filter((experience) => !experience.isOther);
    return workExperience;
}

function getOtherExperience(){
    const otherExperience = experiences.filter((experience) => experience.isOther);
    return otherExperience;
}

export { 
    getAllEducations,
    getAllExperience,
    getWorkExperience,
    getOtherExperience,
};