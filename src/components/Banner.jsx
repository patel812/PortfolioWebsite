import bannerImage from "../assets/Photo.jpg";
import bannerBackground from "../assets/bannerImage.jpg";
import Typed from "typed.js";


const Banner = () => {

   
    

    return (

        <div
            style={{
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: "cover",
            }}

        className="main-container flex h-15 items-center  h-2/3">
                {/**Firt box */}
            <div className=" w-full flex justify-center text-white">{/**text */}

                <div className="w-2/3  ms-10">
                <h3 className="mt-2 text-2xl front-semibold" >Hi, I am</h3>
                <h1 className="mt-2 text-3xl font-bold">Abhishek Kailash Patel</h1>
                <h2 className="mt-2 text-2xl ">And I am   </h2>
                <p className="mt-2 text-1xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam quisquam maxime. Libero consequatur, voluptatem itaque sapiente, eum adipisci suscipit, quia aperiam blanditiis nesciunt earum beatae nulla inventore repudiandae eos.</p>
              
                <div className="icons-container flex space-x-5">
                    <a className=" hover:bg-yellow-400 border cursor-pointer  px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-slate-800">
                    <i class="fa-brands text-3xl fa-facebook"></i>
                    </a>
                
                    <a className=" hover:bg-yellow-400 border cursor-pointer  px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-slate-800">
                    <i class="fa-brands text-3xl fa-instagram"></i>
                    </a>

                    <a className=" hover:bg-yellow-400 border cursor-pointer  px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-slate-800">
                    <i class="fa-brands text-3xl fa-linkedin"></i>
                    </a>

                    <a className=" hover:bg-yellow-400 border cursor-pointer  px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center  bg-slate-800">
                    <i class="fa-brands text-3xl fa-twitter"></i>
                    </a>

                
               
                
               

                </div>
              
               <br />
                <a className=" mt-2 px-3 py-2 text-1xl font-bold bg-white text-orange-500 rounded-full shadow-lg" href="/contact">Contact Me</a>
               
                </div>
            </div>

                {/**Second Box */}
            <div className=" w-full flex justify-center">{/**image */} 

                <img  className="rounded-full shadow-lg w-fit"  src={bannerImage} />
            </div>



        </div>

    );

};


export default Banner;