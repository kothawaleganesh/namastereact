const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or feedback, please don't hesitate to reach
        out to us.
      </p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" rows="4" cols="50" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Contact;
