"use client";

import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Front-end only: connect this to your email/newsletter provider (Mailchimp, etc.).
    setDone(true);
    form.reset();
  };

  return (
    <div className="newsletter">
      <div className="newsletter__copy">
        <h4>Gate updates, straight to your inbox</h4>
        <p>Scholarship deadlines, new intakes and study-abroad tips — once a month, no spam.</p>
      </div>
      <form className="newsletter__form" onSubmit={onSubmit} noValidate>
        <input
          className="newsletter__input"
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          aria-label="Email address"
        />
        <button type="submit" className="btn btn--primary">
          Subscribe
        </button>
        {done && (
          <p className="newsletter__ok">
            <span>✓</span> You&apos;re on the list — welcome aboard!
          </p>
        )}
      </form>
    </div>
  );
}
