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
          width: {
            md: "40%",

            xs: "100%",
          },
          height: {
            md: "60%",
            xs: "50%",
          },
        }}
      >
        <img
          src={props.imageURL}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          alt={props.imageURL}
        ></img>
      </Box>
    </Modal>
  );
};
export default PreviewModal;
