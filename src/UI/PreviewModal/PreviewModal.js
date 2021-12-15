import { Modal, Box } from "@mui/material";

const PreviewModal = (props) => {
  return (
    <Modal
      open={props.preview}
      onClose={props.exitPreview}
      onBackdropClick={props.exitPreview}
    >
      <img src={props.imageURL}></img>
    </Modal>
  );
};
export default PreviewModal;
