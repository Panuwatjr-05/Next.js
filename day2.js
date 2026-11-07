const user ={name:"poom",age:21,city:"Bangkok"}
console.log(user.name)

const {name,age,city} = user
console.log(name)

const products = [
    { title: "เสื้อ", price: 300 },
    { title: "กางเกง", price: 500 },
    { title: "ถุงเท้า", price: 1000 }
];
const titles = products
    .filter((p) => p.price > 200)
    .map(({title,price}) => `${title} ราคา ${price} บาท`);
console.log(titles);  

