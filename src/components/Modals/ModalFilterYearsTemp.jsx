// import libraries
import { Modal, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

//import components
import TableTemp from "../Filterfunktionen/TableYearsTemp";
import FilterYears from "../Filterfunktionen/FilterYear";

// FilterModal for Global temperature data
// Uses useState to "set" the data depending on the value of the input (years)
// The modal contains the filter function (FilterYears.jsx) for Global temp and the table (TableYearsTemp.jsx)
const ModalFilterYearsTemp = (props) => {
  const [filtereddata, setFiltereddata] = useState([]);

  // gets the Temperatures data via props from GlobalTemp.js (the filtered data)
  useEffect(() => {
    setFiltereddata(props.data);
  }, []);

  // The function handles the input values from FilterYears.
  // Creates a new variable (filtererdata) (copy of API-data) to be modified
  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...props.data];
    if (YearFrom != "" && YearTo != "") {
      filtereddata = filtereddata.filter(
        (temp) => temp.Year >= YearFrom && temp.Year <= YearTo
      );
    }

   //if order === LTH (value from the radio button) sort data low to high
    //if order === HTL (value from the radio button) sort data high to low
    if (Order === "LTH") {
      filtereddata.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (Order === "HTL") {
      filtereddata.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }
    // Updates the filtereddata when modifcations are made
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
           {/* Sends the function handleYearFilter so that the
          FilterYears component is connected on click*/}
          <FilterYears
            onYearFilter={handleYearFilter}
            style={{ marginBottom: "3em" }}
          />
          <div style={{ marginTop: "3em" }}>
            {/* Sends both filtereddata and the original data
            to be able to give error messange if the data is not existing */}
            <TableTemp myFilteredData={filtereddata} myData={props.data} />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ModalFilterYearsTemp;
