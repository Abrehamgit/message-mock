import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Centered, Inner } from './styles';
import Meta from '../meta/meta';
import Header from '../header/header';
import Chats from '../chats/chats';
import MessageRoom from '../messageRoom/messageRoom';

// theme use thoughout the entire app

const theme = {
  white: '#FFFFFF',
  lightBlue: '#04BCF0',
  lightGray: '#B3BDC9',
  border: '1px solid #E9E9E9',
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)'
};

// global styles to the html and body

const GlobalStyle = createGlobalStyle`
   html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    font-family: 'helvetica' , 'roboto';
    background-color: #F4FBFF;
    line-height: 2;
    color: #0D2F4F;
  }
  button {  font-family: 'roboto' , 'helvetica'; }
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <ThemeProvider theme={theme}>
          <Centered>
            <Header />
            <Inner>
              <Chats />
              <MessageRoom />
            </Inner>
          </Centered>
        </ThemeProvider>
        <GlobalStyle />
      </div>
    );
  }
}

export default Page;
