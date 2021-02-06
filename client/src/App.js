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
  return (
    <div>
      <header className="header">
        <Row>
          <Col className="navBar">
            <NavBar />
          </Col>
        </Row>
      </header>
      <main>
        <Row className="rows">
          <Col style={{ paddingRight: "0px" }} className="editText">
            <EditableText />
          </Col>
          <Col style={{ paddingLeft: "0px" }} className="columns">
            <Categories setSelectedCategoryInApp={setSelectedCategory} />
            <Fields selectedCategory={selectedCategory} />
          </Col>
        </Row>
      </main>
      <footer>
        <Row>
          <Col className="footer">
            <Footer />
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default App;
