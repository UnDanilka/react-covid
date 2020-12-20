import React from 'react';
import {Button} from 'react-bootstrap'

function Form({getDate, dateFrom, updateFrom, dateTo, updateTo, setClicked, clicked}) {

    let newDate = new Date();
    let yyyy = newDate.getFullYear()
    let mm = newDate.getMonth()+1
    let dd = newDate.getDate()
    let today = `${yyyy}-${mm}-${dd}`



    return (
        <form className='dateFrom' onSubmit={getDate}>
                <input className='dateFrom-input' min="2020-02-01" max={today} type='date' required value={dateFrom} onChange={updateFrom}></input>      
                <input className='dateTo-input' min="2020-02-01" max={today} type='date' required value={dateTo} onChange={updateTo}></input>
                <Button className='submit-btn' type='submit' onClick={()=>setClicked(!clicked)}>Get Result</Button>
            </form>
    );
}

export default Form;