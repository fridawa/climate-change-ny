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
      {/* Vill få den att gömma headingen bara skicka med paragraphen
      Förstår inte varför headingen står med, för den är
       gömd när det fälls ut */}
      <InfoText id={idkey} />
    </ShowMoreText>
  );
};
export default InfoTextMobile;
