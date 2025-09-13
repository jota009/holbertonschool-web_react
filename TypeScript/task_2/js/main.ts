// Advanced Types Part 1: Director and Teacher Interfaces with Union Types

// Define the DirectorInterface with the required methods
// This interface establishes what capabilities a Director should have
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface with the required methods
// This interface establishes what capabilities a Teacher should have
// Note: Same method names as Director but different expected behaviors
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implementation of the Director class
// Directors have more flexibility and privileges in their work arrangements
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implementation of the Teacher class
// Teachers have more restrictions but different responsibilities
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Factory function that demonstrates Union Types and Type Guards
// This function can accept either a number or string salary parameter
// and returns either a Director or Teacher instance based on business logic
function createEmployee(salary: number | string): Director | Teacher {
  // Type guard: check if salary is a number and apply business logic
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    // If salary is a string or a number >= 500, create a Director
    return new Director();
  }
}

// Demonstrate the factory function with different inputs
console.log('=== Employee Creation Demonstration ===');

// Test case 1: Low numeric salary should create a Teacher
const employee1 = createEmployee(200);
console.log('createEmployee(200):', employee1.constructor.name);
console.log('Work from home policy:', employee1.workFromHome());
console.log('Coffee break policy:', employee1.getCoffeeBreak());

// Test case 2: High numeric salary should create a Director
const employee2 = createEmployee(1000);
console.log('\ncreateEmployee(1000):', employee2.constructor.name);
console.log('Work from home policy:', employee2.workFromHome());
console.log('Coffee break policy:', employee2.getCoffeeBreak());

// Test case 3: String salary should create a Director
const employee3 = createEmployee('$500');
console.log('\ncreateEmployee("$500"):', employee3.constructor.name);
console.log('Work from home policy:', employee3.workFromHome());
console.log('Coffee break policy:', employee3.getCoffeeBreak());

// Additional demonstration: show different task methods
console.log('\n=== Task-Specific Methods ===');

// Type assertion: tell TypeScript we know the specific type
// This allows access to type-specific methods
if (employee1 instanceof Teacher) {
  console.log('Teacher tasks:', employee1.workTeacherTasks());
}

if (employee2 instanceof Director) {
  console.log('Director tasks:', employee2.workDirectorTasks());
}

// Create HTML demonstration showing the employee system
const container: HTMLDivElement = document.createElement('div');
container.style.fontFamily = 'Arial, sans-serif';
container.style.margin = '20px';

// Create a section for employee creation demonstration
const employeeSection: HTMLDivElement = document.createElement('div');
employeeSection.style.border = '2px solid #6f42c1';
employeeSection.style.margin = '20px 0';
employeeSection.style.padding = '15px';
employeeSection.style.backgroundColor = '#f8f9ff';
employeeSection.style.borderRadius = '8px';

const employeeSectionTitle: HTMLHeadingElement = document.createElement('h3');
employeeSectionTitle.textContent = 'Advanced Types: Employee Creation System';
employeeSectionTitle.style.color = '#6f42c1';
employeeSection.appendChild(employeeSectionTitle);

// Function to create employee demonstration cards
function createEmployeeCard(salary: number | string, employee: Director | Teacher): HTMLDivElement {
  const card: HTMLDivElement = document.createElement('div');
  card.style.margin = '10px 0';
  card.style.padding = '12px';
  card.style.backgroundColor = '#ffffff';
  card.style.border = '1px solid #6f42c1';
  card.style.borderRadius = '6px';

  const employeeType = employee.constructor.name;
  const isDirector = employee instanceof Director;

  card.innerHTML = `
    <strong>Input:</strong> createEmployee(${typeof salary === 'string' ? '"' + salary + '"' : salary})<br>
    <strong>Result:</strong> ${employeeType}<br>
    <strong>Work from home:</strong> ${employee.workFromHome()}<br>
    <strong>Coffee break:</strong> ${employee.getCoffeeBreak()}<br>
    <strong>Tasks:</strong> ${isDirector ? (employee as Director).workDirectorTasks() : (employee as Teacher).workTeacherTasks()}
  `;

  return card;
}

// Create cards for each test case
employeeSection.appendChild(createEmployeeCard(200, employee1));
employeeSection.appendChild(createEmployeeCard(1000, employee2));
employeeSection.appendChild(createEmployeeCard('$500', employee3));

// Add explanation of the advanced types concepts
const conceptsDiv: HTMLDivElement = document.createElement('div');
conceptsDiv.style.margin = '15px 0';
conceptsDiv.style.padding = '10px';
conceptsDiv.style.backgroundColor = '#f8f9fa';
conceptsDiv.style.borderLeft = '4px solid #6f42c1';
conceptsDiv.style.fontSize = '14px';

conceptsDiv.innerHTML = `
  <strong>Advanced TypeScript Concepts Demonstrated:</strong><br>
  • <em>Union Types:</em> salary parameter accepts number | string<br>
  • <em>Type Guards:</em> typeof checks determine runtime behavior<br>
  • <em>Polymorphism:</em> Same interface methods, different implementations<br>
  • <em>Factory Pattern:</em> createEmployee function creates appropriate type<br>
  • <em>Type Assertions:</em> as Director/Teacher for accessing specific methods
`;

employeeSection.appendChild(conceptsDiv);
container.appendChild(employeeSection);

// Append to document body
document.body.appendChild(container);
