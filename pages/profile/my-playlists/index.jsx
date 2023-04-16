import React, { useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import Layout from '@/ui/components/Sidebar/Layout';
import DragAndDrop from '@/ui/components/Sidebar/ProfileUpload';
import CreatePlaylist from '@/ui/components/Sidebar/ProfileUpload/CreatePlaylist';

import Toast from '@/ui/components/global/Toast';

import { createAudios, postPlaylist } from '@/api';

export default function UserCollection() {
  const poster = useRef(null);
  const [list, setList] = useState([]);
  const { data: session } = useSession();
  const [loader, setLoader] = useState(true);
  const [playlist, setPlaylist] = useState([]);
  const [files, setFiles] = useState([] || '');
  const [playlistName, setPlaylistName] = useState('');

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setLoader(true);
    } else if (e.type === 'dragleave') {
      setLoader(false);
    }
  };

  const handleSelectFile = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer) {
      const audioData = e.dataTransfer.files[0].name.split('.mp3', [1]);
      const audio = {
        name: audioData[0].split(' - ')[1],
        author: audioData[0].split(' - ')[0],
        src: e.dataTransfer.files[0],
      };
      setFiles([...files, audio]);
    } else if (e.target.files) {
      const audioData = e.target.files[0].name.split('.mp3', [1]);
      const audio = {
        name: audioData[0].split(' - ')[1],
        author: audioData[0].split(' - ')[0],
        src: e.target.files[0],
      };
      setFiles([...files, audio]);
    }
  };

  const handleAddSongPlaylist = (index) => {
    setPlaylist([...playlist, files[index]]);
  };
  const handleDeleteSongPlaylist = (index) => {
    setPlaylist([...playlist.slice(0, index), ...playlist.slice(index + 1)]);
  };

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
      .then(() => setPlaylistName(''))
      .then(() => setPlaylist([]));
  };

  const upload = (index) => {
    setLoader(false);
    createAudios(
      {
        data: {
          name: files[index].name,
          author: files[index].author,
        },
        files: {
          src: files[index].src,
          poster: poster.current,
        },
      },
      session?.jwt
    )
      .then(() => setLoader(true))
      .then(() =>
        setList([
          ...list,
          {
            id: Date.now(),
            type: 'success',
            description: 'Успешно загружено',
          },
        ])
      )
      .catch((error) => {
        throw error;
      });
  };

  const handlePlaylistName = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <Layout>
      <Toast toastlist={list} setList={setList} />
      <div>
        <DragAndDrop
          upload={upload}
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
