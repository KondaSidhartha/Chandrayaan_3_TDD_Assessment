// Test Case (compilation will fail):
test('Executing the "f" command updates the position correctly', () => {
  const { getByText, getByLabelText } = render(<Chandrayaan3 />);

  fireEvent.change(getByLabelText("Enter Command:"), {
    target: { value: "f" },
  });
  fireEvent.click(getByText("Execute Command"));

  expect(getByText("Current Position: (0, 1, 0)")).toBeInTheDocument();
  expect(getByText("Current Direction: N")).toBeInTheDocument();
});
