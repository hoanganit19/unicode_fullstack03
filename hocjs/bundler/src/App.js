import moment from "moment/moment";
import "./assets/style.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import config from "./config.json";
const { SERVER_API, PAGE_LIMIT } = config;
console.log(process.env.GOOGLE_API_KEY);
console.log(process.env.GITHUB_API_KEY);
console.log(process.env.NODE_ENV);
const App = () => {
  // const pathname = window.location.pathname;
  // let outlet;
  // switch (pathname) {
  //   case "/": {
  //     outlet = Home;
  //     break;
  //   }

  //   case "/gioi-thieu": {
  //     outlet = About;
  //     break;
  //   }

  //   case "/san-pham": {
  //     outlet = Products;
  //     break;
  //   }

  //   case "/lien-he": {
  //     outlet = Contact;
  //     break;
  //   }
  // }

  return `
  ${Header()}
  <h1>Hello</h1>
  ${Footer()}
  `;
};
export default App;
