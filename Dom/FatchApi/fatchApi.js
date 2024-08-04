//get call
async function logMovies() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const movies = await response.json();
  console.log(movies);
}

async function helper() {
  let options = {
    method: "POST",
    body: JSON.stringify({
      title: "Navanit",
      body: "solid ",
      userId: 2001,
      weight: 63,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  let Content = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  let response = Content.json();
  return response;
}

async function utility() {
  let ans = await helper();
  console.log(ans);
}
utility();
