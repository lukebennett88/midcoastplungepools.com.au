import React from 'react';
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <form
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={this.handleSubmit}
        action="/contact/success/"
        className="max-w-xs w-full"
        method="post"
        name="contact"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>

        {/* Name */}
        <div className="mb-6">
          <label className="flex flex-col" htmlFor="name">
            <span className="font-bold mb-2 text-sm">Name:</span>
            <input
              className="appearance-none border leading-tight px-3 py-2 rounded shadow text-grey-darker w-full focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              required
              onChange={this.handleChange}
            />
          </label>
        </div>

        {/* Phone number */}
        <div className="mb-6">
          <label className="flex flex-col">
            <span className="font-bold mb-2 text-sm">Phone number:</span>
            <input
              className="appearance-none border leading-tight px-3 py-2 rounded shadow text-grey-darker w-full focus:outline-none focus:shadow-outline"
              type="text"
              name="phone"
              onChange={this.handleChange}
            />
          </label>
        </div>

        {/* Email address */}
        <div className="mb-6">
          <label className="flex flex-col">
            <span className="font-bold mb-2 text-sm">Email address:</span>
            <input
              className="appearance-none border leading-tight px-3 py-2 rounded shadow text-grey-darker w-full focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              onChange={this.handleChange}
            />
          </label>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="flex flex-col">
            <span className="font-bold mb-2 text-sm">Message:</span>
            <textarea
              className="appearance-none border leading-tight px-3 py-2 rounded shadow text-grey-darker w-full focus:outline-none focus:shadow-outline"
              name="message"
              required
              rows={5}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="flex items-center justify-end mb-6">
          {/* Clear */}
          <input
            class="bg-red-lightest appearance-none border leading-tight mr-3 px-3 py-2 rounded shadow text-red-darker"
            onChange={this.handleChange}
            type="reset"
            value="Clear form"
          />

          {/* Submit */}
          <button
            className="bg-green-lightest appearance-none border leading-tight px-3 py-2 rounded shadow text-green-darker"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    );
  }
}
