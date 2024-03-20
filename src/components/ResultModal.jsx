import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(({targetTime,timeleft },ref) =>{
  const dialog = useRef()
  const userLost = timeleft <= 0
  const score = Math.round((1 - timeleft / (targetTime * 1000)) * 100);

  useImperativeHandle(ref,()=>({
     showDialog(){
      dialog.current.showModal()
    }
  }))


  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>The target time was {targetTime} secounds</p>
      <p><strong></strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});
export default ResultModal;
