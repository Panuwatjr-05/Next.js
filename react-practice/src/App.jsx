const Card = ({ title, price }) => {
  return (
    <div style={{gap: "10px", border:"1px solid gray",
     padding: "10px",width: "200px", margin: "10px",backgroundColor:"lightblue" }}>
      <h2>{title}</h2>
      <p>{price} บาท</p>
    </div>
  );
};

const products = [
  { id: 1, title: "เสื้อ", price: 300 },
  { id: 2, title: "กางเกง", price: 500 },
  { id: 3, title: "ถุงเท้า", price: 100 },
  { id: 4, title: "หมวก", price: 200 }, 
  { id: 5, title: "แหวน", price: 500 }, 
];

const App = () => {
  return (
    <div style={{display: "flex", flexWrap: "wrap", }}> 
      {products.map((p) =>(
      <Card key={p.id} title={p.title} price={p.price}/>
      ))}
    </div>
  )
}
export default App;
  
