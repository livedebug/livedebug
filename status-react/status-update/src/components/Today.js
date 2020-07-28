import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';



function Today(props) {

  const [data, setData] = useState({ tasks: [    ]});

    useEffect(() => {
    const fetchData = async () => {
        console.log("fetching");
      const result = await axios(
        `target.json`,
      );
      setData(result.data);
    };

    setInterval(fetchData, 5000);

    fetchData();
  }, []);


    console.log("data is ", JSON.stringify(data));

      return <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="post-meta">
            Targets for today's Twitch...
          </div>
          <div className="post-description">
              <ul>
              { console.log("x",JSON.stringify(data.tasks))}

                { data.tasks.map(task => (
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
