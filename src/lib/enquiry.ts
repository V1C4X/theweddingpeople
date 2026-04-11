export interface EnquiryData {
  name: string
  email: string
  date: string
  guests: string
  items: string[]
  message: string
}

export interface EnquiryErrors {
  name?: string
  email?: string
  date?: string
  guests?: string
  items?: string
  message?: string
}

export function validateEnquiry(data: EnquiryData): EnquiryErrors {
  const errors: EnquiryErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Please enter your name'
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email.trim()) {
    errors.email = 'Please enter your email'
  } else if (!emailRe.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.date) {
    errors.date = 'Please enter your wedding date'
  }

  if (!data.guests.trim()) {
    errors.guests = 'Please enter approximate guest count'
  } else if (isNaN(Number(data.guests)) || Number(data.guests) < 1) {
    errors.guests = 'Please enter a valid number'
  }

  if (data.items.length === 0) {
    errors.items = 'Please select at least one item'
  }

  return errors
}

export function isValid(errors: EnquiryErrors): boolean {
  return Object.keys(errors).length === 0
}
