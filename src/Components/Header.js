import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from "@/Components/Navbar"
export default function Header() {



return(

   <>
   
 <div className="flex bg-black max-w-[100%] justify-center items-center p-[10px] md:p-[10px]">
     <p className="flex justify-center items-center  text-sm  text-white">
        Get Started For Free 
     </p>
     &nbsp;
     <FaArrowRightLong  className="text-white"/>

     </div>
     
     <Navbar />




   
   </>

)



}