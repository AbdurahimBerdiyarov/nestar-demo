import withLayoutBasic from "@/lib/components/layout/LayoutBasic";
import { Box, Container, Stack } from "@mui/material";
import { brown, green, red } from "@mui/material/colors";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  return (
    <>
      <Container>PROPERTY LIST</Container>
    </>
  );
};
export default withLayoutBasic(PropertyList);
