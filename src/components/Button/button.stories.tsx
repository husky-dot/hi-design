import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button ,{ButtonProps } from './button';
import "../../styles/index.scss"

export default {
  title: 'Example/Button',
  component: Button
} as Meta;


const defaultBtnTmp: Story<ButtonProps> = (args) => <Button {...args}>默认</Button>;
export const defaultBtn = defaultBtnTmp.bind({});
defaultBtn.storyName = '默认Button';

const btnSizeTmp: Story<ButtonProps> = (args) => {
  return (
    <> 
      <Button size='lg' {...args}>large Button</Button>
      <Button size='sm' {...args} style={{marginLeft: '20px'}}>small Button</Button>
    </>
  )
}
export const btnSize = btnSizeTmp.bind({});
btnSize.storyName = '不同尺寸的 Button';

const btnTypeTmp:Story<ButtonProps> = (args) => {
  return (
    <> 
      <Button {...args} btnType="primary" >primary Button</Button>
      <Button {...args} btnType="danger" >danger Button</Button>
      <Button {...args} btnType="link" href="https://segmentfault.com/u/minnanitkong">danger Button</Button>
    </>
  )
}
export const btnType = btnTypeTmp.bind({});
btnType.storyName = '不同类型的 Button';