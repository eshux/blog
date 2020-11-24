import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Post from '../components/Posts/Post';
import { DataType } from './Posts';
import { H1 } from '../components/Typography/Typography';



const Home = () => {
  const [apiData, setApiData] = useState<DataType[]>([]);

  const history = useHistory();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      const filtered = response.data.filter(
        (item: {}, index: number) => index < 10
      );
      setApiData(filtered);
    });
  }, []);


  return (
    <section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <H1>
              Recent posts
            </H1>
          </div>
          {apiData[0] &&
            apiData.map((item) => {
              return (
                <div key={item.id} className="col-xs-12">
                  <Post
                    title={item.title}
                    onClick={() => history.push(`/posts/${item.id}`)}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Home;
