
function demo<T>(arg: T): T {
  return arg
}
// komma efter typen för att säga att det ska vara en generic
const vehicleList = <T,>(arg: T): T => {return arg}