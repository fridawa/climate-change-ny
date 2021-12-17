import InfoText from "../InfoText";
import ShowMoreText from "react-show-more-text";

const InfoTextMobile = (props) => {
  function executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  console.log(props.id);
  const idkey = props.id;

  return (
    <ShowMoreText
      lines={2}
      more="Show more"
      less="Show less"
      className="content-css"
      anchorClass="my-anchor-css-class"
      onClick={() => executeOnClick()}
      expanded={false}
      width={500}
      truncatedEndingComponent={"... "}
    >
      <InfoText id={idkey} />
    </ShowMoreText>
  );
};
export default InfoTextMobile;
