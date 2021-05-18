import React from 'react';
import HornedBeast from './HornedBeast';
// import data from './data.json';

class Main extends React.Component{
   
    render(){
        return(
            <>
             {this.props.BeastArray.map((item,index)=>{
                        return(
                            <HornedBeasts
                            title={item.title}
                            image_url={item.image_url}
                            description={item.description}
                            key={index}
                            handleClick={this.props.handleClick}
                            />
                        );
                    })
                    }
               
                 
            </>

        )
    }
}
 
export default Main;
