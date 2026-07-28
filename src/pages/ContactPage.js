import { useEffect, useState } from "react";

function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    
  });
const [submitted, setSubmitted] = useState(false);

   useEffect(() => {
    document.title = "TaskBloom | Contact";
  }, []);

  // Handles form submission.
function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
  event.preventDefault();

  setSubmitted(true);

  setForm({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });
}

return (
  <div>
  <div className="hero">
    <h2>✉ Contact Us</h2>
    <p>Have questions or feedback? We'd love to hear from you.</p>
</div>
{submitted && (
  <div className="success-message">
    ✅ Thank you! Your message has been sent successfully.
  </div>
)}
  <form onSubmit={handleSubmit}>
    <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
      />

      <textarea
        name="comments"
        placeholder="Tell us what's on your mind..."
        value={form.comments}
        onChange={handleChange}
      />

    <button type="submit">📨 Send Message</button>
  </form>
  </div>
);
}

export default ContactPage;
