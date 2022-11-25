import { useRecoilState } from "recoil";
import modalState from "../atom/modalAtom";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

function ModalPopup() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const addImagetoFile = (event) => {
    console.log(event);
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };

    console.log(selectedFile);
  };

  return (
    <div>
      Modal Popup
      {open && (
        <Modal
          ariaHideApp={false}
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] border-2 rounded-md shadow-md bg-white"
        >
          <div className="flex flex-col items-center justify-center h-[100%] ">
            {selectedFile ? (
              <img src={selectedFile} onClick={() => setSelectedFile(null)} alt="uploaded-img" className="w-full object-cover h-[250px] cursor-pointer" />
            ) : (
              <CameraIcon
                onClick={() => fileInputRef.current.click()}
                className="cursor-pointer h-14 bg-red-200 p-2 rounded-full text-red-500"
              />
            )}

            <input
              hidden
              type="file"
              onChange={addImagetoFile}
              ref={fileInputRef}
            />
            <input
              type="text"
              className="w-full border-none m-4 focus:ring-0 text-center"
              maxLength="150"
              placeholder="Please enter your caption..."
            />
            <button
              disabled
              className="w-full bg-red-300 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:hover:brightness-100 disabled:cursor-not-allowed"
            >
              {" "}
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ModalPopup;
