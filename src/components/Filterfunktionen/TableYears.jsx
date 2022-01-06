// Table component containing the Co2 data
// Table is shown on click on button "Sök och jämför år" in the Co2 view and Co2 sub views 
const Table = (props) => {
  let tabledatas = props.myData;
  let filteredData = props.myFilteredData;

  // Error message is shown if data cannot be shown ( if there is no length to the data )
  /* if (tabledatas.length === 0)
    return <p>Åh nej! Datan kunde inte visas. Testa igen!</p>; */

  //the table component is found in the ModalFilterYears component
  //the thead is static and the tbody is mapping over the objects in the filtered data (props) 
  //to print only the selected years (of no years are selected, all objects will be printed)
  return (
    <div style={{ marginTop: "-1em" }}>
      {filteredData.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped col-sm-6">
            <thead className="thead" style={{ backgroundColor: "white" }}>
              <tr>
                <th scope="col">År</th>
                <th scope="col">Totala utsläpp</th>
                <th scope="col">Gasbränsle</th>
                <th scope="col">Fast bränsle</th>
                <th scope="col">Cement</th>
                <th scope="col">Gaseldning</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((co2) => (
                <tr>
                  <td>{co2.Year}</td>
                  <td>{co2["Total"]} mt</td>
                  <td>{co2["Gas Fuel"]} mt</td>
                  <td>{co2["Solid Fuel"]} mt</td>
                  <td>{co2.Cement} mt</td>
                  <td>{co2["Gas Flaring"]} mt</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Table;
