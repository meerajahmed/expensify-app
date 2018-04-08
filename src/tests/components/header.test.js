/*
* react-test-renderer : virtually render our component
* ReactShallowRenderer : No user interaction or lifecycle events and does not render child component
*
* Snapshot allow us to track changes to data over time
* */
import React from "react"; // for JSX
import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/header";

test("should render Header correctly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});