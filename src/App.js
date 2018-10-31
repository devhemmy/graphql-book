import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo"

//components
import BookList from "./components/BookList"
import AddBook from "./components/AddBook"
const client = new ApolloClient({
  uri:"https://hemmy-app.herokuapp.com/graphql"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Hemmy App!</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>

    );
  }
}

export default App;
