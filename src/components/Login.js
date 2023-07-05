import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const handleResetEmailChange = (event) => {
    setResetEmail(event.target.value);
  };

  const handleResetPassword = () => {
    // TODO: Implement reset password logic here
    console.log("Reset email:", resetEmail);
    setForgotPassword(false);
    setResetEmail("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement login logic here
    console.log("Form submitted:", formData);
    // TODO: Reset the form after submission
    setFormData({
      email: "",
      password: "",
    });
  };

  if (forgotPassword) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-xs p-6 bg-white rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="resetEmail"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="resetEmail"
                name="resetEmail"
                value={resetEmail}
                onChange={handleResetEmailChange}
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                className="text-blue-500 hover:text-blue-700 text-sm font-semibold focus:outline-none"
                type="button"
                onClick={() => setForgotPassword(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs p-6 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              className="text-blue-500 hover:text-blue-700 text-sm font-semibold focus:outline-none"
              type="button"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
