
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
      pagination: {
        page: 1,
        pageSize: 10,
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