import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions'
import {AutoComplete, AutoCompleteProps} from './autoComplete';
import "../../styles/index.scss"


interface LakerPlayerProps {
  value: string;
  number: number;
}

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete
} as Meta;

const SimpleCompleteTmp: Story<AutoCompleteProps> = (args) => {
    const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins','james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']

  const lakersWithNumber = [
    {value: 'bradley', number: 11},
    {value: 'pope', number: 1},
    {value: 'caruso', number: 4},
    {value: 'cook', number: 2},
    {value: 'cousins', number: 15},
    {value: 'james', number: 23},
    {value: 'AD', number: 3},
    {value: 'green', number: 14},
    {value: 'howard', number: 39},
    {value: 'kuzma', number: 0},
  ]

    // const handleFetch = (query:string) => {
    //  return  lakers.filter(name => name.includes(query)).map(name => ({value: name}))
    // }

    const handleFetch = (query: string) => {
      return fetch(`https://api.github.com/search/users?q=${query}`)
        .then(res => res.json())
        .then(({ items }) => {
          return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
        })
    }

    // const handleFetch = (query:string) => {
    //  return  lakersWithNumber.filter(player => player.value.includes(query))
    // }

    // const renderOption = (item: DataSourceType<LakerPlayerProps>) => {
    //   return (
    //     <>
    //      <h2>Name: {item.value}</h2>
    //      <h2>Number: {item.number}</h2>
    //     </>
    //   )
    // }

    return (
      <AutoComplete 
        fetchSuggestions={handleFetch}
        onSelect={action('selected')}
        // renderOption={renderOption}
      />
    )
}
export const SimpleComplete = SimpleCompleteTmp.bind({});
SimpleComplete.storyName = 'AutoComplete';
