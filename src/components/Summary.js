import React, { useState } from 'react'
import './summary.css'

function Summary({expenceList}) {
    const [toggle, setToggle] = useState(false)
    let totalPrice = 0;
    expenceList.map((item)=>(totalPrice = Number(totalPrice)+Number(item.price)) )
    console.log(totalPrice)
  return (
    <div className='summary'>
    <h2> Your Total Expences </h2>
    <h2>{totalPrice}</h2>
    {!toggle && (<button onClick={()=>setToggle(!toggle)}>See Detail...</button>)}
    {toggle && (
        <ol>
            {expenceList.map((item)=>(
                <li key={item.id}><span>Rs. {item.price}</span> -> <span>{item.detail}</span></li>
            ))}
            <button onClick={()=>setToggle(!toggle)}>Hide detail</button>
        </ol>
        
    )}
    </div>
  )
}

export default Summary