import qs from 'qs';

const SearchByAuthor = (input = null) => {
  const queryFilter = qs.stringify(
    {
      filters: {
        author: {
          $containsi: input,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  return queryFilter;
};

const first10 = () => {
  const queryFirst10 = qs.stringify(
    {
      fields: ['name', 'path', 'author', 'posterPath', 'likes'],
      sort: ['likes:desc'],
      pagination: {
        start: 0,
        limit: 10,
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  return queryFirst10;
  // dsajda
};

const playlistID = (query) => {
  const queryPlaylistID = qs.stringify(
    {
      fields: ['title', 'createdAt', 'id'],

      filters: {
        id: {
          $eq: query,
        },
      },
      populate: {
        poster: {
          fields: ['url'],
        },
        audio: { fields: ['posterPath', 'name', 'author', 'id'] },
        users_permissions_user: {
          fields: ['name'],
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  return queryPlaylistID;
};

const playlistNew = () => {
  const queryPlaylistNew = qs.stringify(
    {
      fields: ['title', 'createdAt'],
      populate: {
        poster: {
          fields: ['url'],
        },
        users_permissions_user: {
          fields: ['name'],
        },
      },
      sort: ['createdAt:desc'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  return queryPlaylistNew;
};

export { SearchByAuthor, first10, playlistID, playlistNew };
