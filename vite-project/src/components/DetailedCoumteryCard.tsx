import { useState, useEffect, useRef, FC } from "react";
import Country from "../types/Country";
import { defaultRender } from "./MainArea";

type DetaileProp = {
    country: Country,
    countrires: Country[],
    setter: Function
}


const DetailedCoumteryCard : FC<DetaileProp> = (props: DetaileProp) : JSX.Element => {
    return (
        <div className="detailed-card-main">
            <div className="detailed-card-left">
                <div className="detailed-card-left-head">
                    <h2 className="detailed-card-name">{props.country.name.common}</h2>
                    <p>Population: {props.country.population}</p>
                    <p>Capital: {props.country.capital[0]}</p>
                    <p>The boarders: {props.country.borders.join(" ")}</p>
                    <p>Languages: {Object.values(props.country.languages).join(" ")}</p>
                    <button className="home-btn" onClick={() => defaultRender(props.countrires, props.setter)}>Home</button>
                    </div>
                <div className="detailed-card-left-bottom">
                    <img src={props.country.flags.svg} alt={props.country.flags.alt}/>
                </div>
            </div>
            <div className="detailed-card-right">
                HELLO
            {/* <iframe src="https://www.openstreetmap.org/relation/1983629" title="W3Schools Free Online Web Tutorials"></iframe> */}
            </div>
        </div>
    )
}

export default DetailedCoumteryCard;