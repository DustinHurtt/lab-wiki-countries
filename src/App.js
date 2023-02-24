import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Navbar from './components/Navbar';
import CountriesList from './pages/CountriesList';
import CountryDetails from './pages/CountryDetails';



function App() {

  const [ countries, setCountries ] = useState(null)


  useEffect(() => {
      axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then((response) => {
          setCountries(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
  }, [])

  return (
    <div className="App">

      <Navbar />

      <div className="container">

        {
          countries ? 

          <div className="row">

            <CountriesList countries={countries} />

            <Routes>
              <Route path="/:countryId" element={<CountryDetails countries={countries} />} />
            </Routes>

          </div>

          : <h3>Loading...</h3>
          
        }

      </div>


    </div>
  );
}

export default App;
