import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import './RowPost.css';
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../constants/constants';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch(err => {
        console.log(`Error > ${err}`);
      });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const movieHandle = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0].key);
        } else {
          console.log('No videos available');
        }
      })
      .catch(err => {
        console.log(`Error > ${err}`);
      });
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) =>
          <img
            key={obj.id}
            className={props.isSmall ? 'smallPoster' : 'poster'}
            onClick={() => movieHandle(obj.id)}
            src={obj.backdrop_path ? `${imageUrl}${obj.backdrop_path}` : ''}
            alt="poster"
          />
        )}
      </div>
      {urlId && <YouTube videoId={urlId} opts={opts} />}
    </div>
  );
}

export default RowPost;
