import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { createShallow } from '@material-ui/core/test-utils';

import EventItemType from './EventItemType'

import goal from '../../../assets/icons/goal.png';
import penalty from '../../../assets/icons/penalty.png';
import yellowCard from '../../../assets/icons/yellowCard.png';
import redCard from '../../../assets/icons/redCard.png';
import subst from '../../../assets/icons/subst.png';

configure({ adapter: new Adapter() });

describe('<EventItemType/>', () => {
    let shallow;

    beforeEach(() => {
        shallow = createShallow()
    })

    it("Component must be goal with penalty", () => {
        const detail = "Penalty"
        const wrapper = shallow(<EventItemType type="Goal" detail={detail} />)
        expect(wrapper.props().detail).toEqual(detail)
        expect(wrapper.props().variant).toEqual(penalty)
    })

    it("Component must be red card", () => {
        const detail = "Red Card"
        const wrapper = shallow(<EventItemType type="Card" detail={detail} />)
        expect(wrapper.props().detail).toEqual(detail)
        expect(wrapper.props().variant).toEqual(redCard)
    })

    it("Component must be empty", () => {
        const wrapper = shallow(<EventItemType type="Empty" detail="Empty" />)
        expect(wrapper.props()).toEqual({})
    })
})