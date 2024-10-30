import { useState, useEffect, useRef, FC } from "react";
import Country from "../types/Country";
import { jsx } from "react/jsx-runtime";



const MiniCountryCard: FC<Country> = (country: Country): JSX.Element => {
    

    
    return (
        <div className="mini-card">
            <div className="mini-card-head">
                <img src={country.flags.svg} alt={country.flags.alt} />
            </div>
            <div className="mini-card-bottom">
                <p>Name: {country.name.common}</p>
            </div>
        </div>
    )
}
    



export default MiniCountryCard;

