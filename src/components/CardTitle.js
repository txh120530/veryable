import React from 'react';
import styled, { css } from 'styled-components';



import { ReactComponent as UserSVG } from '../assets/icons/user.svg';
import { ReactComponent as MoreSVG } from '../assets/icons/expand_more.svg';
import { ReactComponent as LessSVG } from '../assets/icons/expand_less.svg';

const handleColorType = role => {
  switch (role) {
    case "Administrator":
      return "#2081C3";
    case "User":
      return "#68AAAB";
    default:
      return "#7E7E7E";
  }
};


const IconWrapper = styled.div`
        svg {
            width: 50px;
            height: 50px;
            fill: ${({ role }) => handleColorType(role)};
        }
`;



const CardTitle = ({ titleContent, cardOpen }) => {
	const {firstName, lastName, email, role} = titleContent;
    console.log(role);
    return (
        <div class="card-title h-20 p-3 flex justify-between items-center">
        	<div className="flex justify-start items-center">
        		<IconWrapper role={role}><UserSVG className="userSVG mr-3"/></IconWrapper>
        		<div className="leading-tight">
        			<h3 className="text-xs font-semibold">{firstName} {lastName}</h3>
        			<span className="block">{email}</span>
        			<span className="block">{role}</span>
        		</div>
        	</div>


        	<div>
        		{cardOpen === true ? <LessSVG /> : <MoreSVG />}
        	</div>

        </div>
    );
};

CardTitle.displayName = 'CardTitle';

export default CardTitle;
