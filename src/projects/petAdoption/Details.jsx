import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import FetchPet from "./FetchPet";
import "./Details.css";
import MyHeader from "../../globalComponents/myHeader/MyHeader";
import MyContactMe from "../../globalComponents/myContactMe/MyContactMe";
import MyFooter from "../../globalComponents/myFooter/MyFooter";

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
    <div className="details-page">
      <MyHeader />
      <div className="gradient-1"></div>
      <div className="details-container">
        <div className="details">
          <Link to="/pet-adoption">Adopt Me!</Link>
          <Carousel images={pet.images} />
          <div>
            <h1>{pet.name}</h1>
            <h2>
              {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
              <button>Adopt {pet.name}</button>
              <p>{pet.description}</p>
            </h2>
          </div>
        </div>
      </div>
      <div className="gradient-1"></div>
      <MyContactMe />
      <div className="gradient-1"></div>
      <MyFooter />
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
