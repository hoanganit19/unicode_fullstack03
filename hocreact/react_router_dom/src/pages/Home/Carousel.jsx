import clsx from "clsx";
import style from "./Carousel.module.scss";

const Carousel = () => {
  return (
    <div>
      <h1 className={clsx(style["title"])}>Demo Carousel</h1>
    </div>
  );
};

export default Carousel;
