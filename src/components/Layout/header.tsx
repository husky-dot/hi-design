import * as React from 'react';
import { scopedClassMaker } from '../../utils/classes';
import classNames from 'classnames';
const sc = scopedClassMaker('hi-layout')

export interface Props extends React.HTMLAttributes<HTMLElement>{

}
export const Header:React.FC<Props> = (props) => {
  const {
    className,
    children,
    ...restProps
  } = props
  return (
    <div className={classNames(sc('header'), className)}>Header</div>
  )
}

export default Header;