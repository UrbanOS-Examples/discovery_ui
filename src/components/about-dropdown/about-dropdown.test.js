import { shallow } from 'enzyme'
import AboutDropdown from './about-dropdown';

describe('about dropdown', () => {
  test('starts collapsed', () => {
    const subject = shallow(<AboutDropdown />)
    expect(subject.find('.about-contents')).toHaveLength(0)
  })

  test('expands on mouse enter', () => {
    const subject = shallow(<AboutDropdown />)
    subject.find('.about-dropdown').simulate('mouseEnter')
    expect(subject.find('.about-contents')).toHaveLength(1)
  })

  test('collapses on mouse exit', () => {
    const subject = shallow(<AboutDropdown />)
    subject.find('.about-dropdown').simulate('mouseEnter')
    expect(subject.find('.about-contents')).toHaveLength(1)

    subject.find('.about-dropdown').simulate('mouseLeave')
    expect(subject.find('.about-contents')).toHaveLength(0)
  })
})
