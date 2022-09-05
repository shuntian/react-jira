import React from 'react';
import { useAuth } from 'contexts/auth-provider';
import { Button, Form, Input } from 'antd';
import styled from '@emotion/styled';

export const LoginScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { login } = useAuth();

  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      await login(values);
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
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};

export const LongButton = styled(Button)`
  width: 100%;
`;
