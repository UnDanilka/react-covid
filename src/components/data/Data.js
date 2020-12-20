import React, {useState, useEffect} from 'react';
import Chart from '../chart/Chart';
import {Spinner} from 'react-bootstrap';

function Data({
    queryTo,
    queryFrom,
    loading,
    setLoading,
    error,
    setError,
    setQueryTo,
    setQueryFrom
}) {

    const [dataFrom, setDataFrom] = useState(null);
    const [dataTo, setDataTo] = useState(null);
    const [total, setTotal] = useState(null)


    const start = async () => {
        await setLoading(true)
        await getDataFrom(queryFrom)
        await getDataTo(queryTo);

    }

    useEffect(() => {
        start()
    }, [queryTo, queryFrom]);

    useEffect(() => {
        if (dataTo && dataFrom) {
            setTotal({
                cases: dataTo.total.today_confirmed - dataFrom.total.yesterday_confirmed,
                deaths: dataTo.total.today_deaths - dataFrom.total.yesterday_deaths,
                recovered: dataTo.total.today_recovered - dataFrom.total.yesterday_recovered
            })
            setLoading(false)
        }
    }, [dataTo]);


    const getDataFrom = async (date) => {
        const response = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}`)
        const data = await response.json()
        setDataFrom(data)


    }

    const getDataTo = async (date) => {
        const response = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}`)
        const data = await response.json()
        setDataTo(data)

    }


    return (
        <div className='data'>

            {
            loading ? <Spinner className='spinner' animation="border" variant="info"/> : <Chart className='chart'
                total={total}/>
        } </div>
    );
}


export default Data;
