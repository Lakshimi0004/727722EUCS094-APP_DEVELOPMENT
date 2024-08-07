// import React from "react";
// import { RiHeart2Fill} from "react-icons/ri";

// const Footer = () => {
//     return (
//         <div className="bg-violet-700 w-full h-15 text-white">
//             <div className="flex justify-center items-center p-5 gap-4 text-xl" >
//                 <p>Made with </p>
//                 <RiHeart2Fill className="text-red-500 text-3xl"/>
//                 <p> by <span className="text-red-500">Kruthagnya</span> </p>
                
//             </div>
//         </div>
//     )
// }

// export default Footer;

import React from "react";
import { RiHeart2Fill } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-violet-700 w-full text-white">
            <div className="flex flex-col items-center p-5 gap-4 text-xl">
                {/* <div className="flex justify-center items-center gap-2">
                    <p>Made with </p>
                    <RiHeart2Fill className="text-red-500 text-3xl" />
                    <p>by <span className="text-red-500">Kruthagnya</span></p>
                </div> */}
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <a href="/terms-and-conditions" className="hover:underline">Terms and Conditions</a>
                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                    <a href="/faq" className="hover:underline">FAQ</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-2xl hover:text-gray-300" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl hover:text-gray-300" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl hover:text-gray-300" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="text-2xl hover:text-gray-300" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
