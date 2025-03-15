import Image from "next/image";
import Logo from "@/assets/logosaas.png"
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";


export default function Last(){


return(

  <footer className="p-4 pb-1 flex flex-col justify-center items-center bg-black text-white">
    <div className="flex flex-col gap-6">

      <Image src={Logo} alt="logo image" className="h-12 w-12 m-auto" />
      <nav className="flex flex-col gap-4 sm:flex-row md:flex-row lg:flex-row m-auto text-center">
      <a href="#">About</a>
      <a href="#">Features</a>
      <a href="#">Customers</a>
      <a href="#">Pricing</a>
      <a href="#">Help</a>
      <a href="#">Careers</a>
      
      </nav>

     <div className="flex gap-5 justify-center items-center">
     <FaInstagram className="h-5 w-5"/>
     <FaXTwitter className="h-5 w-5"/>
     <FaSquareFacebook className="h-5 w-5"/>
     <AiFillTikTok className="h-5 w-5"/>
     <FaLinkedin className="h-5 w-5"/>



     </div>

       

   <div>

   </div>



    </div>





    <p className="text-center aboslute">© 2025 YourCompany. All rights reserved.</p>
  </footer>



)




}