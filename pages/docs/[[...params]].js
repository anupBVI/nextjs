import React from "react";
import { useRouter } from "next/router";

const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log("params", params);

  if (params.length === 2) {
    return (
      <h2>
        viewing docs for feature {params[0]} and concept {params[1]}
      </h2>
    );
  } else if (params.length === 1) {
    return <h2>viewing docs for feature {params[0]}</h2>;
  }
  return <h1>Docs File</h1>;
};

export default Docs;
