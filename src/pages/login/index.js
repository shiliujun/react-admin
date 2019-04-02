import React, {Component} from 'react';
import {
    Form, Icon, Input, Button,message
} from 'antd';

import {reqLogin} from "../../api";
import {setItem} from "../../utils/storage-utils";


import logo from '../../assets/images/logo.png';
import './index.less';

const Item = Form.Item;

@Form.create()
class Login extends Component {
    login = (e) => {
        e.preventDefault();
        //校验表单是否通过
        //获取部分表单数据  this.props.form.getFieldsValue(['username']);
        //获取一组表单数据  this.props.form.getFieldsValue();
        //获取单个表单数据  this.props.form.getFieldValue('username');
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const {username, password} = values;
                const result = await reqLogin(username, password);
                if (result.status === 0) {

                    // 提示登录成功，保存用户登录信息，跳转到主页面
                    message.success('登录成功~');

                    //保存用户数据
                    setItem(result.data);

                    // 已经登录成功，不需要回退了~
                    this.props.history.replace('/');
                }else {
                    // 登录失败
                    message.error(result.msg, 2);
                }
            } else {
                console.log('====表单校验失败=====');
                console.log(err);
                console.log('====表单校验失败=====');
            }
        })

    }
    //自定表单的校验规则
    validator = (rule, value, callback) => {
        const length = value && value.length;
        const pwdReg = /^[a-zA-Z0-9_]+$/;
        if (!value) {
            callback('必须输入密码');
        } else if (length < 4) {
            callback('密码必须大于4位');
        } else if (length > 12) {
            callback('密码必须小于12位');
        } else if (!pwdReg.test(value)) {
            callback('密码必须是英文，数字，下划线');
        } else {
            //必须调用callback 不传参效验成功，反之则效验失败
            callback();
        }
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h3>用户登录</h3>
                    <Form onSubmit={this.login} className="login-form">
                        <Item>
                            {
                                // getFieldDecorator(标识名称，配置对象)(组件)
                                getFieldDecorator('username', {
                                    rules: [
                                        {require: true, whitespace: true, message: '必须输入用户名'},
                                        {min: 4, message: '用户名必须大于4位'},
                                        {max: 12, message: '用户名必须小于12位'},
                                        {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文，数字，下划线'}
                                    ]
                                })
                                (<Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="用户名"/>)
                            }
                        </Item>
                        <Item>
                            {
                                // getFieldDecorator(标识名称，配置对象)(组件)
                                getFieldDecorator('password', {
                                    rules: [
                                        //自定义表单效验规则
                                        {validator: this.validator}
                                    ]
                                })
                                (<Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                        placeholder="密码"/>)
                            }
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}

/*
* Form.create({ name: 'normal_login' }) 返回值是一个函数（高阶组件）
* Form.create({ name: 'normal_login' })(Login) 返回值是一个新组建
* */
//export default Form.create({ name: 'normal_login' })(Login);

export default Login;