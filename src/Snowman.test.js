import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman.js";

import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

const wrongHTML = `<p class="Snowman-wrong">Number wrong: 1</p>`;
const loseHTML = `
  <p>You Lose!</p>
  <p>Correct word: "apple"</p>
`;

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
  // const wrongLtr = document.findElementByAttribute();
  const nWrong = container.querySelector(".Snowman-wrong");

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

  const buttons = container.querySelector(".Snowman-buttons");
  expect(buttons).toContainHTML(loseHTML);

});


it("Hides buttons and shows lose html on loss", function () {
  const { container, debug } = render(<Snowman />);

  // const wrongLtr = document.findElementByAttribute();
  const nWrong = container.querySelector(".Snowman-wrong");

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


});

