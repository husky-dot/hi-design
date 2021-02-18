import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Dialog, { DialogProps, Alert, Confirm, Model} from './dialog'
import Button from '../Button'
import { action } from '@storybook/addon-actions';
export default {
  title: 'Example/Dialog',
  component: Dialog
} as Meta;

const defaultDialogTmp: Story<DialogProps> = (args) => {
  return (
    <div>
      <Dialog {...args}>
        <strong>HI2</strong>
      </Dialog>
    </div>
  )
}
export const defaultDialog = defaultDialogTmp.bind({});
defaultDialog.storyName = 'Dialog';
defaultDialog.args = {
  visible: true
}

const diyFooterTmp: Story<DialogProps> = (args) => {
  return (
    <div>
      <Dialog {...args} buttons={
        [
          <Button>1</Button>,
          <Button>2</Button>
        ]
      }>
        <strong>HI</strong>
      </Dialog>
    </div>
  )
}
export const diyFooterDialog = diyFooterTmp.bind({});
diyFooterDialog.storyName = '自定义底部 Dialog';
diyFooterDialog.args = {
  visible: true
}


const alertTmp: Story<DialogProps> = (args) => {
  return (
    <Button onClick={() => Alert('你好')}>Alert</Button>
  )
}

export const alertTmpDialog = alertTmp.bind({});
alertTmpDialog.storyName = 'Alert';


const confirmTmp: Story<DialogProps> = (args) => {
  return (
    <Button onClick={() => Confirm('你好', action('yes'), action('no'))}>
      Confirm
    </Button>
  )
}

export const comfirmDialog = confirmTmp.bind({});
comfirmDialog.storyName = 'Confirm';
comfirmDialog.parameters = {
  info: {
    source: false
  }
}

const modelTmp: Story<DialogProps> = (args) => {
  const openModel = () => {
    const close = Model(<h1>你好
      <Button onClick={() => { close() }}>关闭</Button>
    </h1>)
  }
  return (
    <Button onClick={openModel}>
      Model
    </Button>
  )
}

export const modelDialog = modelTmp.bind({});
modelDialog.storyName = 'Model';
modelDialog.parameters = {
  info: {
    source: false
  }
}
