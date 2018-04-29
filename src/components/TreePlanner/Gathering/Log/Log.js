import React from 'react';
import css from './Log.module.css';


const log = ({ log, change }) => {
  const isCountValid = !isNaN(parseInt(log.count, 10));
  const experienceGained = isCountValid ? parseInt(log.count, 10) * log.woodcutting_xp : 0;
  return (
    <tr>
      <td><img src={log.image_url} alt={log.name} className={css["log-image"]}/><p>{log.name}</p></td>
      <td><input value={log.count} className={"form-control"} onChange={(event) => change(event, log.name)}/></td>
      <td><input className={"form-control"} readOnly={true} value={experienceGained}/></td>
    </tr>
  );
};


export default log;