// Table component containing the Ocean Levels data
// Table is shown on click on button "Sök och jämför år" in the Ocean Levels view 
const TableOceanLevels = (props) => {
  let tabledatas = props.myData;
  let filteredData = props.myFilteredData;

   // Error message is shown if data cannot be shown ( if there is no length to the data )
  if (tabledatas.length === 0)
    return <p>Åh nej! Datan kunde inte visas. Testa igen!</p>;

  //the table component is found in the ModalFilterYearsOceanLev component
  //the thead is static and the tbody is mapping over the objects in the filtered data (props) 
  //to print only the selected years (of no years are selected, all objects will be printed)
  return (
    <div style={{ marginTop: "-1em" }}>
      {filteredData.length > 0 && (
        <table className="table table-striped" style={{}}>
          <thead className="thead" style={{ backgroundColor: "white" }}>
            <tr>
              <th scope="col">År</th>
              <th scope="col">Havsnivå ökning/minsking i millimeter (mm)</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((oceLev) => (
              <tr>
                {/* Slice to only show the year */}
                <td>{oceLev["Time"].slice(0, 4)}</td>
                <td>{oceLev["GMSL"]} mm</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default TableOceanLevels;
