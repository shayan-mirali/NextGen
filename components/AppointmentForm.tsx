"use client";

import { useState } from "react";
import { services } from "@/lib/services";

const SLOTS = [
  "09:00", "10:00", "11:00", "12:00",
  "14:00", "15:00", "16:00", "17:00",
];

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [svcFilled, setSvcFilled] = useState(false);
  const [timeFilled, setTimeFilled] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Front-end only: connect this to your calendar/CRM (or swap in a Calendly embed).
    setSubmitted(true);
    form.reset();
    setSvcFilled(false);
    setTimeFilled(false);
  };

  return (
    <form className="checkin" onSubmit={onSubmit} noValidate>
      <div className="field">
        <input type="text" id="apt-name" name="name" required placeholder=" " />
        <label htmlFor="apt-name">Full name</label>
      </div>
      <div className="field">
        <input type="email" id="apt-email" name="email" required placeholder=" " />
        <label htmlFor="apt-email">Email address</label>
      </div>
      <div className="field">
        <input type="tel" id="apt-phone" name="phone" required placeholder=" " />
        <label htmlFor="apt-phone">Phone / WhatsApp</label>
      </div>
      <div className={`field ${svcFilled ? "filled" : ""}`}>
        <select
          id="apt-service"
          name="service"
          required
          defaultValue=""
          onChange={(e) => setSvcFilled(!!e.target.value)}
        >
          <option value="" disabled></option>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Not sure yet</option>
        </select>
        <label htmlFor="apt-service" className="label--select">Service</label>
      </div>
      <div className="field filled">
        <input type="date" id="apt-date" name="date" required />
        <label htmlFor="apt-date" className="label--select">Preferred date</label>
      </div>
      <div className={`field ${timeFilled ? "filled" : ""}`}>
        <select
          id="apt-time"
          name="time"
          required
          defaultValue=""
          onChange={(e) => setTimeFilled(!!e.target.value)}
        >
          <option value="" disabled></option>
          {SLOTS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <label htmlFor="apt-time" className="label--select">Preferred time</label>
      </div>
      <div className="field field--full">
        <textarea id="apt-msg" name="message" rows={3} placeholder=" " />
        <label htmlFor="apt-msg">Anything we should know? (optional)</label>
      </div>
      <button type="submit" className="btn btn--primary btn--block">
        Confirm My Appointment 📅
      </button>
      <p className="checkin__note">Mon–Sat · We confirm your slot by email within a few hours</p>
      <div className={`checkin__success ${submitted ? "show" : ""}`}>
        <span>✓</span> Appointment requested! We&apos;ll confirm your slot shortly.
      </div>
    </form>
  );
}
