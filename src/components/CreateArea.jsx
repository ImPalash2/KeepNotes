import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: '',
        content : ''
    });
    const [isExpand, setExpand] = useState(false);
    function handleClick(){
        setExpand(true);
    }
    function handleChange(event){
        const {name, value} = event.target;
        value &&
        setNote({
                ...note,
                [name] : value
        });
    }
    function submitNote(event){
        note.title && note.content && props.onAdd(note);
        setNote({
            title : '',
            content : ''
        });
        event.preventDefault();
        setExpand(false);
    }
    return (
        <div>
        <form className="create-note">
            {isExpand && <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>}
            <textarea onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpand ? "3" : "1"} value={note.content}/>
            <Zoom in={isExpand}>
                <Fab onClick={submitNote}><AddIcon /></Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;
