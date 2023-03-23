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
      filters: {
        id: {
          $eq: query,
        },
      },
      populate: ['poster', 'audio', 'users_permissions_user'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  return queryPlaylistID;
};

export { SearchByAuthor, first10, playlistID };
