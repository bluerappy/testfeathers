import React from "react";
import { postHeroes } from '../actions/postHeroes-actions';
import { connect } from 'react-redux';

class HeroesForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name:"",
                     race:""};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      console.log(this.state.name)
      this.props.postHeroes(this.state)
      //  event.preventDefault();
    }

    onclick() {
      // postHeroes()
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input name="name" type="text" onChange={this.handleChange} />
          </label>     
          <label>
            Race:
            <input name="race" type="text" onChange={this.handleChange} />
          </label>        
          <input type="submit" value="Submit"/>
          <button onClick={this.onclick}>ADD</button>
        </form>
      );
    }
  }

  //HEROES LIST ARRAY AVAILABLE IN PROPS
function mapStateToProps(state) {
  return {
      heroesStore : state.heroesStore.heroes,
      newHeroesStore : state.newHeroesStore.newHeroes
  }
}


  export default connect(mapStateToProps,{postHeroes})(HeroesForm);