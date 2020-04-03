import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
  title: 'Component/Tracking',
  component: Button,
  decorators: [withKnobs],
};

/**
 * Demande de Ramy: 2 façons de générer des boutons dynamiques
 */

 /**
  * Utilisation du système de props
  * "Url" et "Content" correspondent aux propriétés modifiables Knobs
  * 
  * Si props X existe alors la valeur X est affichée sinon la valeur par défaut
  */
export const render = () => (

  <form method="get" action={ text("Url", null) ? (text("Url")) : ("/")}> 
    <button type="submit" formtarget="_blank">{ text("Content", null) ? (text("Content")) : ("Default Content Props") }</button>
  </form>
);