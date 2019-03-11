import styled from 'styled-components';

export const Container = styled.div`
	@media (min-width: 815px) {
		button {
			display: none;
		}
	}

	.toggle_btn {
		width: 40px;
		height: 40px;
		border-radius: 8px;
		background: #0d2f4f;
		color: white;
		font-size: 1rem;
		border: 0;
		align-self: flex-start;
		margin-bottom: 0.5rem;
		margin-top: 1rem;
		cursor: pointer;
	}
`;

const StyledChats = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 815px) {
		button {
			display: none;
		}
	}

	@media (max-width: 815px) {
		.toggle_btn {
			width: 40px;
			height: 40px;
			border-radius: 8px;
			background: #0d2f4f;
			color: white;
			font-size: 1rem;
			border: 0;
			align-self: flex-start;
			margin-bottom: 10px;
			cursor: pointer;
		}

		width: auto;
		overflow-y: scroll;
		padding: 20px;
		position: relative;
		background: white;
		position: fixed;
		height: 100%;
		top: 0;
		right: 0;
		bottom: 0;
		transform: translateX(100%);
		transition: all 0.3s;
		box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
		z-index: 5;
		${props => props.open && `transform: translateX(0);`}
	}
`;

export default StyledChats;
