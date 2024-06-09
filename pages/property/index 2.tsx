import { Container, Stack } from "@mui/material";
import { brown, green, red } from "@mui/material/colors";

const PropertyList = () => {
  console.log("PROPERTYLIST COMPONENT - PAGES ROUTER");

  return (
    <>
      <Stack sx={{ background: green[300] }}>Header Basic</Stack>
      <Container>PROPERTY LIST</Container>
      <Stack sx={{ background: brown[300] }}>Footer</Stack>
    </>
  );
};

export default PropertyList;
