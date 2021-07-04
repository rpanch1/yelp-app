import './App.css';
import { useState } from "react";
import Header from './components/Header';
import Search from './components/Search';
import DisplayBusinesses from './components/DisplayBusinesses';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DisplayDetails from './components/DisplayDetails';
import BusinessSearch from './yelp-api/BusinessSearch';


function App() {

  // stores an array of businesses based on search term
  const [businesses, setBusinesses] = useState([])

  // stores a specific business object from businesses
  const [businessDetails, setBusinessDetails] = useState({})

  // calls BusinessSearch function to fetch data from yelp api given the search term
  // fills the businesses array with business objects 
  const addBusinesses = async (term) => { 
    setBusinesses(await BusinessSearch(term))
  }

  // calls BusinessDetails functions to fetch data using yelp api for a specific business
  const addBusinessDetails = async (id) => {
    const searchById = businesses.filter((business) => {return business.id === id})
    setBusinessDetails(searchById[0])
  }
  
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Search addBusinesses={addBusinesses}></Search>
            { businesses.length > 0 && 
              <DisplayBusinesses businessesArr={businesses} addBusinessDetails={addBusinessDetails}></DisplayBusinesses>
            }
          </Route>
          <Route path='/details'>
            <DisplayDetails name={businessDetails.name} image={businessDetails.image_url} 
            phone={businessDetails.display_phone} rating={businessDetails.rating} url={businessDetails.url} 
            address={businessDetails.location}>
            </DisplayDetails>
          </Route>
        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
