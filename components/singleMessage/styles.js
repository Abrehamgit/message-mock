import styled from 'styled-components';

const StyledMessage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${props => (props.owner === 1 ? 'flex-start' : 'flex-end')}
	margin-bottom: 30px;
	margin-right: 40px;
	.message {
		max-width: 420px;
		max-height: 121px;
		color: ${props => props.theme.white};
		font-weight: 500;
		line-height: 22px;
		font-size: 12px;
		border-radius: 6px;
		padding: 17px 15px 17px 15px;
		background-color: ${props =>
			props.owner === 0 ? props.theme.lightBlue : props.theme.lightGray};
	}

	.date {
		font-weight: bold;
		line-height: 13px;
		font-size: 10px;
		color: rgba(42, 49, 55, 0.4);
		margin-top: 17px;
	}
`;

export default StyledMessage;
