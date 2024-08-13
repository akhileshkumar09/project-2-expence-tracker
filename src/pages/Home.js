import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './home.css'
import Header from '../components/Header'
import ExpenceForm from '../components/ExpenceForm'
import ExpenceList from '../components/ExpenceList'
import Summary from '../components/Summary'


function Home() {
  const [price, setPrice] = useState('');
  const [detail, setDetail] = useState('');
  const [expecesList, setExpencesList] = useState([]) 
  

  const handleChange = (e)=>{
    const {name, value} = e.target;
    if(name === 'price') {
      setPrice(value);
    }else if(name === 'detail'){
      setDetail(value);
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const expenceItem = {
      id : new Date().getTime().toString(),
      price : price,
      detail : detail
    }
    
    setExpencesList((prevData)=>(
      [...prevData,expenceItem,]
    ))
    
    setPrice('');
    setDetail('');
  }

  const handleDelete = (id) =>{
     setExpencesList((prevData)=>prevData.filter((item)=>item.id !==id))
  }
  return (
    <Router>
    <div className='home'>
        <Header/>
       
        <Routes>
          <Route path='/add-expence' element = {
           <ExpenceForm
           handleSubmit={handleSubmit} price={price} handleChange={handleChange}
           detail={detail} 
           />
          }/>
          <Route path='/expences-list' element={<ExpenceList expencelist={expecesList} handleDelete={handleDelete}/>}/>
          <Route path='/summary' element = {<Summary expenceList={expecesList}/>}/>
        </Routes>
    </div>
    </Router>
  )
}

export default Home