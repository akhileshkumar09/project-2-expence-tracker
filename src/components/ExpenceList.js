import React from 'react'
import './expenceslist.css'

function ExpenceList({expencelist,handleDelete}) {
  return (
    <div className='expences-list'>
    {expencelist.length === 0 ?
    (<p className='link'>No Expences Added Yet</p>)
    :
    (expencelist.map((item)=>(
      <div key={item.id}className='list-items'>
      <span className='price'>Rs. {item.price}</span>
      <span className='detail'>{item.detail}</span>
      <button className='delete' onClick={()=>handleDelete(item.id)}>Delete</button>
      </div>
    )))}
    
        
    
  
    </div>
  )
}

export default ExpenceList