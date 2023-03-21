import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import Playlists from '@/ui/components/Sidebar/Playlists';
import img1 from '../ui/components/Sidebar/Playlists/img/img1.jpeg';
import img2 from '../ui/components/Sidebar/Playlists/img/img2.webp';
import img3 from '../ui/components/Sidebar/Playlists/img/img3.jpg';
import img4 from '../ui/components/Sidebar/Playlists/img/img4.jpeg';
import img5 from '../ui/components/Sidebar/Playlists/img/img5.png';

export default function MyPlaylists() {
  const playlistsData = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
  ];

  return (
    <Layout>
      <Playlists playlistsData={playlistsData} />
    </Layout>
  );
}
