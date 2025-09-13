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

// Function type interface - defines the shape of a function
// This creates a contract that any function following this interface must:
// - Accept exactly two string parameters (firstName and lastName)
// - Return exactly one string value
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the printTeacher function - DEFINED FIRST
// The function signature must match our interface exactly
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  // Extract the first character of firstName and combine with full lastName
  // This demonstrates string manipulation with type safety
  return `${firstName.charAt(0)}. ${lastName}`;
};

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

// Display the teachers in console
console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
console.log('Teacher 3:', teacher3);

// Demonstrate the printTeacher function
console.log('\n=== Testing printTeacher Function ===');
console.log('printTeacher("John", "Doe"):', printTeacher("John", "Doe"));
console.log('printTeacher("Sarah", "Johnson"):', printTeacher("Sarah", "Johnson"));
console.log('printTeacher("Mike", "Smith"):', printTeacher("Mike", "Smith"));

// Demonstrate with our existing teacher objects
console.log('\n=== Using printTeacher with our Teacher objects ===');
console.log('Teacher 1 formatted:', printTeacher(teacher1.firstName, teacher1.lastName));
console.log('Teacher 2 formatted:', printTeacher(teacher2.firstName, teacher2.lastName));
console.log('Teacher 3 formatted:', printTeacher(teacher3.firstName, teacher3.lastName));

// Demonstrate readonly behavior
// Try to uncomment the line below - TypeScript will show an error!
// teacher1.firstName = 'NewName'; // Error: Cannot assign to 'firstName' because it is a readonly property

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

// Create HTML elements to display the teachers
const container: HTMLDivElement = document.createElement('div');
container.style.fontFamily = 'Arial, sans-serif';
container.style.margin = '20px';

// Create cards for each teacher
container.appendChild(createTeacherCard(teacher1, 'Teacher 1 (Full-time with experience)'));
container.appendChild(createTeacherCard(teacher2, 'Teacher 2 (Part-time, no experience listed)'));
container.appendChild(createTeacherCard(teacher3, 'Teacher 3 (With additional properties)'));

// Add a section to demonstrate the printTeacher function visually
const printTeacherSection: HTMLDivElement = document.createElement('div');
printTeacherSection.style.border = '2px solid #007acc';
printTeacherSection.style.margin = '20px 0';
printTeacherSection.style.padding = '15px';
printTeacherSection.style.backgroundColor = '#e8f4fd';
printTeacherSection.style.borderRadius = '8px';

const sectionTitle: HTMLHeadingElement = document.createElement('h3');
sectionTitle.textContent = 'printTeacher Function Demonstration';
sectionTitle.style.color = '#007acc';
printTeacherSection.appendChild(sectionTitle);

// Demonstrate the function with our teachers
const examples = [
  { teacher: teacher1, description: 'Full-time teacher' },
  { teacher: teacher2, description: 'Part-time teacher' },
  { teacher: teacher3, description: 'Teacher with additional properties' }
];

examples.forEach(({ teacher, description }) => {
  const exampleDiv: HTMLDivElement = document.createElement('div');
  exampleDiv.style.margin = '10px 0';
  exampleDiv.style.padding = '8px';
  exampleDiv.style.backgroundColor = '#ffffff';
  exampleDiv.style.borderRadius = '4px';

  // Now printTeacher is definitely defined and available here
  const formatted = printTeacher(teacher.firstName, teacher.lastName);
  exampleDiv.innerHTML = `
    <strong>${description}:</strong><br>
    Input: "${teacher.firstName}", "${teacher.lastName}"<br>
    Output: <em>${formatted}</em>
  `;

  printTeacherSection.appendChild(exampleDiv);
});

container.appendChild(printTeacherSection);

// Append to document body
document.body.appendChild(container);
