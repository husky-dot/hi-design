import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Menu, {MenuProps} from './menu'
import MenuItem from './menuItem'
export default {
  title: 'Example/Menu',
  component: Menu
} as Meta;

const defaultMenuTmp: Story<MenuProps> = (args) => (
  <Menu defaultIndex='0' onSelect={(index) => {action(`clicked ${index} item`)}} >
    <MenuItem>
      cool link
    </MenuItem>
    <MenuItem disabled>
      disabled
    </MenuItem> 
    <MenuItem>
      cool link 2
    </MenuItem> 
  </Menu>
)

export const defaultMenu= defaultMenuTmp.bind({});
defaultMenu.storyName = 'Menu'
