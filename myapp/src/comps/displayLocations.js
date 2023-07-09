import { rentals } from "../data/rentalsData";
import { useState, useEffect, useMemo} from "react";


function DisplayLocations(){
    const [locationOfInterest, setlocationOfInterest] = useState('Johannesburg');
    const [availableTowns, setAvailabletowns] = useState();

    useEffect(()=>{
        let data = rentals;
        //console.log(data)
        setAvailabletowns(data);
        console.log("I am 2")
    },[])


    console.log(availableTowns && availableTowns.towns)
        
    
    return(
        <section> 
            <h1 className="display-4">Hey, I am bringing you data</h1>
                {availableTowns && (
                    <ul>
                        {Object.keys(availableTowns).map((mytown) => (
                           
                            <li key={mytown}>{mytown}</li>
                        ))}
                    </ul>
                )}
        </section>
    )
}


export default DisplayLocations;