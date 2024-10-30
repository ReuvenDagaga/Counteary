import { useState, useEffect, useRef, FC } from "react";
import Country from "../types/Country";
import MiniCountryCard from "./MiniCountryCard";
import DetailedCoumteryCard from "./DetailedCoumteryCard";
import Header from "./Header";
import MainArea from "./MainArea";

const DataCenter: FC = (): JSX.Element => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [mainRender, setMainRender] = useState<JSX.Element>(<><h1>HHHHHHHHH</h1></>)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,populatoin,capital,borders,languages,flags,maps");
      const data: Country[] = await response.json();
      setCountries(data);
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    countries.length > 0 ? (
      <>
      <Header countries={countries} element={mainRender} setter={setMainRender}/>
      <MainArea elements={mainRender} setter={setMainRender} countries={countries}/>
      </>
  ) : (
      <div>Loading...</div>
    )  )
};


export default DataCenter
