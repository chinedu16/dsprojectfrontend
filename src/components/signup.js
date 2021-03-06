    import React, { Component } from 'react';
    // import { PostData } from './PostData';
    import { Link, Redirect } from 'react-router-dom';
    import { storedata } from './storedata';

    import '../css/register.css';

    class Signup extends Component {

        constructor(props){
            super(props);

            this.state = {
                name: '',
                email: '',
                username: '',
                password: '',
                phone: '',
                redirect: false,
                redirect1: false

            }

            this.Signup = this.Signup.bind(this);
            this.onChange = this.onChange.bind(this);
            this.tologin = this.tologin.bind(this);
        }
        
        Signup(){
          if(this.state.username && this.state.password){
          storedata('users', this.state).then ((result) => {
            let responseJSON = result;
            if(responseJSON.token){
              alert("Signup Successful")
              localStorage.setItem('token', responseJSON.token);
              this.setState({ redirect: true});
            }else{
              alert("SignUp Error")
            }
          });
          }else{
            alert("Fill the Fields properly");
          }
          
        }

        onChange(e){
          this.setState({[e.target.name]: e.target.value})
        }
        tologin(e){
          this.setState({ redirect1: true})
        }
        
      render() {
        const { redirect } = this.state;
        if( redirect ){ 
          return <Redirect to='/home' />;
        }
        const { redirect1 } = this.state;
        if( redirect1 ){ 
          return <Redirect to='/signin' />;
        }
        return (
        <form>

          <div className="container">
            <div className="Signup">
            <h2>Signup  <span> (Register to create orders)</span></h2>
            <div className="form-group"> 

            <input type="text" placeholder="Name" name="name" onChange={this.onChange}/>
            <input type="email"  name="email" placeholder="Email" onChange={this.onChange}/>
            <input type="text"  name="username" placeholder="Username" onChange={this.onChange}/>
            <br/>
            <input type="password" name="password" placeholder="Password" onChange={this.onChange}/>
            <br/>
            <input type="tel"  name="phone" placeholder="Enter Phone" onChange={this.onChange}/>
            <br/>
            <button type="button" onClick={this.Signup}>Signup</button>
            </div>

            <Link className="links" to="/signin">registered? signin</Link>

          </div>
            </div>

          </form>
        );
      }
    }

    export default Signup;





