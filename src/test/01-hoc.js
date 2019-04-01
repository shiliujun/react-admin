import  React,{Component} from 'react';
function withHoc(WrappedComponent) {
    return class extends Component{
        state = {
            username: '',
            password: '',
            rePassword: ''
        }
        // 高阶函数 --> 这样后面就能一直复用当前函数，而不用重新创建了~
        composeChange = (name) => {
            return (e)=>{
                this.setState({
                    [name]:e.target.value
                });
            }
        }
        render(){
            const mapMethodTopProp={
                composeChange:this.composeChange,
            }
            return <WrappedComponent />
        }
    }
}