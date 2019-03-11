//header only .... message text
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
	width: 100%;
	border-bottom: solid rgba(233, 233, 233, 0.5) 2px;
	padding-left: 1rem;
	margin-bottom: 1.6rem;
	font-size: 1.6rem;
	font-weight: 600;
	display: flex;
	justify-content: center;
`;

const Header = props => <StyledHeader> Messages </StyledHeader>;

export default Header;
