"use client"
import Link from 'next/link';
import page_links from './links';
import Image from "next/image"
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    const handleNavigation = (url:string) => {
        router.push(url);
        closeNavbar();
    };

    return (
        <nav className="bg-white rounded mt-3 z-1 navbar navbar-expand-lg bg-white position-sticky top-0 pt-3 w-100 ">
            <div className="container">
                <Link href="/" onClick={closeNavbar}><Image src="https://ngratesc.sirv.com/Broadnet/logo.png" width="50"  height="50"  alt="Broadnet"/></Link>
                <button className="navbar-toggler bg-white border-0" type="button" onClick={toggleNavbar}>
                    <i className="bi bi-list text-primary"></i>
                </button>
                
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.home} onClick={closeNavbar}>Home</Link> 
                        </li>
                        <li className='nav-item'>
                        
                            <div className='dropdown'>
                                <button type="button" className='bg-white btn-none border-0 ms-0 nav-link' data-bs-toggle="dropdown" aria-expanded="false">Services <i className="bi bi-chevron-down"></i></button>
                                <ul className='dropdown-menu'>
                                    <li className='pointer'>
                                        <a className='dropdown-item' onClick={() => handleNavigation(page_links.services.broadtrak)}>BroadTrak</a>
                                    </li>
                                    <li  className='pointer'>
                                        <a className='dropdown-item' onClick={() => handleNavigation(page_links.services.intactsys)}>Intactsys</a>
                                    </li>
                                    <li  className='pointer'>
                                        <a className='dropdown-item' onClick={() => handleNavigation(page_links.services.fortis_comm)}>Fortis-Comm</a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" href={page_links.roadmap} onClick={closeNavbar}>Roadmap</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.portfolio} onClick={closeNavbar}>Portfolio</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.careers} onClick={closeNavbar}>Careers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.blog} onClick={closeNavbar}>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.contact} onClick={closeNavbar}>Contact Us</Link>
                        </li>
                    </ul>
                    <Link href={page_links.contact} onClick={closeNavbar}><button className="btn p-btn rounded w-sm-100">Ready To Build?</button></Link>
                </div>
            </div>
        </nav>
    );
};


export const Footer=()=>{
    return(
        <div className='row bg-white text-dark p-3'>
            <div className='col-sm  col col-md-3'>
                <div>
                    <h6 className='mb-3'>Contact Details</h6>
                </div>
                <p><i className="bi bi-envelope me-2 "></i>sinfo@broadnetafrica.net</p>
                <p><i className="bi bi-telephone me-2"></i>+263 77 514 6727</p>
                <p><i className="bi bi-geo-alt me-2"></i>31 Mc Meekan Rd<br/><span className='ms-4'> Milton Park</span><br/><span className='ms-4'>Harare</span><br/><span className='ms-4'>Zimbabwe</span></p>
            </div>
            <div className="col-sm">
                <div className='mb-3'>
                    <h6 >Services</h6>
                </div>
                <p><Link href={page_links.services.broadtrak}>BroadTrak</Link></p>
                <p><Link href={page_links.services.intactsys}>Intactsys</Link></p>
                <p><Link href={page_links.services.fortis_comm}>Fortis-Comm</Link></p>
             
            </div>
            <div className="col-sm">
                <div className='mb-3'>
                    <h6>Pages</h6>
                </div>
                {/* <p><Link href={page_links.roadmap}>Roadmap</Link></p>
                <p><Link href={page_links.portfolio}>Porfolio</Link></p> */}
                <p><Link href={page_links.careers}>Careers</Link></p>
                <p><Link href={page_links.blog}>Blog</Link></p>
                <p><Link href={page_links.contact}>Contact us</Link></p>
            </div>
            <div className="col-sm text-center">
               
                    <Image src="https://ngratesc.sirv.com/website/aurora_logo.png" width={30} height={25} className='img-fluid' alt="Aurora logo"/>
                    <h6>Aurora</h6>
                
                <iframe src="https://aurorasystems.substack.com/embed"  ></iframe>
            </div>
        </div>
    )
}