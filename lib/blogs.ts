export type Blog = {
    id: number
    title: string
    content: string
    author: string
    date: string
    category: string
}

const blogs: Blog[] = [
  {
    id: 1,
    title: 'Lorem Ipsum - What Is It and How to Use It?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    author: 'John Doe',
    date: '2023-08-01',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'The Benefits of Regular Exercise',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    author: 'Jane Smith',
    date: '2023-07-25',
    category: 'Health & Fitness'
  },
  {
    id: 3,
    title: 'Mastering the Art of Cooking',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    author: 'Michael Johnson',
    date: '2023-07-18',
    category: 'Food & Cooking'
  },
  // ...
];

export default blogs;
