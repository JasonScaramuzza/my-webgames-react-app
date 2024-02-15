import MyHeader from "../../globalComponents/myHeader/MyHeader";
import "./PetAdoptionPage.css";
import SearchParams from "./SearchParams";

//Peet Adoption PAGE

function PetAdoptionPage() {
  return (
    <section id="pet-adoption-page">
      <MyHeader />
      <div>
        <h1 className="title">Adopt Me!</h1>
        <SearchParams />
      </div>
    </section>
  );
}

export default PetAdoptionPage;
