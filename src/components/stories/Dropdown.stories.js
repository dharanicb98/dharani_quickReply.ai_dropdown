import React from 'react';
import Dropdown from '../dropdown/dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text' },
    labelVisibility: {
      control: {
        type: 'radio',
        options: ['Visible', 'Hidden'],
      },
    },
    status: {
      control: {
        type: 'radio',
        options: ['Unfilled', 'Filled', 'Disabled', 'Error'],
      },
    },
    labelIconVisibility: {
      control: {
        type: 'radio',
        options: ['Visible', 'Hidden'],
      },
    },
    leftIconVisibility: {
      control: {
        type: 'radio',
        options: ['Visible', 'Hidden'],
      },
    },
    helperText: { control: 'text' },
    required: {
      control: {
        type: 'radio',
        options: ['Yes', 'No'],
      },
    },
    text: { control: 'text' },
    type: {
      control: {
        type: 'radio',
        options: ['SingleNoIcon', 'SingleRadio', 'Multi'],
      },
    },
    activeItemIndex: { control: 'number' },
    items: { control: 'array' },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Dropdown Label',
  labelVisibility: 'Visible',
  status: 'Unfilled',
  labelIconVisibility: 'Visible',
  leftIconVisibility: 'Visible',
  helperText: 'Helper text goes here',
  required: 'No',
  text: 'Select an option',
  type: 'SingleNoIcon',
  activeItemIndex: -1,
  items: ['Option 1', 'Option 2', 'Option 3'],
};
