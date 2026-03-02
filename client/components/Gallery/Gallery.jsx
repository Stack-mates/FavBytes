import GalleryItem from "./GalleryItem";
import Swiper from "swiper";
import 'swiper/css/bundle';

const swiper = new Swiper();

export default function Gallery () {


return (
  <div id="gallery">
    <h1>This is the Gallery!</h1>
     <GalleryItem />


  </div>
)
};