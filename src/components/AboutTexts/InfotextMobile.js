//import components
import InfoText from "./InfoText";
import ShowMoreText from "react-show-more-text";

// the InfoTextMobile component prints the InfoText in mobile view
// through props and idkey the InfoText component can be used in all line chart views
// All text is visible only when "Läs mer" is clicked and the function executeOnClick makes the text expand


const InfoTextMobile = (props) => {
  //executeOnClick expands the text and is connected to onClick in the ShowMoreText component below
  function executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  const idkey = props.id;

  //returnes unfolded text on click, otherwise expanded={false}
  return (
    <>
      <ShowMoreText
        lines={1}
        more="Läs mer"
        less="Visa mindre"
        className="content-css"
        anchorClass="my-anchor-css-class"
        onClick={() => executeOnClick()}
        expanded={false}
        width={0}
        truncatedEndingComponent={"... "}
      >   
        <InfoText id={idkey} />
      </ShowMoreText>
    </>
  );
};
export default InfoTextMobile;
