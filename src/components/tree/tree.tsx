
import * as React from 'react';
import TreeItem from './tree-item';

export const Tree: React.FC<TreeProps> = (props) => {
  return (
    <div>
      {
        props.sourceData?.map(item => {
          return <TreeItem
            key={item.value}
            treeProps={props}
            item={item}
            level={1}
          ></TreeItem>
        })
      }
    </div>
  )

}

export default Tree;