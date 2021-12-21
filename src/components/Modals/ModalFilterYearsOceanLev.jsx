import { Modal, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import TableOceanLevels from "../Filterfunktionen/TableYearsOceanLevels";
import FilterYears from "../Filterfunktionen/FilterYear";

const ModalFilterYearsOceanLev = (props) => {
  const [filtereddata, setFiltereddata] = useState([]);

  useEffect(() => {
    setFiltereddata(props.data);
  }, []);

  console.log(filtereddata);

  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...props.data];

    if (YearFrom != "" && YearTo != "") {
      filtereddata = filtereddata.filter(
        (oceLev) => oceLev.Time >= YearFrom && oceLev.Time <= YearTo
      );
    }

    if (Order === "LTH") {
      filtereddata.sort((a, b) => parseInt(a.Time) - parseInt(b.Time));
    } else if (Order === "HTL") {
      filtereddata.sort((a, b) => parseInt(b.Time) - parseInt(a.Time));
    }

    setFiltereddata(filtereddata);
  };
  console.log(filtereddata);

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
