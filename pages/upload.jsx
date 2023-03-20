import Layout from '@/ui/components/Sidebar/Layout';
import React from 'react';
import Dropzone from '@/ui/components/Sidebar/Upload';

export default function Upload() {
  const uploadFiles = [
    { id: 1, song: 'Song 1', author: 'Author 1' },
    { id: 2, song: 'Song 2', author: 'Author 2' },
    { id: 3, song: 'Song 3', author: 'Author 3' },
    { id: 4, song: 'Song 4', author: 'Author 4' },
    { id: 5, song: 'Song 5', author: 'Author 5' },
  ];

  return (
    <Layout>
      <Dropzone uploadFiles={uploadFiles} />
    </Layout>
  );
}
