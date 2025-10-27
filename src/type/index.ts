export interface Author {
  id: number;
  name: string;
  email: string;
  picture: string | null;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  tags: string[];
  isFeatured: boolean;
  viewCount: number;
  authorId: number;
  createdAt: string; // or Date if you parse it
  updatedAt: string; // or Date if you parse it
  author: Author;
}

 
 
export interface Project {
  id: number
  title: string
  slug: string
  description: string
  thumbnail?: string
  liveUrl?: string
  clientRepoUrl?: string
  serverRepoUrl?: string
  features: string[]
  isFeatured: boolean
  owner: Author
  technologies: string[]
  ownerId: number
  createdAt: string
  updatedAt: string
}
