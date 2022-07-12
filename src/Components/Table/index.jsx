import React from 'react';
import './style.scss';

export default function Table(props) {
  const { data, column, parent, actionValues } = props;

  const handleClick = (e, data) => {
    e.stopPropagation();
    props.handleAction(e.target.checked, data);
  }
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col"><input type="checkbox" /></th>
          {column.map(columnData => 
            <>
              {!columnData.hidden && <th scope="col" key={columnData.displayName}>{columnData.displayName}</th>}
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {!!data && data.map((dataData, index) => 
          <tr key={(dataData)} className="c-pointer" onClick={() => parent !== 'deals' && props.history.push(`${parent}/${dataData.id}`)}>
            <th scope="row"><input type="checkbox" checked={actionValues.includes(dataData.id)} onClick={(e) => handleClick(e, dataData)} /></th>
            {column.map(columnData => 
              <>
                {!columnData.hidden && <td key={columnData.displayName}> 
                  {!(columnData.name === 'email' || columnData.name === 'createdBy') && <span>{dataData[columnData.name]}</span>}
                  {(columnData.name === 'email' || columnData.name === 'createdBy') && <a className="anchor-tag" href={`mailto:${dataData[columnData.name]}`}>{dataData[columnData.name]}</a>}
                </td>}
              </>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}
