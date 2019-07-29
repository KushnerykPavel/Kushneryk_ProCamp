import React from 'react';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { createShallow } from '@material-ui/core/test-utils';

import events_mock from '../../../mocks/events_mock.json'
import FixtureDialog, { EventListItem } from './FixtureDialog'

configure({ adapter: new Adapter() });
describe('<FixtureDialog/>', () => {
    let shallow;

    beforeEach(() => {
        shallow = createShallow()
    })

    it("Check correct length of events list", () => {

        const wrapper = shallow(<FixtureDialog
            data={events_mock.events}
        />)

        expect(wrapper.find(EventListItem)).toHaveLength(13)
    })
})