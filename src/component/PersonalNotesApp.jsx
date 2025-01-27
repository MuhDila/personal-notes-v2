import {useState} from 'react';
import {FiX, FiAperture, FiMenu, FiSearch, FiSlash} from 'react-icons/fi';

function PersonalNotesApp() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div id="main-wrapper">
            <aside className={`left-sidebar ${sidebarVisible ? 'active' : ''}`}>
                <div>
                    <div className="brand-logo">
                        <h1>Personal Notes</h1>
                        <a><FiX className="react-icon" onClick={toggleSidebar}/></a>
                    </div>

                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">
                                <span className="hide-menu">Home</span>
                            </li>
                            <li className="sidebar-item selected">
                                <a className="sidebar-link active" href="#" aria-expanded="false">
                                    <FiAperture className="react-icon"/>
                                    <span className="hide-menu">Modern</span>
                                </a>
                            </li>

                            <li className="sidebar-item">
                                <a className="sidebar-link link-disabled" href="#" aria-expanded="false">
                                    <FiSlash className="react-icon"/>
                                    <span className="hide-menu">Disabled</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <div className={`page-wrapper ${sidebarVisible ? 'blurred' : ''}`}>
                <header className="topbar">
                    <nav className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <FiMenu className="react-icon" onClick={toggleSidebar}/>
                            </li>
                            <li className="nav-item">
                                <FiSearch className="react-icon"/>
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
