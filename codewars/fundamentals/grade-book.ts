// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(a: number, b: number, c: number): string {
    const average = (a + b + c) / 3;
    if (average < 60) {
        return 'F'
    } else if (average >= 60 && average < 70) {
        return 'D'
    } else if (average >= 70 && average < 80) {
        return 'C'
    } else if (average >= 80 && average < 90) {
        return 'B'
    }
    return 'A'
}

const result = getGrade(90, 90,90)
console.log(result)


// variations

// function getGrade(a: number, b: number, c: number): string {
//   const average = (a + b + c) / 3;
//
//   if (average >= 90) return 'A';
//   if (average >= 80) return 'B';
//   if (average >= 70) return 'C';
//   if (average >= 60) return 'D';
//   return 'F';
// }

// export function getGrade(a: number, b: number, c: number): string {
//   const averageRating = (a+b+c)/3
//
//   switch (true) {
//     case averageRating >= 90:
//       return 'A'
//     case averageRating >= 80:
//       return 'B'
//     case averageRating >= 70:
//       return 'C'
//     case averageRating >= 60:
//       return 'D'
//     default:
//       return 'F'
//   }
// }
