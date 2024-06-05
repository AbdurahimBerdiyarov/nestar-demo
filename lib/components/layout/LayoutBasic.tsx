import { Stack } from "@mui/material";
import { brown, red } from "@mui/material/colors";
import Head from "next/head";
import React from "react";

const withLayoutBasic = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack sx={{ background: red[300] }}>Header Basic</Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack sx={{ background: brown[300] }}>Footer</Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutBasic;
