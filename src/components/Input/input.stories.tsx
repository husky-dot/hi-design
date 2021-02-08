import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions'
import { Input, InputProps} from './input'
import "../../styles/index.scss"


export default {
  title: 'Example/Input',
  component: Input
} as Meta;

const defaultInputTmp: Story<InputProps> = (args) => (
  <>
  <Input
    style={{width: '300px'}}
    placeholder="placeholder"
    onChange={action('changed')}
  />
  </>
)
export const defaultInput = defaultInputTmp.bind({});
defaultInput.storyName = 'Input';


const disabledInputTmp: Story<InputProps> = (args) => (
  <>
  <Input
    style={{width: '300px'}}
    placeholder="disabled input"
    disabled 
  />
  </>
)
export const disabledInput = disabledInputTmp.bind({});
disabledInput.storyName = '被禁用的 Input';




const iconInputTmp: Story<InputProps> = (args) => (
  <>
    <Input
      style={{width: '300px'}}
      placeholder="input with icon"
      icon="search"
    />  
  </>
)
export const iconInput = iconInputTmp.bind({});
iconInput.storyName = '带图标的 Input';


const sizeInputTmp: Story<InputProps> = (args) => (
  <>
    <Input
      style={{width: '300px'}}
      defaultValue="large size"
      size="lg"
    />
    <Input
      style={{width: '300px'}}
      placeholder="small size"
      size="sm"
    />
  </>
)
export const sizeInput = sizeInputTmp.bind({});
sizeInput.storyName = '大小不同的 Input';


const pandInputTmp: Story<InputProps> = (args) => (
  <>
    <Input
      style={{width: '300px'}}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      style={{width: '300px'}}
      defaultValue="google"
      append=".com"
    />
  </>
)
export const pandInput = pandInputTmp.bind({});
pandInput.storyName = '带前后缀的 Input';




