import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary";

const withErrorHandler = (WrappedComponent, axios) =>{
    return class extends Component {
        state={
            error: null
        }
        componentWillMount(){
            this.requestInterceptors= axios.interceptors.request.use(request =>{
                this.setState({error: null});
                return request;
            });
            this.responseInterceptors= axios.interceptors.response.use( res => res, error =>{
                this.setState({
                    error: error
                })
            });
        }
        errorConfirmHandler = () =>{
            this.setState({error: null})
        }

        componentWillUnmount(){
            console.log("Will Unmount", this.requestInterceptors, this.responseInterceptors);
            axios.interceptors.request.eject(this.requestInterceptors);
            axios.interceptors.response.eject(this.responseInterceptors);
        }
        render() {
            return (
              <Aux>
                <Modal 
                show={this.state.error}
                clicked={this.errorConfirmHandler}>{this.state.error ? this.state.error.message: null}</Modal>
                <WrappedComponent {...this.props} />
              </Aux>
            );
          }
        }
}

export default withErrorHandler;
