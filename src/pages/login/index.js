import React, { Component } from 'react'
import { LoginContainer } from './style'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import logo from '../../static/images/logo.jpg'
@Form.create()

class Login extends Component {
    
    render() {
        //表单的校验及双向数据绑定
        const { getFieldDecorator } = this.props.form;
        return (
            <LoginContainer>
                <div className="loginContent">
                    <div className="loginLogo">
                        <img src={logo} alt="" />
                    </div>
                    <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                //替换正则表达式pattern
                                rules: [
                                            { required: true, message: '请输入您的用户名' },
                                            {pattern:/^[a-zA-Z0-9_-]{4,12}$/,message:'用户名必须为4到16位字母/数字/下划线/减号'},
                                        ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入您的密码' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住密码</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                忘记密码
                            </a>
                            <Button 
                                type="primary" 
                                htmlType="submit" 
                                className="login-form-button"
                                block
                                >
                                登录
                            </Button>
                            <a href="">注册账号</a>
                        </Form.Item>
                    </Form>
                </div>
            </LoginContainer>
        )
    }
    handleSubmit (e) {
        //阻止浏览器默认事件
        e.preventDefault();
        //获取表单数据
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };
}
export default Login;



/****
 * 
 * Form表单有一个高阶组件的方法
 * this.props.form
 *      validateFields:获取表单中的多有数据
 *      getFieldDecorator：表单的校验以及数据绑定
 * 
 */