import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import styles from './SearchResult.module.css';


class SearchResult extends React.Component{
constructor(props){
super(props);

}

thisTitleWasClicked(){

}

render(){

  return (
    <div className={ styles.product } >
        <div>
          
          <div><img src={`/images/${this.props.image}`}style={{height: 200}}/></div>
          <div className={ styles.name }>{ this.props.name }</div>
          <div><img src={`/images/${this.props.image1}`} /></div>
          <Link to="/Products" className={styles.name}>{ this.props.order}</Link>
        </div>
    </div>
  )

}
}
export default SearchResult