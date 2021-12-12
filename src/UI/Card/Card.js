import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Card, Avatar, CardHeader, CardActionArea } from "@mui/material";
const style = {
  media: {
    height: 240,
  },
};
const GalleryCard = (props) => {
  return (
    <Card
      sx={{ maxWidth: "100%", width: "30%", margin: "1rem" }}
      component="article"
    >
      <CardHeader
        sx={{ textAlign: "start" }}
        avatar={<Avatar src={props.avatar} alt={props.alt} />}
        title={props.author}
        subheader={props.tags}
      ></CardHeader>
      <CardActionArea onClick={props.previewImg}>
        <img
          src={props.url}
          alt={props.altImage}
          style={{
            width: "100%",
            height: "230px",
            objectFit: "cover",
          }}
        />
      </CardActionArea>
      <CardContent></CardContent>{" "}
    </Card>
  );
};

export default GalleryCard;
