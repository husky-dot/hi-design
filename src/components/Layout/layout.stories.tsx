import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Layout, {LayoutProps} from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Aside from './aside'
import './_sotry.scss'

export default {
  title: 'Example/Layout',
  component: Layout
} as Meta;


const layoutTmp: Story<LayoutProps> = (args) =>(
  <Layout>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </Layout>
)
export const defaultLayout = layoutTmp.bind({});
defaultLayout.storyName = 'Layout1';



const layoutTmp2: Story<LayoutProps> = (args) =>(
  <Layout>
    <Header></Header>
    <Layout>
      <Aside></Aside>
      <Content></Content>
    </Layout>
    <Footer></Footer>
  </Layout>
)
export const defaultLayout2 = layoutTmp2.bind({});
defaultLayout2.storyName = 'Layout2';

const layoutTmp3: Story<LayoutProps> = (args) =>(
  <Layout>
    <Header></Header>
    <Layout>
      <Content></Content>
      <Aside></Aside>
    </Layout>
    <Footer></Footer>
  </Layout>
)
export const defaultLayout3= layoutTmp3.bind({});
defaultLayout3.storyName = 'Layout3';

const layoutTmp4: Story<LayoutProps> = (args) =>(
  <Layout>
    <Aside></Aside>
    <Layout>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  </Layout>
)
export const defaultLayout4= layoutTmp4.bind({});
defaultLayout4.storyName = 'Layout4';