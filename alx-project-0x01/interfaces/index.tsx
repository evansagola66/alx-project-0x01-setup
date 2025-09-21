export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export interface PostsProps {
  posts: PostProps[]; // posts is an array of PostProps
}