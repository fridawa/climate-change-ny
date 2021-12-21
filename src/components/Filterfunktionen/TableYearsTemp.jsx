// Table component containing the Global Temperatue data
// Table is shown on click on button "Sök och jämför år" in the Global Temperatue view 
const TableTemp = (props) => {
  let tabledatas = props.myData;
  let filteredData = props.myFilteredData;

  // Error message is shown if data cannot be shown ( if there is no length to the data )
  if (tabledatas.length === 0)
    return <p>Åh nej! Datan kunde inte visas. Testa igen!</p>;


  //the table component is found in the ModalFilterYearsTemp component
  //the thead is static and the tbody is mapping over the objects in the filtered data (props) 
  //to print only the selected years (of no years are selected, all objects will be printed)
  return (
    <div style={{ marginTop: "-1em" }}>
      {filteredData.length > 0 && (
        <table className="table table-striped" style={{}}>
          <thead className="thead" style={{ backgroundColor: "white" }}>
            <tr>
              <th scope="col">År</th>
              <th scope="col">Temperaturökning/minskning i grader °C</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((temp) => (
              <tr>
                <td>{temp.Year}</td>
                <td>{temp["Mean"]} °C</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default TableTemp;
