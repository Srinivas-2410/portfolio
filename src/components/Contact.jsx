import React, { useState } from "react";

export default function Contact() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [feedback, setFeedback] = useState("");
  const [feedbackClass, setFeedbackClass] = useState("");

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setFeedback("");
    setFeedbackClass("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!fields.name || !fields.email || !fields.message) {
      setFeedback("Please fill all fields.");
      setFeedbackClass("text-red-600");
      return;
    }
    if (!emailRe.test(fields.email)) {
      setFeedback("Please enter a valid email address.");
      setFeedbackClass("text-red-600");
      return;
    }
    setFeedback("Thanks for reaching out!");
    setFeedbackClass("text-green-600");
    setFields({ name: "", email: "", message: "" });
    setTimeout(() => setFeedback(""), 4000);
  }

  return (
    <section id="contact" className="mb-20">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 rounded-xl shadow px-8 pt-6 pb-8 max-w-lg mx-auto space-y-5"
        autoComplete="off"
      >
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-2 border rounded focus:ring-2 ring-blue-400 dark:bg-gray-900 transition"
            id="name"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border rounded focus:ring-2 ring-blue-400 dark:bg-gray-900 transition"
            id="email"
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded focus:ring-2 ring-blue-400 dark:bg-gray-900 transition"
            id="message"
            name="message"
            rows="4"
            value={fields.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-800 transition w-full"
        >
          Send Message
        </button>
        <div className={`text-center mt-3 text-lg font-medium ${feedbackClass}`}>{feedback}</div>
      </form>
    </section>
  );
}

