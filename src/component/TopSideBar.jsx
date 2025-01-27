import PropTypes from "prop-types";
import { FiMenu, FiSearch } from "react-icons/fi";

function TopSideBar({ sidebarExtend, sidebarMinimized, onExtendToggle, onMinimizedToggle }) {
    return (
        <div className={`page-wrapper ${sidebarMinimized ? "page-wrapper-minimized" : ""} ${sidebarExtend ? "page-wrapper-extend" : ""}`}>
            <header className="topbar">
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
            <div className="body-wrapper">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid animi aut autem cumque dicta eos fugiat
                    illo iure, iusto magni minima molestias nihil officia pariatur quo repellendus rerum sequi sint ut. Ab
                    accusantium alias aliquam assumenda culpa cupiditate dignissimos distinctio fugit magnam modi nemo, nesciunt
                    obcaecati, officiis quis, quisquam rem tempore voluptas voluptates. Consequuntur cumque dolor dolore eos
                    explicabo illum iste maiores possimus praesentium ullam. Accusamus beatae culpa dicta dolore eaque esse, eum
                    labore neque nobis odit porro quaerat qui quia ratione reprehenderit repudiandae sequi sunt, suscipit tenetur
                    vitae? Alias assumenda ex ipsa itaque omnis quaerat qui rem sapiente?
                </p>
            </div>
        </div>
    );
}

TopSideBar.propTypes = {
    sidebarExtend: PropTypes.bool.isRequired,
    sidebarMinimized: PropTypes.bool.isRequired,
    onExtendToggle: PropTypes.func.isRequired,
    onMinimizedToggle: PropTypes.func.isRequired,
};

export default TopSideBar;
