import React, { useState } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import EditableText from "./components/EditableText/EditableText";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import Fields from "./components/Fields/Fields";
import LogInModal from "./components/LogInModal/LogInModal";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [fadeIn, setFadeIn] = useState(false);
  return (
    <div>
      <header className="header">
        <Row>
          <Col lg="12" className="navBar">
            <NavBar />
            {/* <LogInModal /> */}
          </Col>
        </Row>
      </header>
      <main>
        <Row className="rows">
          <Col lg="6" sm="12"style={{ paddingRight: "0px" }} className="editText">
            <EditableText />
          </Col>
<<<<<<< HEAD
          <Col lg="6" sm="12" style={{ paddingLeft: "0px" }} className="columns">
            <Categories setSelectedCategoryInApp={setSelectedCategory} />
            <Fields selectedCategory={selectedCategory} />
=======
          <Col style={{ paddingLeft: "0px" }} className="columns">
            <Categories
              setSelectedCategoryInApp={setSelectedCategory}
              setFadeInApp={setFadeIn}
            />
            <Fields selectedCategory={selectedCategory} fadeIn={fadeIn} />
>>>>>>> ec098433f38328a984b0bbafdf2f822c67a76118
          </Col>
        </Row>
      </main>
      <footer>
        <Row>
          <Col lg="12" className="footer">
            <Footer />
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default App;
