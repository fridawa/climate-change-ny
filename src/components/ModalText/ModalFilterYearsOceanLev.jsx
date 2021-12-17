import { Button, Modal, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import TableOceanLevels from "../TableYearsOceanLevels";
import FilterYears from "../FilterYear";

const ModalFilterYearsOceanLev = (props) => {
  const [oceanData, setOceanData] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);

  useEffect(() => {
    const url = "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setOceanData(data);
        setFiltereddata(data);
      });
  }, []);

  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...oceanData];
    if (YearFrom != "" && YearTo != "") {
      filtereddata = filtereddata.filter(
        (oceLev) => oceLev.Year >= YearFrom && oceLev.Year <= YearTo
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
          Sök och jämför havsnivåökning/minskning mellan 1880-2013
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <FilterYears
            onYearFilter={handleYearFilter}
            style={{ marginBottom: "3em" }}
          />
          <div style={{ marginTop: "3em" }}>
            <TableOceanLevels mydataOceanLev={filtereddata} />
            {console.log(filtereddata)}
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ModalFilterYearsOceanLev;
