class BoardCreation extends React.Component{
  constructor(props) {
    var todaysDate = new Date(),
        date = todaysDate.getDate() + '-' + todaysDate.getMonth() + '-' + todaysDate.getFullYear();
    super(props);
    this.state = { title:'', currentDate: date };
  }
   submitHandler = (event) => {
    event.preventDefault();
     alert("You are submitting " + this.state.title +  " on " + this.state.currentDate);
  }
  changeHandler = (event) => {
    this.setState({event.target.name);
  }
  render() {
    return (
      <form onSubmit ={this.submitHandler}>
        <p> Enter the board title here</p>
       <input type='text' name = 'title' onChange = {this.changeHandler} />
      <br/>
      <input type='submit' />
      </form>

    );
  }
}
