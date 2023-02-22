import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Connect() {
  const [state, handleSubmit] = useForm("xknarqra");
  if (state.succeeded) {
    return (
      <p className="w-96 mx-auto text-2xl text-dark border-2 border-positive px-4 py-2 rounded-md">
        Thanks for reaching out! <br />I will aim to respond in a timely manner.
      </p>
    );
  }
  return (
    <div className="w-96 mb-12 md:w-96 md:max-w-full mx-auto">
      <div className="p-6 border-2 border-secondary sm:rounded-md text-dark">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block text-dark text-lg">
            Your name
          </label>

          <input
            type="text"
            name="name"
            className="block w-full mt-1 p-4 border-b-2 border-secondary mb-6"
            placeholder="John Doe"
          />
          <label htmlFor="email" className="block text-dark text-lg">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="block w-full mt-1 p-4 border-b-2 border-secondary mb-6"
            placeholder="john.doe@example.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            className="block w-full mt-1 p-4 border-b-2 border-secondary mb-6"
            rows="3"
            placeholder="Leave me a message here..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="mb-6">
            <button
              disabled={state.submitting}
              type="submit"
              className="h-10 px-5 text-light bg-primary rounded-lg transition-colors duration-150 hover:bg-dark"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
