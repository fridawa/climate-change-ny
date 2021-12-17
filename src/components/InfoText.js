import AboutTexts from "./AboutTexts/AboutTextArray";

const InfoText = (props) => {
  const match1 = AboutTexts.map((e) => {
    if (e.heading === props.id) {
      return (
        <div>
          <h1 className="d-none"> {e.heading}</h1>
          <p>{e.paragraph}</p>
        </div>
      );
    }
  });

  return match1;
};
export default InfoText;
