const getUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const title = data.slice(0, 5).map(({title})=> title);
  console.log(title);
};

getUser();

