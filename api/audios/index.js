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
export const getAudiosForUser = async (userName) => {
  const query = stringify(
    {
      filters: {
        users_permissions_user: {
          $eq: userName,
        }
      },
      fields: [
        'name',
        'author'
      ],
    },
    { encodeValuesOnly: true }
  )
  return await Api(`audios?${query}`)
}

export const createAudios = async (params, token) => Api('audios', 'POST', params, token)

/* users_permissions_user */