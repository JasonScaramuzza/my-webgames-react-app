import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FetchPet from "./FetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery({
    queryKey: ["pet-adoption/details", id],
    queryFn: FetchPet,
  });

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
      <Link to="/pet-adoption">Adopt Me!</Link>
      <h2>{id}</h2>
    </div>
  );
};

export default Details;
