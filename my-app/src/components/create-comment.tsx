class CommentCreation extends React.Component{
  constructor(props) {
    var todaysDate = new Date(),
        date = todaysDate.getDate() + '-' + todaysDate.getMonth() + '-' + todaysDate.getFullYear();
    super(props);
    this.state = { comment: '', currentDate: date };a
  }
   submitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.comment + " on " + this.state.currentDate);
  }
  changeHandler = (event) => {
    this.setState({comment: event.target.value});
  }
  render() {
    return (
      <form onSubmit ={this.submitHandler}>
      <p> Enter your reply here</p>
      <textarea value= {this.state.comment} onChange = {this.changeHandler}/>
       <br/>
      <input type='submit' />
      </form>
    );
  }
}
