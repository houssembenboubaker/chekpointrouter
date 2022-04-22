import React from 'react'
import Moviecard from './Moviecard'

function Movielist({movies,search}) {
  return (
    <div style={{display:'flex',flexWrap:'wrap',margin:'10px',justifyContent:'center',alignContent:'center', gap:'20px'}}>
        {movies.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase())).map((el,i)=><Moviecard el={el}  key={i}/> )}
    </div>
  )
}


export default Movielist