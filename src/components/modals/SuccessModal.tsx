
type Props = {
  handleModalClose:() => void,
  successText:string
}

function SucessModal({handleModalClose, successText}: Props) {
  return (
    <div className="modal-sucess">
    <div className="modal-content">
      <p>{successText}</p>
      <button className="okay-btn" onClick={() => handleModalClose()}>
       okay
      </button>
    </div>
  </div>
  )
}

export default SucessModal