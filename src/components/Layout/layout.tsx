import * as React from 'react';
import { scopedClassMaker } from '../../utils/classes';
import classNames from 'classnames';
import Aside from './aside';
const sc = scopedClassMaker('hi-layout')

export interface LayoutProps extends React.HTMLAttributes<HTMLElement>{
  children: React.ReactElement | Array<React.ReactElement>
}
export const Layout:React.FC<LayoutProps> = (props) => {
  const {
    className,
    children,
    ...restProps
  } = props
  let hasAside = false
  if ((children as Array<React.ReactElement>).length) {
    (children as Array<React.ReactElement>).map(node => {
      if (node.type === Aside) {
        hasAside = true
      }
    })
  }
  return (
    <div className={classNames(sc(), className, {[sc('hasAside')] : hasAside})} {...restProps}>
      {children}

    </div>
  )
}

export default Layout;