import React, { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const pRef = useRef();
  const [boxSixe, setBoxSixe] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSixe({ width, height });
  }, []);
  return (
    <section style={{ height: 200 }}>
      <h3 className="text-capitalize">
        #{id} - {name}
      </h3>
      <div ref={pRef}>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>
      <code>{JSON.stringify(boxSixe)}</code>
    </section>
  );
};
