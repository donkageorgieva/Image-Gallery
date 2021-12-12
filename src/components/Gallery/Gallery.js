import { Button, Container, Box } from "@mui/material";
import GalleryCard from "../../UI/Card/Card";
import React, { useEffect, useState } from "react";
import useHttpRequest from "../../hooks/useHttpRequest";
const Gallery = (props) => {
  const { error, isLoading, fetchImages, data } = useHttpRequest();
  const [page, setPage] = useState(1);
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
  useEffect(() => {
    const config = {
      method: "GET",
      API_KEY: process.env.REACT_APP_API_KEY,
      baseURL: "https://pixabay.com/api/?key=",
      amount: 6,
      page,
    };
    fetchImages(config);
  }, [fetchImages, page]);
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
        />
      ))
    );
  return (
    <Container
      fixed
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      component="main"
    >
      {cards}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          disabled={page === 1}
          onClick={changePageHandler.bind(null, "PREV")}
          sx={{ margin: "0.5rem", padding: "0.35rem 1.25rem 0.35rem 1.25rem" }}
        >
          Prev
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={changePageHandler.bind(null, "NEXT")}
          sx={{ margin: "0.5rem", padding: "0.35rem 1.25rem 0.35rem 1.25rem" }}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default Gallery;
