import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Accordion } from './Accordion';
import { Section } from './Section';

/**
 * Accordion Tests:
 *
 *  Opened Section would have 5 divs.
 *  Unopened Section has 3 divs.
 *
 *  These numbers are used to calcuate which sections are open vs closed.
 */

function sectionDivCount(accordion: ReactWrapper): number[] {
  return accordion.find(Section).map((sectionComponent: ReactWrapper) => {
    return sectionComponent.find('div').length;
  });
}

describe('<Accordion />', () => {
  it('should render default', () => {
    const accordionSection = mount(
      <Accordion>
        <Accordion.Section label='Some title'>Content</Accordion.Section>
      </Accordion>
    );
    expect(accordionSection).toMatchSnapshot();
  });

  it('should render a standlone section that is locked but still clickable', () => {
    const mockClick = jest.fn();
    const accordionSection = mount(
      <Accordion.Section label='Some title' locked open>
        Contet
        <button onClick={mockClick}></button>
      </Accordion.Section>
    );
    expect(
      getComputedStyle(accordionSection.getDOMNode()).getPropertyValue(
        'opacity'
      )
    ).toBe('0.5');
    expect(
      getComputedStyle(
        accordionSection
          .children()
          .childAt(1)
          .getDOMNode()
      ).getPropertyValue('pointer-events')
    ).toBe('none');
    accordionSection.simulate('click');
    accordionSection.find('button').simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('should render a standlone section that is locked and not clickable', () => {
    const accordionSection = mount(
      <Accordion.Section label='Some title' locked toggable={false}>
        Contet
      </Accordion.Section>
    );
    expect(
      getComputedStyle(accordionSection.getDOMNode()).getPropertyValue(
        'opacity'
      )
    ).toBe('0.5');
    accordionSection.simulate('click');
    expect(accordionSection.children().length).toBe(1);
  });

  it('should have them all be open', () => {
    const accordion = mount(
      <Accordion allSectionsOpened>
        <Accordion.Section label='Some title'>Content</Accordion.Section>
        <Accordion.Section label='Some title'>Content</Accordion.Section>
        <Accordion.Section label='Some title'>Content</Accordion.Section>
      </Accordion>
    );

    expect([...sectionDivCount(accordion)]).toEqual([5, 5, 5]);
  });

  it('should only have the first one opened', () => {
    const accordion = mount(
      <Accordion opened={[0]}>
        <Accordion.Section label='Some title'>Content</Accordion.Section>
        <Accordion.Section label='Some title'>Content</Accordion.Section>
        <Accordion.Section label='Some title'>Content</Accordion.Section>
      </Accordion>
    );
    expect([...sectionDivCount(accordion)]).toEqual([5, 3, 3]);
  });

  it('should be managed by the accordion parent, allowing only one section opened at a time', () => {
    const accordion = mount(
      <Accordion maxOneSectionOpen opened={[2]}>
        <Accordion.Section label='Some title' open>
          Contet
        </Accordion.Section>
        <Accordion.Section label='Some title' open>
          Contet
        </Accordion.Section>
        <Accordion.Section label='Some title'>Content</Accordion.Section>
      </Accordion>
    );
    expect([...sectionDivCount(accordion)]).toEqual([3, 3, 5]);
  });
});
