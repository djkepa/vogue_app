import styled, { css } from 'styled-components';

const buttonStyles = css`
	background-color: black;
	color: white;
	border: none;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

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
	background-color: #856c98;
	color: white;
	padding: 0 20px;
	letter-spacing: 0;
	line-height: 0;
	border: none;

	&:hover {
		background-color: #512e6c;
		padding: 0 20px;
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}

	return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	cursor: pointer;
	display: flex;
	justify-content: center;

	${getButtonStyles};
`;
