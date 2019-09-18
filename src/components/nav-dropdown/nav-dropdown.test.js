import { shallow } from 'enzyme'
import NavDropdown from './nav-dropdown';

describe('Nav dropdown', () => {
  const TITLE = '__ABOUT_TEST__'
  const ITEMS = {
    FIRST: {
      link: 'https://wwwwwwwww.com',
      text: 'The Power of the People'
    },
    SECOND: {
      link: 'https://www.example.com',
      text: 'The Power of Love'
    }
  };

  const DATA = {
    title: TITLE,
    items: [
      ITEMS.FIRST,
      ITEMS.SECOND
    ]
  };

  test('has passed in title', () => {
    const subject = shallow(<NavDropdown data={DATA} />)
    expect(subject.text().includes(TITLE)).toBe(true)
  })

  test('starts collapsed', () => {
    const subject = shallow(<NavDropdown data={DATA} />)
    expect(subject.find('.dropdown-contents')).toHaveLength(0)
  })

  test('expands on mouse enter', () => {
    const subject = shallow(<NavDropdown data={DATA} />)
    subject.find('.nav-dropdown').simulate('mouseEnter')
    expect(subject.find('.dropdown-contents')).toHaveLength(1)
  })

  test('expanded dropdown contains proper links', () => {
    const subject = shallow(<NavDropdown data={DATA} />)
    subject.find('.nav-dropdown').simulate('mouseEnter')

    expect(subject.find(`a[href="${ITEMS.FIRST.link}"]`)).toHaveLength(1)
    expect(subject.find(`a[href="${ITEMS.FIRST.link}"]`).text()).toEqual(ITEMS.FIRST.text)
    expect(subject.find(`a[href="${ITEMS.SECOND.link}"]`)).toHaveLength(1)
    expect(subject.find(`a[href="${ITEMS.SECOND.link}"]`).text()).toEqual(ITEMS.SECOND.text)
  })

  test('collapses on mouse exit', () => {
    const subject = shallow(<NavDropdown data={DATA} />)
    subject.find('.nav-dropdown').simulate('mouseEnter')
    expect(subject.find('.dropdown-contents')).toHaveLength(1)

    subject.find('.nav-dropdown').simulate('mouseLeave')
    expect(subject.find('.dropdown-contents')).toHaveLength(0)
  })
})
