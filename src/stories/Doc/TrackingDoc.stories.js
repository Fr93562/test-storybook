import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
  title: 'Doc/Tracking',
  component: Button,
  decorators: [withKnobs],
};

export const toDelete = () => <Button onClick={action('clicked')}> My first test</Button>;

