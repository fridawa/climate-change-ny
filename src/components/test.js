//externa importer
import { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    //2nd way
    axios
      .get("./json/sea.json")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // {
  //   const c = fetchedData[0].Time.split("-");
  //   const d = c.splice(1);
  //   console.log(c);
  // }

  // för att få tag på värden till ocean-levels
  // {
  //   fetchedData
  //     ? fetchedData.slice(0, 1).map((e) => {
  //         const first = e.Time.slice(0, 4);
  //         const a = e.Time.split("-");
  //         const b = a.splice(1);
  //         console.log(a);
  //         console.log(first);

  //         return (
  //           <>
  //             <Slider
  //               aria-label="Always visible"
  //               defaultValue={year}
  //               min={first}
  //               max={2000}
  //               step={1}
  //               marks={true}
  //               valueLabelDisplay="on"
  //               onChange={handleChange}
  //             />
  //           </>
  //         );
  //       })
  //     : null;
  // }
  return (
    <>
      {fetchedData
        ? fetchedData.map((e) => {
            const a = e.Time.split("-");
            const b = a.splice(1);
            return (
              <>
                <p>{a}</p>
              </>
            );
          })
        : null}
    </>
  );
};
export default Test;

// fetchedData.data.map((e) => {
//   console.log(e.Year);
//   return <p>{e.Year}</p>;
// });
