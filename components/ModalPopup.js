import {useRecoilState} from 'recoil';
import modalState from '../atom/modalAtom';

function ModalPopup() {

    const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
        Modal Popup
        {open ? <h1>Modal is open</h1> : ''} 
    </div>
  )
}

export default ModalPopup