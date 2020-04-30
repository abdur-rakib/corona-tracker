import React, { Component } from "react";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import styles from "./App.module.css";
import fetchData from "./api";

import coronaImage from "./images/image.png";
import Footer from './components/Footer/Footer'

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({
      data: fetchedData,
    });
  }
  handleCountryChange = async (country) => {
    // console.log(country);
    // fetch the data
    const data = await fetchData(country);
    this.setState({ data: data, country: country });

    // set the state
  };
  render() {
    // console.log(this.state)
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
