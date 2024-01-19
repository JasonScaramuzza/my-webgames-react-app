import '../app/App.css';
import './SudukoStyle.css'
import SudukoHTML from './SudukoHTML';

//const sudukoBoard = [];

//Suduko PAGE

  // function populateSudukoBoard(){
  //   for(let i= 0; i < 9; i++){
  //     for(let j= 0; j < 9; j++){
  //       //row-0-cell-0
  //       const tileID = "row"+i+"cell"+j;
  //       sudukoBoard[i][j] = document.getElementById(tileID);
  //       document.getElementById(tileID).innerHTML = "1"
  //     };
  //   };
  // };


//Populate the suduko page



export function SudukoPage(){
  return (
    SudukoHTML()
  );
};

export default SudukoPage;