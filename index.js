// Code your solution here
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