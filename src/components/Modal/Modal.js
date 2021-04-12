import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Show Pop Up</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Block Details</ModalHeader>
          <ModalBody>
              <div>
                User id: 
              </div>
              <div>
                Id:
              </div>
              <div>
                Title:
              </div>
              <div>
                Body:
              </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Done</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;