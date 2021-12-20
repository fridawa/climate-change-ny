//import components
import InfoText from "./InfoText";
import ShowMoreText from "react-show-more-text";
import ModalFilterYears from "../Modals/ModalFilterYears";
import {Button } from "react-bootstrap";
import { useState } from "react";

//infotext i mobilvy, visas vid tryck på frågetecken och får sin props-data genon InfoText (komponent för sotrskärmsvy)
const InfoTextMobile = (props) => {

  const [modalFilterShow, setFilterModalShow] = useState(false);
  //funktionen executeOnClick expanderar texten och är kopplad till onClick nedan
  function executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  console.log(props.id);
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

 {/* vid tryck på knappen visas modalen (setFilterModalShow blir true) */}
       {/* <Button
              onClick={() => setFilterModalShow(true)}
              className="searchButton"
            >
              Sök och jämför år
            </Button>

    
    <ModalFilterYears
    show={modalFilterShow}
    onHide={() => setFilterModalShow(false)} 
  /> */}
  
</>
  );
};
export default InfoTextMobile;
