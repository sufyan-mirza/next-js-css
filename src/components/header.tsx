import Image from 'next/image';
import Link from 'next/link';
import image from './assets/Logo 1.png';
export default function Header() {
    return (
        <header className="header-nav">
            <div className="header-container">
                <div className="nav-bar">
                    <Image src={image} alt="Logo" width={160} height={40} style={{ width: '160px' }} />
                    <nav>
                        <div className="list">
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/service">Service</Link>
                                </li>
                                <li>
                                    <Link href="/portfolio">Portfolio</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Link href="/contact">
                        <button id="contact-btn">Contact</button>
                    </Link>
                </div>
            </div>
            <div className="menu-container">
                <div className="bars">
                <input type="checkbox" id="openMenu"/>
                <label htmlFor="openMenu" id="toggle-icon">
                <i className="fa-solid fa-bars" id="open">☰</i>
                <i className="fa-solid fa-xmark" id="close">x</i>
                </label>
                    
                
                <div className="slidebar">
                    <h1>My app</h1>
                    <ul>
                    <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/service">Service</Link>
                                </li>
                                <li>
                                    <Link href="/portfolio">Portfolio</Link>
                                </li>
                        
                    </ul>
                </div>
                
                </div>
            </div>
        </header>
    );
}
