"use client";

import { useState } from "react";
import { destinations } from "@/lib/destinations";

export default function CheckInForm() {
  const [submitted, setSubmitted] = useState(false);
  const [destFilled, setDestFilled] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Front-end only: connect this to your email/CRM service to receive bookings.
    setSubmitted(true);
    form.reset();
    setDestFilled(false);
  };

  return (
    <form className="checkin" onSubmit={onSubmit} noValidate>
      <div className="field">
        <input type="text" id="name" name="name" required placeholder=" " />
        <label htmlFor="name">Full name</label>
      </div>
      <div className="field">
        <input type="email" id="email" name="email" required placeholder=" " />
        <label htmlFor="email">Email address</label>
      </div>
      <div className="field">
        <input type="tel" id="phone" name="phone" placeholder=" " />
        <label htmlFor="phone">Phone / WhatsApp</label>
      </div>
      <div className={`field ${destFilled ? "filled" : ""}`}>
        <select
          id="destination"
          name="destination"
          required
          defaultValue=""
          onChange={(e) => setDestFilled(!!e.target.value)}
        >
          <option value="" disabled></option>
          {destinations.map((d) => (
            <option key={d.slug}>{d.name}</option>
          ))}
          <option>Still deciding</option>
        </select>
        <label htmlFor="destination" className="label--select">Preferred destination</label>
      </div>
      <div className="field">
        <select id="level" name="level" required defaultValue="">
          <option value="" disabled hidden></option>
          <option>Bachelor&apos;s</option>
          <option>Master&apos;s</option>
          <option>PhD</option>
          <option>Foundation / Diploma</option>
        </select>
        <label htmlFor="level" className="label--select">Study level</label>
      </div>
      <div className="field">
        <select id="intake" name="intake" required defaultValue="">
          <option value="" disabled hidden></option>
          <option>As soon as possible</option>
          <option>Next 6 months</option>
          <option>6–12 months</option>
          <option>Just exploring</option>
        </select>
        <label htmlFor="intake" className="label--select">Timeline</label>
      </div>
      <div className="field field--full">
        <textarea id="message" name="message" rows={3} placeholder=" " />
        <label htmlFor="message">Tell us about your goals (optional)</label>
      </div>
      <button type="submit" className="btn btn--primary btn--block">
        Confirm My Check-In ✈
      </button>
      <p className="checkin__note">Free · No obligation · We reply within 24 hours</p>
      <div className={`checkin__success ${submitted ? "show" : ""}`}>
        <span>✓</span> You&apos;re checked in! Our team will be in touch within 24 hours.
      </div>
    </form>
  );
}
