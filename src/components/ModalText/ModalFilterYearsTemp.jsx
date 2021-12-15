import { Button, Modal, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import TableTemp from "../../screens/TableYearsTemp";
import FilterYears from "../../screens/FilterYear";

const ModalFilterYearsTemp = (props) => {
  const [tempData, setTempData] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);

  useEffect(() => {
    const url = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTempData(data);
        setFiltereddata(data);
      });
  }, []);

  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...tempData];
    if (YearFrom != "" && YearTo != "") {
      filtereddata = filtereddata.filter(
        (temp) => temp.Year >= YearFrom && temp.Year <= YearTo
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
          Sök och jämför temperaturdata mellan 1880-2016 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <FilterYears
            onYearFilter={handleYearFilter}
            style={{ marginBottom: "3em" }}
          />
          <div style={{ marginTop: "3em" }}>
            <TableTemp mydataTemp={filtereddata} />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ModalFilterYearsTemp;
