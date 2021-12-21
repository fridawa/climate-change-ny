//library imports
import { Modal, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

//component imports
import TableGlacier from "../Filterfunktionen/TableYearsGlaciers";
import FilterYears from "../Filterfunktionen/FilterYear";

// FilterModal for Glacier data
// Uses useState to "set" the data depending on the value of the input (years)
// The modal contains the filter function (FilterYears.jsx) for Glaciers and the table (TableYearsGlaciers.jsx)
const ModalFilterYearsGlaciers = (props) => {
  const [filtereddata, setFiltereddata] = useState([]);

  // gets the Glaciers data from Glaciers.js (the filtered data)
  useEffect(() => {
    setFiltereddata(props.data);
  }, []);

  //The function handles the input values from FilterYears.
  // Creates a new variable (filtererdata) (copy of API-data) to be modified
  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...props.data];

     // if YearFrom and Year to has text inputs, the data will be filtered 
    if (YearFrom != "" && YearTo != "") {
      filtereddata = filtereddata.filter(
        (glacier) => glacier.Year >= YearFrom && glacier.Year <= YearTo
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

  // the modal containing the <FilterYears> component and the <TableGlacier> component from FilterYear.jsx and TableYearsGlacier.jsx
  return (
    <Modal
      //"property spread notation" refers to all objectt i glacier data
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
           {/* Sends the function handleYearFilter so that the
          FilterYears component is connected on click*/}
          <FilterYears
            onYearFilter={handleYearFilter}
            style={{ marginBottom: "3em" }}
          />
          <div style={{ marginTop: "3em" }}>
            {/* Sends both filtereddata and the original data
            to be able to give error messange if the data is not existing */}
            <TableGlacier myFilteredData={filtereddata} myData={props.data} />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ModalFilterYearsGlaciers;
