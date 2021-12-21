import { Modal, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import TableTemp from "../Filterfunktionen/TableYearsTemp";
import FilterYears from "../Filterfunktionen/FilterYear";

// FilterModalen för Global Temp
//Använder useState för att kunna "set" datan beroende
//på värdet (år) som ska filtreras till/från och visa den valda datan
const ModalFilterYearsTemp = (props) => {
  const [filtereddata, setFiltereddata] = useState([]);

  //får datan från global temp i props.data
  useEffect(() => {
    setFiltereddata(props.data);
  }, []);

  // Funktion som hanterar de values som användaren fyller i i FilterYears.
  // Skapar en ny variabel som är en kopia på API-arrayen för att kunna modifiera denna
  // hanterar input från användaren och genererar baserat på glaciärdatan data till/från valda år
  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...props.data];
    if (YearFrom != "" && YearTo != "") {
      filtereddata = filtereddata.filter(
        (temp) => temp.Year >= YearFrom && temp.Year <= YearTo
      );
    }

    //funktion kopplad till radioknappar som genererar åren lågt till högt/högt
    // till lågt beroende på vilken knapp som väljs
    if (Order === "LTH") {
      filtereddata.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (Order === "HTL") {
      filtereddata.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }
    // Uppdaterar filtereddata utefter de modifieringar som gjorts
    setFiltereddata(filtereddata);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{}}>
          Sök och jämför temperaturdata mellan 1880-2016
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {/* Skickar funktionen handleYearFilter så att
          FilterYears kommer åt denna vid knappklick */}
          <FilterYears
            onYearFilter={handleYearFilter}
            style={{ marginBottom: "3em" }}
          />
          <div style={{ marginTop: "3em" }}>
            {/* Skickar både filtereddata samt ursrpungliga datan
            för att kunna ge felmeddelanden om datan inte finns */}
            <TableTemp myFilteredData={filtereddata} myData={props.data} />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ModalFilterYearsTemp;
