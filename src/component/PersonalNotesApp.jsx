import { useState, useEffect } from 'react';
import { FiSmile, FiMoreHorizontal, FiX, FiAperture, FiMenu, FiSearch, FiSlash } from 'react-icons/fi';

function PersonalNotesApp() {
    const [sidebarExtend, setSidebarExtend] = useState(false);
    const [sidebarMinimized, setSidebarMinimized] = useState(false);

    const toggleSidebarExtend = () => {
        setSidebarExtend(!sidebarExtend);
        console.log('Sidebar extend toggled:', !sidebarExtend);
    };

    const toggleSidebarMinimized = () => {
        setSidebarMinimized(!sidebarMinimized);
        console.log('Sidebar minimized toggled:', !sidebarMinimized);
    };

    const resetSidebarState = () => {
        setSidebarExtend(false);
        setSidebarMinimized(false);
        console.log('Screen resized: Sidebar states reset.');
    };

    useEffect(() => {
        const handleResize = () => {
            resetSidebarState();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="main-wrapper">
            <aside className={`left-sidebar ${sidebarExtend ? 'extend' : ''} ${sidebarMinimized ? 'minimized' : ''}`}>
                <div>
                    <div className="brand-logo">
                        <h1>Personal Notes</h1>
                        <FiSmile className="brand-icon" />
                        <a><FiX className="react-icon extend" onClick={toggleSidebarExtend} /></a>
                        <a><FiX className="react-icon minimized" onClick={toggleSidebarMinimized} /></a>
                    </div>

                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">
                                <FiMoreHorizontal className="react-icon nav-home" />
                                <span className="hide-menu">Home</span>
                            </li>
                            <li className="sidebar-item selected">
                                <a className="sidebar-link active" href="#" aria-expanded="false">
                                    <FiAperture className="react-icon" />
                                    <span className="hide-menu">Modern</span>
                                </a>
                            </li>

                            <li className="sidebar-item">
                                <a className="sidebar-link link-disabled" href="#" aria-expanded="false">
                                    <FiSlash className="react-icon" />
                                    <span className="hide-menu">Disabled</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <div className={`page-wrapper ${sidebarMinimized ? 'page-wrapper-minimized' : ''} page-wrapper ${sidebarExtend ? 'page-wrapper-extend' : ''}`}>
                <header className="topbar">
                    <nav className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <FiMenu className="react-icon extend" onClick={toggleSidebarExtend} />
                                <FiMenu className="react-icon minimized" onClick={toggleSidebarMinimized} />
                            </li>
                            <li className="nav-item">
                                <FiSearch className="react-icon" />
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className="body-wrapper">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid animi aut autem cumque dicta
                        eos fugiat illo iure, iusto magni minima molestias nihil officia pariatur quo repellendus rerum
                        sequi sint ut. Ab accusantium alias aliquam assumenda culpa cupiditate dignissimos distinctio
                        fugit magnam modi nemo, nesciunt obcaecati, officiis quis, quisquam rem tempore voluptas
                        voluptates. Consequuntur cumque dolor dolore eos explicabo illum iste maiores possimus
                        praesentium ullam. Accusamus beatae culpa dicta dolore eaque esse, eum labore neque nobis odit
                        porro quaerat qui quia ratione reprehenderit repudiandae sequi sunt, suscipit tenetur vitae?
                        Alias assumenda ex ipsa itaque omnis quaerat qui rem sapiente?</p>
                </div>
            </div>
        </div>
    );
}

export default PersonalNotesApp;
