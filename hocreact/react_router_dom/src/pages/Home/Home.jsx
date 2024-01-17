import style from "./Home.module.scss";
import Carousel from "./Carousel";
import clsx from "clsx";

const Home = () => {
  return (
    <div>
      <h1 className={clsx(style["title"])}>Home</h1>
      <Carousel />
    </div>
  );
};

export default Home;
