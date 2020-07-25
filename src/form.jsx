import React from 'react'
import { Form, Button, Input, Icon } from 'antd'


const formItems = [
  {
    name: 'username',
    Component: Input,
    validateMessage: 'Пожалуйста введите ваше имя',
    placeholder: 'Имя',
    required: true
  },
  {
    name: 'password',
    Component: Input.Password,
    validateMessage: 'Пожалуйста введите ваш пароль',
    placeholder: 'Пароль',
    required: true
  },
  {
    name: 'comment',
    Component: Input.TextArea,
    validateMessage: 'Пожалуйста напишите комментарий',
    placeholder: 'Комментарий',
    required: false
  }
]


const CustomForm = ({ form }) => {
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = (e) => {
    e.preventDefault();

    validateFields((err, values) => {
      if(err) console.error(err);

      console.log(values)
      return values;
    })

  }

  return(
    <>
    <Form onSubmit={handleSubmit}>
      {formItems?.map(({ name, Component, validateMessage, placeholder, required }) => {
        return (
          <Form.Item key={name}>
            {getFieldDecorator(name, {
              rules: [{ required, message: validateMessage }]
            })(
              <Component placeholder={placeholder} />
            )}
          </Form.Item>
        )
      })}
      <Button htmlType="submit">Отправить</Button>
    </Form>
    </>
  )
}

export default Form.create({ name: 'Custom-form' })(CustomForm)