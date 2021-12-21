import { Modal, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import TableOceanLevels from "../Filterfunktionen/TableYearsOceanLevels";
import FilterYears from "../Filterfunktionen/FilterYear";

// FilterModalen för Ocean Levels
//Använder useState för att kunna "set" datan beroende
//på värdet (år) som ska filtreras till/från och visa den valda datan
const ModalFilterYearsOceanLev = (props) => {
  const [filtereddata, setFiltereddata] = useState([]);

  //får datan från ocean levels i props.data
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
        (oceLev) => oceLev.Time >= YearFrom && oceLev.Time <= YearTo
      );
    }

    //funktion kopplad till radioknappar som genererar åren lågt till högt/högt
    // till lågt beroende på vilken knapp som väljs
    if (Order === "LTH") {
      filtereddata.sort((a, b) => parseInt(a.Time) - parseInt(b.Time));
    } else if (Order === "HTL") {
      filtereddata.sort((a, b) => parseInt(b.Time) - parseInt(a.Time));
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
          Sök och jämför havsnivåökning/minskning mellan 1880-2013
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
            <TableOceanLevels
              myFilteredData={filtereddata}
              myData={props.data}
            />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ModalFilterYearsOceanLev;
