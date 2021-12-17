const TableGlacier = (props) => {
  let tabledatas = props.mydataGlacier;

  if (tabledatas.length === 0)
    return <p>Åh nej! Datan kunde inte visas. Testa igen!</p>;

  return (
    <div style={{ marginTop: "-1em" }}>
      {tabledatas.length > 0 && (
        <table className="table table-striped" style={{}}>
          <thead className="thead" style={{ backgroundColor: "white" }}>
            <tr>
              <th scope="col">År</th>
              <th scope="col">Massförändring (i meter vattenekvivalenter)</th>
            </tr>
          </thead>
          <tbody>
            {tabledatas.map((glacier) => (
              <tr>
                <td>{glacier.Year}</td>
                <td>{glacier["Mean cumulative mass balance"]} m</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default TableGlacier;