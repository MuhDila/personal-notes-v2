import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <aside className="left-sidebar">
            <div>
                <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                    <ul id="sidebarnav">
                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                            <span className="hide-menu">Home</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./index.html" aria-expanded="false">
                                <span><i className="ti ti-layout-dashboard"></i></span>
                                <span className="hide-menu">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                            <span className="hide-menu">UI COMPONENTS</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./ui-buttons.html" aria-expanded="false">
                                <span> <i className="ti ti-article"></i></span>
                                <span className="hide-menu">Buttons</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Navigation;
