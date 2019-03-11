import styled from 'styled-components';

const StyledForm = styled.div`

	background-color: ${props => props.theme.white};
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 32px 30px 32px 30px;
	max-width: 570px;
	max-height: 500px;
	
	.messages{
		overflow-y: scroll;
	}
	

	form{
		width: 100%;
		padding-top: 0.5rem;
		display: grid;
		grid-gap: 15px;
		grid-template-columns: 4fr 1fr;

	}

	input {
		background-color: #f4fbff;
		border-radius: 8px;
		border: none;
		padding: 12px 4px 12px 4px;
		font-size: 15px;
		line-height: 22px
		font-weight: bold;
		outline: none;
		color: rgba(0,0,0,0.9)
	}

	button{
		background-color: #04BCF0;
		padding: 14px 30px 14px 30px;
		font-weight: bold;
		font-size: 16px;
		border: none;
		outline: none;
		border-radius: 8px;
		cursor: pointer;
		color: ${props => props.theme.white};
	}
		
 @media(min-width: 700px){

	.messages::-webkit-scrollbar-track{	
			box-shadow: inset 0 0 10px 10px ${props => props.theme.lightBlue};
    		border: solid 3px transparent;
		    border-radius: 10px;
		    background-color: ${props => props.theme.white};
		    display: flex;
		    flex-direction: column;
		    align-items: flex-end;

	}

	.messages::-webkit-scrollbar{
			width: 12px;
		    background-color: #F5F5F5;
	}

	.messages::-webkit-scrollbar-thumb{
		width: 30px;
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color:  #0D2F4F;
		opacity: 0.5;
	    box-shadow: inset 0 0 10px 10px #0D2F4F;
    	border: solid 3px transparent;
		
	}
 }
`;

export default StyledForm;
