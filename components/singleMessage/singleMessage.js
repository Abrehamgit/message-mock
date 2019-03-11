// will only have a single message

import React from 'react';
import moment from 'moment';
import StyledMessage from './styles';

const SingleMessage = ({ text }) => {
	console.log(text);
	return (
		<StyledMessage owner={text.owner}>
			<div className="message">{text.message}</div>
			<div className="date">
				{moment(text.date).format('MMM DD, YYYY')}
			</div>
		</StyledMessage>
	);
};

export default SingleMessage;
