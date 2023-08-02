import "./styles.css";
import About from "./About";
import Home from "./Home";
import Shipping from "./Shipping";
import FAQ from "./FAQ";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Navbar from "./Navbar";
import { Routes, Route, Link } from "react-router-dom";
import All from "./collection/All";
import Bags from "./collection/Bags";
import Drinkware from "./collection/Drinkware";
import Electronics from "./collection/Electronics";
import Footware from "./collection/Footware";
import Headware from "./collection/Headware";
import Hoodie from "./collection/Hoodie";
import Shirts from "./collection/Shirts";
import Jackets from "./collection/Jackets";
import Kids from "./collection/Kids";
import SideNav from "./collection/SideNav";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="terms&conditions" element={<Terms />} />
        <Route path="privacy&policy" element={<Privacy />} />
      </Route>
      <Route path="/search" element={<SideNav />}>
        <Route index element={<All />} />
        <Route exact path="/search/electronics" element={<Electronics />} />
        <Route exact path="/search/kids" element={<Kids />} />
        <Route exact path="/search/drinkware" element={<Drinkware />} />
        <Route exact path="/search/bags" element={<Bags />} />
        <Route exact path="/search/footware" element={<Footware />} />
        <Route exact path="/search/headware" element={<Headware />} />
        <Route exact path="/search/hoodie" element={<Hoodie />} />
        <Route exact path="/search/jackets" element={<Jackets />} />
        <Route exact path="/search/shirts" element={<Shirts />} />
      </Route>
    </Routes>
    // <Navbar />
  );
}
