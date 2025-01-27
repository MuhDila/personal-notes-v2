import React from "react";
import LeftSideBar from "./LeftSideBar.jsx";
import TopSideBar from "./TopSideBar.jsx";

class PersonalNotesApp extends React.Component {
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
                <LeftSideBar
                    sidebarExtend={sidebarExtend}
                    sidebarMinimized={sidebarMinimized}
                    onExtendToggle={this.handleSidebarExtendToggle}
                    onMinimizedToggle={this.handleSidebarMinimizedToggle}
                />
                <TopSideBar
                    sidebarExtend={sidebarExtend}
                    sidebarMinimized={sidebarMinimized}
                    onExtendToggle={this.handleSidebarExtendToggle}
                    onMinimizedToggle={this.handleSidebarMinimizedToggle}
                />
            </div>
        );
    }
}

export default PersonalNotesApp;
