import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component{
    
    render(){
        return(
            <div >
                
        <Modal show={this.props.show} onHide={this.props.hide}>
            <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                {
                    this.props.description
                }
                </p>
            <img src={this.props.image_url} alt={this.props.title} title={this.props.title}/> 
    <p>
                The total votes 💚: {this.props.votes}
            </p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hide}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
               
            </div>
        )
        
    }
}
export default SelectedBeast;