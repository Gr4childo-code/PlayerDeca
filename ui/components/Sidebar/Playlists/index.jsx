import React from 'react';
import PlaylistItem from './PlaylistItem';

export default function Playlists({ playlists }) {
  console.log(playlists.data);

  return (
    <div>
      <h3>Моя коллекция</h3>
      {/* {playlists.data?.map(({ id, attributes }, index) => (
        <PlaylistItem key={id} id={id} attributes={attributes} index={index} />
      ))} */}
    </div>
  );
}
