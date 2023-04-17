import React, { useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import Layout from '@/ui/components/Sidebar/Layout';
import DragAndDrop from '@/ui/components/Sidebar/ProfileUpload';
import CreatePlaylist from '@/ui/components/Sidebar/ProfileUpload/CreatePlaylist';
import Uploaded from '@/ui/components/Sidebar/ProfileUpload/Uploaded';

import Toast from '@/ui/components/global/Toast';

import { createAudios, postPlaylist, getAudiosAll } from '@/api';

export const getServerSideProps = async () => {
  const audios = await getAudiosAll();

  return {
    props: { audios },
  };
};

export default function UserCollection({ audios }) {
  const { data } = audios;

  const poster = useRef(null);
  const [list, setList] = useState([]);
  const { data: session } = useSession();
  const [loader, setLoader] = useState(true);
  const [dragLoader, setDragLoader] = useState(true);
  const [playlist, setPlaylist] = useState(data);
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
        poster: poster.current,
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

  const handleDeleteSong = (index) => {
    setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
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
      .then(() => setPlaylist([]))
      .catch((error) => {
        throw error;
      });
  };

  const uploadAll = (files) => {
    files.forEach((element) => {
      setDragLoader(false);
      createAudios(
        {
          data: {
            name: element.name,
            author: element.author,
          },
          files: {
            src: element.src,
            poster: poster.current,
          },
        },
        session?.jwt
      )
        .then(() => setDragLoader(true))
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
    });
  };

  const handlePlaylistName = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <Layout>
      <Toast toastlist={list} setList={setList} />
      <div className='uploaded'>
        <div className='uploaded__left'>
          <Uploaded
            files={files}
            uploadAll={uploadAll}
            handleDeleteSong={handleDeleteSong}
            handleAddSongPlaylist={handleAddSongPlaylist}
          />
        </div>
        <div className='uploaded__right'>
          <DragAndDrop
            files={files}
            dragLoader={dragLoader}
            poster={poster}
            handleDrag={handleDrag}
            handleSelectFile={handleSelectFile}
            handleAddSongPlaylist={handleAddSongPlaylist}
            handleDeleteSongPlaylist={handleDeleteSongPlaylist}
            getAudiosAll={getAudiosAll}
          />
        </div>
      </div>
      <div>
        <CreatePlaylist
          loader={loader}
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
