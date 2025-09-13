// Define the Teacher interface with readonly properties and index signature
interface Teacher {
  // Readonly properties - can only be set during initialization
  readonly firstName: string;
  readonly lastName: string;

  // Regular required properties
  fullTimeEmployee: boolean;
  location: string;

  // Optional property - may or may not be present
  yearsOfExperience?: number;

  // Index signature - allows any additional properties
  // [key: string] means any property name (that's a string)
  // : any means the value can be of any type
  [key: string]: any;
}

// Create teacher objects demonstrating different scenarios
const teacher1: Teacher = {
  firstName: 'Sarah',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'Boston',
  yearsOfExperience: 5
};

// Teacher without optional yearsOfExperience
const teacher2: Teacher = {
  firstName: 'Mike',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'New York'
};

// Teacher with additional properties (using index signature)
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,        // Additional property allowed by index signature
  department: 'Math',     // Another additional property
  salary: 50000          // Yet another additional property
};

// Display the teachers
console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
console.log('Teacher 3:', teacher3);

// Demonstrate readonly behavior
// Try to uncomment the line below - TypeScript will show an error!
// teacher1.firstName = 'NewName'; // Error: Cannot assign to 'firstName' because it is a readonly property

// Create HTML elements to display the teachers
const container: HTMLDivElement = document.createElement('div');
container.style.fontFamily = 'Arial, sans-serif';
container.style.margin = '20px';

// Function to create a teacher display card
function createTeacherCard(teacher: Teacher, title: string): HTMLDivElement {
  const card: HTMLDivElement = document.createElement('div');
  card.style.border = '2px solid #333';
  card.style.margin = '10px 0';
  card.style.padding = '15px';
  card.style.backgroundColor = '#f9f9f9';
  card.style.borderRadius = '8px';

  const heading: HTMLHeadingElement = document.createElement('h3');
  heading.textContent = title;
  heading.style.color = '#333';
  card.appendChild(heading);

  // Display all properties of the teacher object
  for (const [key, value] of Object.entries(teacher)) {
    const propertyDiv: HTMLDivElement = document.createElement('div');
    propertyDiv.style.margin = '5px 0';
    propertyDiv.innerHTML = `<strong>${key}:</strong> ${value}`;
    card.appendChild(propertyDiv);
  }

  return card;
}

// Create cards for each teacher
container.appendChild(createTeacherCard(teacher1, 'Teacher 1 (Full-time with experience)'));
container.appendChild(createTeacherCard(teacher2, 'Teacher 2 (Part-time, no experience listed)'));
container.appendChild(createTeacherCard(teacher3, 'Teacher 3 (With additional properties)'));

// Append to document body
document.body.appendChild(container);
