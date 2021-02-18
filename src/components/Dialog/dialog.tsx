import * as React from 'react';
import { FC, ReactElement, MouseEventHandler } from 'react';
import { scopedClassMaker } from '../../utils/classes';
import Icon from '../Icon'
import Button from '../Button'
import ReactDOM from 'react-dom';

export interface DialogProps {
  /** 模态框的显隐藏 */
  visible: boolean,
  /** 底部按键 */
  buttons?: Array<ReactElement>,
  /** 关闭回调 */
  onClose ?: MouseEventHandler,
  /** 点击遮罩是不关闭模态框 */
  closeONClickMask?: boolean,
}

const sc = scopedClassMaker('hi-dialog')

export const Dialog: FC<DialogProps> = (props) => {
  const {
    visible,
    buttons,
    onClose,
    closeONClickMask,
    children
  } = props;

  const handleOnClose:MouseEventHandler  = (e) => {
    onClose && onClose(e)
  }

  const onClickMask: MouseEventHandler = (e) => {
    if (closeONClickMask) {
      onClose && onClose(e)
    }
  }


  const result  =  (
    visible?
    <>
      <div className={sc('mask')} onClick={onClickMask}></div>
      <div className={sc()}>
        <div className={sc('close')} onClick={handleOnClose}>
          <Icon icon="times"/>
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>
          {children}
        </main>
        {buttons && 
          <footer className={sc('footer')}>
          {buttons && buttons.length > 0 ? buttons.map((button, index) => {
            return React.cloneElement(button, { key: index })
          }): null
          }
        </footer>
        }
       </div>
    </>
    :
    null
  )

  return (
    ReactDOM.createPortal(result, document.body)
  )
}

Dialog.defaultProps = {
  closeONClickMask: false
}

/**
 * 
 * ~~~js
 * // 这样引用
 * import{ Model } from 'hi-design'
 *
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
 * ~~~
 */
export const Model = (content: React.ReactNode, buttons?: Array<React.ReactElement>, afterClose?: () => void) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const div = document.createElement('div')
  const component = (
  <Dialog 
    visible={true}
    buttons={buttons}
    onClose={() => {
      onClose()
      afterClose && afterClose()
    }}>
      {content}
    </Dialog>)
  document.body.append(div)
  ReactDOM.render(component, div)
  return onClose
}



/**
 * 
 * ~~~js
 * // 这样引用
 * import{ Alert } from 'hi-design'
 *
  return (
    <Button onClick={() => Alert('你好')}>Alert</Button>
  )
 * ~~~
 */
export const Alert = (content: string) => {
  const button = <Button onClick={() => { close() }}>OK</Button>
  const close =  Model(content, [button])
}


/**
 * 
 * ~~~js
 * // 这样引用
 * import{ Confirm } from 'hi-design'
 *
  return (
    <Button onClick={() => Confirm('你好', () => { console.log('yes')}, () => { console.log('nos')})}>
      Confirm
    </Button>
  )
 * ~~~
 */
export const Confirm = (content: string, yes ?: () => void, no?: () => void) => {
  const onYes = () => {
    close()
    yes && yes()
  }
  const onNo = () => {
    close()
    no && no()
  }
  const buttons = [
    <Button btnType="primary" onClick={onYes}>Yes</Button>,
    <Button onClick={onNo}>No</Button>
  ]
  const close = Model(content, buttons, no)
}

export default Dialog;

