class PostCreation extends React.Component{
  constructor(props) {
    var todaysDate = new Date(),
        date = todaysDate.getDate() + '-' + todaysDate.getMonth() + '-' + todaysDate.getFullYear();
    super(props);
    this.state = { subject:'', comment: '', currentDate: date };
  }
   submitHandler = (event) => {
    event.preventDefault();
     alert("You are submitting " + this.state.subject + " and " + this.state.comment + " on " + this.state.currentDate);
  }
  changeHandler = (event) => {
    let head = event.target.name
    let reply = event.target.value
    this.setState({[head]: reply});
  }
  render() {
    return (
      <form onSubmit ={this.submitHandler}>
        <p> Enter the post subject here</p>
       <input type='text' name = 'subject' onChange = {this.changeHandler} />
       <br/>
      <br/>
        <p> Enter your post here </p>
      <textarea type='textarea' name = 'comment' onChange = {this.changeHandler}/>
      <br/>
      <input type='submit' />
      </form>

    );
  }
}
