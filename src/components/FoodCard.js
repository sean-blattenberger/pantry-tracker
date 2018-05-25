import React from "react";
import { Card, Col, Button, Input} from "react-materialize";
import Row from "react-materialize/lib/Row";

class FoodCard extends React.Component {
  state = {
    food: {},
    editable: false
  }
  makeEditable = (event) => {
    event.preventDefault();
    this.setState({editable: true})
  }
  handleChange = (event) => {
    console.log('changed!!!', { [event.target.name]: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  }
  submitChange = (event) => {
    event.preventDefault();
    // this.setState({food})
    this.props.update(this.state.food)
  }
  render() {
    return (
      <Col offset="m1" m={4} s={12}>
        <Card key={this.props.index} className='white' textClassName='black-text' title={<h3>Food Card</h3>} actions={[<Button key={this.props.index} className="delete-button red black-text" href='/delete'>Delete Item</Button>, <Button key={this.props.index} onClick={this.makeEditable} className="black-text" href='/update'>Update Item</Button>]}>
          <form onSubmit={this.submitChange}>
            <Row>
              {this.state.editable ? <Input name="name" type="text" onChange={this.handleChange} value={this.state.food.name} defaultValue={this.props.food.name}></Input> : this.props.food.name}
            </Row>
            <Row>
              {this.state.editable ? <Input name="amount" type="text" onChange={this.handleChange} value={this.state.food.amount} defaultValue={this.props.food.amount}></Input> : this.props.food.amount}
            </Row>
            <Row>
              {this.state.editable ? <Input name="location" type="text" value={this.state.food.location} defaultValue={this.props.food.type}></Input> : this.state.food.location}
            </Row>
            <Row>
              {this.state.editable ? <Button type="submit">Update Item</Button> : ''}
            </Row>
          </form>
        </Card>
      </Col>
    )
  }
}

export default FoodCard;