import React from 'react';
import HornedBeast from './HornedBeast.js';
import Data from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component{
   
    render(){
        return(
            <>
              <CardColumns>
                <div >
                    {this.props.BeastArray.map((item,index)=>{
                        return(
                            <HornedBeast
                            title={item.title}
                            image_url={item.image_url}
                            description={item.description}
                            key={index}
                            increment2={this.props.increment}
                            showInModal={this.props.showInModal}
                            
                            />
                        );
                    })
                    }
                
                </div>
            </CardColumns>
               
                 
            </>

        )
    }
}
 
export default Main;
