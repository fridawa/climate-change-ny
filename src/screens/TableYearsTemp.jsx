const TableTemp = (props) => {
  let tabledatas = props.mydataTemp;

  if (tabledatas.length === 0)
    return <p>Åh nej! Datan kunde inte visas. Testa igen!</p>;

  return (
    <div style={{ marginTop: "-1em" }}>
      {tabledatas.length > 0 && (
        <table className="table table-striped" style={{}}>
          <thead className="thead" style={{ backgroundColor: "white" }}>
            <tr>
              <th scope="col">År</th>
              <th scope="col">Temperaturökning/minskning i grader °C</th>
            </tr>
          </thead>
          <tbody>
            {tabledatas.map((temp) => (
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
