import { useState } from "react";

const Community = () => {
  console.log("Community Component");

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

export default Community;
