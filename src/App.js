import React, { Component } from 'react'
import {Cards,CardsIndia,Tables,AppBar} from './components';
import styles from './App.module.css';
import { fetchData,indiaData, tableCase} from "./api";


export default class App extends Component {
  state = {
    data:{},
    country:'',
    cases:{},
    stateCase:{},
  }
  async componentDidMount()
  {
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});

    const axiosData = await indiaData();
    this.setState({cases:axiosData});

    const stateData = await tableCase();
    this.setState({stateCase:stateData});
  }


  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country});
  }
  
  render() {
    const {data,country,cases,stateCase}=this.state;
    return (
      <div >
         <AppBar style={{ margin: 0 }} />
      <div className={styles.container}>
       
        <CardsIndia cases={cases}/>
        
        <Cards cases={cases}/>

        <Tables stateCase={stateCase}/>
        
      </div>
      </div>
    )
  }
}


