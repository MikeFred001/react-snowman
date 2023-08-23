import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman.js";


it("renders without crashing", function () {
  render(<Snowman />);
});



// it("matches snapshot", function () {
//   const { container } = render(<Snowman />);
//   expect(container).toMatchSnapshot();
// });



it("Hides buttons and shows lose html on loss", function () {
  const { container, debug } = render(<Snowman />);
  console.log("CONTAINER>>>>>", container);

  let buttons = container.querySelector(".Snowman-buttons");
  let loseMessage = container.querySelector(".Snowman-lose-message");

  expect(buttons).toBeInTheDocument();
  expect(loseMessage).toEqual(null);

  const uButton = container.querySelector(`button[value="u"]`);
  const xButton = container.querySelector(`button[value="x"]`);
  const bButton = container.querySelector(`button[value="b"]`);
  const yButton = container.querySelector(`button[value="y"]`);
  const zButton = container.querySelector(`button[value="z"]`);
  const vButton = container.querySelector(`button[value="v"]`);

  fireEvent.click(uButton);
  fireEvent.click(xButton);
  fireEvent.click(bButton);
  fireEvent.click(yButton);
  fireEvent.click(zButton);
  fireEvent.click(vButton);

  loseMessage = container.querySelector(".Snowman-lose-message");
  buttons = container.querySelector(".Snowman-buttons");

  expect(loseMessage).toBeInTheDocument();
  expect(buttons).toEqual(null);

});


