import React from 'react';


const row = ({ tree, change }) => {
  const { log } = tree;
  const logsToBurn = log.countToBurn > log.count ? log.count : log.countToBurn;
  const xpGained = isNaN(logsToBurn) ? 0 : logsToBurn * log.firemaking_xp;
  return (
    <tr>
      <td><img src={log.image_url} alt={log.name}/><p>{log.name}</p></td>
      <td><input className={"form-control"} value={log.count - logsToBurn} readOnly={true}/></td>
      <td><input className={"form-control"} value={log.countToBurn} onChange={(event) => change(event, log.name)}/></td>
      <td><input className={"form-control"} value={xpGained} readOnly={true}/></td>
    </tr>
  )
};


export default row;