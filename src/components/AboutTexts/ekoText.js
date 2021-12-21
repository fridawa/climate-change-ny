//import library
import { useState } from "react";
//import components
import ModalFootprint from "../Modals/ModalFootPrint";

// Ekotext component is used in Home.js
// On click, the modal ModalFootprint will appear (will be set to true)

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

        {/*//modal modalFootprint */}
        <ModalFootprint
          show={modalFootprintShow}
          onHide={() => setModalFootprintShow(false)}
        />
      </div>
    </>
  );
};
export default EkoText;
