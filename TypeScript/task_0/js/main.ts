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
    location: "California"
  };

  // Store students in an array
  const studentsList: Student[] = [student1, student2];

  // Create and render the table using Vanilla JavaScript
  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
  const table: HTMLTableElement = document.createElement("table");
  const tableHead: HTMLTableSectionElement = document.createElement("thead");
  const tableBody: HTMLTableSectionElement = document.createElement("tbody");

  // Create table header
  const headerRow: HTMLTableRowElement = document.createElement("tr");
  const firstNameHeader: HTMLTableCellElement = document.createElement("th");
  const locationHeader: HTMLTableCellElement = document.createElement("th");

  firstNameHeader.textContent = "First Name";
  locationHeader.textContent = "Location";

  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  tableHead.appendChild(headerRow);

  // Create table rows for each student
  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = document.createElement("tr");
    const firstNameCell: HTMLTableCellElement = document.createElement("td");
    const locationCell: HTMLTableCellElement = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });

  // Assemble the table
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  body.appendChild(table);
