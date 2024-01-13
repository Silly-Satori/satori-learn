import { PropTypes } from "prop-types";
function Button(props) {

    const { text, onClick, stylevar} = props;
    let classProps = "text-center mx-2 text-text text-xl bg-secondary font-semibold py-2 px-2 mt-2 rounded transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-md hover:shadow-shadow"
    if (stylevar) {
        classProps = stylevar;
    }
    return (
        <button
            className= {classProps}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

PropTypes.DefaultProps = {
    text: "Button",
    onClick: () => {},
};

export default Button;
