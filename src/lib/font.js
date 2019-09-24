import { getStatic } from '@lib/static'

export const config = {
  // google: {
  //   families: ['Open Sans:400'],
  // },
  custom: {
    urls: [
      getStatic('css/fonts.css'),
      // 'https://fonts.googleapis.com/css?family=Mitr:200,300,500%7CSarabun:400,700&display=swap',
    ],
  },
}
