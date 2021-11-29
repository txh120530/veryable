import React from 'react';
import Card from './Card.js'

const CardsContainer = ({ users }) => {
    return (
        <>
        {users.length > 0 && users.map(
	    	(user) =>
	    		<Card key={user.id} user={user} />
		)}	
        </>
    );
};

CardsContainer.displayName = 'CardsContainer';


export default CardsContainer;
