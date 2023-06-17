import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
    const [expand,setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
      { expand ?  <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />: null}
        <textarea
          onClick={()=> setExpand(true)}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expand ? 3 : 1}
        />
        <Zoom in={expand}>
        <Fab onClick={submitNote}>{expand ? <AddIcon /> : null }  </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
