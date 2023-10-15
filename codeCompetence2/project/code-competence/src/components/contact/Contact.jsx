import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Buat pesan alert dengan data yang diinputkan
    const alertMessage =
      "Full Name: " +
      formData.fullName +
      "\n" +
      "Email Address: " +
      formData.emailAddress +
      "\n" +
      "Phone Number: " +
      formData.phoneNumber +
      "\n" +
      "Subject: " +
      formData.subject +
      "\n" +
      "Message: " +
      formData.message;

    // Tampilkan pesan alert
    alert(alertMessage);
  };

  return (
    <>
    <section className="contact-start" id="contact-us">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#f5deb3"
        fillOpacity={1}
        d="M0,64L11.4,85.3C22.9,107,46,149,69,144C91.4,139,114,85,137,90.7C160,96,183,160,206,192C228.6,224,251,224,274,197.3C297.1,171,320,117,343,80C365.7,43,389,21,411,37.3C434.3,53,457,107,480,133.3C502.9,160,526,160,549,149.3C571.4,139,594,117,617,128C640,139,663,181,686,165.3C708.6,149,731,75,754,85.3C777.1,96,800,192,823,208C845.7,224,869,160,891,154.7C914.3,149,937,203,960,197.3C982.9,192,1006,128,1029,138.7C1051.4,149,1074,235,1097,229.3C1120,224,1143,128,1166,90.7C1188.6,53,1211,75,1234,96C1257.1,117,1280,139,1303,149.3C1325.7,160,1349,160,1371,154.7C1394.3,149,1417,139,1429,133.3L1440,128L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
      />
    </svg>
    </section>
    <section className="contact-area">
    <div className="container-sm">
      <div className="col-10">
        <div className="section-title mt-40">
          <h3 className="title">Get in touch</h3>
        </div>
        <div className="contact-form form-style-four ">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-input mt-15">
                  <label>Full Name</label>
                  <div className="input-items default custom-input">
                    <i className="lni lni-user" />
                    <input 
                      type="text"
                      name='fullName' 
                      placeholder="Full name" 
                      value={formData.fullName} 
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* form input */}
              </div>
              <div className="col-md-6">
                <div className="form-input mt-15">
                  <label>Email Address</label>
                  <div className="input-items default">
                    <i className="lni lni-envelope" />
                    <input 
                      type="text" 
                      name='emailAddress'
                      placeholder="example@gmail.com"
                      value={formData.emailAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* form input */}
              </div>
              <div className="col-md-6">
                <div className="form-input mt-15">
                  <label>Phone Number</label>
                  <div className="input-items default">
                    <i className="lni lni-phone" />
                    <input 
                      type="text"
                      name='phoneNumber' 
                      placeholder="Your phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                {/* form input */}
              </div>
              <div className="col-md-6">
                <div className="form-input mt-15">
                  <label>Subject</label>
                  <div className="input-items default">
                    <i className="lni lni-bubble" />
                    <input 
                      type="text" 
                      name='subject'
                      placeholder="Type here"
                      value={formData.subject}
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                {/* form input */}
              </div>
              <div className="col-md-12">
                <div className="form-input mt-15">
                  <label>Your Message</label>
                  <div className="input-items default">
                    <i className="lni lni-pencil-alt" />
                    <textarea
                      placeholder="Type your message here"
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* form input */}
              </div>
              <div className="col-md-12">
                <div className="single-form mt-15">
                  <div className="input-form rounded-buttons">
                    <button
                      className="btn primary-btn rounded-full"
                      type="submit"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Contact