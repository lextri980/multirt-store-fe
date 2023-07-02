import React from "react";
import PropTypes from "prop-types";
import { AlertModalContainer, Title, ModalBody } from "./AlertModal.style";
import { Modal, Button, Spacer } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { Image } from "themes/image";

AlertModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function AlertModal(props) {
  const { onClick } = props;

  const { alertModal } = useSelector((state) => state.common);

  return (
    <AlertModalContainer>
      <Modal
        aria-labelledby="alert-modal"
        open={alertModal.open}
        width="500px"
        preventClose
      >
        <Modal.Header>
          <h2>ERROR {alertModal.errorStatus}</h2>
        </Modal.Header>
        <Modal.Body>
          <ModalBody>
            <img className="gif" src={Image.unauthorized} alt="error" width="800" />
            <Spacer y={0.5} />
            <p>{alertModal.message}</p>
            <Spacer y={1} />
            <div className="group-btn">
              <Button onClick={onClick}>{alertModal.textBtn}</Button>
            </div>
          </ModalBody>
        </Modal.Body>
      </Modal>
    </AlertModalContainer>
  );
}

export default AlertModal;
