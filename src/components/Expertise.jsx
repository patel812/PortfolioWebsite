import bannerBackground from "../assets/bannerImage.jpg";


const Expertise = () =>{

    return (
        <>
        
        <div className="my-14" >
                <h1 className="text-3xl font-bold underline text-center" >My Expertise</h1>
            
                {/**box section */}

                <div 

                style={{
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: "cover",
                }}

                
                className="box-container flex my-14 items-center">



                    
                    <div className="flex justify-center" >{/**Text container */}
                        <div className="w-2/3 text-center space-y-3">
                        <h1 className=" text-white text-3xl font-semibold" >I Love these technologies</h1>
                        <p className=" text-white">As a passionate backend developer, I specialize in leveraging cutting-edge technologies to architect and implement robust server-side solutions that power modern web applications. With a deep understanding of programming languages, frameworks, and databases, I have successfully delivered a diverse array of projects that showcase my expertise and commitment to excellence.</p>    
                        <button className=" px-4 py-2 cursor-pointer hover:bg-gray-500 bg-white text-orange-500 font-bold flex-wrap rounded-full shadow-lg" >Hire Me</button>
                        </div>
                    </div>
                    
                    <div className="flex justify-center">{/**Skill container */}


                        <div className="flex  space-x-3  h-fit  flex-wrap space-y-3 justify-center ">

                        <p className="cursor-pointer hover:bg-gray-500 bg-white text-orange-500 font-bold flex-wrap w-fit px-3 py-2 rounded-full shadow-lg  mt-3 ">
                           Java</p>

                            <p className="cursor-pointer hover:bg-gray-500      bg-white text-orange-500 font-bold flex-wrap  w-fit px-3 py-2 rounded-full shadow-lg  ">
                            Spring Boot</p>

                            <p className="cursor-pointer hover:bg-gray-500  bg-white text-orange-500 font-bold flex-wrap w-fit px-3 py-2 rounded-full shadow-lg  ">
                            MySQL Database</p>

                            <p className="cursor-pointer hover:bg-gray-500  bg-white text-orange-500 font-bold flex-wrap w-fit px-3 py-2 rounded-full shadow-lg  ">
                            Microservices</p>

                            <p className="cursor-pointer hover:bg-gray-500  bg-white text-orange-500 font-bold flex-wrap w-fit px-3 py-2 rounded-full shadow-lg  ">
                            Spring Security</p>

                            <p className="cursor-pointer hover:bg-gray-500  bg-white text-orange-500 font-bold flex-wrap w-fit px-3 py-2 rounded-full shadow-lg  ">
                            Swagger</p>

                            <p className="cursor-pointer hover:bg-gray-500  bg-white text-orange-500 font-bold flex-wrap w-fit px-3 py-2 rounded-full shadow-lg  ">
                            Docker</p>

                            <p className="cursor-pointer hover:bg-gray-500  bg-white text-orange-500 font-bold flex-wrap  w-fit px-3 py-2 rounded-full shadow-lg  ">
                            Junit and Mockito </p>

                            <p className="cursor-pointer hover:bg-gray-500  bg-white text-orange-500 font-bold flex-wrap  w-fit px-3 py-2 rounded-full shadow-lg  ">
                            JPA</p>

                            <p className="cursor-pointer hover:bg-gray-500   bg-white text-orange-500 font-bold flex-wrap  w-fit px-3 py-2 rounded-full shadow-lg  ">
                            Tailwind CSS</p>

                            <p className="cursor-pointer hover:bg-gray-500   bg-white text-orange-500 font-bold flex-wrap  w-fit px-3 py-2 rounded-full shadow-lg  ">
                            Angular</p>

                            <p className="cursor-pointer hover:bg-gray-500   bg-white text-orange-500 font-bold flex-wrap  w-fit px-3 py-2 rounded-full shadow-lg  ">
                            ReactJs</p>

                            <p className="cursor-pointer hover:bg-gray-500   bg-white text-orange-500 font-bold flex-wrap  w-fit px-3 py-2 rounded-full shadow-lg  ">
                            Git Hub</p>
                            
                            </div>


                    </div>



                </div>
            
            
            
            </div>
        
        
        </>
        

        )};

export default Expertise;