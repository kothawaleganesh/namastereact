import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Inline styles for the container
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  };

  // Inline styles for the form
  const formStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  };

  // Inline styles for input fields
  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  // Inline styles for error messages
  const errorStyle = {
    color: "#e74c3c",
    fontSize: "0.875em",
    marginBottom: "12px",
  };

  // Inline styles for the submit button
  const buttonStyle = {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  // Styles for the button hover state
  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#0056b3",
  };

  // Styles for the button disabled state
  const buttonDisabledStyle = {
    ...buttonStyle,
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
  };

  return (
    <div style={containerStyle}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            navigate("/");
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form style={formStyle} onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              style={inputStyle}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <div style={errorStyle}>{errors.email}</div>
            )}
            <input
              type="password"
              name="password"
              style={inputStyle}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && (
              <div style={errorStyle}>{errors.password}</div>
            )}
            <button
              type="submit"
              style={isSubmitting ? buttonDisabledStyle : buttonStyle}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
