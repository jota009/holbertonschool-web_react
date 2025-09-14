// Namespace declaration: This creates a container for related types and classes
// All subject-related interfaces and classes will live in this namespace
namespace Subjects {
  // Base Teacher interface with core properties
  // This interface will be extended through declaration merging in other files
  interface Teacher {
    firstName: string;
    lastName: string;
    // Additional properties will be added through declaration merging:
    // - experienceTeachingC? (added in Cpp.ts)
    // - experienceTeachingReact? (added in React.ts)
    // - experienceTeachingJava? (added in Java.ts)
  }
}
