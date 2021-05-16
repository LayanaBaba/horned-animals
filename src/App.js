import React from 'react';

import Header from './component/Header';

import Footer from './component/Footer';

import Main from './component/Main';

class App extends React.Component {
render(){
  return(
    <div>
      <Header/>
      <Footer/>
      <Main/>     
    </div>
  )
}
}

export default App;