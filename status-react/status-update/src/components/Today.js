import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';



function Today(props) {

  const [data, setData] = useState({ tasks: [    ]});

  useEffect(() => {
    const fetchData = async () => {
       const result = await axios(
        `/target.json`,
      );
      setData(result.data);
    };

    setInterval(fetchData, 5000);
    fetchData();
  }, []);

   let first_four = [];
  // Subset target with the first 4 to be displayed.
  for (const task of data.tasks) {
    if(task.display) {
      let count = first_four.push(task);
      if (count >= 4) {
        break;
      }
    }
  }

  return <div className="content pure-u-1 pure-u-md-3-4">
      <div>
        <div className="post-meta">
          Targets for today's Twitch...
          </div>
          <div className="post-description">
            <ul>
              { first_four.map(task => (
                <li key={task.desc}>
                {task.complete
                  ? <strike>{task.desc}</strike>
                  : <span>{task.desc }</span>
                }
                </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>;
}




export default Today;
