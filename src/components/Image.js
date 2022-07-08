import React, { useEffect } from "react";
import { getTrendingImages } from "../api/api";

const Image = ({ src }) => {
  useEffect(() => {
    getTrendingImages();
  }, []);

  return <img src={src} alt="Picsum" />;
};

export default Image;
