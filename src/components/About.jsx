import { useState } from "react";
import bannerImage from "../assets/Photo.jpg";
import { data } from "autoprefixer";


const About = () => {


    const [data, setData] = useState({

        image: bannerImage,

        title: "Java Developer expertise in back-end development, experienced in Spring boots",
        desc1: "Dynamic and skilled Java Developer with a passion for creating efficient and scalable backend solutions. Experienced in developing projects for electronic stores",
        desc2: "proficient in utilizing Java technologies to deliver high-quality software products. Seeking opportunities to contribute expertise in Java development to innovative projects.",

        title: "Software developer with expertise in back-end development, experienced in Spring boots",
        desc1: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere numquam, itaque molestias quod error soluta nostrum ipsum! Magnam architecto tempora quasi? Doloribus nostrum sequi incidunt molestiae quos officia quam voluptatem!`,
        desc2: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere numquam, itaque molestias quod error soluta nostrum ipsum! Magnam architecto tempora quasi? Doloribus nostrum sequi incidunt molestiae quos officia quam voluptatem!`,

        
        actionButton: {
            title: "Read More..",
            link: "/readmore",
        }
    });






    return (
    <>
        <div className="main-container border py-16 bg-white ">
            <h1 className="text-center pb-16 text-3xl underline font-bold">About Me</h1>

            <div className="flex item-center">

                {/**image container */}
                    <div className="w-full flex justify-center">
                    <img className=" rounded-full shadow-lg" src={data.image}  alt="Abhishek Kailash Patel" />
                    </div>

                {/**text container */}
                    <div className="w-full  flex justify-center">
                       <div className="space-y-5 w-2/3">
                       
                        <h1 className="text-3xl font-semibold" >
                            {data.title}
                        </h1>

                        <p>
                            {data.desc1}
                        </p>   

                        <p>
                             {data.desc2}       
                        </p> 
                         
                         <button className="bg-orange-500 px-3 py-2 text-1xl rounded-full shadow-lg" >
                            {data.actionButton.title} </button>  
                        </div> 
                   
                    </div>
            </div>


        </div>

    
    </>
    );
};

export default About;
