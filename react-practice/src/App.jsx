import { useState, useEffect } from "react";

// ข้อ 1: price เป็นตัวเลข และแก้ "ลองเท้า" เป็น "ถุงเท้า"
const products = [
  { id: 1, title: "เสื้อผ้า", price: 3000 },
  { id: 2, title: "กางเกง", price: 4000 },
  { id: 3, title: "เสื้อโปโล", price: 5000 },
  { id: 4, title: "ถุงเท้า", price: 7000 },
];

const Card = ({ title, price }) => {
  return (
    <div>
      <h1>สินค้าชื่อ: {title}</h1>
      <h2>{price}</h2>
    </div>
  );
};

// ข้อ 2: component Posts ตามตัวอย่าง
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data.slice(0, 5));
    };
    load();
  }, []);

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => p.title.includes(search));

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="ค้นหาสินค้า"
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filtered.map((p) => (
          <Card key={p.id} title={p.title} price={p.price} />
        ))}
      </div>

      {/* ข้อ 2: ใส่ Posts ใน App */}
      <Posts />
    </div>
  );
};

export default App;