import React from "react";
import NotesSidebar from "./NotesSidebar.jsx";
import NotesLayout from "./NotesLayout.jsx";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarExtend: false,
            sidebarMinimized: false,
        };

        this.handleSidebarExtendToggle = this.handleSidebarExtendToggle.bind(this);
        this.handleSidebarMinimizedToggle = this.handleSidebarMinimizedToggle.bind(this);
        this.resetSidebarState = this.resetSidebarState.bind(this);
    }

    handleSidebarExtendToggle() {
        this.setState((prevState) => ({
            sidebarExtend: !prevState.sidebarExtend,
        }));
    }

    handleSidebarMinimizedToggle() {
        this.setState((prevState) => ({
            sidebarMinimized: !prevState.sidebarMinimized,
        }));
    }

    resetSidebarState() {
        this.setState({
            sidebarExtend: false,
            sidebarMinimized: false,
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.resetSidebarState);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resetSidebarState);
    }

    render() {
        const { sidebarExtend, sidebarMinimized } = this.state;

        return (
            <div id="main-wrapper">
                <NotesSidebar
                    sidebarExtend={sidebarExtend}
                    sidebarMinimized={sidebarMinimized}
                    onExtendToggle={this.handleSidebarExtendToggle}
                    onMinimizedToggle={this.handleSidebarMinimizedToggle}
                />
                <NotesLayout
                    sidebarExtend={sidebarExtend}
                    sidebarMinimized={sidebarMinimized}
                    onExtendToggle={this.handleSidebarExtendToggle}
                    onMinimizedToggle={this.handleSidebarMinimizedToggle}
                />
            </div>
        );
    }
}

export default NotesApp;
