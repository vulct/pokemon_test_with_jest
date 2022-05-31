import { shallow } from "enzyme";
import App from "../App";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

test("snapshot App component", () => {
  expect(wrapper).toMatchSnapshot();
});

test("render loading when clicked load more", () => {
  wrapper.find(".loadmore").simulate("click");
  expect(wrapper.find(".loadmore").text()).toBe("Loading");
});


