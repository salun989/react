import React   from  'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import { Card, Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
class HorizontalLoginForm  extends  React.Component{
     constructor(props){
         super(props)
     }
    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit=()=>{
         console.log(this.props.form)
        var  that=this;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log('你输入的表单是: ', values);
                setTimeout(() => {
                    // server validate
                    console.log(values.password)
                    if (values.password == '11') {
                        that.props.form.setFields({
                            password: {
                                value: values.password,
                                errors: [new Error('你输入的密码不正确')],
                            },
                        });
                    }
                }, 500);

            }
        });
       // setFieldsValue
    }
    handleReste=()=>{
         console.log( this.props.form)
        this.props.form.resetFields()
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

         return (
             <Card  title="行内表单">
             <Form layout="inline" >
                 <FormItem

                 >
                     {getFieldDecorator('userName', {
                         initialValue:"",
                         validateTrigger:"onBlur",


                         rules: [
                             {
                                 required: true,
                                 message: '请输入用户名!' ,

                             },
                             {
                                 type: 'email',
                                 message: '错误的 email 格式',
                             },

                             {
                                 validator:(rule, value, callback)=>{
                                     // console.log(value)
                                     // console.log(rule)
                                     //  const { getFieldValue } = this.props.form
                                     if (value && value == "11") {
                                         callback('两次输入不一致！')
                                     }

                                     // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
                                     callback()
                                 },
                             },
                             {
                                 transform:function (value) {
                                     if(value.length==1){
                                         value = value.replace(/[^1-9]/g,'')
                                     }else {
                                         value=value.replace(/\D/g,'')
                                     }
                                     console.log(value)
                                     return value;
                                 }
                             }
                             ],
                     })(
                         <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                     )}
                 </FormItem>
                 <FormItem

                 >
                     {getFieldDecorator('password', {
                         initialValue:"",
                         validateTrigger:"onBlur",
                         rules: [{ required: true, message: '请输入密码!' }],
                     })(
                         <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                     )}
                 </FormItem>
                 <FormItem>
                     <Button
                         type="primary"
                         htmlType="submit"
                         onClick={this.handleSubmit}

                     >
                       登录
                     </Button>
                     <Button
                         type="primary"

                         onClick={this.handleReste}

                     >
                        重置
                     </Button>
                 </FormItem>
             </Form>
             </Card>
         )
    }
}



export   default Form.create()(HorizontalLoginForm);