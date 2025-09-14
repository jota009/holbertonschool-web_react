// Type alias: Creates a reusable type definition
// RowID represents a unique identifier for database rows
export type RowID = number;

// Interface: Defines the structure of a row element
// This represents the data structure for entities we'll save to the database
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optional property - some rows might not have age data
}
