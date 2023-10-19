// ? Generics
// sätt att skapa återanvändbarhet på datatyp-nivå

// detta är inte generics!
// argumenten kan vara antingen string, number eller boolean
// returvärdet kan vara antingen string, number, eller boolean
// function demo(arg: string | number | boolean): string | number | boolean {
//   return "Hello world";
// }

// det finns fler inbyggda generics i typescript
// exempel 1
// const numbers: number[] = [];
// const numbers: Array<number> = [];
// const names: Array<string> = [];
// const booleans: Array<boolean> = [];

// exempel 2
// const inputVehicle = document.querySelector("#vehicle-name");
// console.log(inputVehicle.value);

// const inputVehicle = document.querySelector("#vehicle-name") as HTMLInputElement;
// const inputVehicle = document.querySelector<HTMLInputElement>("#vehicle-name");
// const inputVehicle: HTMLInputElement = document.querySelector("#vehicle-name")!;
// utropstecken betyder
// if (inputVehicle !== null) {
// console.log(inputVehicle.value);
// }

// function demoString(arg: string) {
//   return arg;
// }

// function demoNumber(arg: number) {
//   return arg;
// }

// function demoBoolean(arg: boolean) {
//   return arg;
// }

// const response1 = demoString("hej");
// const response2 = demoNumber(55);
// const response3 = demoBoolean(true);

// vår första simpla generic
// function demo<T>(arg: T) {
//   return arg;
// }

// const value1 = demo<string>("Kalle");
// const value2 = demo<number>(77);
// const value3 = demo<boolean>(true);

// type inference (Michael gillar inte så mycket utan använder syntax ovan)
// const newValue1 = demo("Kalle");
// const newValue2 = demo(77);
// const newValue3 = demo(true);

// lite krångligare för vi behöver två argument till vår generic-funktion
// function merge<T>(x: any, y: any) {
//   return { ...x, ...y };
// }

// const result = merge({ name: "Michael" }, { lastName: "Gustavsson" });
// console.log(result);

// generic
// function merge<T, U>(x: T, y: U) {
//   return { ...x, ...y };
// }

// försök 1
// const merged = merge(
//   { name: "Volvo" },
//   { features: ["navigator", "heated seat"] }
// );
// console.log(merged);

// type constraint
// function merge<T extends object, U extends object>(x: T, y: U) {
//   return { ...x, ...y };
// }

// // försök 2
// const merged = merge({ name: "Volvo" }, 25);
// console.log(merged);

// ? Generics with interface

interface Vehicle {
  name: string;
  numberOfGears: number;
}

interface Truck {
  name: string;
  numberOfGears: number;
  tara: number;
}

// function addVehicle<T>(vehicle: T): T {
//   return vehicle;
// }

function addVehicle<T extends Vehicle>(vehicle: T): T {
  // Anrop till mongo Atlas-DB
  // Anrop till MSSQL Server
  return vehicle;
}

const addedVehicle = addVehicle<Vehicle>({
  name: "Volvo V90",
  numberOfGears: 6,
});

function createArray<T = Vehicle>(): T[] {
  return [];
}

const arr1 = createArray<string>();
const arr2 = createArray<number>();
const arr3 = createArray<Vehicle>();
const arr4 = createArray();

// funktion som tar typen som vi skickar till argumentlistan
// men också vilken typ vi ska returnera

function getData<T extends string, R = Vehicle>(query: T): R[] {
  return [];
}

const vehicles = getData("SELECT * FROM dbo.Vehicles");
const trucks = getData<string, Truck>("SELECT * FROM dbo.Vehicles");

// ? Generics with classes

interface Movie {
  title: string;
  director: string;
  length: number;
}

interface Music {
  title: string;
  artist: string;
}

class MoviePlaylist {
  public movies: Movie[] = [];
}

class MusicPlaylist {
  public list: Music[] = [];
}

// bättre att skapa generell klass Playlist

class Playlist<T> {
  public list: T[] = [];
  public add(item: T) {
    this.list.push(item);
  }
}

const musicList = new Playlist<Music>();
const movieList = new Playlist<Movie>();

const arrowDemo = <T>(arg: T): T => {
  return arg;
};
