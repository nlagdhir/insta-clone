import { useRecoilState } from "recoil";
import modalState from "../atom/modalAtom";
import Modal from "react-modal";

function ModalPopup() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      Modal Popup
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          className="max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] border-2 rounded-md shadow-md bg-white"
        >
          <div className="flex flex-col items-center justify-center h-[100%] ">
            <h1>Modal</h1>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ModalPopup;
