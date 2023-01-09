function compareArrays(arr1, arr2) {
  
  return arr1.every((item, index) => item === arr2[index]) && arr1.length === arr2.length;  
  
}

function getUsersNamesInAgeRange(users, gender) {
  let result = 
  users.filter(item => item.gender === gender).map(item => item.age).reduce((acc, item, index, users) => {
    acc += item;
    if (index === users.length - 1) {
      return acc / users.length;
    }
    return acc;
  }, 0);
  return result;
}