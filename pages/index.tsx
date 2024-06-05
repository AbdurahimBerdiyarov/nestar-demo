import { Box, Container, Stack } from "@mui/material";
import { brown, green, red } from "@mui/material/colors";

export default function Home() {
  return (
    <>
      <Stack sx={{ background: red[300] }}>Header</Stack>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Populer Properties</Box>
          <Box>Top Agents</Box>
          <Box>Top Properties</Box>
          <Box>Events</Box>
        </Stack>
      </Container>
      <Stack sx={{ background: brown[300] }}>Footer</Stack>
    </>
  );
}
