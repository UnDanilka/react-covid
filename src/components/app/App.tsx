import React, {useState} from 'react'
import Data from '../data/Data';
import Form from '../form/Form.js';
import {motion} from 'framer-motion';


const variants = {
    yes:{
      scale:[1, 1.1, 1],
      transition: {duration:2}
    },
    no:{
      scale:[1, 1.1, 1], 
      transition: {duration:2}
    }
}


function App() {

  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [queryTo, setQueryTo] = useState('2020-03-10')
  const [queryFrom, setQueryFrom] = useState('2020-03-07')
  const [loading, setLoading] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [error, setError] = useState(false)

  const updateFrom=(e: { target: { value: React.SetStateAction<string>; }; })=>{
    setDateFrom(e.target.value)
}

const updateTo=(e: { target: { value: React.SetStateAction<string>; }; })=>{
  setDateTo(e.target.value)
}


const getDate = (e: { preventDefault: () => void; }) =>{
  e.preventDefault();
  setQueryTo(dateTo);
  setQueryFrom(dateFrom);
  setDateTo('');
  setDateFrom('');
}


  return (
    <div className="app ">
      
      <header><h1>Covid-19</h1></header>
      <Data  error={error} setError={setError} setQueryFrom={setQueryFrom} setQueryTo={setQueryTo} queryTo={queryTo} queryFrom={queryFrom} loading={loading} setLoading={setLoading} />
      <div 
      className='show-date'>
      <motion.h1
      variants={variants}
      animate={clicked? 'yes' : 'no'}
      >From: {queryFrom} 
      </motion.h1>
      <motion.h1 
      variants={variants}
          animate={clicked? 'yes' : 'no'}
          >To: {queryTo}
          </motion.h1>
      </div>
    <Form setClicked={setClicked} clicked={clicked} getDate={getDate} dateFrom={dateFrom} updateFrom={updateFrom} dateTo={dateTo} updateTo={updateTo} />
    
    </div>
  );
}

export default App;
