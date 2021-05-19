import React from 'react';
// import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Data from './component/data.json';
import SelectedBeast from './component/SelectedBeast.js';

class App extends React.Component {
  constructor (props) {

    super (props);
    this.state={
      dataArray:Data,
      show: false,
      item: {}
    }
  }

  increment=(nam)=>{
    let updatedArray=this.state.dataArray.map( element =>{
      if (element.title==nam){
        if (element.hasOwnProperty('votes')){
          element.votes++;
        }else{
          element.votes=1;     
        } 
      }
      return element;
    }) ;
    this.setState({dataArray:updatedArray});

    
  }

  showInModal= (clickedBeast)=>{
    let targetArray=this.state.dataArray.find(item => item.title==clickedBeast)
    this.setState({
      
      show: true,
      item: targetArray,
    })
  }
  hideInModal=()=>{
    this.setState({
      show:false,
    })
  }

  hornsFilter=(value)=>{
    let filteredArr=Data.filter(item=>{
      if (item.horns==value){
        return item
      }else if(value=='All'){
        return item
      }
    });
    this.setState({
      dataArray:filteredArr
    })
  }
render(){
  return(
    <div>
      <Header/>
      
      <Main 
      BeastArray={this.state.dataArray}
      increment={this.increment}
      showInModal={this.showInModal}
      hornsFilter={this.hornsFilter}
      />

      <SelectedBeast
      title={this.state.item.title }
      show={this.state.show}
      hide={this.state.hideInModal}
      description={this.state.item.description}
      image_url={this.state.item.image_url}
      item={this.state.item}
      handleClick={this.showInModal}
      votes={this.state.item.votes}
      handleClick={this.hideInModal}
      />
      <Footer/>     
    </div>
  )
}
}

export default App;