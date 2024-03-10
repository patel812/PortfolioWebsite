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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, assumenda numquam. Nulla, obcaecati ratione. Modi provident quae eaque saepe? Nobis aliquam molestias pariatur ipsam expedita beatae deserunt, asperiores cumque iste!
                        </p>
                        <button className="px-3 py-2  bg-orange-500 rounded-full shadow-lg" >Check</button>
                    </div>
                    

                    <div className="  cursor-pointer hover:bg-gray-500   bg-slate-200 p-5 text-center shadow-lg rounded-xl  service1 space-y-4">
                       
                    <i class=" text-5xl fa-solid fa-server"></i>
                        <h1 className="text-3xl" >Bakend Development</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, assumenda numquam. Nulla, obcaecati ratione. Modi provident quae eaque saepe? Nobis aliquam molestias pariatur ipsam expedita beatae deserunt, asperiores cumque iste!
                        </p>
                        <button className="px-3 py-2  bg-orange-500 rounded-full shadow-lg" >Check</button>
                    </div>


                    <div className=" cursor-pointer hover:bg-gray-500  bg-slate-200 p-5 text-center shadow-lg rounded-xl  service1 space-y-4">
                        
                    <i class="text-5xl  fa-solid fa-code"></i>
                        <h1 className="text-3xl" >Frontend Development</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, assumenda numquam. Nulla, obcaecati ratione. Modi provident quae eaque saepe? Nobis aliquam molestias pariatur ipsam expedita beatae deserunt, asperiores cumque iste!
                        </p>
                        <button className="px-3 py-2  bg-orange-500 rounded-full shadow-lg" >Check</button>
                    </div>
                    </div>
            </div>




        </>
    )
    
    
    
    
};

export default Services;