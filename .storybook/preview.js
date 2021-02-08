import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import  './style.css'

addDecorator(withInfo);

addParameters({
  info: {
    inline: true,
    header: false
  }
})

const wrapperStyle = {
}

const storyWrapper = (storyFn) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {storyFn()}
  </div>
)

addDecorator(storyWrapper)


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}