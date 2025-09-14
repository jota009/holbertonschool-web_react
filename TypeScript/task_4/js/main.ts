// Load all namespace files in the correct order
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

console.log('=== Namespaces & Declaration Merging Demonstration ===');

// Create teachers with only the experience they have
const cppTeacher: Subjects.Teacher = {
  firstName: "Sarah",
  lastName: "Johnson",
  experienceTeachingC: 5
};

const reactTeacher: Subjects.Teacher = {
  firstName: "Mike",
  lastName: "Smith",
  experienceTeachingReact: 3
};

const javaTeacher: Subjects.Teacher = {
  firstName: "Anna",
  lastName: "Davis",
  experienceTeachingJava: 7
};

const inexperiencedTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe"
  // No specific subject experience properties
};

// Create subject instances
const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

console.log('\n=== C++ Subject Tests ===');
console.log('Requirements:', cpp.getRequirements());

// Test with experienced C++ teacher
cpp.setTeacher(cppTeacher);
console.log('With experienced teacher:', cpp.getAvailableTeacher());

// Test with inexperienced teacher
cpp.setTeacher(inexperiencedTeacher);
console.log('With inexperienced teacher:', cpp.getAvailableTeacher());

console.log('\n=== React Subject Tests ===');
console.log('Requirements:', react.getRequirements());

// Test with experienced React teacher
react.setTeacher(reactTeacher);
console.log('With experienced teacher:', react.getAvailableTeacher());

// Test with inexperienced teacher
react.setTeacher(inexperiencedTeacher);
console.log('With inexperienced teacher:', react.getAvailableTeacher());

console.log('\n=== Java Subject Tests ===');
console.log('Requirements:', java.getRequirements());

// Test with experienced Java teacher
java.setTeacher(javaTeacher);
console.log('With experienced teacher:', java.getAvailableTeacher());

// Test with inexperienced teacher
java.setTeacher(inexperiencedTeacher);
console.log('With inexperienced teacher:', java.getAvailableTeacher());
