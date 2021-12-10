import Card from "@mui/material/Card";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import GalleryCard from "../../UI/Card/Card";
import React, { useEffect, useState } from "react";
import useHttpRequest from "../../hooks/useHttpRequest";
const Gallery = (props) => {
  const { error, isLoading, fetchImages, data: images } = useHttpRequest();

  useEffect(() => {
    const config = {
      method: "GET",
      API_KEY: process.env.REACT_APP_API_KEY,
      baseURL: "https://pixabay.com/api/?key=",
      amount: 6,
    };
    fetchImages(config);
    console.log("executed");
  }, [fetchImages]);
  const cards =
    isLoading || images.hits === undefined ? (
      <h1>Loading...</h1>
    ) : (
      images.hits.map((image) => <GalleryCard key={image.id} />)
    );
  return (
    <Container fixed sx={{ display: "flex", flexWrap: "wrap" }}>
      {cards}
    </Container>
  );
};

export default Gallery;
