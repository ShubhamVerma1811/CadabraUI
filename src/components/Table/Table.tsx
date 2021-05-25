import React, { useEffect, useState } from 'react'

/*

A Table component that should take in a Array of Objects [{},{}..] and render a table out of it

*/

export const Table = ({ data }: { data: Array<Object> }) => {
  const [headers, setHeaders] = useState<Array<string>>([])

  useEffect(() => {
    setHeaders(Object.keys(data[0]))
  }, [])

  return (
    <div>
      <table className='table-auto'>
        <thead>
          <tr>
            {headers.map((head, idx) => (
              <th key={idx}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((el) => {
            return (
              <tr>
                {Object.keys(el).map((item) => {
                  //@ts-ignore
                  const td = el[item]
                  return <td>{String(td)}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <table className='table-auto'>
        <thead>
          <tr>
            <th>Props</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>label</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>type?</td>
            <td> 'button' | 'submit' | 'reset'</td>
            <td>submit</td>
          </tr>
          <tr>
            <td>variant</td>
            <td> 'contained' | 'ghost' | 'text'</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td> 'xs' | 'sm' | 'base' | 'lg' |'xl'</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
