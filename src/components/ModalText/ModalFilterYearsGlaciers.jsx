import { Button, Modal, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import TableGlacier from "../../screens/TableYearsGlaciers";
import FilterYears from "../../screens/FilterYear";

const ModalFilterYearsGlaciers = (props) => {
  const [GlacierData, setGlacierData] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);

  useEffect(() => {
    const url = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGlacierData(data);
        setFiltereddata(data);
      });
  }, []);

  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...GlacierData];
    if (YearFrom != "" && YearTo != "") {
      filtereddata = filtereddata.filter(
        (glacier) => glacier.Year >= YearFrom && glacier.Year <= YearTo
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
        <Modal.Title id="contained-modal-title-vcenter" style= {{}}>
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
            <TableGlacier mydataGlacier={filtereddata} />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ModalFilterYearsGlaciers;
