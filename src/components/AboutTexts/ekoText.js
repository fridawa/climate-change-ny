//import library
import { useState } from "react";
//import components
import ModalFootprint from "../Modals/ModalFootPrint";

//Ekotext syns på hem-vyn.
// Vid tryck på "ekologiska fotavtryck" öppnas modalen ModalFootprint (egen komponent)
const EkoText = () => {
  const [modalFootprintShow, setModalFootprintShow] = useState(false);

  return (
    <>
      <div className="mt-2 ">
        <p className="ekoAvtMening">
          Du kan påverka klimatförändringarna genom att minska ditt{" "}
          <span
            onClick={() => setModalFootprintShow(true)}
            className="link-text fw-bold"
          >
          <p className="ekoAvtLink">
            ekologiska fotavtryck
            </p>
          </span>
          .
        </p>
        {/*//popup/modal som visar hur besökaren kan påverka sitt klimatavtryck */}
        <ModalFootprint
          show={modalFootprintShow}
          onHide={() => setModalFootprintShow(false)}
        />
      </div>
    </>
  );
};
export default EkoText;
