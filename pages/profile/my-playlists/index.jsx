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

  const [loader, setLoader] = useState(true);
  const [list, setList] = useState([]);
  const { data: session } = useSession();
  const [files, setFiles] = useState([] || '');
  const [playlist, setPlaylist] = useState(data);
  const [playlistName, setPlaylistName] = useState('');
  const [fileId, setSongsId] = useState([] || null);
  const [newUserPlaylist, setNewUserPlaylist] = useState([]);

  const handleFilesToUpload = (file) => {
    setFiles([...files, file]);
  };

  const handleDeleteSong = (index) => {
    setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
  };

  const uploadNewSongs = (files) => {
    console.log('Передано файлов: ', files);
    files.forEach((element) => {
      console.log('Каждый элемент: ', element);
      setLoader(false);
      createAudios(
        {
          data: {
            name: element.name,
            author: element.author,
          },
          files: {
            src: element.src,
            poster: element.poster,
          },
        },
        session?.jwt
      )
        .then(() => setLoader(true))
        .then(() => setFiles([]))
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

  const handleSelectOption = (e) => {
    setSongsId([...fileId, Number(e.target.value)]);
    console.log(fileId);
  };

  const handlePlaylistName = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleRemoveFile = (index) => {
    setNewUserPlaylist([
      ...newUserPlaylist.slice(0, index),
      ...newUserPlaylist.slice(index + 1),
    ]);
    setSongsId([...fileId.slice(0, index), ...fileId.slice(index + 1)]);
    console.log(fileId);
  };

  const handleNewUserPlaylist = (attr) => {
    setNewUserPlaylist([
      ...newUserPlaylist,
      { author: attr.author, name: attr.name },
    ]);
  };

  const uploadPlaylist = (fileId) => {
    console.log('Upload');
    setPlaylistName('');
    setLoader(false);
    postPlaylist(
      {
        json: {
          data: {
            title: playlistName,
            user_id: session?.user.id,
            audio: {
              connect: fileId,
            },
            /* poster: poster.current, */
          },
        },
      },
      session?.jwt
    )
      .then(() => setLoader(true))
      .then(() => setNewUserPlaylist([]))
      .then(() => setPlaylistName(''))
      .catch((error) => {
        throw error;
      });
  };

  return (
    <Layout>
      <Toast toastlist={list} setList={setList} />
      <div className='uploaded'>
        <div className='uploaded__left'>
          <Uploaded
            files={files}
            uploadNewSongs={uploadNewSongs}
            handleDeleteSong={handleDeleteSong}
          />
        </div>
        <div className='uploaded__right'>
          <DragAndDrop
            loader={loader}
            handleFilesToUpload={handleFilesToUpload}
          />
        </div>
      </div>
      <div>
        <CreatePlaylist
          playlist={playlist}
          fileId={fileId}
          playlistName={playlistName}
          newUserPlaylist={newUserPlaylist}
          uploadPlaylist={uploadPlaylist}
          handleNewUserPlaylist={handleNewUserPlaylist}
          handleSelectOption={handleSelectOption}
          handleRemoveFile={handleRemoveFile}
          handlePlaylistName={handlePlaylistName}
        />
      </div>
    </Layout>
  );
}
