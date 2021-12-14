const Table = (props) => {

    let tabledata = props.mydata;

    if(tabledata.length ===0) return <p>No Data!</p>;

  return (
    <div style= {{}}>
      {tabledata. length > 0 && <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">År</th>
            <th scope="col">Totala utsläpp</th>
            <th scope="col">Gasbränsle</th>
            <th scope="col">Fast bränsle</th>
            <th scope="col">Cement</th>
            <th scope="col">Gasfackling</th>
          </tr>
        </thead>
        <tbody>
            {tabledata.map((co2)=>(
          <tr>
            <td>{co2.Year}</td>
            <td>{co2["Total"]} MT</td>
            <td>{co2["Gas Fuel"]} MT</td>
            <td>{co2["Solid Fuel"]} MT</td>
            <td>{co2.Cement} MT</td>
            <td>{co2["Gas Flaring"]} MT</td>
          </tr>
            ))}
        </tbody>
      </table>}
    </div>
  );
};
export default Table;