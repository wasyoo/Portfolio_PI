import React from 'react';

function ProgressBar({ percent }) {
  const progressBarFill = {
    width: `${percent}%`,
    height: 12,
    borderRadius: 3,
    backgroundColor: `${percent <= 50 ? 'red' : 'green'}`,
  }
  return (
    <div>
      <div style={{width: "100%", backgroundColor: '#c4c4c4'}}>
        <div style={progressBarFill} />
      </div>

    </div>
  )
}

export default ProgressBar
