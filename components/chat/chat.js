//only a single chat avatar here
import React from 'react';
import StyledChat from './styles';

const Chat = ({ person }) => {
	return (
		<StyledChat>
			<div className="online_flag">
				{person.online && <div className="dot"> </div>}{' '}
			</div>
			<span>
				<img src={person.avatar} alt={person.name} />
				<div className="name_mes">
					<p className="name"> {person.name} </p>
					<div className="last_message"> {person.lastMessage} </div>
				</div>
				<p className="last_seen"> {person.lastSeen} </p>
			</span>
		</StyledChat>
	);
};

export default Chat;
