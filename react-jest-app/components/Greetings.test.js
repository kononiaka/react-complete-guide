import { render, screen } from '@testing-library/react';
import Greetings from "./Greetings";

test('renders Hello World as a text', () => {
    //Arrange
    render(<Greetings />);

    //Act
    //nothing...

    //Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
});