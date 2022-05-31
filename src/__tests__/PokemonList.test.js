import { shallow } from "enzyme";
import PokemonList from "../components/PokemonList";

describe("PokemonList", function() {
    let wrapper;
    beforeEach(function() {
        wrapper = shallow(<PokemonList {...this.props} />);
    });

    it("should render without crashing", function() {
        expect(wrapper).toMatchSnapshot();
    });
});    