import React , { Component } from 'react';

class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            username:"",
            password:"",
            profileImageUrl:""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        console.log("Printing from handleSubmit.");
        console.log("Auth type : " + authType);
        this.props.onAuth(authType, this.state).then(() => {
            console.log(authType);
            console.log(this.state);
            console.log("LOGGED IN!");
        });
    };


    render(){
        const {email, username, password, profileImageUrl} = this.state;
        const {heading, buttonText, signUp, errors, history, removeError} = this.props;

        // This will listen for any change in the url and if it listens that url is changed it will run the remove error function.
        history.listen(() => {
            removeError();
        });

        return(
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {errors.message!== null && (
                                <div className="alert alert-danger"> {errors.message} </div>
                            )}
                            <label htmlFor="email">Email: </label>
                            <input 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                onChange={this.handleChange} 
                                value={email} 
                                type="email"
                            />

                            <label htmlFor="password">Password: </label>
                            <input 
                                className="form-control" 
                                id="password" 
                                name="password"
                                onChange={this.handleChange} 
                                type="password"
                            />
                            {signUp && (
                                <div>
                                    <label htmlFor="username">Username: </label>
                                    <input 
                                        className="form-control" 
                                        id="username" 
                                        name="username" 
                                        onChange={this.handleChange} 
                                        value={username} 
                                        type="text"
                                    />

                                    <label htmlFor="image-url">Image URL: </label>
                                    <input 
                                        className="form-control" 
                                        id="image-url" 
                                        name="profileImageUrl"
                                        onChange={this.handleChange} 
                                        type="text"
                                        value={profileImageUrl}
                                    />
                                </div>
                            )}
                            <button style={{marginTop: '30px'}}type="submit" className="btn btn-block btn-primary btn-lg">{buttonText}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthForm;