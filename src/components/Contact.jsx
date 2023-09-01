import React from 'react';
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>

            <form>
            <div>
                <label htmlFor="Name">Name</label>
                <input type="text" required placeholder='yourName'/>
            </div>

            <div>
                <label htmlFor="Email">Email</label>
                <input type="email" required placeholder='Abc@xyz.com'/>
            </div>

            <div>
                <label htmlFor="Message">Message</label>
                <input type="text" required placeholder='Tell your query...'/>
            </div>

            <button type='submit'>Send</button>

            </form>
        </main>
    </div>
  )
}

export default Contact
