import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import EditableText from "./components/EditableText/EditableText";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import Fields from "./components/Fields/Fields";
// import LogInModal from "./components/LogInModal/LogInModal";
import { FieldsContext } from "./contexts/fieldsContext";
import FieldsContextProvider from "./contexts/fieldsContext";

const App = () => {
  const [categoryText, setCategoryText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (selectedCategory === null) {
      return;
    } else {
      // console.log("editableTxt reading category: ", selectedCategory);
      let editableTxt = selectedCategory;
      let searchNumber =
        editableTxt.charAt(editableTxt.length - 2) +
        editableTxt.charAt(editableTxt.length - 1);
      console.log("search number: ", searchNumber);

      let indexLocation = searchNumber - 1;

      setCategoryText(indexLocation);
    }
  }, [selectedCategory]);

  return (
    <div className="contentWrapper">
      <header className="header">
        <Row>
          <Col lg="12" className="navBar gradientStyle">
            <NavBar />
            {/* <LogInModal /> */}
          </Col>
        </Row>
      </header>
      <FieldsContextProvider>
        <main>
          <Row
            style={{ minHeight: 'calc(100vh - 199px)', backgroundColor: "#f6f5f5" }}
          >
            <Col
              lg="6"
              sm="12"
              style={{
                paddingRight: "0px",
                height: "100%",
                backgroundColor: "#f6f5f5",
              }}
              className="columns"
            >
              <Categories
                setSelectedCategoryInApp={setSelectedCategory}
                setFadeInApp={setFadeIn}
              />
              <Fields
                selectedCategory={selectedCategory}
                fadeIn={fadeIn}
                categoryText={categoryText}
              />
            </Col>
            <Col
              lg="6"
              sm="12"
              style={{ paddingLeft: "0px" }}
              className="editText"
            >
              <EditableText categoryText={categoryText} />
            </Col>
          </Row>
        </main>
      </FieldsContextProvider>
      <footer>
        <Row>
          <Col
            lg="12"
            className=" gradientStyle footer"
          >
            <Footer />
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default App;
