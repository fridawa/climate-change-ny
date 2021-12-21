//import components
import InfoText from "./InfoText";
import ShowMoreText from "react-show-more-text";

//infotext i mobilvy, visas vid tryck på frågetecken och får sin props-data genon InfoText (komponent för sotrskärmsvy)
const InfoTextMobile = (props) => {
  //funktionen executeOnClick expanderar texten och är kopplad till onClick nedan
  function executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  const idkey = props.id;

  //returnerar utvikbar text genom tryck på "Läs mer" som endast visas vid tryck (expanded={false})
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
        {/* Vill få den att gömma headingen bara skicka med paragraphen
      Förstår inte varför headingen står med, för den är
       gömd när det fälls ut */}
        <InfoText id={idkey} />
      </ShowMoreText>
    </>
  );
};
export default InfoTextMobile;
