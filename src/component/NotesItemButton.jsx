import PropTypes from "prop-types";
import {FiStar, FiTrash2} from "react-icons/fi";

function NoteItemButton({id, onDelete, onAchieve, archived}) {
    return (
        <div className="notes-item-button">
            <button className={`notes-item-button-achieve ${archived ? 'archived' : ''}`}  onClick={() => onAchieve(id)}><FiStar/></button>
            <button className="notes-item-button-delete" onClick={() => onDelete(id)}><FiTrash2/></button>
        </div>
    );
}

NoteItemButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onAchieve: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
};

export default NoteItemButton;
