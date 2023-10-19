"use strict";
// ? Generics
// sätt att skapa återanvändbarhet på datatyp-nivå
// function addVehicle<T>(vehicle: T): T {
//   return vehicle;
// }
function addVehicle(vehicle) {
    // Anrop till mongo Atlas-DB
    // Anrop till MSSQL Server
    return vehicle;
}
const addedVehicle = addVehicle({
    name: "Volvo V90",
    numberOfGears: 6,
});
function createArray() {
    return [];
}
const arr1 = createArray();
const arr2 = createArray();
const arr3 = createArray();
const arr4 = createArray();
// funktion som tar typen som vi skickar till argumentlistan
// men också vilken typ vi ska returnera
function getData(query) {
    return [];
}
const vehicles = getData("SELECT * FROM dbo.Vehicles");
const trucks = getData("SELECT * FROM dbo.Vehicles");
class MoviePlaylist {
    constructor() {
        this.movies = [];
    }
}
class MusicPlaylist {
    constructor() {
        this.list = [];
    }
}
// bättre att skapa generell klass Playlist
class Playlist {
    constructor() {
        this.list = [];
    }
    add(item) {
        this.list.push(item);
    }
}
const musicList = new Playlist();
const movieList = new Playlist();
const arrowDemo = (arg) => {
    return arg;
};
