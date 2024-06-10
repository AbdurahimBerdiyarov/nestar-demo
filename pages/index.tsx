import { Box, Container, Stack } from "@mui/material";
import withLayoutMain from "../lib/components/layout/LayoutHome";
import { brown, green, red } from "@mui/material/colors";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack className={"home-page"}>
      <Stack>
        <Stack>
          <Stack className="container">Trend Properties</Stack>
        </Stack>

        <Stack>
          <Stack className="container">Populer Properties</Stack>
        </Stack>

        <Stack>
          <Stack className="container">Advertisement</Stack>
        </Stack>

        <Stack>
          <Stack className="container">Top Properties</Stack>
        </Stack>

        <Stack>
          <Stack className="container">Top Agents</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
