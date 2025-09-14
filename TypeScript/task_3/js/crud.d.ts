// Import the types we defined in our interface file
// These imports make our custom types available in this ambient declaration file
import { RowID, RowElement } from './interface';

// Ambient declarations: These describe the shape of the external JavaScript library
// without providing the actual implementation. This tells TypeScript what the
// crud.js functions look like from a type perspective.

// Declare the insertRow function:
// - Takes a RowElement as parameter
// - Returns a RowID (which is a number representing the new row's ID)
export declare function insertRow(row: RowElement): RowID;

// Declare the deleteRow function:
// - Takes a RowID as parameter
// - Returns void (nothing)
export declare function deleteRow(rowId: RowID): void;

// Declare the updateRow function:
// - Takes a RowID and a RowElement as parameters
// - Returns the RowID of the updated row
export declare function updateRow(rowId: RowID, row: RowElement): RowID;
