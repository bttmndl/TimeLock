import { makeStyles } from "@material-ui/core";
import AliceCarousel from "react-alice-carousel";


const responsive = {
  0: {
    items: 2,
  },
  512: {
    items: 4,
  },
};

export default function Carousel(){
  
  const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
    },
  }));

  const classes = useStyles();


  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        
        autoPlay
      />
    </div>
  );
};