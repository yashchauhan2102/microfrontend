import faker from "faker";

// Original Code
/* const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

document.querySelector("#dev-cart").innerHTML = cartText; */

// Refactored Code
const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;

  //We can render it like this in React
  // ReactDom.render(<App/>, products)
};

// Situation 1 - running app in isolation/stand alone mode
// We are using our local index.html
// We are running this file in development
// Which definitely has an element with an id of 'dev-products'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

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
