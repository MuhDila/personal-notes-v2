import PropTypes from "prop-types";
import NotesHeader from "./NotesHeader";
import NotesBody from "./NotesBody";

function NotesLayout({ sidebarExtend, sidebarMinimized, onExtendToggle, onMinimizedToggle }) {
    return (
        <div className={`notes-layout ${sidebarMinimized ? "notes-layout-minimized" : ""} ${sidebarExtend ? "notes-layout-extend" : ""}`}>
            <NotesHeader onExtendToggle={onExtendToggle} onMinimizedToggle={onMinimizedToggle} />
            <NotesBody />
        </div>
    );
}

NotesLayout.propTypes = {
    sidebarExtend: PropTypes.bool.isRequired,
    sidebarMinimized: PropTypes.bool.isRequired,
    onExtendToggle: PropTypes.func.isRequired,
    onMinimizedToggle: PropTypes.func.isRequired,
};

export default NotesLayout;
