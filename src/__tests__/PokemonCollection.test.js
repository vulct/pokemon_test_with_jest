import { shallow } from "enzyme";
import PokemonCollection from "../components/PokemonCollection";

describe("PokemonCollection", () => {
  let wrapper;

  beforeEach(() => {
    const testItems = [
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
  
});
