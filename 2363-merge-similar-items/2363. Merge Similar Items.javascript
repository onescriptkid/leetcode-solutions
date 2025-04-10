/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {

  let valueToWeight = {}

  for(let i = 0; i < items1.length; i++) {
    let value = items1[i][0]
    let weight = items1[i][1]
    if(valueToWeight[value] === undefined) {
      valueToWeight[value] = weight
    } else {
      valueToWeight[value]+=weight
    }
  } 
  for(let i = 0; i < items2.length; i++) {
    let value = items2[i][0]
    let weight = items2[i][1]
    if(valueToWeight[value] === undefined) {
      valueToWeight[value] = weight
    } else {
      valueToWeight[value]+=weight
    }
  } 

  let values = Object.keys(valueToWeight)
  let out = []
  for(let value of values) {
    let weight =  valueToWeight[value]
    out.push([Number(value), weight])
  }
  // console.log(out)
  return out
};