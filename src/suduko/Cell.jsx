export class Cell{
    constructor(row, column, cellID, cellValue, cellReadOnly){
        this.row = row;
        this.column = column;
        this.cellID = cellID;
        this.cellValue = cellValue;
        this.cellReadOnly = cellReadOnly;
    }
}

export default Cell;
