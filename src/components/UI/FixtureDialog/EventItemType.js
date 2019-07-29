import React from 'react';

import goal from '../../../assets/icons/goal.png';
import penalty from '../../../assets/icons/penalty.png';
import yellowCard from '../../../assets/icons/yellowCard.png';
import redCard from '../../../assets/icons/redCard.png';
import subst from '../../../assets/icons/subst.png';

const GOAL = "Goal"
const CARD = "Card"
const SUBST = "subst"


export const EventItemIcon = props => (
    <img src={props.variant} alt={props.detail} width="20" height="20" style={{ paddingLeft: "10px", paddingRight: "10px" }} />
)
const EventItemType = props => {
    let variant
    switch (props.type) {
        case GOAL:
            variant = 'Penalty' === props.detail ? penalty : goal;
            return <EventItemIcon variant={variant} detail={props.detail} />
        case CARD:
            variant = 'Yellow Card' === props.detail ? yellowCard : redCard;
            return <EventItemIcon variant={variant} detail={props.detail} />
        case SUBST:
            return <span><EventItemIcon variant={subst} detail={props.detail} />{props.detail}</span>
        default:
            return <div></div>
    }
}

export default EventItemType;