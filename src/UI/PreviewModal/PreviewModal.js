import { Modal, Box } from "@mui/material";

const PreviewModal = (props) => {
  return (
    <Modal
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={props.preview}
      onBackdropClick={() => {
        props.exitPreview();
        console.log("BACKDROP");
      }}
    >
      <Box
        sx={{
          width: "30%",
          height: "50%",
        }}
      >
        <img
          src={props.imageURL}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt={props.imageURL}
        ></img>
      </Box>
    </Modal>
  );
};
export default PreviewModal;
