const TableOceanLevels = (props) => {

    let tabledatas = props.mydataOceanLev;

    if(tabledatas.length ===0) return <p>Åh nej! Datan kunde inte visas. Testa igen!</p>;

  return (
    <div style= {{marginTop: "-1em"}}>
      {tabledatas. length > 0 && <table className="table table-striped" style= {{}}>
        <thead className="thead" style= {{backgroundColor:"white"}} >
          <tr>
            <th scope="col">År</th>
            <th scope="col">Havsnivå ökning/minsking i millimeter (mm)</th>
          </tr>
        </thead>
        <tbody>
            {tabledatas.map((oceLev)=>(
          <tr>
            <td>{oceLev["Time"]}</td>
            <td>{oceLev["GMSL"]} mm</td>
            
          </tr>
            ))}
        </tbody>
      </table>}
    </div>
  );
};
export default TableOceanLevels;