import './Modal.scss';
import checkIcon from './../../assets/images/icon-success.svg';

const Modal = ({ onCloseModal, name }) => {

  const handleButtonClick = () => {
    onCloseModal()
  }

  return (
    <div className='dismiss-container'>
      <div className='dismiss-section'>
        <img src={checkIcon} alt="success-icon" />
        <h1 className='title'>Thanks for subscribing!</h1>
        <p className='parag'>
          A confirmation email has been sent to
          <b><span> {name} </span></b>
          Please open it and click the button inside to confirm your subscition.
        </p>
        <button
          type='button'
          onClick={handleButtonClick}
        >
          Dismiss message
        </button>
      </div>
    </div>
  )
}

export default Modal;