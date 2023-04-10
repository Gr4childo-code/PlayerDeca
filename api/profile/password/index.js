import { Api } from '@/api'
import { stringify } from 'qs'

export const postPassword = async (params, token) => Api('auth/change-password', 'POST', params, token)