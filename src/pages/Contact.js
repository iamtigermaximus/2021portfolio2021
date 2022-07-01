import React from 'react'
import SocialMedia from '../components/SocialMedia'
import Fade from 'react-reveal/Fade'

const Contact = () => {
  return (
    <div className='contact-page-container'>
      <div className='page-heading-container text-center py-5 mb-5'>
        <Fade top>
          <div className='page-heading-title'>
            <h1 className='page-title pt-4'>Contact Me</h1>
          </div>
          <div className='page-heading-subtexts'>
            <h5 className='page-subtexts'>Get in touch with me.</h5>
          </div>
        </Fade>
      </div>
      <div className='contact-form-container'>
        <Fade>
          <div className='container'>
            <div className='row container'>
              <div className='col-md-6 justify-content-center'>
                <form
                  className='input-form'
                  name='contact-form'
                  action='mail.php'
                  method='POST'
                >
                  <input
                    type='text'
                    name=' first-name'
                    className='form-control'
                    placeholder='First Name'
                  />
                </form>
              </div>
              <div className='col-md-6 my-1 justify-content-center'>
                <form
                  className='input-form'
                  name='contact-form'
                  action='mail.php'
                  method='POST'
                >
                  <input
                    type='text'
                    name='last-name'
                    className='form-control'
                    placeholder='Last Name'
                  />
                </form>
              </div>
            </div>
            <div className='row container'>
              <div className='col-md-12 my-1 justify-content-center'>
                <form
                  className='input-form'
                  name='contact-form'
                  action='mail.php'
                  method='POST'
                >
                  <input
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='Email'
                  />
                </form>
              </div>
              <div className='col-md-12 my-1 justify-content-center'>
                <form
                  className='input-form'
                  name='contact-form'
                  action='mail.php'
                  method='POST'
                >
                  <input
                    type='text'
                    name='subject'
                    className='form-control'
                    placeholder='Subject'
                  />
                </form>
              </div>
              <div className='col-md-12 my-1 justify-content-center'>
                <div
                  className='input-form'
                  name='contact-form'
                  action='mail.php'
                  method='POST'
                >
                  <textarea
                    type='text'
                    name='message'
                    className='form-control'
                    rows='7'
                    placeholder='Message'
                  ></textarea>
                </div>
              </div>
            </div>
            <div className='container'>
              <div className='row container text-center'>
                <button className='btn btn-primary rounded-pill mb-5 my-2 text-center'>
                  <a
                    href='mailto:siegy.gamboa@gmail.com'
                    className='social-link'
                  >
                    Send
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <SocialMedia />
    </div>
  )
}

export default Contact
