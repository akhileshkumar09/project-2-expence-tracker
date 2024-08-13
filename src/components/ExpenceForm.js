import React from 'react'
import './expenceForm.css'

function ExpenceForm({handleSubmit,price,handleChange,detail}) {

  return (
    <div className='expence-form'>
        <form onSubmit={(e)=>handleSubmit(e)} className='form'>
            <input
            type='number'
            name='price'
            value={price}
            onChange={(e)=>handleChange(e)}
            placeholder='Enter Price'
            />
            <textarea
            type='text'
            name='detail'
            value={detail}
            onChange={(e)=>handleChange(e)}
            placeholder='Detail of expences'
            />
            <div>
                <button type='submit' className='add'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default ExpenceForm