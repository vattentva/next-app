export type Photo = {
  id: string
  name: string
  href: string
  username: string
  imageSrc: string
}

const photos: Photo[] = [
  {
    id: '1',
    name: 'Kevin Canlas',
    href: 'https://twitter.com/kvncnls/status/1471832344986324998',
    username: '@kvncnls',
    imageSrc: 'https://pbs.twimg.com/media/FGz_t1wXIAIFyT-?format=jpg'
  },
  {
    id: '2',
    name: 'Pedro Duarte',
    href: 'https://twitter.com/peduarte/status/1463897468383412231',
    username: '@peduarte',
    imageSrc: 'https://pbs.twimg.com/media/FFDOtLkWYAsWjTM?format=jpg'
  },
  {
    id: '3',
    name: 'Ahmad Awais',
    href: 'https://twitter.com/MrAhmadAwais/status/1338151679083032577',
    username: '@MrAhmadAwais',
    imageSrc: 'https://pbs.twimg.com/media/EpIR281XIAMUrEM?format=jpg'
  },
  {
    id: '4',
    name: 'Leandro Soengas',
    href: 'https://twitter.com/lsoengas/status/1352302741339693061',
    username: '@lsoengas',
    imageSrc: 'https://pbs.twimg.com/media/EsRYK8oWMAEkObV?format=jpg'
  },
  {
    id: '5',
    name: 'Samina',
    href: 'https://twitter.com/saminacodes/status/1466479548837482497',
    username: '@saminacodes',
    imageSrc: 'https://pbs.twimg.com/media/FFn7X76VgAEVTgs?format=jpg'
  },
];

export default photos;
