//externa importer
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Slider } from "@mui/material";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

//interna importer
import hav from "../Images/4-hav.png";
import Menu from "./menu";
import Logo from "./Logo";
import ModalOcean1 from "./ModalOcean1";
import ModalOcean2 from "./ModalOcean2";
import Posts from "./search";
import EkoText from "./ekoText";

const OceanLevels = () => {
  const initialSize = 400;
  const [ballSize, setBallSize] = useState(initialSize);
  const [fetchedData, setFetchedData] = useState([]);
  const [year, setYear] = useState(1955);
  const [modalOcean1, setModalOcean1] = useState(false);
  const [modalOcean2, setModalOcean2] = useState(false);
  const [modalFootprintShow, setModalFootprintShow] = useState(false);

  // Bara att byta ut .json/co2.json till HTTPS
  useEffect(() => {
    axios
      .get("./json/sea.json")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
    setAllData(fetchedData);
    setFilteredData(fetchedData);
  }, []);

  // Uppdaterar årtal i year
  // uppdaterar bollen storlek
  const handleChange = (e) => {
    setYear(e.target.value);
    setBallSize(e.target.value * 0.2);
  };

  //matchar tidslinjen med API:t
  // och skriver ut detta
  const match = fetchedData.map((n) => {
    const yearAsString = n.Time.slice(0, 4);
    const yearAsInt = parseInt(yearAsString);
    if (yearAsInt === year) {
      console.log("Året matchar!!");

      return (
        <>
          <Container className="printData">
            <Row>
              <Col>
                <p className="fw-bold mb-0">År</p>
                <p>{n.Time.slice(0, 4)}</p>
                <p className="fw-bold mb-0">
                  Havsnivå{" "}
                  <sup>
                    <i
                      className="fa fa-question-circle"
                      variant="primary"
                      onClick={() => setModalOcean1(true)}
                    ></i>
                  </sup>
                </p>
                <ModalOcean1
                  show={modalOcean1}
                  onHide={() => setModalOcean1(false)}
                />
                <p>{n.GMSL} mm</p>
                <p className="fw-bold mb-0">
                  Osäkerhet i mätningen{" "}
                  <sup>
                    <i
                      className="fa fa-question-circle"
                      variant="primary"
                      onClick={() => setModalOcean2(true)}
                    ></i>
                  </sup>
                </p>
                <ModalOcean2
                  show={modalOcean2}
                  onHide={() => setModalOcean2(false)}
                />
                <p>{n["GMSL uncertainty"]} mm</p>
              </Col>
            </Row>
          </Container>
        </>
      );
    } else {
      return null;
    }
  });

  // Dessa variabler delar upp datumet till enbart året
  // Number grejen gör om till integer, kolla Johans mail
  const firstYear =
    fetchedData && fetchedData.length > 0
      ? Number(fetchedData[0].Time.slice(0, 4))
      : 0;

  const lastYear =
    fetchedData && fetchedData.length > 0
      ? Number(fetchedData[fetchedData.length - 1].Time.slice(0, 4))
      : 0;

  /*nedan är början till sökfunktion (primärt för mobil, 
      men också för användare med motoriska svårigheter*/
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (event) => {};

  // Innehållet på sidan med bild, text, tidlinje
  return (
    <>
      <Container fluid>
        <Row className="logo-small ">
          <Logo />
        </Row>
        <Row className="justify-content-center">
          <div className="smaller-menu mt-3 test-menu">
            <Menu />
          </div>
        </Row>
        <Row>
          <Col sm={6}>
            <Container className="symbolHolder d-none d-sm-block">
              <div className=" d-flex justify-content-center align-items-center">
                <img
                  src={hav}
                  style={{ "--size": ballSize }}
                  className="ball"
                  alt="ball"
                />
              </div>
            </Container>
          </Col>
          <Col sm={6} className="containerData ">
            <h1>Havsnivå</h1>
            <p>
              Klimatförändringar gör så att jordens temperatur ökar. Detta leder
              till att glaciären och inlandsisen smälter. När isen smälter, höjs
              havsnivån.
              <EkoText />
            </p>
            <div className="d-none d-sm-block"> {match}</div>
          </Col>
        </Row>
        <Posts />
        <Slider
          aria-label="Always visible"
          defaultValue={year}
          min={firstYear}
          max={lastYear}
          step={1}
          marks={false}
          valueLabelDisplay="on"
          onChange={handleChange}
        />
        <div className="d-sm-none"> {match}</div>
      </Container>
    </>
  );
};
export default OceanLevels;
