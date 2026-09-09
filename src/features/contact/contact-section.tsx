'use client';

import { useState } from 'react';
import { GlassCard, Section } from '@/components/ui';
import { profile } from '@/data/profile';
import Social from './social-links';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/ghanshyam@dharmik.me',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `Portfolio inquiry from ${name}`,
            _template: 'table',
            _captcha: 'false',
            name,
            email,
            message,
          }),
        },
      );
      const result = await response.json();

      if (
        (response.ok && result.success === 'true') ||
        result.success === true
      ) {
        setStatus('sent');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build a fast, intelligent, beautifully engineered product."
    >
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <Social />
        <GlassCard>
          <form
            className="grid gap-4"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <input
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/10"
              placeholder="Your name"
              aria-label="Your name"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
            <input
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/10"
              placeholder="Email address"
              aria-label="Email address"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              type="email"
              required
            />
            <textarea
              className="min-h-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/10"
              placeholder="Tell me about your project"
              aria-label="Project message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              required
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-950"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'sent' && (
              <p className="rounded-2xl border border-emerald-300/40 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="rounded-2xl border border-red-300/40 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-300">
                Something went wrong. Please email me directly at{' '}
                <a
                  className="underline"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
                .
              </p>
            )}
          </form>
        </GlassCard>
      </div>
    </Section>
  );
}
