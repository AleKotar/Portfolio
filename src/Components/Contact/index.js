import './index.css'

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text">
          <h1>Contact</h1>
          <p>Contact me!</p>
          <form>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea name="message" placeholder="Message" required />
              </li>
              <li>
                <input
                  className="button"
                  type="submit"
                  name="message"
                  value="SEND"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
