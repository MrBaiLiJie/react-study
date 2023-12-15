import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import {MyComponent,MyComponent2,App} from './MyComponent'
const Login = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    // navigate("/about");
     /* 第一种：search传递参数 */
     navigate('/about?name=MrBai&age=18')

     /* 第二种：state属性携带参数 */
    //  navigate('/about',{state: '我从登陆页面过来了！！！'})
  };
  return (
    <div className="login">
      <MyComponent name="函数" />
      <MyComponent2 name="类" />
      <App />
      
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="随便输" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="随便输" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={onSubmit}>
            登录
          </Button>
        </Form.Item>
      </Form>
      
    </div>
  );
};

export default Login;
