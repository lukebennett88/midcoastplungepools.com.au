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
        action="/contact/success/"
        className="max-w-xs w-full"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        method="post"
        name="contact"
      >
        <input type="hidden" name="bot-field" onChange={this.handleChange} />
        <div className="mb-4">
          <label className="flex font-bold mb-2 text-sm" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border leading-tight px-3 py-2 rounded shadow text-grey-darker w-full focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            rows="6"
          />
        </div>
        <ul className="flex items-center justify-end list-reset">
          <li className="mr-4">
            <input
              class="bg-red-lightest appearance-none border leading-tight px-3 py-2 rounded shadow text-red-darker"
              onChange={this.handleChange}
              type="reset"
              value="Clear"
            />
          </li>
          <li>
            <input
              className="bg-green-lightest appearance-none border leading-tight px-3 py-2 rounded shadow text-green-darker"
              onChange={this.handleChange}
              type="submit"
              value="Send Message"
            />
          </li>
        </ul>
      </form>
    );
  }
}
