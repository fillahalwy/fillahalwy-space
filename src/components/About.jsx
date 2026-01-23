function About(){
    return(
        <article className="mt-32 md:flex-row items-center gap-10">
            <div className="w-full md:w-1/5 flex justify-center mb-10">
                <img 
                    src="/my-icon.svg" 
                    alt="Foto gue" 
                    className="rounded-full w-32 h-32 md:w-full md:h-auto object-cover border-4 border-gray-200"
                />
            </div>
            <div className="w-full">
                <h1 className="text-3xl font-semibold text-gray-800">
                    Hello, I am Ahmad Fillah Alwy
                </h1>
                <p className="my-5 text-xl text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam error doloribus possimus dicta corrupti eaque blanditiis sed pariatur labore, cupiditate...
                </p>
            </div>
        </article>
    )
}

export default About;