import React from 'react';

function Tasks() {
  let number = (Math.random() * 100).toFixed(2)
  let jobs = ['ler material', 'escrever redação', 'testar código']
  const result = jobs.map((job) => {
    return job
  })
  return (
    <div>
      <ul>
        <li>{number}</li>
        <li>{result}</li>
      </ul>
    </div>
  );
}

export default Tasks