import classNames from 'classnames';
import * as React from 'react';
import { FC, useRef, useState } from 'react';
import useUpdate from '../../hooks/useUpdate';
import { scopedClassMaker } from '../../utils/classes';

interface TreeItemProps  {
  item: SourceDataItem;
  level: number;
  treeProps: TreeProps,
  onItemChange: (value: string[]) => void;
}
const sc = scopedClassMaker('hi-tree')


export const TreeItem: FC<TreeItemProps> = (props) => {
  const {item, level, treeProps} = props
  const classes = {
    [`hi-tree-level-${level}`]: true,
    [sc('item')]: true
  }
  const checked = treeProps.multiple ? treeProps.selected.indexOf(item.value) > -1 : treeProps.selected === item.value

  function collectChildrenValues (item: SourceDataItem): string[] {
    return  flatten(item.children?.map(i => [i.value, collectChildrenValues(i)]))
  }

  interface RecursiveArray<T> extends Array <T | RecursiveArray<T>> {}

  function flatten (array?: RecursiveArray<string>): string[] {
    if (!array) return []
    return array.reduce<string[]>((result, current) => {
      if (Array.isArray(current)) {
        return result.concat(flatten(current))
      } else {
        return result.concat(current)
      }
    }, [])
  }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const childrenValues = collectChildrenValues(item)
    if (treeProps.multiple) {
      if (e.target.checked) {
        props.onItemChange([...treeProps.selected, item.value, ...childrenValues])
      } else {
        props.onItemChange(treeProps.selected.filter(value => value !== item.value && childrenValues.indexOf(value) === -1))
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

  function intersect<T>(array1: T[], array2: T[]): T[] {
    const result: T[] = []
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        result.push(array1[i])
      }
    }
    return result
  }

  const onItemChange = (values: string[]) => {
    const childrenValue = collectChildrenValues(item)
    const common = intersect(values, childrenValue)
    if (common.length !== 0) {
      props.onItemChange(Array.from(new Set(values.concat(item.value))))
      if (common.length === childrenValue.length) {
        // 全选
        inputRef.current!.indeterminate = false
      } else {
        // 半选
        inputRef.current!.indeterminate = true
      }
    } else {
      // 全不选
      props.onItemChange(values.filter(v => v !== item.value))
      inputRef.current!.indeterminate = false
    }
  }

  const inputRef = useRef<HTMLInputElement>(null)


  return <div key={item.value}
    className = {classNames(classes)}
  >
    <div className={sc('text')}>
      <input ref={inputRef} type="checkbox"
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
        return <TreeItem key={sub.value} item={sub} level={level + 1} treeProps={treeProps} onItemChange={onItemChange}></TreeItem>
      })}
    </div>

  </div>
}


export default TreeItem;