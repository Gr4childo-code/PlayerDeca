import React, { useState } from 'react';
import PlaylistItem from './PlaylistItem';

export default function Playlists({ userId }) {
  const [playlist, setPlaylist] = useState([]);
  return (
    <div>
      <h3>Моя коллекция</h3>
      {userId}
      {/* {playlists.data?.map(({ id, attributes }, index) => (
        <PlaylistItem key={id} id={id} attributes={attributes} index={index} />
      ))} */}
    </div>
  );
}
