import faker from "faker";

// Original Code
/* let products = "";
for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}
document.querySelector("#dev-products").innerHTML = products; */

// Refactored Code
const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;

  //We can render it like this in React
  // ReactDom.render(<App/>, products)
};

// Situation 1 - running app in isolation/stand alone mode
// We are using our local index.html
// We are running this file in development
// Which definitely has an element with an id of 'dev-products'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // Assuming our container does not have an element with id 'dev-products'
  if (el) {
    mount(el);
  }
}

// Situation 2 - running app as a remote in Container app
// We are running this file in development or production
// Running through Container app through its index.html file
// No guarantee that an element with an id 'dev-products' exists
// We do not want to try to immediately render our app
export { mount };
