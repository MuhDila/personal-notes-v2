import {showFormattedDate} from "../utils/data.js";
import PropTypes from "prop-types";

function NotesItemBody({title, body, createdAt}) {
    return (
        <div className="notes-item-body">
            <h3 className="notes-title">{title}</h3>
            <span className="notes-createAt">{showFormattedDate(createdAt)}</span>
            <p className="notes-body">{body}</p>
        </div>
    );
}

NotesItemBody.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
};

export default NotesItemBody;
