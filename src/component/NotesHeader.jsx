import PropTypes from "prop-types";
import { FiMenu, FiSearch } from "react-icons/fi";

function NotesHeader({ onExtendToggle, onMinimizedToggle }) {
    return (
        <header className="top-wrapper">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <FiMenu className="react-icon extend" onClick={onExtendToggle} />
                        <FiMenu className="react-icon minimized" onClick={onMinimizedToggle} />
                    </li>
                    <li className="nav-item">
                        <FiSearch className="react-icon" />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

NotesHeader.propTypes = {
    onExtendToggle: PropTypes.func.isRequired,
    onMinimizedToggle: PropTypes.func.isRequired,
};

export default NotesHeader;
