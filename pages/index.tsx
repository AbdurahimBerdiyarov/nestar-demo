import { Box, Container, Stack } from "@mui/material";
import withLayoutMain from "../lib/components/layout/LayoutHome";
import { brown, green, red } from "@mui/material/colors";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <Stack flexDirection={"column"}>
        <Box>Populer Properties</Box>
        <Box>Top Agents</Box>
        <Box>Top Properties</Box>
        <Box>Events</Box>
      </Stack>
    </Container>
  );
};

export default withLayoutMain(Home);
