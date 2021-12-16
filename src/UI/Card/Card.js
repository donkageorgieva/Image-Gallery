import { Box, Typography, CardMedia, CardContent } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Card, Avatar, CardHeader, CardActionArea } from "@mui/material";

const style = {
  media: {
    height: 240,
  },
};
const GalleryCard = (props) => {
  return (
    <Card component="article">
      <CardHeader
        sx={{ textAlign: "start", height: "5rem" }}
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
      <CardContent
        sx={{
          height: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ThumbUpIcon />
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ margin: "0px 0px 0px 10px" }}
          >
            {props.likes}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <VisibilityIcon />
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ margin: "0px 0px 0px 10px" }}
          >
            {props.views}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
