import React, { Component } from 'react'
import { Cards, CardsIndia, Tables, AppBar, Chart,Footer } from './components';
import styles from './App.module.css';
import { indiaData, tableCase, timeSeries } from "./api";

export default class App extends Component {
  state = {

    cases: {},
    stateCase: {},
    stateTime: {},
  }
  async componentDidMount() {


    const axiosData = await indiaData();
    this.setState({ cases: axiosData });

    const stateData = await tableCase();
    this.setState({ stateCase: stateData });

    const stateTime = await timeSeries();
    this.setState({ stateTime: stateTime });
  }


  render() {
    const { cases, stateCase, stateTime } = this.state;
    if(stateTime.length<1){
    return "";
    }
    return (

      <div >
        <AppBar />
        <div className={styles.container}>

          <CardsIndia cases={cases} />

          <Cards cases={cases} />

          <Tables stateCase={stateCase} />
          <Chart stateTime={stateTime} />
          
        </div>
        <Footer cases={cases}/>
      </div>
    )
  }
}


