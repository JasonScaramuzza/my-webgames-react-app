import MyHeader from "../../globalComponents/myHeader/MyHeader";
import "./PetAdoptionPage.css";
import SearchParams from "./SearchParams";

//Pet Adoption PAGE

function PetAdoptionPage() {
  return (
    <section id="pet-adoption-page">
      <MyHeader />
      <header>
        <h2>Adopt Me!</h2>
      </header>
      <SearchParams />
    </section>
  );
}

export default PetAdoptionPage;
