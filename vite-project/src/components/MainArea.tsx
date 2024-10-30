import { FC, useEffect } from "react"
import Country from "../types/Country"
import MiniCountryCard from "./MiniCountryCard"

type MainProps = {
    elements: JSX.Element,
    setter: Function, 
    countries: Country[]
}

const MainArea: FC<MainProps> = (props: MainProps): JSX.Element => {
    
    useEffect(() => {
        defaultRender(props.countries, props.setter)
        console.log(props.countries);
        
    }, [])
    return (
        props.elements
    )
}

export function defaultRender(countriesArr: Country[], setFunftion: Function): void {
    // const randomNumber: number[] = [1,2,3,4,5]
    const countries: Country[] | undefined= countriesArr.slice(0,5)
    if (countries == undefined) {
        setFunftion(<h1>Error Cold Very very Colddddd</h1>)
    }
    else {
        const cardArr: JSX.Element[] = []
        for (let index = 0; index < countries.length; index++) {
            const element: Country = countries[index];
            cardArr.push(<MiniCountryCard {...element}/>)
            
        }
        setFunftion(
        <>
            {cardArr}
        </>
    )
    }
}

export default MainArea;