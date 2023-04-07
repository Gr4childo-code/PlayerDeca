import Api from "../fetch";
import { stringify } from 'qs';

export const getPlaylistId = async (queryId) => {
  const query = stringify(
    {
      fields: ['title', 'createdAt', 'id'],

      filters: {
        id: {
          $eq: queryId,
        },
      },
      populate: {
        poster: {
          fields: ['url'],
        },
        audio: {
          fields: ['name', 'author', 'id'],
          populate: {
            src: ['hash']
          },
          poster: {
            fields: ['url']
          }
        }
      },
      users_permissions_user: {
        fields: ['name'],
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  return await Api(`playlists?${query}`);
}

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
      encodeValuesOnly: true, // prettify URL
    }
  )
  return await Api(`playlists?${query}`)
}