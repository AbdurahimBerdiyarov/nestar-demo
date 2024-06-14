import { Box, Container, Stack } from "@mui/material";
import withLayoutMain from "../libs/components/layout/LayoutHome";
import { brown, green, red } from "@mui/material/colors";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const Home: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return (
      <Stack className={"home-page"}>
        HOMEPAGE MOBILE
        {/* <TrendProperties />
        <PopularProperties />
        <Advertisement />
        <TopProperties />
        <TopAgents /> */}
      </Stack>
    );
  } else {
    return (
      <Stack className={"home-page"}>
        <TrendProperties />
        <PopularProperties />
        <Advertisement />
        <TopProperties />
        <TopAgents />
        {/* <Events />
        <CommunityBoards /> */}
      </Stack>
    );
  }
};

export default withLayoutMain(Home);
