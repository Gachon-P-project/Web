import 'antd/dist/antd.css';
import './login.css';
import gachon from "./image/gachon.png";
import logo from "./image/logo.png";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function App() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  
  return (
    <div>
      <img src={gachon} alt="GACHON" className="back" />

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item>
          <img src={logo} alt="MOGA" className="logo" />
          <div className="txt">가천인을 위한 커뮤니티, 모두의 가천</div>
        </Form.Item>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '아이디를 입력해주세요!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="아이디"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력해주세요!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="비밀번호"
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>로그인 상태 유지</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" size="large">
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
