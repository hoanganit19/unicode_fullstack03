import moment from "moment/moment";
import "./assets/style.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return `
  ${Header()}
  <h1>Học lập trình không khó</h1>
  <h2>${moment()}</h2>
  ${Footer()}
  `;
};
export default App;
