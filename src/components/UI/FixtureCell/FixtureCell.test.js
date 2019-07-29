import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { configure } from 'enzyme'
import FixtureDialog from '../FixtureDialog/FixtureDialog';
import Adapter from 'enzyme-adapter-react-16';
import { createShallow } from '@material-ui/core/test-utils';
import FixtureCell from './FixtureCell'

configure({ adapter: new Adapter() });

describe('<FixtureCell />', () => {
    let shallow;
    const homeTeamMock = {
        team_id: 4
    }
    const awayTeamMock = {
        team_id: 4
    }
    const scoreMock = {
        halftime: '0-0',
        fulltime: '2-1'
    }

    beforeEach(() => {
        shallow = createShallow()
    })

    it('Imitate click', () => {
        const wrapper = shallow(
            <FixtureCell
                homeTeam={homeTeamMock}
                score={scoreMock}
                awayTeam={awayTeamMock}
            />
        );

        wrapper.find(TableRow).simulate('click')

        expect(wrapper.find(FixtureDialog)).toHaveLength(1)
    })

    it('Count table cell', () => {
        const wrapper = shallow(
            <FixtureCell
                homeTeam={homeTeamMock}
                score={scoreMock}
                awayTeam={awayTeamMock}
            />
        );

        expect(wrapper.find(TableCell)).toHaveLength(4)
    })

    it('Test component representation', () => {

        const wrapper = shallow(
            <FixtureCell
                homeTeam={homeTeamMock}
                score={scoreMock}
                awayTeam={awayTeamMock}
            />
        );

        expect(wrapper.text()).toMatch(`${scoreMock.halftime}(${scoreMock.fulltime})`);
    });
})