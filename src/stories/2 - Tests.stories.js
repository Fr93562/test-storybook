import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
  title: 'Tests Nec',
  component: Button,
  decorators: [withKnobs],
};

export const test1 = () => <Button onClick={action('clicked')}> My first test</Button>;

export const test2 = () => <p> My first p </p>;

export const test3 = () => <h1> My first h1</h1>;

let var1 = "test";
export const test4 = () => <Button onClick={action('clicked')}> {var1}</Button>;

let content = "myContent";
let url = "https://www.google.fr/";
export const button1 = () =>  <form method="get" action={url}>
                                <button type="submit" formtarget="_blank">{content}</button>
                              </form>;


/**
 * Demande de Ramy: 2 façons de générer des boutons dynamiques
 */

 /**
  * Utilisation du système de props
  * "Url" et "Content" correspondent aux propriétés modifiables Knobs
  * 
  * Si props X existe alors la valeur X est affichée sinon la valeur par défaut
  */
export const reactPropsButton = () => (

  <form method="get" action={ text("Url", null) ? (text("Url")) : ("/")}> 
    <button type="submit" formtarget="_blank">{ text("Content", null) ? (text("content")) : ("Default Content Props") }</button>
  </form>
);

/**
 * Utilise des variables
 * "Url" et "Content" correspondent aux propriétés midiables Knobs
 * 
 * Dans chaque cas, la variable est stockée puis testée via un if. Si la variable n'existe pas, on passe la valeur par défaut.
 */
export const dynamicVariableButton = () => {

  let url = text("Url", null);
  let content = text("Content", null);

  if(!content) {

    content = "Default Content Dynamic";
  }
  if (!url) {

    url = "/";
  }

  return <form method="get" action={url}>
            <button type="submit" formtarget="_blank">{content}</button>
          </form>;
};