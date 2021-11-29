import React from 'react';

const CardContent = ({ cardContent, cardOpen }) => {
	const {street, city, state, zip, phone, createdAt, lastLoggedIn} = cardContent;
	const address = `${street}, ${city}, ${state} ${zip}`;


    return (
      <div style={{maxWidth: '314px'}} className={`px-3 pb-6 pl-10 mx-auto ${cardOpen === true ? 'block' : 'hidden'}`}>
      <div class="mt-4">
      	<span className="font-semibold block">
      		Address
      	</span>
      	<span>{address}</span>
      </div>

      <div class="mt-4">
      	<span className="font-semibold block">
      		Phone
      	</span>
      	<span>{phone}</span>
      </div>


      <div class="mt-4">
      	<span className="font-semibold block">
      		Created At
      	</span>
      	<span>{createdAt}</span>
      </div>


      <div class="mt-4">
      	<span className="font-semibold block">
      		Last Logged In
      	</span>
      	<span>{lastLoggedIn}</span>
      </div>
      </div>  
    );
};

CardContent.displayName = 'CardContent';

export default CardContent;
