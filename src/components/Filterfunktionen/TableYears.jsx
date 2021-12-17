const Table = (props) => {
  let tabledata = props.mydata;

  if (tabledata.length === 0)
    return <p>Åh nej! Datan kunde inte visas. Testa igen!</p>;

  return (
    <div style={{ marginTop: "-1em" }}>
      {tabledata.length > 0 && (
        <table className="table table-striped" style={{}}>
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
            {tabledata.map((co2) => (
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
      )}
    </div>
  );
};
export default Table;
