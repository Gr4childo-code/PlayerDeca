import qs from 'qs';

const SearchByAuthor = (input = null) => {
  const query = qs.stringify(
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
  return query;
};

const first10 = () => {
  const query1 = qs.stringify(
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
  return query1;
  // dsajda
};

export { SearchByAuthor, first10 };
