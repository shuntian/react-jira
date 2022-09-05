import React from 'react';
import { useAuth } from 'contexts/auth-provider';
import { Form, Input } from 'antd';
import { LongButton } from '../login';

export const RegisterScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { register } = useAuth();

  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      await register(values);
    } catch (error) {
      onError(error as Error);
    }
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
      <Form.Item
        name="password2"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次输入密码不匹配!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="确认密码" id="password2"></Input.Password>
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
};
