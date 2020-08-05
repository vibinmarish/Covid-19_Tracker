import axios from 'axios';



export const indiaData = async() =>{
    try{
        const covid = await axios.get('https://api.covid19india.org/data.json');
        const values=covid.data.cases_time_series[covid.data.cases_time_series.length-1];
        return values;
    }
    catch(error)
    {

    }
}

export const tableCase = async() =>{
    try{
        const covid = await axios.get('https://api.covid19india.org/data.json');
        const statewise=covid.data.statewise;
        return statewise;
    }
    catch{

    }
}

export const timeSeries = async() =>{
    try{
        const covid = await axios.get('https://api.covid19india.org/data.json');
        const timeSeries=covid.data.cases_time_series;
        return timeSeries;
    }
    catch(error)
    {

    }
}
