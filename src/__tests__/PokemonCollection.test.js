import { shallow } from "enzyme";
import PokemonCollection from "../components/PokemonCollection";
import PokemonList from "../components/PokemonList";


describe("PokemonCollection", () => {
  let wrapper;
  let testItems;

  beforeEach(() => {
    testItems = [
      {
        id: 1,
        name: "bob",
        sprites: {
          front_default: "123",
        },
      },
      {
        id: 2,
        name: "james",
        sprites: {
          front_default: "456",
        },
      },
    ];

    wrapper = shallow(<PokemonCollection pokemons={testItems} />);
  });

  it("Render <PokemonCollection>", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("length of collection should", () => {
    expect(wrapper.find(".collection-container")).toHaveLength(1);
  });

  it("test props", () => {
    // expect(wrapper.props()).toEqual(1);
    const header = shallow(<PokemonList name={'123'} image={'image'} />);
    expect(header.find(".pokemon-name").text()).toBe("123");
  })
});
