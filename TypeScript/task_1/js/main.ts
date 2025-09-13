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

// Interface for the StudentClass constructor
// This defines what parameters are needed to create a new StudentClass instance
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the StudentClass itself
// This defines what methods and properties instances of StudentClass must have
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the StudentClass
// The class must satisfy both the constructor interface and the class interface
class StudentClass implements StudentClassInterface {
  // Properties that will hold the student's data
  firstName: string;
  lastName: string;

  // Constructor that matches our StudentClassConstructor interface
  // It takes two string parameters and initializes the instance properties
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method that returns a string indicating the student is working
  // This demonstrates how classes can encapsulate behavior, not just data
  workOnHomework(): string {
    return "Currently working";
  }

  // Method that returns the student's first name
  // This shows how classes can provide controlled access to their data
  displayName(): string {
    return this.firstName;
  }
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

// Create StudentClass instances - DEFINED EARLY so they're available throughout the file
const student1: StudentClassInterface = new StudentClass("Alice", "Johnson");
const student2: StudentClassInterface = new StudentClass("Bob", "Smith");
const student3: StudentClassInterface = new StudentClass("Carol", "Davis");

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

// Demonstrate StudentClass functionality
console.log('\n=== StudentClass Demonstration ===');

// Test all the methods defined in our interface using our pre-created student instances
console.log('Student 1 display name:', student1.displayName());
console.log('Student 1 work status:', student1.workOnHomework());
console.log('Student 2 display name:', student2.displayName());
console.log('Student 2 work status:', student2.workOnHomework());
console.log('Student 3 display name:', student3.displayName());
console.log('Student 3 work status:', student3.workOnHomework());

// Show how we can access properties directly (since they're public)
console.log('\n=== Student Object Properties ===');
console.log('Student 1 full info:', { firstName: student1.firstName, lastName: student1.lastName });
console.log('Student 2 full info:', { firstName: student2.firstName, lastName: student2.lastName });
console.log('Student 3 full info:', { firstName: student3.firstName, lastName: student3.lastName });

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

// Add visual demonstration for StudentClass
const studentSection: HTMLDivElement = document.createElement('div');
studentSection.style.border = '2px solid #28a745';
studentSection.style.margin = '20px 0';
studentSection.style.padding = '15px';
studentSection.style.backgroundColor = '#d4edda';
studentSection.style.borderRadius = '8px';

const studentSectionTitle: HTMLHeadingElement = document.createElement('h3');
studentSectionTitle.textContent = 'StudentClass Implementation Demonstration';
studentSectionTitle.style.color = '#155724';
studentSection.appendChild(studentSectionTitle);

// Create student instances to demonstrate - using our already created students
const demoStudents = [
  { student: student1, description: 'First student example' },
  { student: student2, description: 'Second student example' },
  { student: student3, description: 'Third student example' }
];

demoStudents.forEach(({ student, description }) => {
  const studentCard: HTMLDivElement = document.createElement('div');
  studentCard.style.margin = '10px 0';
  studentCard.style.padding = '12px';
  studentCard.style.backgroundColor = '#ffffff';
  studentCard.style.border = '1px solid #28a745';
  studentCard.style.borderRadius = '6px';

  studentCard.innerHTML = `
    <strong>${description}:</strong><br>
    <em>Constructor input:</em> "${student.firstName}", "${student.lastName}"<br>
    <em>displayName() returns:</em> ${student.displayName()}<br>
    <em>workOnHomework() returns:</em> "${student.workOnHomework()}"<br>
    <em>Direct property access:</em> firstName="${student.firstName}", lastName="${student.lastName}"
  `;

  studentSection.appendChild(studentCard);
});

// Add an explanation section about the interfaces
const explanationDiv: HTMLDivElement = document.createElement('div');
explanationDiv.style.margin = '15px 0';
explanationDiv.style.padding = '10px';
explanationDiv.style.backgroundColor = '#f8f9fa';
explanationDiv.style.borderLeft = '4px solid #28a745';
explanationDiv.style.fontSize = '14px';

explanationDiv.innerHTML = `
  <strong>Interface Design:</strong><br>
  • <em>StudentClassConstructor</em> - defines how to create instances<br>
  • <em>StudentClassInterface</em> - defines what instances can do<br>
  • The class <em>implements</em> the interface, ensuring type safety<br>
  • All methods and properties are guaranteed by TypeScript to exist
`;

studentSection.appendChild(explanationDiv);
container.appendChild(studentSection);

// Append to document body
document.body.appendChild(container);
