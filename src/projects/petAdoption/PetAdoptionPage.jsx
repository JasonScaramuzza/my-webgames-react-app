import MyHeader from '../../globalComponents/myHeader/MyHeader';
import './PetAdoptionPage.css';

//Peet Adoption PAGE

const Pet = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.animal}</h2>
                <h2>{props.breed}</h2>
        </div>
    )
}

function PetAdoptionPage() {
  return (
    <div id="pet-adoption-page">
        <MyHeader />
        <Pet />
        <Pet />
        <Pet />
    </div>
  );
}

export default PetAdoptionPage;
