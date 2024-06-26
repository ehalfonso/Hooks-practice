import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { counter, decrement, increment, reset } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <h1>Pockemon information</h1>

      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      {hasError && <h3> 404 Not Found</h3>}

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <button
        onClick={() => (counter > 1 ? decrement() : null)}
        className="btn btn-primary"
      >
        Previous
      </button>

      <button
        onClick={() => increment()}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Next
      </button>
    </>
  );
};
