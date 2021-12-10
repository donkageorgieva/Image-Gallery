import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Card } from "@mui/material";
const GalleryCard = (props) => {
  return (
    <Card sx={{ maxWidth: "50%" }}>
      <CardMedia
        component="img"
        height={props.imgHeight}
        image={props.url}
        alt={props.alt}
      />
      <CardContent></CardContent>{" "}
    </Card>
  );
};

export default GalleryCard;
