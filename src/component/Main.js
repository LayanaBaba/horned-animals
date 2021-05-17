import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component{
   
    render(){
        return(
            <>
            {data.map((item)=>{
               return(
                    <HornedBeast
                title={item.title}
                image_url={item.image_url}
                description={item.description}

                />
               )
            })}
               
                 
            </>

        )
    }
}
 
export default Main;
