import React, { useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import Layout from '@/ui/components/Sidebar/Layout';
import DragAndDrop from '@/ui/components/Sidebar/ProfileUpload';
import CreatePlaylist from '@/ui/components/Sidebar/ProfileUpload/CreatePlaylist';

import { createAudios, postPlaylist } from '@/api';

export default function UserCollection() {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const poster = useRef(null);
  const [loader, setLoader] = useState(true);
  const [files, setFiles] = useState([] || null);
  const { data: session } = useSession();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      /* setLoader(true); */
    } else if (e.type === 'dragleave') {
      /* setLoader(false); */
    }
  };

  const handleSelectFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    /* setLoader(false); */

    if (e.dataTransfer) {
      const audioData = e.dataTransfer.files[0].name.split('.mp3', [1]);
      const audio = {
        name: audioData[0].split(' - ')[1],
        author: audioData[0].split(' - ')[0],
        src: e.dataTransfer.files[0],
      };
      /* createAudios(
        {
          data: {
            name: audio.name,
            author: audio.author,
          },
          files: {
            src: audio.src,
            poster: poster.current,
          },
        },
        session?.jwt
      )
        .then(() => setLoader(true))
        .then(() => setFiles([...files, audio])); */
      setFiles([...files, audio]); // потом удалить
      console.log(files);
    } else if (e.target.files) {
      const audioData = e.target.files[0].name.split('.mp3', [1]);
      const audio = {
        name: audioData[0].split(' - ')[1],
        author: audioData[0].split(' - ')[0],
        src: e.target.files[0],
      };
      /* createAudios(
        {
          data: {
            name: audio.name,
            author: audio.author,
          },
          files: {
            src: e.target.files[0],
            poster: poster.current,
          },
        },
        session?.jwt
      )
        .then(() => setLoader(true))
        .then(() => setFiles([...files, audio])); */
      setFiles([...files, audio]); //потом удалить
    }
  };

  const handleAddSongPlaylist = (index) => {
    setPlaylist([...playlist, files[index]]);
    console.log('Добавил песню: ', files[index]);
  };
  const handleDeleteSongPlaylist = (index) => {
    setPlaylist([...playlist.slice(0, index), ...playlist.slice(index + 1)]);
    console.log('Удалил песню: ', files[index]);
  };

  console.log('Твой плейлист', playlist);

  const uploadPlaylist = () => {
    setLoader(false);
    postPlaylist(
      {
        data: {
          title: playlistName,
          user_id: session?.user.id,
        },
        files: {
          src: playlist,
        },
      },
      session?.jwt
    )
      .then(() => setLoader(true))
      .then(() => setPlaylist([]));
    console.log('Загруженный плейлист: ', playlist);
  };

  const handlePlaylistName = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <Layout>
      <div>
        <DragAndDrop
          files={files}
          loader={loader}
          poster={poster}
          handleDrag={handleDrag}
          handleSelectFile={handleSelectFile}
          handleAddSongPlaylist={handleAddSongPlaylist}
          handleDeleteSongPlaylist={handleDeleteSongPlaylist}
        />
      </div>
      <div>
        <CreatePlaylist
          playlist={playlist}
          playlistName={playlistName}
          uploadPlaylist={uploadPlaylist}
          handlePlaylistName={handlePlaylistName}
          handleDeleteSongPlaylist={handleDeleteSongPlaylist}
        />
      </div>
    </Layout>
  );
}
