/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {

  // 1 1 0 0    0 1 0 1
  // [1,1,1,0,0,1], sandwiches = 
  // [1,0,0,0,1,1]
  
  // 1 1 1 0 0 1   stud
  // 1 0 0 0 1 1   sand
  
  // 1 1 0 0 1   stud
  // 0 0 0 1 1   sand

  let i = 0;
  while(sandwiches.length > 0) {
    let stud = students[0]
    let sand = sandwiches[0]
    // console.log('stud', stud, 'sand', sand)

    if(stud === sand) {
      students.shift()
      sandwiches.shift()
    } else {
      let j = 0
      while(students[0] !== sandwiches[0]) {
        // console.log('  j', j, 'stud', students, 'sand', sandwiches)
        students.push(students.shift())
        if(j === students.length) break;
        j++
      }
      if(j === students.length) {
        // console.log('  out j', j, 'stud', students, 'sand', sandwiches)
        return sandwiches.length
      }
    }
  }
  return 0
};