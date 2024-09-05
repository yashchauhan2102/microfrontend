import { mount as mountProducts } from "productsApp/ProductsIndex";
import { mount as mountCart } from "cartApp/CartShow";

console.log("Container");

mountProducts(document.querySelector("#my-container-products"));
mountCart(document.querySelector("#my-container-cart"));
