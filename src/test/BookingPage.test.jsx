import { it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router';
import { BookingPage } from "../pages";

it('setting date in the form', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>)
    const inputDate = screen.getByTestId('booking-date')
    const date = new Date()
    const appendZero = (num) => num < 10 ? `0${num}` : num
    expect(inputDate.value, {target: {value: `${date.getFullYear()}-${appendZero(date.getMonth() + 1)}-${appendZero(date.getDate())}`}})
    date.setDate(date.getDate() + 1)
    fireEvent.change(inputDate, {target: {value: `${date.getFullYear()}-${appendZero(date.getMonth() + 1)}-${appendZero(date.getDate())}`}})
    const inputTime = screen.getByTestId('booking-time')
    expect(inputTime.value).toContain("15:00")
})

it('changing number of guests', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>)
    const guestNumber = screen.getByTestId('number-guests')
    expect(guestNumber.textContent, '1')
    const incrementButton = screen.getByTestId('increment-guests')
    fireEvent.click(incrementButton)
    expect(guestNumber.textContent, '2')
    const decrementButton = screen.getByTestId('decrement-guests')
    fireEvent.click(decrementButton)
    expect(guestNumber.textContent, '1')
})

it('reading and writing to local storage', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>)
    const inputDate = screen.getByTestId('booking-date')
    const date = new Date()
    const appendZero = (num) => num < 10 ? `0${num}` : num
    expect(inputDate.value, {target: {value: `${date.getFullYear()}-${appendZero(date.getMonth() + 1)}-${appendZero(date.getDate())}`}})
    date.setDate(date.getDate() + 1)
    fireEvent.change(inputDate, {target: {value: `${date.getFullYear()}-${appendZero(date.getMonth() + 1)}-${appendZero(date.getDate())}`}})
    const inputTime = screen.getByTestId('booking-time')
    expect(inputTime.value).toContain("15:00")
    const submitButton = screen.getByTestId('submit-button')
    fireEvent.click(submitButton)
    const localStorageObject = JSON.parse(localStorage.getItem('formData'))[0]
    expect(localStorageObject.bookTime, "15:00")
})