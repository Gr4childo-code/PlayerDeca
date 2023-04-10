import { Api } from '@/api';
import { stringify } from 'qs';

export const getPlaylistNew = async () => {
  const query = stringify(
    {
      fields: ['title', 'createdAt'],
      populate: {
        poster: {
          fields: ['url'],
        },
        users_permissions_user: {
          fields: ['username'],
        },
        sort: ['name'],
      },
      //   sort: ['createdAt:desc'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  return await Api(`playlists?${query}`);
};

export const getPlaylistByID = async (queryID) => {
  const query = stringify(
    {
      fields: ['title', 'createdAt', 'id'],

      filters: {
        id: {
          $eq: queryID,
        },
      },
      populate: {
        poster: {
          fields: ['url'],
        },
        audio: {
          fields: ['name', 'author', 'id'],
          populate: {
            src: {
              fields: ['hash'],
            },
            poster: {
              fields: ['url'],
            },
          },
        },
        users_permissions_user: {
          fields: ['name'],
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  return await Api(`playlists?${query}`);
};
