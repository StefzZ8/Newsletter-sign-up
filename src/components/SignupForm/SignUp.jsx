import { useState } from 'react';
import Modal from './../Modal/Modal'
import './SignUp.scss';

const SignUp = (props) => {

  const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setValidEmail(emailRegex.test(inputEmail) || inputEmail === "")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail) {
      console.log('Form Submitted Succesfully');
      setIsModalOpen(true)
    } else {
      console.log('Error')
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEmail('');
  }

  return isModalOpen ? (
    <Modal name={email || "Subscriber"} onCloseModal={handleCloseModal} />
  ) : (
    <>
      <form>
        <label>
          Email address
        </label>
        <input
          type="email"
          name='email'
          placeholder='Enter your e-mail'
          value={email}
          onChange={handleEmailChange}
        />
        <button
          type='button'
          onClick={handleSubmit}
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  )
}

export default SignUp;