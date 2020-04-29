import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { Thumbnail } from './Thumbnail';

describe('<Thumbnail/>', () => {
  describe('Small render', () => {
    it('should render small', () => {
      const thumbnail = mount(
        <Thumbnail size='small' backgroundColor='gray' text='Logo' />
      );

      expect(thumbnail).toMatchSnapshot();
    });
  });

  describe('Medium render', () => {
    it('should render medium', () => {
      const thumbnail = mount(
        <Thumbnail size='medium' backgroundColor='gray' text='Logo' />
      );

      expect(thumbnail).toMatchSnapshot();
    });
  });

  describe('Large render', () => {
    it('should render large', () => {
      const thumbnail = mount(
        <Thumbnail size='large' backgroundColor='gray' text='Logo' />
      );

      expect(thumbnail).toMatchSnapshot();
    });
  });

  describe('Yellow render', () => {
    it('should render yello', () => {
      const thumbnail = mount(
        <Thumbnail size='small' backgroundColor='yellow' text='Logo' />
      );

      expect(thumbnail).toMatchSnapshot();
    });
  });

  describe('Text render', () => {
    it('should render text substring', () => {
      const thumbnail = mount(
        <Thumbnail
          size='small'
          backgroundColor='yellow'
          text='Some other text'
        />
      );

      const span = thumbnail.find('span');
      expect(span).toBeTruthy();
      expect(span.exists('.letters')).toEqual(true);
      expect(span.exists('.icon')).toEqual(false);
      expect(span.text()).toEqual('So');
    });
  });

  describe('Icon render', () => {
    it('should render an icon and no text', () => {
      const thumbnail = mount(
        <Thumbnail
          size='small'
          backgroundColor='yellow'
          text='Some other text'
          iconSource='fakelogo.png'
        />
      );

      const span = thumbnail.find('span');
      expect(span).toBeTruthy();
      expect(span.exists('.letters')).toEqual(false);
      expect(span.exists('.icon')).toEqual(true);
    });
  });
});
