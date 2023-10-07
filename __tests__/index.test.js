import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import HomePage from '@/components/HomePage';
import Navbar from '@/components/Navigation';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
 
describe('HomePage', () => {
  useRouter.mockReturnValue({ query: {}})
  it('renders a heading', () => {
    render(<HomePage />)

    // const heading = screen.getByRole('heading', {
    //   name: /welcome to next\.js!/i,
    // })

    expect(screen.getByText("Practice the Quiz and get smarter")).toBeInTheDocument()
  });
});
