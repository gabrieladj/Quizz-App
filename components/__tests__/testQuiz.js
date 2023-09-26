// pages/__tests__/quizPage.test.js
import { render, screen } from '@testing-library/react';
import QuizPage from '../quiz/page'; // Import our component

test('renders quiz page', () => {
  render(<Quiz />);

  // Use queries from @testing-library/react to assert on your component's behavior
  const heading = screen.getByText(/Quiz/);
  expect(heading).toBeInTheDocument();
});
