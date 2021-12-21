//library imports
import { Modal, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

//component imports
import TableGlacier from "../Filterfunktionen/TableYearsGlaciers";
import FilterYears from "../Filterfunktionen/FilterYear";

//importerar glaciärdata från API och använder useState för att kunna "set" datan beroende
//på värdet (år) som ska filtreras till/från och visa den valda datan
const ModalFilterYearsGlaciers = (props) => {
  // const [GlacierData, setGlacierData] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);

  useEffect(() => {
    setFiltereddata(props.data);
  }, []);

  //hanterar imput från användaren och genererar baserat på glaciärdatan data till/från valda år
  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...props.data];
    if (YearFrom != "" && YearTo != "") {
      filtereddata = filtereddata.filter(
        (glacier) => glacier.Year >= YearFrom && glacier.Year <= YearTo
      );
    }

    //funktion kopplad till radioknappar som genererar åren lågt till högt/högt till lågt beroende på vilken knapp som väljs
    if (Order === "LTH") {
      filtereddata.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (Order === "HTL") {
      filtereddata.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }

    setFiltereddata(filtereddata);
  };

  return (
    <Modal
      //"property spread notation" refererar till alla objekt i glaciär-data
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{}}>
          Sök och jämför glaciärdata mellan 1945-2014
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <FilterYears
            onYearFilter={handleYearFilter}
            style={{ marginBottom: "3em" }}
          />
          <div style={{ marginTop: "3em" }}>
            <TableGlacier
              myFilteredDataGlacier={filtereddata}
              myDataGlacier={props.data}
            />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ModalFilterYearsGlaciers;
