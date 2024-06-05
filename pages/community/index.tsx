import withLayoutBasic from "@/lib/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");

  return (
    <div>
      COMMUNITY
      <button onClick={() => alert("Hello MIT")} style={{ margin: "20px" }}>
        {" "}
        PressMe
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);
