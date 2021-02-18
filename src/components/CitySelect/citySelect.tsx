import * as React from 'react';
import { SetStateAction, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import pinyin from 'tiny-pinyin';

export interface CitySelectProps {
  dataSource: string[];
  onChange: (p1: string) => void,
  
}

interface Context {
  map: {[key: string]: string[]};
  onChange: (p1: string) => void;
  setDialogVisible: React.Dispatch<SetStateAction<boolean>>;
}

const CitySelectContext = React.createContext<Context>({
  map: {}, onChange: (p1: string) => {}, setDialogVisible: () => {}
});
export const CitySelect: React.FC<CitySelectProps> = (props) => {
  const [dialogVisible, setDialogVisible] = useState(true)


  const map: Context['map']= {}
  props.dataSource.map(city => {
    const py = pinyin.convertToPinyin(city)
    const index = py[0]
    map[index] = map[index] || []
    map[index].push(city)
  })
  

  const onClick = () => {
    setDialogVisible(true)
  }
  return (
    <CitySelectContext.Provider value={{map, onChange: props.onChange, setDialogVisible}}>
      <div onClick={onClick}>city select</div>
      {dialogVisible && <Dialog onClose = {() =>{setDialogVisible(false)}}/>}
    </CitySelectContext.Provider>

  )
}

const Dialog: React.FC<{onClose: () => void}> = (props) => {
  const { map, onChange} = React.useContext(CitySelectContext)
  const indexList = Object.keys(map).sort()
  const cityList = (Object.entries(map)
    .sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)));
  const onClick = (city: string) => {
    onChange(city)
    props.onClose()
  }

  const goToCity = (cityIndex:string) => {
    document.querySelector(`[data-letter="${cityIndex}"]`)?.scrollIntoView()
  }

  return ReactDOM.createPortal((
    <div className="hi-citySelect-dialog">
      <header>
        <span className="icon" onClick={props.onClose}>&lt;</span>
        <span>选择城市</span>
      </header>
      <CurrentLocation />
      <h2>全部城市</h2>
      <ol className="hi-citySelect-index">
        {indexList.map(a => <li key={a} onClick={() => goToCity(a)}>{a}</li>)}
      </ol>
      <div className="cityList">所有城市</div>
      {cityList.map(([letter, list]) => {
        return (
          <div key={letter} className="hi-citySelect-citySection">
            <h4 data-letter={letter}>{letter}</h4>
            {list.map(city =>
              <div className="hi-citySelect-cityName" key={city}
                   onClick={() => onClick(city)}
              >{city}</div>
            )}
          </div>
        );
      })}
    </div>
  ), document.body)
}

const CurrentLocation: React.FC = () => {
  const [city, setCity] = useState<string>('加载中...');
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://ip-api.com/json/?lang=zh-CN');
    xhr.onload = () => {
      const string = xhr.responseText;
      const obj = JSON.parse(string);
      const c = obj.city;
      setCity(c);
    };
    xhr.onerror = () => {
      setCity('未知');
    };
    xhr.send();
  }, []);
  return (
    <div className="currentCity">
      当前城市：{city}
    </div>
  );
};

export default CitySelect;