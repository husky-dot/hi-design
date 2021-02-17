
import * as React from 'react';
import TreeItem from './tree-item';

export const Tree: React.FC<TreeProps> = (props) => {
  const onItemChange = (values: string[] | string) => {
    if (props.multiple) {
      props.onChange(Array.from(new Set(values)) as string[])
    } else {
      props.onChange(values as string)
    }
    
  }
  return (
    <div>
      {
        props.sourceData?.map(item => {
          return <TreeItem
            key={item.value}
            treeProps={props}
            item={item}
            level={1}
            onItemChange={onItemChange}
          ></TreeItem>
        })
      }
    </div>
  )

}

export default Tree;