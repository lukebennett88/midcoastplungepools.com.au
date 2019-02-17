import React from 'react';

const ContactForm = () => {
  return (
    <form
      action="/contact/success/"
      className="max-w-xs w-full"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      method="post"
      name="contact"
    >
      <input type="hidden" name="bot-field" />
      <div className="mb-4">
        <label className="flex font-bold mb-2 text-sm" htmlFor="name">
          Name
        </label>
        <input
          className="appearance-none border leading-tight px-3 py-2 rounded shadow text-grey-darker w-full focus:outline-none focus:shadow-outline"
          id="name"
          name="name"
          required
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="flex font-bold mb-2 text-sm" htmlFor="email">
          Email
        </label>
        <input
          className="appearance-none border leading-tight px-3 py-2 rounded shadow text-grey-darker w-full focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="flex font-bold mb-2 text-sm" htmlFor="message">
          Message
        </label>
        <textarea
          className="appearance-none border leading-tight px-3 py-2 rounded shadow text-grey-darker w-full focus:outline-none focus:shadow-outline"
          id="message"
          name="message"
          rows="6"
        />
      </div>
      <ul className="flex items-center justify-end list-reset">
        <li className="mr-4">
          <input
            class="bg-red-lightest appearance-none border leading-tight px-3 py-2 rounded shadow text-red-darker"
            type="reset"
            value="Clear"
          />
        </li>
        <li>
          <input
            className="bg-green-lightest appearance-none border leading-tight px-3 py-2 rounded shadow text-green-darker"
            type="submit"
            value="Send Message"
          />
        </li>
      </ul>
    </form>
  );
};

export default ContactForm;
