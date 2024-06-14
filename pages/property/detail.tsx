import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
// import { Box, Container, Stack } from "@mui/material";
// import { brown, green, red } from "@mui/material/colors";
import { NextPage } from "next";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "swiper/css/pagination";

// // import required modules
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Thumbs, Pagination, Navigation, Lazy } from "swiper";
// import { useState } from "react";

const PropertyDetail: NextPage = () => {
  const device = useDeviceDetect();

  // const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  if (device == "mobile") {
    return (
      <>
        <Stack id="mobile-wrap">Property Mobile Detail</Stack>
      </>
    );
  } else {
    return (
      <>
        <Stack className={"container"}>
          Property Detail
          {/* <Swiperad
          className="dish_swiper"
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          <SwiperSlide>
            <img
              style={{ width: "500px", height: "500px" }}
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="Nature 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "500px", height: "500px" }}
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="Nature 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "500px", height: "500px" }}
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="Nature 3"
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              style={{ width: "5000px", height: "500px" }}
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="Thumb 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "500px", height: "500px" }}
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="Thumb 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "500px", height: "500px" }}
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="Thumb 3"
            />
          </SwiperSlide>
        </Swiper> */}
        </Stack>
      </>
    );
  }
};

export default withLayoutBasic(PropertyDetail);
