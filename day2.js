const products = [
    { title: "เสื้อ", price: 300 },
    { title: "กางเกง", price: 500 },
    { title: "ถุงเท้า", price: 1000 }
];
const titles = products
    .filter((p) => p.price > 200)
    .map((n) => `${n.title} ราคา ${n.price} บาท`);
console.log(titles);   // ["เสื้อ", "กางเกง"]

const me = { name: "ภูมิ", age: 21, city: "Pisanulok" }
console.log(me.name);