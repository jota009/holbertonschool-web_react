// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student variables
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array containing both students
const studentsList: Student[] = [student1, student2];

// Create and render the table using Vanilla JavaScript
// Create table element
const table: HTMLTableElement = document.createElement('table');
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';

// Create table header
const headerRow: HTMLTableRowElement = table.insertRow();
const firstNameHeader: HTMLTableCellElement = headerRow.insertCell();
const locationHeader: HTMLTableCellElement = headerRow.insertCell();

firstNameHeader.innerHTML = '<strong>First Name</strong>';
locationHeader.innerHTML = '<strong>Location</strong>';
firstNameHeader.style.border = '1px solid black';
firstNameHeader.style.padding = '8px';
locationHeader.style.border = '1px solid black';
locationHeader.style.padding = '8px';

// Loop through studentsList and append rows to table
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const firstNameCell: HTMLTableCellElement = row.insertCell();
  const locationCell: HTMLTableCellElement = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  // Add styling
  firstNameCell.style.border = '2px solid black';
  firstNameCell.style.padding = '10px';
  locationCell.style.border = '2px solid black';
  locationCell.style.padding = '10px';
});

// Append table to document body
document.body.appendChild(table);
