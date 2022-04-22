import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Moviecard({el}) {
  return (
    <div >
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.posterUrl} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Link to={`/details/${el.id}`}><Button variant="primary"  >Details</Button></Link>
    
  </Card.Body>
</Card>
    </div>
  )
}

export default Moviecard