import React from 'react';

export default function UploadedUsersSongs({ audios }) {
  return (
    <div>
      {audios.data?.map(({ id, attributes }, index) => (
        <div key={id}>
          <p>
            {attributes.author} - {attributes.name}
          </p>
        </div>
      ))}
    </div>
  );
}
