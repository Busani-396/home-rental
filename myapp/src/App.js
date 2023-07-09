import logo from './logo.svg';
import './App.css';
import { useState,useEffect,createContext,useRef,useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import TopNav from './comps/topNav';
import SearchPannel from './comps/searchPanne';
import PageHeading from './comps/titles/pageHeading';
import DisplayLocations from './comps/displayLocations';
import ResultsSection from './comps/resultsSection';

export const location = createContext('hello');

function App() {
  const [currentLocation, setCurrentlocation] = useState({place:'Johannesburg',province:'Gauteng'});

  console.log(currentLocation.place)
    return(
      <>
        <location.Provider value={currentLocation}>
            <TopNav/>
            <SearchPannel setCurrentlocation={setCurrentlocation}/>
            <PageHeading/>
        </location.Provider>
        {/*<DisplayLocations/>*/}
        <ResultsSection/>
      </>
      
    )
}

export default App;
