import { Api } from '@/api'
import { stringify } from 'qs';

export const getAudios = async () => {
  const qyery = stringify(
    {
      fields: [
        'name',
        'author'
      ],
      populate: {
        src: {
          fields: ['hash']
        },
        poster: {
          fields: ['url']
        }
      },
      sort: ['id:desc']
    },
    { encodeValuesOnly: true }
  )

  return await Api(`audios?${qyery}`)
}