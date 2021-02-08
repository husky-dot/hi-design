import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { action } from '@storybook/addon-actions'
import { Upload, UploadProps} from './upload'
import "../../styles/index.scss"
import { UploadFile } from './upload'
import Icon from '../Icon/icon'

const defaultFileList: UploadFile[] = [
  { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
  { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
  { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
]


export default {
  title: 'Example/Upload',
  component: Upload
} as Meta;

const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 5000) {
    alert('file too big')
    return false;
  }
  return true
}

const filePromise = (file: File) => {
  const newFile = new File([file], 'new_name.docx', { type: file.type })
  return Promise.resolve(newFile)
}
const SimpleUploadTmp: Story<UploadProps> = (args) => (
  <Upload 
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    onChange={action('changed')}
    defaultFileList={defaultFileList}
    onRemove={action('removed')}
    name='fileName'
    data={{'key': 'value'}}
    headers={{'X-Powered-By': 'hiship'}}
    accept=".jpg"
    multiple
    drag
  >
    <Icon icon="upload" size="5x" theme="secondary" />
    <br/>
    <p>Drag file over to upload</p>

  </Upload>
)
export const SimpleUpload = SimpleUploadTmp.bind({});
SimpleUpload.storyName = 'Upload';