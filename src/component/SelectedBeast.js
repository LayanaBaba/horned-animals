import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component{
    
    render(){
        return(
            <div >
                
                <Modal show={this.props.show} onHide={this.props.hide}>
                <img src={this.props.image_url} alt={this.props.title} style={{width:'400px' } } />
                <Modal.Header >                   

                <Modal.Title>{this.props.title}</Modal.Title>
                {/* <Modal.Title>src={this.props.Image}</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>{this.props.description}</Modal.Body>
                <Modal.Body>  The total votes 💚: {this.props.votes} </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClick}>
                    Close
                </Button>
               
                </Modal.Footer>
            </Modal>
            </div>
        )
        
    }
}
export default SelectedBeast;