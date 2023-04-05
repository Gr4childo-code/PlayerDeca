import React, { useState } from 'react';
import PlaylistItem from './PlaylistItem';

export default function Playlists({ userId, playlists }) {
  const [playlist, setPlaylist] = useState('');

  return (
    <div>
      {playlists.data?.map(({ id, attributes }, index) => (
        <PlaylistItem key={id} id={id} attributes={attributes} index={index} />
      ))}
    </div>
  );
}
