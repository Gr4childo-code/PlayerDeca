import { Api } from '@/api'

export const postEmail = async (params, token) => Api('auth/change-email', 'POST', params, token)

/* 
/api/users/:id */