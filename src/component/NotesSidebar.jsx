import PropTypes from "prop-types";
import { FiSmile, FiMoreHorizontal, FiX, FiAperture, FiSlash } from "react-icons/fi";

function NotesSidebar({ sidebarExtend, sidebarMinimized, onExtendToggle, onMinimizedToggle }) {
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
    );
}

NotesSidebar.propTypes = {
    sidebarExtend: PropTypes.bool.isRequired,
    sidebarMinimized: PropTypes.bool.isRequired,
    onExtendToggle: PropTypes.func.isRequired,
    onMinimizedToggle: PropTypes.func.isRequired,
};

export default NotesSidebar;
