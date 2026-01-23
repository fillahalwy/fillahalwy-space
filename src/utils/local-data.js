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

const blogs = [
    {
        title: "Pertama kali ...",
        date: "2026-01-23",
        tags: "artikel",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi necessitatibus minus dolor. Dignissimos, eligendi sit. Illum iste ipsa ad cupiditate aspernatur ratione a voluptatum quas voluptatibus accusamus beatae, fugiat nisi dicta optio voluptas adipisci, ipsam accusantium laudantium blanditiis numquam, eveniet quod unde corporis. Quas obcaecati ex aperiam corporis placeat doloribus cum! Dolore amet maxime voluptatem quos, asperiores ratione deleniti possimus eveniet earum recusandae culpa numquam maiores modi pariatur eos quis sed atque reprehenderit totam nisi aut fuga cupiditate id fugiat. Commodi debitis officiis sequi rerum cumque beatae quae culpa possimus? Vero molestias, eos hic modi facere error recusandae eum dicta.",
    },
    {
        title: "Kedua kali ...",
        date: "2026-01-23",
        tags: "tips",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi necessitatibus minus dolor. Dignissimos, eligendi sit. Illum iste ipsa ad cupiditate aspernatur ratione a voluptatum quas voluptatibus accusamus beatae, fugiat nisi dicta optio voluptas adipisci, ipsam accusantium laudantium blanditiis numquam, eveniet quod unde corporis. Quas obcaecati ex aperiam corporis placeat doloribus cum! Dolore amet maxime voluptatem quos, asperiores ratione deleniti possimus eveniet earum recusandae culpa numquam maiores modi pariatur eos quis sed atque reprehenderit totam nisi aut fuga cupiditate id fugiat. Commodi debitis officiis sequi rerum cumque beatae quae culpa possimus? Vero molestias, eos hic modi facere error recusandae eum dicta.",
    },
    {
        title: "Ketiga kali ...",
        date: "2026-01-23",
        tags: "tips",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi necessitatibus minus dolor. Dignissimos, eligendi sit. Illum iste ipsa ad cupiditate aspernatur ratione a voluptatum quas voluptatibus accusamus beatae, fugiat nisi dicta optio voluptas adipisci, ipsam accusantium laudantium blanditiis numquam, eveniet quod unde corporis. Quas obcaecati ex aperiam corporis placeat doloribus cum! Dolore amet maxime voluptatem quos, asperiores ratione deleniti possimus eveniet earum recusandae culpa numquam maiores modi pariatur eos quis sed atque reprehenderit totam nisi aut fuga cupiditate id fugiat. Commodi debitis officiis sequi rerum cumque beatae quae culpa possimus? Vero molestias, eos hic modi facere error recusandae eum dicta.",
    },
]

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

function getBlogs(){
    return blogs;
}

export { 
    getAllEducations,
    getAllExperience,
    getWorkExperience,
    getOtherExperience,
    getBlogs,
};