//header only .... message text
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
	width: 67%;
	@media (max-width: 600px) {
		width: 100%;
		padding-left: 1rem;
	}
	border-bottom: solid rgba(233, 233, 233, 0.5) 2px;
	margin-bottom: 1.6rem;
	font-size: 1.6rem;
	font-weight: 600;
	display: flex;
	justify-content: flex-start;
`;

const Header = props => <StyledHeader> Messages </StyledHeader>;

export default Header;
