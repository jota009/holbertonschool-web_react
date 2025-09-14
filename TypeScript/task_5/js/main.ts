// Brand Convention & Nominal Typing Implementation
// This demonstrates how to create types that are structurally identical but logically distinct

// Brand Convention: Use unique symbols to create nominal types
// These symbols act as "brands" that make the types incompatible despite identical structure
declare const __brand_major: unique symbol;
declare const __brand_minor: unique symbol;

// MajorCredits interface with brand property
// The brand property makes this type distinct from MinorCredits even though both have 'credits: number'
interface MajorCredits {
  credits: number;
  __brand: typeof __brand_major; // This brand makes MajorCredits unique
}

// MinorCredits interface with brand property
// Even though it has the same structure as MajorCredits, the brand makes it a different type
interface MinorCredits {
  credits: number;
  __brand: typeof __brand_minor; // This brand makes MinorCredits unique
}

// Function to sum major credits
// This function can ONLY accept MajorCredits types, not MinorCredits or plain numbers
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  // Return a properly branded MajorCredits object
  return {
    credits: subject1.credits + subject2.credits,
    __brand: __brand_major
  };
}

// Function to sum minor credits
// This function can ONLY accept MinorCredits types, not MajorCredits or plain numbers
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  // Return a properly branded MinorCredits object
  return {
    credits: subject1.credits + subject2.credits,
    __brand: __brand_minor
  };
}

// Helper functions to create branded credit objects safely
// These functions act as "factories" to create properly branded credit objects
function createMajorCredits(credits: number): MajorCredits {
  return {
    credits: credits,
    __brand: __brand_major
  };
}

function createMinorCredits(credits: number): MinorCredits {
  return {
    credits: credits,
    __brand: __brand_minor
  };
}

// Demonstration of Brand Convention & Nominal Typing
console.log('=== Brand Convention & Nominal Typing Demonstration ===');

// Create major credit subjects
const mathMajor = createMajorCredits(4);
const scienceMajor = createMajorCredits(3);

// Create minor credit subjects
const artMinor = createMinorCredits(2);
const musicMinor = createMinorCredits(1);

// Test major credits summation
const totalMajorCredits = sumMajorCredits(mathMajor, scienceMajor);
console.log('Major Credits:');
console.log('Math (4) + Science (3) =', totalMajorCredits.credits, 'major credits');

// Test minor credits summation
const totalMinorCredits = sumMinorCredits(artMinor, musicMinor);
console.log('\nMinor Credits:');
console.log('Art (2) + Music (1) =', totalMinorCredits.credits, 'minor credits');

// Demonstrate type safety - these would cause TypeScript errors if uncommented:
// sumMajorCredits(mathMajor, artMinor); // Error: MinorCredits not assignable to MajorCredits
// sumMinorCredits(scienceMajor, musicMinor); // Error: MajorCredits not assignable to MinorCredits
// sumMajorCredits({credits: 3}, mathMajor); // Error: Plain object missing __brand property

console.log('\n=== Type Safety Benefits ===');
console.log('✓ Major credits can only be summed with major credits');
console.log('✓ Minor credits can only be summed with minor credits');
console.log('✓ Plain numbers cannot accidentally be used as credits');
console.log('✓ Compile-time prevention of credit type mixing');

// Visual demonstration of brand convention
const container: HTMLDivElement = document.createElement('div');
container.style.fontFamily = 'Arial, sans-serif';
container.style.margin = '20px';

const brandSection: HTMLDivElement = document.createElement('div');
brandSection.style.border = '2px solid #e83e8c';
brandSection.style.margin = '20px 0';
brandSection.style.padding = '15px';
brandSection.style.backgroundColor = '#f8d7da';
brandSection.style.borderRadius = '8px';

const brandSectionTitle: HTMLHeadingElement = document.createElement('h3');
brandSectionTitle.textContent = 'Brand Convention & Nominal Typing';
brandSectionTitle.style.color = '#721c24';
brandSection.appendChild(brandSectionTitle);

// Create demonstration cards for credit operations
function createCreditCard(title: string, operation: string, result: number, creditType: string): HTMLDivElement {
  const card: HTMLDivElement = document.createElement('div');
  card.style.margin = '10px 0';
  card.style.padding = '12px';
  card.style.backgroundColor = '#ffffff';
  card.style.border = '1px solid #e83e8c';
  card.style.borderRadius = '6px';

  card.innerHTML = `
    <strong>${title}:</strong><br>
    <strong>Operation:</strong> ${operation}<br>
    <strong>Result:</strong> ${result} ${creditType}<br>
    <strong>Type Safety:</strong> Only ${creditType} can be summed together
  `;

  return card;
}

// Add demonstration cards
brandSection.appendChild(createCreditCard(
  'Major Credits Sum',
  'Math (4) + Science (3)',
  totalMajorCredits.credits,
  'major credits'
));

brandSection.appendChild(createCreditCard(
  'Minor Credits Sum',
  'Art (2) + Music (1)',
  totalMinorCredits.credits,
  'minor credits'
));

// Add explanation of brand convention concepts
const brandExplanationDiv: HTMLDivElement = document.createElement('div');
brandExplanationDiv.style.margin = '15px 0';
brandExplanationDiv.style.padding = '10px';
brandExplanationDiv.style.backgroundColor = '#f8f9fa';
brandExplanationDiv.style.borderLeft = '4px solid #e83e8c';
brandExplanationDiv.style.fontSize = '14px';

brandExplanationDiv.innerHTML = `
  <strong>Brand Convention Features:</strong><br>
  • <em>Unique Symbols:</em> __brand properties use unique symbols for distinction<br>
  • <em>Nominal Typing:</em> Types differ by name/brand, not just structure<br>
  • <em>Type Safety:</em> Prevents accidental mixing of similar but distinct types<br>
  • <em>Compile-time Protection:</em> Errors caught before runtime<br>
  • <em>Factory Functions:</em> Safe creation of branded objects<br>
  • <em>Business Logic:</em> Types enforce real-world business rules
`;

brandSection.appendChild(brandExplanationDiv);

// Add a section showing what errors would occur
const errorExampleCard: HTMLDivElement = document.createElement('div');
errorExampleCard.style.margin = '10px 0';
errorExampleCard.style.padding = '12px';
errorExampleCard.style.backgroundColor = '#f8d7da';
errorExampleCard.style.border = '1px solid #dc3545';
errorExampleCard.style.borderRadius = '6px';

errorExampleCard.innerHTML = `
  <strong>Prevented Errors (compile-time):</strong><br>
  <em>sumMajorCredits(major, minor)</em> → TypeScript Error<br>
  <em>sumMinorCredits(plain_object, minor)</em> → TypeScript Error<br>
  <strong>Benefit:</strong> Business logic violations impossible at runtime
`;

brandSection.appendChild(errorExampleCard);

container.appendChild(brandSection);

// Append to document body
document.body.appendChild(container);
