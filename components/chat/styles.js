import styled from 'styled-components';

const StyledChat = styled.div`
	width: 300px;
	height: 100px;
	background-color: ${props => props.theme.white};
	padding: 4px 8px 4px 8px;
	margin-bottom: 1rem;
	box-shadow: ${props => props.theme.boxShadow};
	border: ${props => props.theme.border};
	border-radius: 8px;
	display: inline-flex;
	overflow: hidden;
	text-overflow: string;

	.online_flag {
		width: 5px;
		height: 10px;
		margin-left: 0px;
	}

	.dot {
		width: 7px;
		height: 7px;
		background-color: #04bcf0;
		border-radius: 50%;
		position: relative;
		top: 40px;
	}

	img {
		vertical-align: middle;
		width: 60px;
		height: 55px;
		border-radius: 50%;
		object-fit: cover;
	}

	span {
		display: flex;
		align-items: center;
		position: relative;
		left: 10px;
	}

	.name_mes {
		display: flex;
		flex-direction: column;
		margin-left: 8px;
		margin-top: 4px;
	}

	.name {
		font-weight: bold;
		line-height: 12px;
		font-size: 18px;
		margin-bottom: 1px;
	}

	.last_message {
		color: #b3bdc9;
		font-weight: 500;
		font-size: 13px;
		font-height: 2px;
		margin-top: 3px;
		margin-bottom: 2px;
		width: 125px;
		height: 30px;
		white-space: nowrap;
	}

	.last_seen {
		font-weight: 900;
		line-height: 13px;
		font-size: 11px;
		position: relative;
		left: 50px;
		bottom: 14px;
	}
`;

export default StyledChat;
