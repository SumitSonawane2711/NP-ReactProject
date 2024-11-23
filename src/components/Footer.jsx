import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p className="mb-1">&copy; {new Date().getFullYear()} My Website</p>
                <nav>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a className="text-white" href="/">Privacy Policy</a></li>
                        <li className="list-inline-item"><a className="text-white" href="/">Terms of Service</a></li>
                        <li className="list-inline-item"><a className="text-white" href="/">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
