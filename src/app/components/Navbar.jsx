"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import github_logo from "../../../public/assets/github.svg";
import linkedin_logo from "../../../public/assets/linkedin.svg";
import NavLink from './NavLink'
import MenuOverlay from './NavMenuOverlay';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { github_link, linkedin_link } from "./ExternalLinks";

const NavLinks = [
    {
        title: 'Education',
        path: '#education'
    },
    {
        title: 'Work Experience',
        path: '#workExperience'
    },
    {
        title: 'Projects',
        path: '#projects'
    },
    {
        title: 'Skills',
        path: '#skills'
    },
    {
        title: 'Certifications',
        path: '#certifications'
    },
    {
        title: 'Contact',
        path: '#contact'
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav
            className={`
            ${"fixed top-0 left-0 right-0 z-10 mx-auto py-2"} 
            ${navbarOpen ? "bg-secondaryColor/95" : "bg-gradient-to-b from-secondaryColor/85 via-secondaryColor/75 to-bgColor/45"}
            `}
        >
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <div className='flex flex-row gap-4'>
                    <Link href={"/"} className='sm:text-2xl md:text-3xl hover:text-primaryColor text-textColor font-semibold hover:scale-110 transition duration-100 ease-in-out'>
                        <Image src={logo} alt="Logo" width={45} height={45} />
                    </Link> 
                    {/* uncomment this section to add social media icons to the navbar
                    {linkedin_link && (
                        <Link href={linkedin_link} target="_blank" rel="noreferrer noopener" className='sm:text-2xl md:text-3xl hover:text-primaryColor text-textColor font-semibold hover:scale-110 transition duration-100 ease-in-out'>
                            <Image src={linkedin_logo} alt="Logo" width={45} height={45} />
                        </Link>
                    )}
                    {github_link && (
                    <Link href={github_link} target="_blank" rel="noreferrer noopener" className='sm:text-2xl md:text-3xl hover:text-primaryColor text-textColor font-semibold hover:scale-110 transition duration-100 ease-in-out'>
                        <Image src={github_logo} alt="Logo" width={45} height={45} />
                    </Link>
                    )}
                    */}
                </div>
                <div className="block lg:hidden">
                    {!navbarOpen ? (
                        <button
                        id="nav-toggle"
                        className="flex items-center px-3 py-2 border rounded hover:text-primaryColor hover:border-primaryColor text-textColor border-textColor"
                        onClick={() => setNavbarOpen(true)}
                        >
                        <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                        id="nav-toggle"
                        className="flex items-center px-3 py-2 border rounded hover:text-primaryColor hover:border-primaryColor text-textColor border-textColor"
                        onClick={() => setNavbarOpen(false)}
                        >
                        <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden lg:block lg:w-auto" id="navbar-default">
                    <ul className='flex p-4 lg:p-0 lg:flex-row lg:space-x-8 mt-0 font-medium'>
                        {
                        NavLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink path={link.path} title={link.title}/>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={NavLinks}/> : null}
        </nav>
    )
}

export default Navbar
