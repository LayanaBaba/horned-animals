import React from 'react';

import './App.css';

import Header from './component/Header';

import Footer from './component/Footer';

import Main from './component/Main';
import Data from './components/data.json';
import SelectedBeast from './components/SelectedBeast.js';

class App extends React.Component {
  constructor (props) {

    super (props);
    this.state={
      dataarray:Data,
      show: false,
      item: {}
    }
  }

  showInModal= (clickedBeast)=>{
    this.setState({
      
      show: true,
      item: clickedBeast,
    })
  }
  hideInModal=()=>{
    this.setState({
      show:false,
    })
  }
render(){
  return(
    <div>
      <Header/>
      
      <Main 
      BeastArray={this.state.dataarray}
      handleClick={this.showInModal}
      />

      <SelectedBeast
      show={this.state.show}
      hide={this.state.hideInModal}
      item={this.state.item}
      />
      <Footer/>     
    </div>
  )
}
}

export default App;