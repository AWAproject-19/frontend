import React from 'react';
import styles from './Home.module.css';
import SearchView from './SearchView';
import data1 from './data1.json';
import { Link } from "react-router-dom";
import {Redirect} from "react-router-dom";



class Home extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data1.items,
      productSearchString: "",
    }
  }

  onSearchFieldChange = (event) => {

    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  render()
  {
   let output =
      <>
        <img src="/images/logo.png"alt="" style={{marginTop: 8 , marginLeft: -8}}></img>
        <div>
      
        <div className={styles.background}> </div>
        <div className={styles.searchBackground}> Search Restaurants <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }></input> 
        <Link to="/Home" style={{marginLeft: 500, color: 'white', fontSize: 25}}> Home </Link> 
        <Link to="/Products" style={{marginLeft: 40, color: 'white', fontSize: 25, marginRight: 196}}> Menut </Link>
        <Link to="/Cart"><img src="/images/cart.png" alt="" /> </Link>
        </div>
        <h1 className={styles.ravintolaTitle}> FOODAPP RESTAURANTS</h1>
        </div> 
        <SearchView
          items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
          
          />
          
      </>
      
    return (
      
      <>      
          {output}
      </>
    )
  }
}

export default Home;