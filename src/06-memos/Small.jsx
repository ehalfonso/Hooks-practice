import React from "react";
//otra forma para importar el memo
// import { memo } from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me voy a dibujar");
  return <small>{value}</small>;
});
