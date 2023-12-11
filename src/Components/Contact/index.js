import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.css'

const Contact = () => {
  const form = useRef()
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })
  const [submissionMessage, setSubmissionMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
          setFormValues({ user_name: '', user_email: '', message: '' })
          setSubmissionMessage('Message Sent!')
        },
        (error) => {
          console.log(error.text)
          setSubmissionMessage('Failed to send message')
        }
      )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input
        type="text"
        name="user_name"
        value={formValues.user_name}
        onChange={handleChange}
      />
      <label>Email:</label>
      <input
        type="email"
        name="user_email"
        value={formValues.user_email}
        onChange={handleChange}
      />
      <label>Message:</label>
      <textarea
        name="message"
        value={formValues.message}
        onChange={handleChange}
      />
      <input type="submit" value="SEND" />
      <span className="sent">{submissionMessage}</span>
    </form>
  )
}

export default Contact
