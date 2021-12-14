import { useState } from "react";
import ModalFootprint from "./ModalFootPrint";

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
            ekologiska fotavtryck
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
