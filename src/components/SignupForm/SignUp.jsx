import { useState } from 'react';
import Modal from './../Modal/Modal'
import desktopImg from '../../assets/images/illustration-sign-up-desktop.svg';
import mobileImg from '../../assets/images/illustration-sign-up-mobile.svg';
import checkIcon from '../../assets/images/icon-list.svg';
import './SignUp.scss';

const SignUp = () => {

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
      <section>
        <div className='container a'>
          <div className='main-section'>
            <h1>Stay updated!</h1>
            <p className='first-p'>Join 60,000+ product managers receiving monthly updates on:</p>
            <p><img src={checkIcon} alt="success" /> <span>Product discovery and building what matters</span></p>
            <p><img src={checkIcon} alt="success" /> <span>Measuring to ensure updates are a success</span></p>
            <p><img src={checkIcon} alt="success" /> <span>And much more!</span></p>

            <div>
              <form>
                <div className='validation-email'>
                  <label htmlFor='email'>
                    Email address
                  </label>
                  {!validEmail && email !== "" && <p>Valid email required</p>}
                </div>
                <input
                  type="email"
                  name='email'
                  placeholder='Enter your e-mail'
                  value={email}
                  onChange={handleEmailChange}
                  className={email !== "" && !validEmail ? "validation-input" : ""}
                />
                <button
                  type='button'
                  onClick={handleSubmit}
                >
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>

          </div>
          <div className='a'>
            <img src={desktopImg} alt="illustration-sign-up" className='img' />
          </div>
          <div>
            <img src={mobileImg} alt="illustration-sign-up" className='mobile-img' />
          </div>
        </div>
      </section>

    </>
  )
}

export default SignUp;