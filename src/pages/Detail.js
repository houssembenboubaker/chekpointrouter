import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Detail({movies}) {
  let {id}=useParams()
  let navigate=useNavigate()
  return (
    <div>
      <button className='btn btn-success' onClick={()=>navigate('/movies')}>previous</button>
      {movies.filter((movie)=>movie.id==id).map((movie)=>(
<div>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
</div>
        
      ))}
    
    </div>
  )
}

export default Detail