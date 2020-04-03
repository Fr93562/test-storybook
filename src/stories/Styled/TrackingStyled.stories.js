import React from 'react';
import styled from 'styled-components';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Styled/Tracking',
};

/* Provoque une erreur de compilation: fn.apply is not a function */
 // export const SectionBodyhey = styled.div`
  //  margin-bottom: 10px;
  //  &:last-child {
 //     margin-bottom: 0;
 //   }
 // `;

/* Modèle récupéré sur le site de storybook */
// const styles = {
//   textAlign: 'center',
//   };
//   const Center = ({ children }) => <div style={styles}>{children}</div>;

const styleSectionBody = {
  marginBottom: '10px',
  isLastChild: { marginBottom: '0' }, // &:last-child {margin-bottom: 0; } est le parametre d'origine. la modif n'a pas encore été testé
};
export const SectionBody = ({ children }) => <div style={styleSectionBody}>{children}</div>;

