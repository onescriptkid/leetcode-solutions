/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {

  // energy required
  let energyRequired = 0
  for(let i = 0; i < energy.length; i++) {
    let e = energy[i]
    energyRequired+=e
  }

  // 1 4 3 2 => 10 energy
  let energyDiff = energyRequired + 1 - initialEnergy
  // console.log('energyRequired', energyRequired)
  // console.log('energyDiff', energyDiff)
  if(energyDiff < 0) energyDiff = 0

  // energy Training
  let energyTrainingRequired = energyDiff


  /////

  // 2 6 3 1
  // 2 5 1 -2
  let expRequiredPerStage = [] 
  // let currentExperience = initialExperience
  // let experienceRequired = 0
  let currExp = 0
  for(let i = 0; i < experience.length; i++) {
    let e = experience[i]
    expRequiredPerStage.push(experience[i] - currExp + 1)
    currExp+=experience[i]
    // experienceRequired
  }

  let highestExpRequired = undefined
  for(let i = 0; i < expRequiredPerStage.length; i++) {
    let e = expRequiredPerStage[i]
    if(highestExpRequired === undefined) {
      highestExpRequired = e
    } else if(e > highestExpRequired) {
      highestExpRequired = e
    }
  }
  // console.log('highestExpRequired', highestExpRequired)

  let experienceDiff = highestExpRequired - initialExperience
  // console.log('experienceDiff', experienceDiff)
  if(experienceDiff < 0) experienceDiff = 0

  return energyDiff + experienceDiff
};