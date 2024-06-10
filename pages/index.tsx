import { Box, Container, Stack } from "@mui/material";
import withLayoutMain from "../lib/components/layout/LayoutHome";
import { brown, green, red } from "@mui/material/colors";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TrendProperties from "@/lib/components/homepage/TrendProperties";
import PopularProperties from "@/lib/components/homepage/PopularProperties";
import Advertisement from "@/lib/components/homepage/Advertisement";
import TopProperties from "@/lib/components/homepage/TopProperties";
import TopAgents from "@/lib/components/homepage/TopAgents";

const Home: NextPage = () => {
  return (
    <Stack className={"home-page"}>
      <TrendProperties />
      <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents />
    </Stack>
  );
};

export default withLayoutMain(Home);
