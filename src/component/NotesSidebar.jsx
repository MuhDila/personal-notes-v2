import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { FiSmile, FiMoreHorizontal, FiX, FiEdit, FiHome } from "react-icons/fi";

function NotesSidebar({ sidebarExtend, sidebarMinimized, onExtendToggle, onMinimizedToggle }) {
    const location = useLocation();

    return (
        <aside className={`notes-sidebar ${sidebarExtend ? "extend" : ""} ${sidebarMinimized ? "minimized" : ""}`}>
            <div>
                <div className="brand-logo">
                    <h1>Personal Notes</h1>
                    <FiSmile className="brand-icon" />
                    <a><FiX className="react-icon extend" onClick={onExtendToggle} /></a>
                    <a><FiX className="react-icon minimized" onClick={onMinimizedToggle} /></a>
                </div>
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="nav-small-cap">
                            <FiMoreHorizontal className="react-icon nav-home" />
                            <span className="hide-menu">My Notes</span>
                        </li>
                        <li className={`sidebar-item ${location.pathname === "/" ? "selected" : ""}`}>
                            <Link to="/" className={`sidebar-link ${location.pathname === "/" ? "active" : ""}`}>
                                <FiHome className="react-icon" />
                                <span className="hide-menu">Home</span>
                            </Link>
                        </li>
                        <li className={`sidebar-item ${location.pathname === "/create" ? "selected" : ""}`}>
                            <Link to="/create" className={`sidebar-link ${location.pathname === "/create" ? "active" : ""}`}>
                                <FiEdit className="react-icon" />
                                <span className="hide-menu">Create</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

NotesSidebar.propTypes = {
    sidebarExtend: PropTypes.bool.isRequired,
    sidebarMinimized: PropTypes.bool.isRequired,
    onExtendToggle: PropTypes.func.isRequired,
    onMinimizedToggle: PropTypes.func.isRequired,
};

export default NotesSidebar;
