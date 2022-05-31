import { shallow } from "enzyme";
import App from "../App";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe("<App />", () => {
  it("renders one <PokemonCollection /> component", () => {
    expect(wrapper.find("PokemonCollection")).toHaveLength(1);
  });

  it("renders header App component", () => {
    const header = <div className="pokemon-header">Pokemon</div>;
    expect(wrapper.contains(header)).toBe(true);
  });

  describe("show button", () => {
    it("renders button", () => {
      expect(wrapper.find(".btn")).toHaveLength(1);
    });

    it("calls onClick callback", () => {
      wrapper.find(".loadmore").simulate("click");
      expect(wrapper.find(".loadmore").text()).toBe("Loading");
    });
  });
});

test("snapshot App component", () => {
  expect(wrapper).toMatchSnapshot();
});
