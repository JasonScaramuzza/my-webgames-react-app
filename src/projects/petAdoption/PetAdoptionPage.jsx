import MyContactMe from "../../globalComponents/myContactMe/MyContactMe";
import MyFooter from "../../globalComponents/myFooter/MyFooter";
import MyHeader from "../../globalComponents/myHeader/MyHeader";
import SearchParams from "./SearchParams";
import "./PetAdoptionPage.css";

//Pet Adoption PAGE

function PetAdoptionPage() {
  return (
    <section id="pet-adoption-page">
      <MyHeader />

      <div className="gradient-1"></div>

      <header className="header-container">
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
