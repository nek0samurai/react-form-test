import { useState, useRef } from 'react';
import './App.css';

import { PlusOutlined } from '@ant-design/icons';
import { Input, Checkbox, Switch, Radio, Select, Button, Form, Space } from 'antd';

function App() {
  const onFinish = (e) => {
    alert(JSON.stringify(e, null, 1));
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}>
        <Form.Item
          wrapperCol={{ span: 24 }}
          name="username"
          rules={[
            {
              required: true,
              message: 'Username is required',
            },
          ]}>
          <Space className="form-input">
            <label htmlFor="Input">username</label>
            <Input name="username" placeholder="Enter username"></Input>
          </Space>
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 24 }}
          name="password"
          rules={[
            {
              required: true,
              message: 'Password is required',
            },
            {
              min: 4,
              max: 12,
              message: 'Password incorrect',
            },
          ]}>
          <Space className="form-input">
            <label htmlFor="Input">Password</label>
            <Input.Password placeholder="Enter password" name="password"></Input.Password>
            <label htmlFor="Input">Your password is between 4 and 12 characters</label>
          </Space>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }} name="inputText">
          <Input placeholder="Type here"></Input>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }} name="checkInfo" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }} name="switchSelection" valuePropName="checked">
          <Switch checkedChildren="on" unCheckedChildren="off" />
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: 'Select an option',
            },
          ]}
          name="radioSelection">
          <Radio.Group className="form-radio">
            <Radio value="radio1"> Radio Selection 1 </Radio>
            <Radio value="radio2"> Radio Selection 2 </Radio>
            <Radio value="radio3"> Radio Selection 3 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }} name="dropdownSelection">
          <Space className="form-input">
            <label htmlFor="">Dropdown title</label>
            <Select>
              <Select.Option value="dropdown1">Dropdown option 1</Select.Option>
              <Select.Option value="dropdown2">Dropdown option 2</Select.Option>
              <Select.Option value="dropdown3">Dropdown option 3</Select.Option>
            </Select>
          </Space>
        </Form.Item>
        <div className="form-buttons">
          <Button block htmlType="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default App;
