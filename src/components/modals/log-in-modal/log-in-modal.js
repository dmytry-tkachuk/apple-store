import React, {Component} from 'react'
import "./../modals.sass"
import withService from "../../hoc/with-service";
import {updateUser} from "../../../actions";
import {connect} from "react-redux";

class LogInModal extends Component{

    state = {
        email: "",
        password: "",
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {email, password, success} = this.state;
        if(success) return;

        this.props.service.logIn(email, password)
            .then((data) => {
                if(data.status === -1){
                    this.setState({error: data.error})
                }
                if(data.status === 0){
                    this.setState({
                        error: false,
                        success: true
                    });
                    this.props.updateUser(data.user)
                }
            })
    };

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value})
    };

    render() {
        const {close, user} = this.props;
        const {email, password, error, success } = this.state;

        return(
            <div className={"modal-overflow"} onClick={close}>
                <form className="modal" onSubmit={this.onSubmit} onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <div className={"title"}>Login</div>
                        <div className="close" onClick={close}>close</div>
                    </div>
                    <div className="modal-body">
                        <input
                            className={"input"}
                            type="text"
                            required
                            value={email}
                            name={"email"}
                            onChange={this.onChange}
                            placeholder={"Email(login)..."}/>
                        <input
                            className={"input"}
                            type="password"
                            required
                            value={password}
                            name={"password"}
                            onChange={this.onChange}
                            placeholder={"Password..."}/>
                    </div>
                    <div className="modal-error">
                        {
                            error? error : ""
                        }
                    </div>

                    <div className="modal-success">
                        {
                            success? "Success login" : ""
                        }
                    </div>
                    <div className="modal-footer">
                        <button
                            disabled={success}
                            className="button"
                            type={"submit"}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({user}) => {
    return {user}
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
    }
};

export default (
    withService(
        connect(mapStateToProps, mapDispatchToProps)(LogInModal)
    )
)
