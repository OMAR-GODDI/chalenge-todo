import { v4 as uuidv4 } from 'uuid';
import { Modal,Button } from "react-bootstrap";
import { useState }  from 'react'

const AddModel = ({addMovie}) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDecription] = useState();
  const [posterUrl, setPosterUrl] = useState();
  const [rating, setRating] = useState();
  const handleOk = () => {
    addMovie({
      id: uuidv4(),
      title,
      description,
      posterUrl,
      rating
    })
    setShow(false)};
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
+
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Add New Movie</Modal.Title>
</Modal.Header>
<Modal.Body>
<div>
<div>
    <label className="input">Title</label>
    <input type="text" onChange={e=>setTitle(e.target.value)} name="title" />
    </div>
    </div>
    <div>
    <label className="input">PosterUrl</label>
    <input type="text" onChange={e=>setPosterUrl(e.target.value)} name="posterUrl" />
    </div>
    <div>
    <label className="input">Description</label>
    <input type="text" onChange={e=>setDecription(e.target.value)} name="description" />
    </div>
    <div>
    <label className="input">Rate </label>
    <input type="text" onChange={e=>setRating(e.target.value)} name="rating" />
    </div>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button  variant="primary" onClick={handleOk}>Add Movie</Button>
</Modal.Footer>
</Modal>
    </div>
);}

export default AddModel



    
 
    
