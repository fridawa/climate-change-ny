import AboutTexts from "../components/AboutTextArray";

const Match = (props) => {
  const match1 = AboutTexts.map((e) => {
    if (e.heading === props.id) {
      return (
        <div>
          <h1> {e.heading}</h1>
          <p>{e.paragraph}</p>
        </div>
      );
    }
  });

  return match1;
};
export default Match;
