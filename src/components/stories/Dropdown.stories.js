import React from 'react';
import Dropdown from '../dropdown/dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text' },
    labelVisibility: { control: 'select', options: ['Visible', 'Hidden'] },
    status: { control: 'select', options: ['Unfilled', 'Filled', 'Disabled', 'Error'] },
    labelIconVisibility: { control: 'select', options: ['Visible', 'Hidden'] },
    leftIconVisibility: { control: 'select', options: ['Visible', 'Hidden'] },
    helperText: { control: 'text' },
    required: { control: 'select', options: ['Yes', 'No'] },
    text: { control: 'text' },
    type: { control: 'select', options: ['SingleNoIcon', 'SingleRadio', 'Multi'] },
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
  labelIconVisibility: 'Hidden',
  leftIconVisibility: 'Visible',
  helperText: 'This is a helper text',
  required: 'No',
  text: 'Select an item',
  type: 'SingleNoIcon',
  activeItemIndex: -1,
  items: ['Item 1', 'Item 2', 'Item 3'],
};
