import React, { useState } from "react";

import { Stack } from "@mui/material";

const TopAgentCard = ({ initialInput, ...props }: any) => {
  const [topAgentCard, setTopAgentCard] = useState<number[]>(initialInput);

  return (
    <Stack className="top-agent-card">
      <img src="/img/profile/girl.svg" alt="" />

      <strong>Hoorwen</strong>
      <span>Lorem</span>
    </Stack>
  );
};

export default TopAgentCard;
