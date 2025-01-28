import PropTypes from "prop-types";
import {Route, Routes} from "react-router-dom";
import NotesHeader from "./NotesHeader";
import HomePage from "../pages/HomePage.jsx";

function NotesLayout({sidebarExtend, sidebarMinimized, onExtendToggle, onMinimizedToggle}) {
    return (
        <div className={`notes-layout ${sidebarMinimized ? "notes-layout-minimized" : ""} ${sidebarExtend ? "notes-layout-extend" : ""}`}>
            <Routes>
                <Route path="/" element={
                    <>
                        <NotesHeader onExtendToggle={onExtendToggle} onMinimizedToggle={onMinimizedToggle}/>
                        <HomePage/>
                    </>
                }/>
                <Route path="/create" element={<p>Create note</p>}/>
            </Routes>
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
