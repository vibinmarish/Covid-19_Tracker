import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableURL =url
    if(country){
        changeableURL= `${url}/countries/${country}`
    }
    try {
        const { data :{confirmed,recovered,deaths,lastUpdate} }= await axios.get(changeableURL);
        return {confirmed,recovered,deaths,lastUpdate};
    }
    catch(error)
    {

    }
}

export const fetchDailyData = async () =>{
    try{
        const {data } = await axios.get(`${url}/daily`);
        
        const modifiedData = data.map((dailyData) =>({
            confirmed:dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
       
        return modifiedData;
    }
    catch (error)
    {

    }
}

export const fetchCountries = async() =>{
    try{
        const{data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    }
    catch(error)
    {

    }
}

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

tableCase();