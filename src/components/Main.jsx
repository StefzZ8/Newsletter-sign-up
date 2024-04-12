import './../App.scss';
import illustrationImg from '../assets/images/illustration-sign-up-desktop.svg';
import checkIcon from '../assets/images/icon-list.svg';
import SignUp from './SignupForm/SignUp';

const Main = () => {


  return (
    <>
      <section>
        <div className='container'>
          <div className='main-section'>
            <h1>Stay updated!</h1>
            <p className='first-p'>Join 60,000+ product managers receiving monthly updates on:</p>
            <p><img src={checkIcon} alt="success" /> <span>Product discovery and building what matters</span></p>
            <p><img src={checkIcon} alt="success" /> <span>Measuring to ensure updates are a success</span></p>
            <p><img src={checkIcon} alt="success" /> <span>And much more!</span></p>
            <div>
              <SignUp />
            </div>
          </div>
          <div>
            <img src={illustrationImg} alt="illustration-sign-up" className='img' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Main;