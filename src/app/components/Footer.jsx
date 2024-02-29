import React from "react";
import Link from 'next/link'
import Image from "next/image";
import logo from "../../../public/assets/logo_white.svg";
import github_logo from "../../../public/assets/github.svg";
import linkedin_logo from "../../../public/assets/linkedin.svg";
import { github_link, linkedin_link } from "./ExternalLinks";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-secondaryColor border-l-transparent border-r-transparent text-textColor p-4 flex flex-row gap-5 justify-center items-center">
        <Link href={"/"} className='sm:text-2xl md:text-3xl hover:text-primaryColor text-textColor font-semibold hover:scale-110 transition duration-100 ease-in-out'>
            <Image src={logo} alt="Logo" width={35} height={45} />
        </Link> 
        {linkedin_link && (
            <Link href={linkedin_link} target="_blank" rel="noreferrer noopener" className='sm:text-2xl md:text-3xl hover:text-primaryColor text-textColor font-semibold hover:scale-110 transition duration-100 ease-in-out'>
                <Image src={linkedin_logo} alt="Logo" width={32} height={32} />
            </Link>
        )}
        {github_link && (
        <Link href={github_link} target="_blank" rel="noreferrer noopener" className='sm:text-2xl md:text-3xl hover:text-primaryColor text-textColor font-semibold hover:scale-110 transition duration-100 ease-in-out'>
            <Image src={github_logo} alt="Logo" width={32} height={32} />
        </Link>
        )}
    </footer>
  );
};

export default Footer;