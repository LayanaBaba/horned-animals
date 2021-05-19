import React from 'react';
import HornedBeast from './HornedBeast.js';
import Data from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

class Main extends React.Component {

    constructor (props){
        super(props);
        this.state = {
          
        }
    }
    updatedHornsNumber = (event) => {
        event.preventDefault();
        let value=event.target.value;
        this.props.hornsFilter(value);
    }    

    render() {
        return (
            <>
                <Form >
                    <Form.Group controlId="exampleForm.ControlSelect1">

                        <Form.Label>Filter By Horns Number</Form.Label>
                        <Form.Control onChange={this.updatedHornsNumber} as="select" >
                            <option value='All'>All</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                            <option value='100'>Wow</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                
                {/* <CardColumns> */}
                    <div style={{display:'flex' , flexFlow:'row' , flexWrap:'wrap'}}>
                        {this.props.BeastArray.map((item, index) => {
                            return (
                                <HornedBeast
                                    title={item.title}
                                    image_url={item.image_url}
                                    description={item.description}
                                    key={index}
                                    index={index}
                                    increment2={this.props.increment}
                                    showInModal={this.props.showInModal}

                                />
                            );
                        })
                        }

                    </div>
                {/* </CardColumns> */}


            </>

        )
    }
}

export default Main;
