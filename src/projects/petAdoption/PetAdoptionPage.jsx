import MyContactMe from "../../globalComponents/myContactMe/MyContactMe";
import MyFooter from "../../globalComponents/myFooter/MyFooter";
import MyHeader from "../../globalComponents/myHeader/MyHeader";
import "./PetAdoptionPage.css";
import SearchParams from "./SearchParams";

//Pet Adoption PAGE

function PetAdoptionPage() {
  return (
    <section id="pet-adoption-page">
      <MyHeader />

      <div className="gradient-1"></div>

      <header>
        <h2>Adopt Me!</h2>
      </header>

      <SearchParams />

      <div className="gradient-1"></div>

      <MyContactMe />

      <div className="gradient-1"></div>

      <MyFooter />
    </section>
  );
}

export default PetAdoptionPage;
