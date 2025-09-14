namespace Subjects {
  // Declaration merging: Add Java teaching experience to Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Java subject class extending the base Subject class
  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
