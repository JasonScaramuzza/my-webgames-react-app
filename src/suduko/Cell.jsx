export const Cell = (props) => {
    //props.row
    //props.cell
    //props.cellID
    //props.cellValue
    //props.cellReadOnly
    return(
        <div className={`cell ${props.row} ${props.cell}`} id={props.cellID}>
            <input
            className="input-style-1" 
            id={`input-${props.cellID}`} 
            defaultValue={props.cellValue} 
            maxLength="1"
            type='number'
            readOnly={props.cellReadOnly}>
            </input>
        </div>
    );
};

export default Cell;
