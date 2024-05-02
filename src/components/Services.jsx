const Services = () => {

    return(

        <>
            <div className="main-container py-16 ">
                <h1 className="text-3xl font-bold text-center underline " >My Services</h1>

                <div className="services-container  space-x-6 px-10 flex mt-10 ">
                    
                    <div className=" cursor-pointer hover:bg-gray-500   bg-slate-200 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
                      
                    <i class=" text-5xl fa-brands fa-aws"></i>
                        <h1 className="text-3xl" >Web Development</h1>
                        <p>
                        Deploying a Java web application involves packaging your application into a deployable format (such as a WAR file), configuring a web server or application server, and setting up the necessary infrastructure to host your application. Here's a general outline of the steps involved in deploying a Java web application!
                        </p>
                        <button className="px-3 py-2  bg-orange-500 rounded-full shadow-lg" >Check</button>
                    </div>
                    

                    <div className="  cursor-pointer hover:bg-gray-500   bg-slate-200 p-5 text-center shadow-lg rounded-xl  service1 space-y-4">
                       
                    <i class=" text-5xl fa-solid fa-server"></i>
                        <h1 className="text-3xl" >Bakend Development</h1>
                        <p>
                        As a seasoned backend developer, I specialize in architecting and implementing robust server-side solutions that power web and mobile applications. With a strong foundation in programming languages, frameworks, and databases, I have successfully delivered a wide range of projects, each demonstrating my commitment to excellence and innovation!
                        </p>
                        <button className="px-3 py-2  bg-orange-500 rounded-full shadow-lg" >Check</button>
                    </div>


                    <div className=" cursor-pointer hover:bg-gray-500  bg-slate-200 p-5 text-center shadow-lg rounded-xl  service1 space-y-4">
                        
                    <i class="text-5xl  fa-solid fa-code"></i>
                        <h1 className="text-3xl" >Frontend Development</h1>
                        <p>
                        As a dedicated frontend developer, I specialize in crafting engaging user interfaces and delightful user experiences that captivate audiences and drive results. With a keen eye for design, a passion for cutting-edge technologies, and a commitment to usability and accessibility, I have built a diverse portfolio of projects that showcase my skills and creativity.!
                        </p>
                        <button className="px-3 py-2  bg-orange-500 rounded-full shadow-lg" >Check</button>
                    </div>
                    </div>
            </div>




        </>
    )
    
    
    
    
};

export default Services;