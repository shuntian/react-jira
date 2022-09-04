import React, { FormEvent } from 'react';
import { useAuth } from 'contexts/auth-provider';
import { Button, Form, Input } from 'antd';

export const LoginScreen = () => {
  const { login } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
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
        <label htmlFor="username">用户名:</label>{' '}
        <Input type="text" id="username"></Input>
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
        <label htmlFor="password">密 &nbsp;&nbsp;&nbsp;码:</label>{' '}
        <Input type="password" id="password"></Input>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
