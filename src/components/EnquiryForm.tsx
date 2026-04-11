'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { validateEnquiry, isValid, type EnquiryData, type EnquiryErrors } from '@/lib/enquiry'

const ITEM_OPTIONS = [
  { value: 'bar',       label: 'Wedding Bar' },
  { value: 'furniture', label: 'Furniture' },
  { value: 'tableware', label: 'Tableware' },
  { value: 'linen',     label: 'Linen' },
  { value: 'package',   label: 'Package' },
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function EnquiryForm() {
  const params = useSearchParams()
  const preItem = params.get('item') ?? ''

  const [form, setForm] = useState<EnquiryData>({
    name: '', email: '', date: '', guests: '',
    items: preItem ? [preItem] : [],
    message: '',
  })
  const [errors, setErrors]   = useState<EnquiryErrors>({})
  const [status, setStatus]   = useState<Status>('idle')

  useEffect(() => {
    if (preItem) setForm(f => ({ ...f, items: [preItem] }))
  }, [preItem])

  function toggleItem(value: string) {
    setForm(f => ({
      ...f,
      items: f.items.includes(value)
        ? f.items.filter(i => i !== value)
        : [...f.items, value],
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validateEnquiry(form)
    if (!isValid(errs)) { setErrors(errs); return }
    setErrors({})
    setStatus('submitting')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full border-b border-linen bg-transparent pb-2 pt-1 text-sm font-light text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-forest transition-colors duration-200'
  const labelClass = 'block text-[10px] tracking-widest uppercase text-forest mb-1'
  const errorClass = 'text-[10px] text-red-500 mt-1'

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
        <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center">
          <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-forest">Thank you!</h3>
        <p className="text-sm font-light text-charcoal/60 text-center max-w-xs">
          We&apos;ve received your enquiry and will be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Name</label>
          <input className={inputClass} placeholder="Your name" value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input className={inputClass} type="email" placeholder="your@email.com" value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
        <div>
          <label className={labelClass}>Wedding Date</label>
          <input className={inputClass} type="date" value={form.date}
            onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
          {errors.date && <p className={errorClass}>{errors.date}</p>}
        </div>
        <div>
          <label className={labelClass}>Guest Count</label>
          <input className={inputClass} type="number" placeholder="Approx. guests" value={form.guests}
            onChange={e => setForm(f => ({ ...f, guests: e.target.value }))} />
          {errors.guests && <p className={errorClass}>{errors.guests}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Items Interested In</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {ITEM_OPTIONS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => toggleItem(value)}
              className={`text-[10px] tracking-wide uppercase px-3 py-1.5 rounded-sm border transition-all duration-200 ${
                form.items.includes(value)
                  ? 'bg-forest text-ivory border-forest'
                  : 'border-linen text-charcoal/60 hover:border-forest'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {errors.items && <p className={errorClass}>{errors.items}</p>}
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea
          className={`${inputClass} resize-none`}
          rows={3}
          placeholder="Tell us about your wedding..."
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        />
      </div>

      {status === 'error' && (
        <p className="text-xs text-red-500">Something went wrong. Please try again or call us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 bg-forest text-ivory text-[11px] tracking-[0.2em] uppercase rounded-sm hover:bg-forest/90 disabled:opacity-60 transition-all duration-200 hover:scale-[1.01]"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  )
}
