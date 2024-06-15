export type TPostDto = {
  id: number;
  date: number;
  title: string;
  content: string;
  thumbnail: {
    large: string;
    small: string;
  };
  author: {
    name: string;
    avatar: string;
    role: string;
  };
};
