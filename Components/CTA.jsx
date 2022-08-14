import React from 'react'
import { FiSend } from 'react-icons/fi'

const CTA = () => {

  async function sendMail(e) {
    e.preventDefault()
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if(!field.name) return;
      formData[field.name] = field.value
    })
    fetch('/api/mail',{
      method:'post',
      body:JSON.stringify(formData)
    })
    console.log(formData)
  }

  return (
    <div className='cta-container'>
      <div className='div-center'>
        <div className='input-area'>
          <form method='post' onSubmit={sendMail} id='letsTalk'>
            <input type='text'name='name' placeholder='Name' className='input'></input>
            <input type='email' name='email' placeholder='Email' className='input'></input>
            <textarea type='textarea' name='message' placeholder='Your Message' className='input'></textarea>
            <button type='submit' className='btn-primary'>
              Submit
              <FiSend />
              </button>
          </form>
        </div>
        
        <div className='form-profile'>
            <div className='photo-container-form'>
                <img src='/profile.jpg' id='formProfile' />
            </div>
            <div className='personal-touch'>
                <h4>Let's Build Amazing Things Together.</h4>
                <div className='signature'>
                  <img src='/signature.png' id='mySignature' />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CTA