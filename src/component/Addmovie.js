import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Addmovie({addmovie}) {
const [title, setTitle] = useState('')
const [posterUrl, setPosterUrl] = useState('') 
const [rate, setRate] = useState(0)
const [description, setDescription] = useState('')

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <span>movie title</span>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <span>movie link</span>
        <input type='text' value={posterUrl} onChange={(e)=>setPosterUrl(e.target.value)}/>
        <span>movie rating</span>
        <input type='number' value={rate} onChange={(e)=>setRate(e.target.value)}/>
        <span>moviedescription</span>
        <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>{addmovie({id:Math.random(),title,description,posterUrl,rate});handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Addmovie
