import React, {useState} from 'react';
import CardTitle from './CardTitle.js';
import CardContent from './CardContent.js';

const Card = ({ user }) => {
    const [cardOpen, setCardOpen] = useState(false);

    const handleClick = () => {
    	setCardOpen(!cardOpen);
    }


	console.log(user);

	const titleContent = {firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role}
    const cardContent = {street: user.street, city: user.city, state: user.state, zip: user.zip, phone: user.phone, createdAt: user.createdAt, lastLoggedIn: user.lastLoggedIn}


    return (
        <div className="card mt-3 bg-white shadow-md" onClick={handleClick}>
        	<CardTitle titleContent={titleContent} cardOpen={cardOpen}/>
	    	<CardContent cardContent={cardContent} cardOpen={cardOpen}/>

        </div>
    );
};

Card.displayName = 'Card';
export default Card;
