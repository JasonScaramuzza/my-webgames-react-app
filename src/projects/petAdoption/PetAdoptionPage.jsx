import MyHeader from "../../globalComponents/myHeader/MyHeader";
import Pet from "./Pet";
import "./PetAdoptionPage.css";

//Peet Adoption PAGE

function PetAdoptionPage() {
  return (
    <section id="pet-adoption-page">
      <MyHeader />
      <div>
        <h1 className="title">Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
      </div>
    </section>
  );
}

export default PetAdoptionPage;
