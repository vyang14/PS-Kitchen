import './ContactUs.css'
// Contact us page
export default function ContactUs() {
  return (
    <div>
      <div className="contact-us-banner"></div>
      <div className="form-container">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear your feedback. Please feel out the form below for our team to review and we'll be in touch!
        </p>
        {/* Formsubmit.co will send us an email if someone submits this form */}
        <form
          action="https://formsubmit.co/e332b7de96a976a02c2b5f81385f54b1"
          method="POST"
          className="form"
        >
          <div className="input-section">
            <div className="form-section">
              <label for="contract-number">Contract Number</label>
              <input
                type="number"
                id="contract-number"
                name="contract-number"
              />
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" />
              <label for="your-name">Your Name</label>
              <input type="text" id="your-name" name="your-name" />
              <label for="other-name">Order Number</label>
              <input type="text" id="order-number" name="order-number" />
            </div>
            <div className="form-section">
              <label for="description">Your Feedback</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <button className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
