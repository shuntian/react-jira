import React from 'react';
import { useAuth } from 'contexts/auth-provider';
import { Form, Input } from 'antd';
import { LongButton } from '../login';

export const RegisterScreen = () => {
  const { register } = useAuth();

  const handleSubmit = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    register({ username, password });
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={'username'}
        rules={[
          {
            required: true,
            message: '名称是必填项',
          },
        ]}
      >
        <Input placeholder="用户名" type="text" id="username"></Input>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '密码是必填项',
          },
        ]}
      >
        <Input.Password placeholder="密码" id="password"></Input.Password>
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
};
