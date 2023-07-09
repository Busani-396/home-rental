import {React,useContext} from 'react';
import { location } from '../App';


function SearchPanel({setCurrentlocation}) {

  const x = useContext(location);
  console.log(x)


  /*setTimeout(()=>{
    setCurrentlocation({...location, place : 'lobengula' })
  },9000)*/

 
  return (
    <section className="container-fluid bg-primary navigation d-flex justify-content-center align-items-center">
    <div className="col-lg-6 col-md-6 py-4 d-flex justify-content-center align-items-center">
      <div className="row col-lg-12 col-md-12">
        <div className="col-lg-3 col-md-3 mb-3">
          <select className="form-select form-select-md border-radius-0 font-small-1" aria-label=".form-select-lg example">
            <option defaultValue className="py-3">To Rent</option>
            <option className="py-3" value="1"></option>
            <option className="py-3" value="2">Two</option>
            <option className="py-3" value="3">Three</option>
          </select>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12">
          <div className="input-group">
            <span className="input-group-text border-radius-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </span>
            <input type="text" value={x.place} 
                className="form-control border-radius-0" 
                placeholder="location" 
                onChange={(e)=>setCurrentlocation({...location, place : e.target.value })}
                />
            <span className="input-group-text border-radius-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
              </svg>
            </span>
            <button className="btn btn-danger border-radius-0" type="button" id="button-addon2">search</button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default SearchPanel;
