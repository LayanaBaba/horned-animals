import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            votes: 0,
        };
    }

    addedVotes=()=>{
        this.setState({
            votes:this.state.votes + 1
        });
    }

render(){
    return(
        <div>
            <Card className="text-center">
  <Card.Header><h2>
            {this.props.title}
            </h2></Card.Header>
  <Card.Body>
    <Card.Title><p>
                {
                    this.props.description
                }
            </p></Card.Title>
    <Card.Text>
    <p>
                The total votes 💚: {this.state.votes}
            </p>
    </Card.Text>
    <Button onClick={this.addedVotes} variant="primary">Vote here</Button>
  </Card.Body>
  <Card.Footer className="text-muted">♥️♥️♥️♥️♥️♥️</Card.Footer>
</Card>
            {/* <h2>
            {this.props.title}
            </h2>
            <img src={this.props.image_url} alt={this.props.title} title={this.props.title}/>
            <p>
                {
                    this.props.description
                }
            </p>
            <p>
                 {this.state.votes}
            </p>
            <button onClick={this.addedVotes}>
                Vote here
            </button> */}
        </div>
    )
}
}

export default HornedBeast;