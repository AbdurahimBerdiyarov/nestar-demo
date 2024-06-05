import withLayoutBasic from "@/lib/components/layout/LayoutBasic";
import { Box, Container, Stack } from "@mui/material";
import { brown, green, red } from "@mui/material/colors";
import { NextPage } from "next";

const PropertyDetail: NextPage = () => {
  return (
    <>
      {/* <Stack sx={{ background: red[300] }}>Header Basic</Stack> */}
      <Container>PROPERTY DETAIL </Container>
      {/* <Stack sx={{ background: brown[300] }}>Footer</Stack> */}
    </>
  );
};

export default withLayoutBasic(PropertyDetail);
