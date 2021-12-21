import { Modal, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import Table from "../Filterfunktionen/TableYears";
import FilterYears from "../Filterfunktionen/FilterYear";

// FilterModalen för Co2 och alla subdata för co2
const ModalFilterYears = (props) => {
  const [filtereddata, setFiltereddata] = useState([]);

  //får datan från co2/gasflaring/cement i props.data
  useEffect(() => {
    setFiltereddata(props.data);
  }, []);

  //Funktion som hanterar de values som användaren fyller i i FilterYears.
  // Skapar en ny variabel som är en kopia på API-arrayen för att kunna modifiera denna
  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...props.data];
    if (YearFrom != "" && YearTo != "") {
      filtereddata = filtereddata.filter(
        (co2) => co2.Year >= YearFrom && co2.Year <= YearTo
      );
    }

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
          Sök och jämför Co2-data från 1751-2014
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
            <Table myFilteredData={filtereddata} myData={props.data} />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ModalFilterYears;
