import { Text } from "@nextui-org/react";
import ModalCustom from "@nextui-org/react/modal";
import PropTypes from "prop-types";
import { ModalContainer } from "./Modal.style";

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  width: PropTypes.string,
};

function Modal(props) {
  const { open, close, header, width, children } = props;

  return (
    <ModalContainer>
      <ModalCustom
        width={width && width}
        aria-labelledby="modal-title"
        open={open}
        onClose={close}
      >
        <ModalCustom.Header>
          <Text id="modal-title" size={25} style={{ marginTop: "10px" }}>
            {header}
          </Text>
        </ModalCustom.Header>
        <ModalCustom.Body>{children}</ModalCustom.Body>
      </ModalCustom>
    </ModalContainer>
  );
}

export default Modal;
