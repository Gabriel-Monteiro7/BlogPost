import React from 'react';
import {Switch, Route} from 'react-router-native';
// import
import Home from '~/pages/Home';
import Products from '~/pages/Home';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
      </Switch>
    </>
  );
}
