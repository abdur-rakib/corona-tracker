import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

import { countries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries());
    };
    fetchCountries();
  }, [setFetchedCountries]);
  // console.log(fetchedCountries)
  const countryList = fetchedCountries.length ? (
    <NativeSelect
      className={styles.m}
      defaultValue=""
      onChange={(e) => handleCountryChange(e.target.value)}
    >
        <option value="">Global</option>
      {fetchedCountries.map((country, i) => (
        <option key={i} value={country}>
          {country}
        </option>
      ))}
    </NativeSelect>
  ) : null;
  return (
    <div>
      <FormControl className={styles.formControl}>
          {countryList}
      </FormControl>
    </div>
  );
};

export default CountryPicker;
