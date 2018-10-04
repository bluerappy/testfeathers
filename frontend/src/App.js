import React, { Component } from 'react';
import './App.css';
import HeroesForm from "../src/components/heroesForm";
import HeroesCard from "./components/heroesCard";
import { fetchHeroes } from '../src/actions/createHeroes-actions';
import { postHeroes } from '../src/actions/postHeroes-actions';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    load : true
  }

componentDidMount() {
   console.log("componentdidmount")
   
    // this.props.postHeroes();
    this.props.fetchHeroes();
  }
  render() {
    console.log("render")
    if (this.state.load === false) {
      return (
        <div className="App">
         <p>LOADING</p>
        </div>
      );
    }
    else {
      console.log("appJS CL this.props.heroesStore",this.props.heroesStore)
      console.log("appJS CL this.props.newHeroesStore",this.props.newHeroesStore)
      return (
        <div className="App">
          <HeroesForm/>
          <HeroesCard heroesDatas={this.props.heroesStore}/>
        </div>
      );
    }
  }
}

//HEROES LIST ARRAY AVAILABLE IN PROPS
function mapStateToProps(state) {
  return {
      heroesStore : state.heroesStore.heroes,
      newHeroesStore : state.newHeroesStore.newHeroes
  }
}

export default connect(mapStateToProps, { fetchHeroes})(App);
