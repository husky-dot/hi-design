import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Scroll, { ScrollProps } from './scroll'

export default {
  title: 'Example/Scroll',
  component: Scroll
} as Meta


const defaultScrollTmp: Story<ScrollProps> = (args) => {
  const onPull = () => {
    console.log('下拉刷新啦')
  }
  return (
    <Scroll style={{height: 300}} onPull={onPull}>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
      <p>10</p>
      <p>11</p>
      <p>12</p>
      <p>13</p>
      <p>14</p>
      <p>15</p>
      <p>16</p>
      <p>17</p>
      <p>18</p>
      <p>19</p>
      <p>20</p>
    </Scroll>
  )
}

export const defaultScroll = defaultScrollTmp.bind({});
defaultScroll.storyName = 'Scroll'
