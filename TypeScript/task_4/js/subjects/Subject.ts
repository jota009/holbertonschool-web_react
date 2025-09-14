// Subject.ts - Base class for all subject types
// This file extends the Subjects namespace and provides the foundation class

namespace Subjects {
  // Base Subject class that all specific subjects will extend
  // This class manages the teacher assignment and provides common functionality
  class Subject {
    // Teacher instance that will be assigned to teach this subject
    // Using definite assignment assertion (!) to tell TypeScript this will be assigned
    teacher!: Teacher;

    // Setter method to assign a teacher to this subject
    // This method allows changing the teacher for a subject instance
    // The parameter must implement the Teacher interface (with any merged properties)
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
