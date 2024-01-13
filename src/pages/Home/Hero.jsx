import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Container from "../../components/Container";
const images = [
   {
      original: "https://picsum.photos/id/1018/1000/600/",
   },
   {
      original: "https://picsum.photos/id/1015/1000/600/",
   },
   {
      original: "https://picsum.photos/id/1019/1000/600/",
   },
];

export default function Hero() {
   return (
      <Container classes={`mt-3 mb-10`}>
         <ImageGallery
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            showBullets={true}
         />
      </Container>
   );
}
