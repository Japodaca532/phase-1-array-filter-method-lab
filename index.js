// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const findMatching = (names, string) => {
    return names.filter(names => names.toUpperCase() === string.toUpperCase());    
}



function fuzzyMatch(names,string){
    const driverMatch = [];
    for (const drivers of names){
        if(string=names){
            driverMatch.push(drivers)
        }
    } return driverMatch
}
function matchName(objects, string){
    const driverInfo = [];
    for (const drivers of objects){
        if (string=drivers){
            driverInfo.push(objects)
        }
    } return driverInfo
}