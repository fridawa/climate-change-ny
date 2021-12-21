const TableOceanLevels = (props) => {
  let tabledatas = props.myData;
  let filteredData = props.myFilteredData;

  // Felmeddelande om datan inte skulle finnas
  if (tabledatas.length === 0)
    return <p>Åh nej! Datan kunde inte visas. Testa igen!</p>;

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
                {/* En slice för att inte visa hela datumet */}
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
