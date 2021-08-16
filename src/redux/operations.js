import axios from "axios";
import { getImagesRequest, getImagesSuccess, getImagesError } from "./actions";

axios.defaults.baseURL = "https://pixabay.com/api";
axios.defaults.params = {
  key: "4423902-dbd0f970c0cc60dbb84d66d4b",
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};

export const getGalleryItems =
  (searchQuery = "", page = 1) =>
  (dispatch) => {
    dispatch(getImagesRequest());
    axios
      .get("", {
        params: { q: searchQuery, page },
      })
      .then((response) => {
        console.log(response.data.hits);
        dispatch(getImagesSuccess(response.data.hits));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getImagesError(error));
      });
  };
