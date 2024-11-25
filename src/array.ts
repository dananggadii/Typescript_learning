const fruits: string[] = ["Apple", "Mango", "Guava"];
const price: number[] = [20000, 30000, 50000];

console.info(fruits[2]);
console.info(price[1]);

//* Readonly array = Array yang tidak bisa diubah
const region: ReadonlyArray<string> = ["Indonesia", "Malaysia", "Singapore"];

console.info(region);
