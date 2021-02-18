import * as React from 'react';
import { FC } from 'react';
import Input from '../Input'
import classNames from 'classnames'

export interface FormValue {
  [K: string] : any
}

export interface FormProps {
  value: FormValue;
  fields: Array<{name: string, label: string, input: {type: string}}>;
  buttons: React.ReactFragment,
  onSubmit: React.FormEventHandler<HTMLFormElement>,
  onChange: (value: FormValue) => void,
  errors: { [K: string] : string[]},
  errorsDisplayMode: 'first' | 'all',
  transformError?: (message: string) => string;
}

export const Form:FC<FormProps> = (props) =>{
  const {
    value,
    fields,
    onSubmit,
    onChange,
    errors,
    buttons
  } = props
  
  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSubmit(e)
  }
  const onInputChange = (name:string, value: string ) => {
    const newFormValue = {
      ...props.value,
      [name]: value
    }
    onChange(newFormValue)
  }
  const transformError = (message: string) => {
    const map: any = {
      required: '必填',
      minLength: '太短',
      maxLength: '太长',
    };
    return props.transformError && props.transformError(message) || map[message] || '未知错误';
  };
  return (
    <form onSubmit={handleSubmit}>
      <table className="hi-form-table">
        <tbody>
          {fields && fields.map(f => 
              <tr className={classNames('hi-form-tr')} key={f.name}>
                <td className={classNames('hi-form-td')}>
                  <span className="hi-form-label">
                    {f.label}
                  </span>
                </td>
                <td className={classNames('hi-form-td')}>
                  <Input type={f.input.type} value={value[f.name]}
                    onChange={(e) => {
                      onInputChange(f.name, e.target.value)
                    }}
                  />
                <div className="fui-form-error">{
                  props.errors[f.name] ?
                    (props.errorsDisplayMode === 'first' ?
                      transformError!(props.errors[f.name][0]) : props.errors[f.name].map(transformError!).join()) :
                    <span>&nbsp;</span>
                } </div>
                </td>
              </tr>  
            )}
        </tbody>
        <tr className="hi-form-tr">
          <td className="hi-form-td"/>
          <td className="hi-form-td">
            {props.buttons}
          </td>
        </tr>
      </table>
    </form>
  )
}

Form.defaultProps = {
  errorsDisplayMode: 'first'
}

export default Form;