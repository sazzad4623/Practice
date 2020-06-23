import React, { Component } from "react";
import { Card } from "antd";
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
  Input,
  Space,
} from "antd";
import {
  UploadOutlined,
  InboxOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 12 },
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export default class Formex extends Component {
  onFinish = (values) => {
    console.log(values);
  };
  render() {
    return (
      <div>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          validateMessages={validateMessages}
        >
          <Row>
            <Col>
              <Card
                title="Default size card"
                style={{ width: 600 }}
                className="m-2"
              >
                <Form.Item
                  name="select-multiple"
                  label="Select"
                  rules={[
                    {
                      required: true,
                      message: "Please select your favourite colors!",
                      type: "array",
                    },
                  ]}
                >
                  <Select placeholder="Please select favourite colors">
                    <Option value="red">Red</Option>
                    <Option value="green">Green</Option>
                    <Option value="blue">Blue</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="select-multiple"
                  label="Select"
                  rules={[
                    {
                      required: true,
                      message: "Please select your favourite colors!",
                      type: "array",
                    },
                  ]}
                >
                  <Select placeholder="Please select favourite colors">
                    <Option value="red">Red</Option>
                    <Option value="green">Green</Option>
                    <Option value="blue">Blue</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="name"
                  label="Name"
                  {...layout}
                  rules={[{ required: true, whitespace: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item name={["user", "introduction"]} label="Introduction">
                  <Input.TextArea />
                </Form.Item>

                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, whitespace: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="upload"
                  label="Upload"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                      <UploadOutlined /> Click to upload
                    </Button>
                  </Upload>
                </Form.Item>

                <Form.Item label="Dragger">
                  <Form.Item
                    name="dragger"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle
                  >
                    <Upload.Dragger name="files" action="/upload.do">
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload.
                      </p>
                    </Upload.Dragger>
                  </Form.Item>
                </Form.Item>
              </Card>
            </Col>
            <Col>
              <Card
                title="Default size card"
                style={{ width: 600 }}
                className="m-2"
              >
                <Form.List name="users">
                  {(fields, { add, remove }) => {
                    return (
                      <div>
                        {fields.map((field) => (
                          <Space
                            key={field.key}
                            style={{ display: "flex", marginBottom: 8 }}
                            align="start"
                          >
                            <Form.Item
                              {...field}
                              name={[field.name, "first"]}
                              fieldKey={[field.fieldKey, "first"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing first name",
                                },
                              ]}
                            >
                              <Input placeholder="First Name" />
                            </Form.Item>
                            <Form.Item
                              {...field}
                              name={[field.name, "last"]}
                              fieldKey={[field.fieldKey, "last"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing last name",
                                },
                              ]}
                            >
                              <Input placeholder="Last Name" />
                            </Form.Item>

                            <MinusCircleOutlined
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          </Space>
                        ))}

                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => {
                              add();
                            }}
                            block
                          >
                            <PlusOutlined /> Add field
                          </Button>
                        </Form.Item>
                      </div>
                    );
                  }}
                </Form.List>
              </Card>

              <Card
                title="Default size card"
                style={{ width: 600 }}
                className="m-2"
              >
                <Form.List name="users">
                  {(fields, { add, remove }) => {
                    return (
                      <div>
                        {fields.map((field) => (
                          <Space
                            key={field.key}
                            style={{ display: "flex", marginBottom: 8 }}
                            align="start"
                          >
                            <Form.Item
                              {...field}
                              name={[field.name, "first"]}
                              fieldKey={[field.fieldKey, "first"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing first name",
                                },
                              ]}
                            >
                              <Input placeholder="First Name" />
                            </Form.Item>
                            <Form.Item
                              {...field}
                              name={[field.name, "last"]}
                              fieldKey={[field.fieldKey, "last"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing last name",
                                },
                              ]}
                            >
                              <Input placeholder="Last Name" />
                            </Form.Item>

                            <MinusCircleOutlined
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          </Space>
                        ))}

                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => {
                              add();
                            }}
                            block
                          >
                            <PlusOutlined /> Add field
                          </Button>
                        </Form.Item>
                      </div>
                    );
                  }}
                </Form.List>
              </Card>

              <Form.Item
                wrapperCol={{
                  span: 12,
                  offset: 6,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
