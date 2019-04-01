import  React,{Component} from 'react';
class Register extends Component {


    render () {
        const { username, password, rePassword } = this.state;
        return (
            <div>
                <h2>注册</h2>
                <form onSubmit={this.handleSubmit}>
                    用户名: <input type="text" name="username" value={username} onChange={this.composeChange('username')}/> <br/>
                    密码: <input type="password" name="password" value={password} onChange={this.composeChange('password')}/> <br/>
                    确认密码: <input type="password" name="rePassword" value={rePassword} onChange={this.composeChange('rePassword')}/> <br/>
                    <input type="submit" value="注册"/>
                </form>
            </div>
        )
    }
}

