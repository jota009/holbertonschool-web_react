// React.ts - React subject implementation with declaration merging
// This file adds React-specific functionality and extends the Teacher interface

namespace Subjects {
  // Declaration merging: Add React teaching experience to Teacher interface
  // This further extends the Teacher interface, which now has properties from multiple files
  export interface Teacher {
    experienceTeachingReact?: number; // Optional property for React teaching experience
  }

  // React subject class extending the base Subject class
  // Provides React-specific requirements and teacher availability logic
  export class React extends Subject {
    // Method that returns the requirements for learning React
    // In a real application, this might return different requirements based on various factors
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    // Method that checks React teacher availability based on experience
    // Uses the merged Teacher interface property to make decisions
    getAvailableTeacher(): string {
      // Check if teacher exists and has React teaching experience
      if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
