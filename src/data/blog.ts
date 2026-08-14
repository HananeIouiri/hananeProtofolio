export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
}

// No posts published yet — add entries here as they go live.
export const blogPosts: BlogPost[] = [];
