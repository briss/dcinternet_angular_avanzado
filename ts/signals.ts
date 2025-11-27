import { computed, signal } from "@angular/core";

let x = 5;
let y = 6;
let z = x + y;

console.log("Suma: " + z);

x = 20;

console.log("Suma: " + z);


let xSignal = signal(5);
let ySignal = signal(6);

let zSignal = computed(() => xSignal() + ySignal());

console.log("Suma signal: " +  zSignal());

xSignal.set(20);

console.log("Suma signal: " +  zSignal());
