// Triple slash directive: This special TypeScript syntax includes all dependencies
// from the ambient declaration file. It tells TypeScript to load the type information
// from crud.d.ts before processing this file.
/// <reference path="./crud.d.ts" />

// Import our custom types from the interface file
// These are type-only imports - they provide type information but don't generate runtime code
import { RowID, RowElement } from './interface';

// Import everything from the actual JavaScript implementation
// This imports the runtime functions and assigns them to the CRUD namespace
import * as CRUD from './crud.js';

// Demonstrate Ambient Namespaces and Type Safety
console.log('=== Ambient Namespaces Demonstration ===');

// Create a row object with the RowElement type
// TypeScript will verify that this object matches the RowElement interface
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

console.log('Initial row object:', row);

// Call insertRow and store the returned ID
// newRowID gets the RowID type (which is an alias for number)
// TypeScript knows that CRUD.insertRow returns a RowID because of our ambient declarations
const newRowID: RowID = CRUD.insertRow(row);
console.log('New row ID:', newRowID);

// Create an updated row with the age field
// This demonstrates how optional properties can be added
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23
};

console.log('Updated row object:', updatedRow);

// Update the row in the database
// TypeScript verifies that we're passing the correct types to updateRow
const updatedRowID: RowID = CRUD.updateRow(newRowID, updatedRow);
console.log('Updated row ID:', updatedRowID);

// Delete the row from the database
// TypeScript ensures we pass a RowID (number) to deleteRow
CRUD.deleteRow(newRowID);

// Demonstrate type safety - these would cause TypeScript errors if uncommented:
// CRUD.insertRow("invalid"); // Error: string is not assignable to RowElement
// CRUD.deleteRow("invalid"); // Error: string is not assignable to RowID
// CRUD.updateRow(123, "invalid"); // Error: string is not assignable to RowElement

// Visual demonstration showing the ambient namespace concepts
const container: HTMLDivElement = document.createElement('div');
container.style.fontFamily = 'Arial, sans-serif';
container.style.margin = '20px';

// Create a section for ambient namespace demonstration
const ambientSection: HTMLDivElement = document.createElement('div');
ambientSection.style.border = '2px solid #17a2b8';
ambientSection.style.margin = '20px 0';
ambientSection.style.padding = '15px';
ambientSection.style.backgroundColor = '#d1ecf1';
ambientSection.style.borderRadius = '8px';

const ambientSectionTitle: HTMLHeadingElement = document.createElement('h3');
ambientSectionTitle.textContent = 'Ambient Namespaces: External Library Integration';
ambientSectionTitle.style.color = '#0c5460';
ambientSection.appendChild(ambientSectionTitle);

// Create demonstration cards showing the CRUD operations
function createCRUDCard(operation: string, description: string, result: any): HTMLDivElement {
  const card: HTMLDivElement = document.createElement('div');
  card.style.margin = '10px 0';
  card.style.padding = '12px';
  card.style.backgroundColor = '#ffffff';
  card.style.border = '1px solid #17a2b8';
  card.style.borderRadius = '6px';

  card.innerHTML = `
    <strong>Operation:</strong> ${operation}<br>
    <strong>Description:</strong> ${description}<br>
    <strong>Result:</strong> ${result}<br>
    <strong>Type Safety:</strong> Verified by ambient declarations
  `;

  return card;
}

// Add cards for each CRUD operation
ambientSection.appendChild(createCRUDCard(
  'CRUD.insertRow(row)',
  'Insert new row with Guillaume Salva data',
  `Row ID: ${newRowID}`
));

ambientSection.appendChild(createCRUDCard(
  'CRUD.updateRow(newRowID, updatedRow)',
  'Update row with age 23',
  `Updated Row ID: ${updatedRowID}`
));

ambientSection.appendChild(createCRUDCard(
  'CRUD.deleteRow(newRowID)',
  'Delete row by ID',
  'Row deleted successfully'
));

// Add explanation of ambient namespace concepts
const ambientExplanationDiv: HTMLDivElement = document.createElement('div');
ambientExplanationDiv.style.margin = '15px 0';
ambientExplanationDiv.style.padding = '10px';
ambientExplanationDiv.style.backgroundColor = '#f8f9fa';
ambientExplanationDiv.style.borderLeft = '4px solid #17a2b8';
ambientExplanationDiv.style.fontSize = '14px';

ambientExplanationDiv.innerHTML = `
  <strong>Ambient Namespace Features:</strong><br>
  • <em>Type Aliases:</em> RowID = number creates reusable type definitions<br>
  • <em>Interface Modules:</em> Separate type definitions in interface.ts<br>
  • <em>Ambient Declarations:</em> crud.d.ts describes external JavaScript library<br>
  • <em>Triple Slash Directives:</em> /// &lt;reference path="./crud.d.ts" /&gt;<br>
  • <em>Type Safety:</em> External JS functions get TypeScript validation<br>
  • <em>IntelliSense:</em> IDE provides autocomplete for external library functions
`;

ambientSection.appendChild(ambientExplanationDiv);

container.appendChild(ambientSection);

// Append to document body
document.body.appendChild(container);
