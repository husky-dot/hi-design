import classNames from 'classnames';
import * as React from 'react';
import { FC, useState } from 'react';
import useUpdate from '../../hooks/useUpdate';
import { scopedClassMaker } from '../../utils/classes';

interface TreeItemProps  {
  item: SourceDataItem;
  level: number;
  treeProps: TreeProps
}
const sc = scopedClassMaker('hi-tree')


export const TreeItem: FC<TreeItemProps> = (props) => {
  const {item, level, treeProps} = props
  const classes = {
    [`hi-tree-level-${level}`]: true,
    [sc('item')]: true
  }
  const checked = treeProps.multiple ? treeProps.selected.indexOf(item.value) > -1 : treeProps.selected === item.value

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (treeProps.multiple) {
      if (e.target.checked) {
        treeProps.onChange([...treeProps.selected, item.value])
      } else {
        treeProps.onChange(treeProps.selected.filter(value => value !== item.value))
      }
    } else {
      if (e.target.checked) {
        treeProps.onChange(item.value)
      } else {
        treeProps.onChange('')
      }
      
    }
  }

  const expand = () => {
    setExpanded(true)
  }
  const collapse = () => {
    setExpanded(false)
  }

  const [expanded, setExpanded] = useState(true);
  const divRef = React.useRef<HTMLDivElement>(null)


  useUpdate(expanded, () => {
    if (!divRef.current) {return}
    if (expanded) {
      divRef.current.style.height = 'auto'
      const { height} = divRef.current.getBoundingClientRect()
      divRef.current.style.height = '0px'
      divRef.current.getBoundingClientRect()
      divRef.current.style.height = height + 'px'
      const afterExpand = () => {
        if (!divRef.current) {return;}
        divRef.current.style.height = '';
        divRef.current.classList.add('hi-tree-children-present');
        divRef.current.removeEventListener('transitionend', afterExpand);
      };
      divRef.current.addEventListener('transitionend', afterExpand);

    } else {
      const { height} = divRef.current.getBoundingClientRect()
      divRef.current.style.height = height + 'px'
      divRef.current.getBoundingClientRect()
      divRef.current.style.height = '0px'
      const afterCollapse = () => {
        if (!divRef.current) {return;}
        divRef.current.style.height = '';
        divRef.current.classList.add('hi-tree-children-gone');
        divRef.current.removeEventListener('transitionend', afterCollapse);
      };
      divRef.current.addEventListener('transitionend', afterCollapse);
    }
  })


  return <div key={item.value}
    className = {classNames(classes)}
  >
    <div className={sc('text')}>
      <input type="checkbox"
      onChange={onChange}
      checked={checked}/>
      {item.text}
      {item.children &&
      <span onSelect={e => e.preventDefault()}>
        {expanded ?
          <span onClick={collapse}>-</span> :
          <span onClick={expand}>+</span>
        }
      </span>}

    </div>
    <div ref={divRef} className={classNames(sc('children'), {[sc('collapsed')]: !expanded})}>
      {item.children?.map(sub => {
        return <TreeItem key={sub.value} item={sub} level={level + 1} treeProps={treeProps}></TreeItem>
      })}
    </div>

  </div>
}


export default TreeItem;