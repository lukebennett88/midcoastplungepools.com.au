import React from 'react';

const ContactForm = () => {
  return (
    <form
    className="max-w-xs w-full"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input className="appearance-none border leading-tight px-3 py-2 rounded shadow text-grey-darker w-full focus:outline-none focus:shadow-outline" type="text" name="name" id="name" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="appearance-none border leading-tight px-3 py-2 rounded shadow text-grey-darker w-full focus:outline-none focus:shadow-outline" type="text" name="email" id="email" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea className="appearance-none border leading-tight px-3 py-2 rounded shadow text-grey-darker w-full focus:outline-none focus:shadow-outline" name="message" id="message" rows="6" />
      </div>
      <ul className="flex items-center justify-end list-reset">
        <li className="mr-4">
          <input class="bg-red-lightest appearance-none border leading-tight px-3 py-2 rounded shadow text-red-darker" type="reset" value="Clear" />
        </li>
        <li>
          <input className="bg-green-lightest appearance-none border leading-tight px-3 py-2 rounded shadow text-green-darker" type="submit" value="Send Message" />
        </li>
      </ul>
    </form>
  );
};

export default ContactForm;
