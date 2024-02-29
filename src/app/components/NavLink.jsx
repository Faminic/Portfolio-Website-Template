import Link from 'next/link'

const NavLink = ({ path, title }) => {
    return (
        <Link 
        href={path} 
        className='block py-2 pl-3 pr-4 hover:text-primaryColor sm:text-xl rounded lg:p-0 text-textColor'>
        {title}
        </Link>
    )
}

export default NavLink