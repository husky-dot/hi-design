import React, { useState } from 'react';
import Button from './components/Button/button'
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Transition from './components/Transition/transition'

library.add(fas)
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Menu defaultIndex='0' onSelect={(index) => alert(index)}>
        <MenuItem>
          coll link 1
        </MenuItem>
        <MenuItem>
          coll link 2
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            coll link 1
          </MenuItem>
          <MenuItem>
            coll link 2
          </MenuItem>
        </SubMenu>
        <MenuItem>  
          coll link 3
        </MenuItem>
      </Menu>
      <Button size="lg" onClick={() => setShow(!show)}>Toggle</Button>
      <Transition
        in={show}
        timeout={300}
        animation='zoom-in-left'
      >
        <div>
          <p>你好呀</p>
          <p>你好呀</p>
          <p>你好呀</p>
          <p>你好呀</p>
          <p>你好呀</p>
          <p>你好呀</p>
        </div>
      </Transition>

      <Transition
          in={show}
          timeout={300}
          animation='zoom-in-top'
          wrapper
        >
          <Button btnType="primary" size="lg">A Large Button</Button>
        </Transition>
    </div>

  );
}

export default App;
 