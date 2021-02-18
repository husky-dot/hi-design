import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Form, {FormProps, FormValue} from './form'
import Button from '../Button'
import Validator, { noError } from './validator';

export default {
  title: 'Example/Form',
  component: Form
} as Meta;


const usernames = ['frank', 'jack', 'frankfrank', 'alice', 'bob'];
const checkUserName = (username: string, succeed: () => void, fail: () => void) => {
  setTimeout(() => {
    console.log('我现在知道用户名是否存在');
    if (usernames.indexOf(username) >= 0) {
      fail();
    } else {
      succeed();
    }
  }, 2000);
};


const DefaultDialogTmp: Story<FormProps> = (args) => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  })
  const [fields] = useState([
    {name: 'username', label: '用户名', input: { type: 'text'}},
    {name: 'password', label: '密码', input: { type: 'password'}}
  ])
  const [errors, setErrors] = useState({})
  const validator = (username: string) => {
    return new Promise<string>((resolve, reject) => {
      checkUserName(username, resolve, () => reject('unique'));
    });
  };
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {key: 'username', required: true },
      {key: 'username', minLength: 8 },
      {key: 'username', maxLength: 16 },
      {key: 'username', validator},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {key: 'password', require: true}
    ]
    Validator(formData, rules, (errors) => {
      console.log(errors);
      setErrors(errors);
      if (noError(errors)) {
        // 没错
      }
    });
  }
  const transformError = (message: string) => {
    const map: any = {
      unique: 'username is taken',
      required: 'required',
      minLength: 'too short',
      maxLength: 'too long',
    };
    return map[message];
  };
  return (
    <div>
      <Form {...args}
      value={formData}
        fields={fields}
        buttons={
          <>
            <Button btnType="primary">提交</Button>
            <Button>返回</Button>
          </>
        }
        errors={errors}
        transformError={transformError}
        onSubmit={handleSubmit}
        onChange={(newValue) => setFormData(newValue)}
      >
      </Form>
    </div>
  )
}
export const defaultDialog = DefaultDialogTmp.bind({});
defaultDialog.storyName = 'Form';
defaultDialog.args = {
  fields: [
    {name: 'username', label: '用户名', input: { type: 'text'}},
    {name: 'password', label: '密码', input: { type: 'password'}}
  ],
  value: {
    username: '',
    password: ''
  }
}


