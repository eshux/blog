import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { H1, H2, P, SingleLine } from '../components/Typography/Typography';
import Input from '../components/Input/Input';
import Loading from '../components/Loading/Loading';
import Comments from '../components/Comments/Comments';

export type DataType = {
  id: number | string;
  title: string;
  body: string;
};

type CommentType = {
  id: string;
  comments: string[];
};

const Post = () => {
  const [postData, setPostData] = useState<DataType>();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isComAdded, setIsComAdded] = useState(false);

  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  Number(id) > 10 && history.push('/NotFound');

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        response.data.id <= 10 && setPostData(response.data);
      });
  }, [id]);

  const addCommentHandler = () => {
    const newArr = [...comments];
    inputValue && newArr[0]
      ? newArr.forEach((i) => {
        i.id === id && i.comments.push(inputValue);
      })
      : newArr.push({ id, comments: [inputValue] });

    // ADDS TO LOCAL STORAGE
    if (localStorage.getItem(`com${id}`)) {
      // @ts-ignore
      const local = JSON.parse(localStorage.getItem(`com${id}`));
      const filtered = [...local].filter((i) => i.id === id);
      filtered[0].comments.push(inputValue);
      localStorage.setItem(`com${id}`, JSON.stringify(filtered));
    } else {
      localStorage.setItem(
        `com${id}`,
        JSON.stringify([{ id, comments: [inputValue] }])
      );
    }

    setComments(newArr);
    setIsComAdded(true);
    setInputValue('');
  };

  // SETS COMMENTS FROM LOCAL STORAGE
  useEffect(() => {
    // @ts-ignore
    const loc = JSON.parse(localStorage.getItem(`com${id}`));
    if (loc) {
      setComments(loc);
      setIsComAdded(true);
    }
  }, []);

  // WHILE DATA IS LOADING FROM API
  if (!postData) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <div className="container container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 ">
              {postData && (
                <div>
                  <H1>{postData.title}</H1>
                  <P>{postData.body.repeat(4)}</P>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundColor: 'rgb(189, 109, 122)', marginTop: '30px' }}
      >
        <div className="container container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 ">
              <Comments>
                <div>
                  <H2>Comments</H2>
                  {isComAdded === false && (
                    <SingleLine>No comments yet</SingleLine>
                  )}
                  {isComAdded === true &&
                    comments
                      .filter((i) => i.id === id)[0]
                      .comments.map((item: string) => {
                        return (
                          <SingleLine key={uuidv4()}> user: {item} </SingleLine>
                        );
                      })}
                </div>
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  text="Submit"
                  onClick={addCommentHandler}
                />
              </Comments>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
