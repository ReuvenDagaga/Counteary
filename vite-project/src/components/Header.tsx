import { FC, useRef } from "react";
import Country from "../types/Country";
import DetailedCountryCard from "./DetailedCoumteryCard";
import { defaultRender } from "./MainArea";

type HeaderProp = {
    countries: Country[],
    element: JSX.Element,
    setter: Function
}


const Header: FC<HeaderProp> = (props: HeaderProp): JSX.Element => {
    const optionList = props.countries.map(country =>
        <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
    )
    let inputValue = useRef<string>('')
    const iii: JSX.Element = <input type="text" onChange={(e) => inputValue.current = e.target.value}></input>

    function detailesCardRender(countryName: string): void {
        const currentCountry: Country | undefined = props.countries.find(c => c.name.common == countryName)
        if (currentCountry == undefined) {
            props.setter(<h1>Error 404 Country not found</h1>)
        }
        else {
            props.setter(<DetailedCountryCard country={currentCountry} countrires={props.countries} setter={props.setter} />)
        }
    }

    
    return (
        <div className="navigation-main">
            <nav className="navbar">
                <button className="home-btn" onClick={() => defaultRender(props.countries, props.setter)}>Home</button>
                <button className="header-btn" onClick={() => detailesCardRender("Israel")}>Israel </button>
                <button className="header-btn" onClick={() => detailesCardRender("United States")}>USA </button>
                <button className="header-btn" onClick={() => detailesCardRender("France")}>France </button>
                <button className="header-btn" onClick={() => detailesCardRender("Thailand")}>Thailand </button>
                <button className="header-btn" onClick={() => detailesCardRender("United Kingdom")}>United Kingdom </button>
            </nav>
            <div className="search-section">
                <select defaultValue="1" onChange={(e) => detailesCardRender(e.target.value)}>
                    <option value="1" disabled hidden>Choose here</option>
                    {optionList}
                </select>
                {iii}
                <button onClick={() => {
                     detailesCardRender(inputValue.current)
                    iii.props = ""

                }}>Search</button>
            </div>
            <div>
                {}
            </div>
        </div>
    )
}



export default Header;