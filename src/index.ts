// ? Generics
// sätt att skapa återanvändbarhet på datatyp-nivå

// detta är inte generics!
// argumenten kan vara antingen string, number eller boolean
// returvärdet kan vara antingen string, number, eller boolean
function demo(arg: string | number | boolean): string | number | boolean {
  return "Hello world";
}

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

function demoString(arg: string) {
  return arg;
}

function demoNumber(arg: number) {
  return arg;
}

function demoBoolean(arg: boolean) {
  return arg;
}

const response1 = demoString("hej");
const response2 = demoNumber(55);
const response3 = demoBoolean(true);

