import { Modal, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import Table from "../Filterfunktionen/TableYears";
import FilterYears from "../Filterfunktionen/FilterYear";

const ModalFilterYears = (props) => {
  const [CO2Emission, setCO2Emission] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);

  useEffect(() => {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCO2Emission(data);
        setFiltereddata(data);
      });
  }, []);

  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...CO2Emission];
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
          <FilterYears
            onYearFilter={handleYearFilter}
            style={{ marginBottom: "3em" }}
          />
          <div style={{ marginTop: "3em" }}>
            <Table mydata={filtereddata} />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ModalFilterYears;
