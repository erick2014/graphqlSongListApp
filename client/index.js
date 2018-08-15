// react stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
// apollo stuff
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './style/style.css'

// components
import App from './components/App.js'
import HomePage from './components/HomePage/index'
import AuthForm from './components/HomePage/AuthForm'

import SongList from './components/SongList/index'
import SongCreate from './components/SongCreate'
import SongDetail from './components/SongDetail/index'

const cache = new InMemoryCache({
  dataIdFromObject: obj => obj.id
})

const client = new ApolloClient({
  link: new HttpLink(),
  cache
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage} />
          <Route path="signIn" component={AuthForm} />
          <Route path="signUp" component={AuthForm} />
          <Route path="songs" component={SongCreate} />
          <Route path="songs/new" component={SongCreate} />
          <Route path="song/:songId" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
