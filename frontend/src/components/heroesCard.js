import React, {Component} from "react";
import { CardBody, Row, Col } from 'reactstrap';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';



class HeroesCard extends Component {

 heroesCardMap = () => {
    const heroesData = this.props.heroesDatas;
    return heroesData.map( (heroesData, index) =>{
        return(
            <Row key={index}>
                <Col xs="1">
                    <CardBody>
                    <p>ID : {heroesData._id}</p>
                    <p>NAME : {heroesData.name}</p>
                    <p>RACE : {heroesData.race}</p>
                    </CardBody>
                </Col>
            </Row>
        )
    })
}
    render(){
        // console.log("HC props",this.props)
      
            return(
                <div>
                    <h1>Heroes List</h1>
                    {this.heroesCardMap()}
                </div>
            )
    }
}

export default HeroesCard;