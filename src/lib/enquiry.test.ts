import { describe, it, expect } from 'bun:test'
import { validateEnquiry, isValid } from './enquiry'

const valid = {
  name:    'Jane Smith',
  email:   'jane@example.com',
  date:    '2026-11-14',
  guests:  '60',
  items:   ['bar'],
  message: '',
}

describe('validateEnquiry', () => {
  it('returns no errors for valid data', () => {
    expect(isValid(validateEnquiry(valid))).toBe(true)
  })

  it('requires name', () => {
    const errors = validateEnquiry({ ...valid, name: '' })
    expect(errors.name).toBeDefined()
  })

  it('requires email', () => {
    const errors = validateEnquiry({ ...valid, email: '' })
    expect(errors.email).toBeDefined()
  })

  it('rejects malformed email', () => {
    const errors = validateEnquiry({ ...valid, email: 'notanemail' })
    expect(errors.email).toBeDefined()
  })

  it('requires date', () => {
    const errors = validateEnquiry({ ...valid, date: '' })
    expect(errors.date).toBeDefined()
  })

  it('requires guests', () => {
    const errors = validateEnquiry({ ...valid, guests: '' })
    expect(errors.guests).toBeDefined()
  })

  it('rejects non-numeric guests', () => {
    const errors = validateEnquiry({ ...valid, guests: 'many' })
    expect(errors.guests).toBeDefined()
  })

  it('requires at least one item', () => {
    const errors = validateEnquiry({ ...valid, items: [] })
    expect(errors.items).toBeDefined()
  })
})
