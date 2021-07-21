import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderSpiner = () => {
  return <Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />;
};

export default LoaderSpiner;
