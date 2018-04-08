/*
* react-test-renderer : virtually render our component
* ReactShallowRenderer : No user interaction or lifecycle events and does not render child component
*
* Snapshot allow us to track changes to data over time
* */
import React from "react"; // for JSX
import { shallow } from "enzyme";
import Header from "../../components/header";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});