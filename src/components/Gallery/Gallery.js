import { Button, Container, Box } from "@mui/material";
import GalleryCard from "../../UI/Card/Card";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import useHttpRequest from "../../hooks/useHttpRequest";
import PreviewModal from "../../UI/PreviewModal/PreviewModal";

const Gallery = (props) => {
  const { error, isLoading, fetchImages, data } = useHttpRequest();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [imgPreview, setImgPreview] = useState({
    preview: false,
    imageURL: "",
  });
  const changePageHandler = (identifier) => {
    let currPage = page;
    if (identifier === "NEXT") {
      currPage += 1;
      setPage(currPage);
      console.log("next");
    } else if (identifier === "PREV") {
      currPage -= 1;
      setPage(currPage);
    }
  };
  const searchImageHandler = (value) => {
    const newValue = encodeURIComponent(value);
    setSearch(newValue);
  };
  const previewImageHandler = (shouldClose = false, url = "") => {
    if (!shouldClose) {
      const newImage = { ...imgPreview, imageURL: url, preview: true };

      setImgPreview(newImage);
    } else {
      const resetImage = {
        ...imgPreview,
        imageURL: url,
        preview: false,
      };
      setImgPreview(resetImage);
    }
  };
  useEffect(() => {
    const config = {
      method: "GET",
      API_KEY: process.env.REACT_APP_API_KEY,
      baseURL: "https://pixabay.com/api/?key=",
      amount: 6,
      page,
      q: search,
    };
    fetchImages(config);
  }, [fetchImages, page, search]);
  console.log(data);
  const cards =
    isLoading || data.hits === undefined ? (
      <h1>Loading...</h1>
    ) : (
      data.hits.map((image) => (
        <GalleryCard
          url={image.webformatURL}
          key={image.id}
          avatar={image.userImageURL}
          alt={image.user}
          altImage={image.tags}
          tags={image.tags}
          author={image.user}
          likes={image.likes}
          views={image.views}
          previewImg={() => {
            previewImageHandler(false, image.webformatURL);
          }}
        />
      ))
    );
  return (
    <React.Fragment>
      <Header searchImage={searchImageHandler} />
      <Container
        fixed
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "6rem 0rem 6rem 0rem",
        }}
        component="main"
      >
        {cards}
        {isLoading ? null : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              padding: "1rem 0rem 1rem 0rem",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={page === 1}
              onClick={changePageHandler.bind(null, "PREV")}
              sx={{
                margin: "0.5rem",
                padding: "0.35rem 1.25rem 0.35rem 1.25rem",
              }}
            >
              Prev
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={changePageHandler.bind(null, "NEXT")}
              sx={{
                margin: "0.5rem",
                padding: "0.35rem 1.25rem 0.35rem 1.25rem",
              }}
            >
              Next
            </Button>
          </Box>
        )}
      </Container>
      {imgPreview.preview ? (
        <PreviewModal
          preview={imgPreview.preview}
          imageURL={imgPreview.imageURL}
          exitPreview={() => {
            console.log("EXIT");
            previewImageHandler(true, "");
          }}
        />
      ) : null}
    </React.Fragment>
  );
};

export default Gallery;
