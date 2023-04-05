import { Api } from '@/api'

export const getStyles = async () => await Api('styles?fields=name&pagination[limit]=100')