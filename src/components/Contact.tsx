"use client";
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  async function onSubmit(e: any) {
    e.preventDefault();
    if (!form.email || !form.message) return setStatus('error');
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('sent');
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">Contact</h2>
  <p className="mt-2 text-muted">You can reach me at <a href="mailto:you@example.com" className="text-primary">you@example.com</a> or use the form below.</p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-3">
          <input aria-label="Name" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-3 py-2 panel rounded" />
          <input aria-label="Email" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-3 py-2 panel rounded" required />
          <textarea aria-label="Message" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="px-3 py-2 panel rounded" rows={6} required />
          <div className="flex items-center gap-3">
            <button type="submit" className="btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send'}</button>
            {status === 'sent' && <span className="text-green-400">Message sent — thank you!</span>}
            {status === 'error' && <span className="text-red-400">Please provide email and message.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
