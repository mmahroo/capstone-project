
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import Reservation from "./Reservation";


  test("renders the form and handle form submission", () => {
    const handleSubmit = jest.fn();
    render(<Reservation onSubmit = {handleSubmit} />);

    const LinkElement = screen.getByText("Reserve a table");
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const dateInput = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByText(/confirm reservation/i);

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    fireEvent.change(dateInput, { target: { value: "2023-06-01" } });
    fireEvent.change(timeSelect, { target: { value: "17:00" } });
    fireEvent.change(guestsInput, { target: { value: "2" } });
    fireEvent.change(occasionSelect, { target: { value: "birthday" } });


    expect(LinkElement).toBeInTheDocument();
    expect(firstNameInput.value).toBe("John");
    expect(lastNameInput.value).toBe("Doe");
    expect(emailInput.value).toBe("johndoe@example.com");
    expect(dateInput.value).toBe("2023-06-01");
    expect(timeSelect.value).toBe("17:00");
    expect(guestsInput.value).toBe("2");
    expect(occasionSelect.value).toBe("birthday");

      // Submit the form
    fireEvent.click(submitButton);
  });
