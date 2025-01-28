import React from "react";
import {archiveNote, deleteNotes, getNotes, unArchiveNote} from "../utils/data.js";
import NotesList from "../component/NotesList.jsx";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getNotes(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNotes(id);

        const updatedNotes = getNotes();
        console.log("Updated notes:", updatedNotes);

        this.setState(() => {
            return {
                notes: getNotes(),
            };
        });
    }

    onArchiveHandler(id) {
        const note = this.state.notes.find((note) => note.id === id);

        if (note.archived) {
            unArchiveNote(id);
        } else {
            archiveNote(id);
        }

        const updatedNotes = getNotes();
        console.log("Updated notes:", updatedNotes);

        this.setState(() => {
            return {
                notes: getNotes(),
            };
        });
    }

    render() {
        const notes = this.state.notes;

        return (
            <NotesList notes={notes} onDelete={this.onDeleteHandler} onAchieve={this.onArchiveHandler} />
        );
    }
}

export default HomePage;
