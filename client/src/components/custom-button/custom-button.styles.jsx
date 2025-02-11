import styled, { css } from 'styled-components';


const invertedButtonStyles = css`
background-color: white;
color: black;
border: 1px solid black;
&:hover {
    background-color: black;
    color: white;
    border: none;
}
`;

const googleSignInStyles = css`
background-color: #4285f4;
color: white;
&:hover {
    background-color: #0852c9;
    border: none;
}
`;

const getButtonStyles = (props) => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }
    return props.inverted ? invertedButtonStyles : '';
};

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    border: none;
    display: flex;
    justify-content: center;
    cursor: pointer;
    ${getButtonStyles}

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

`;
