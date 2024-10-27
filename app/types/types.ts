export interface NavLinkProps {
    href: string;
    title: string;
    className?: string;
}
export interface MenuOverlayProps {
  links: { title: string; path: string }[];
  onClose: () => void;     
}

export type Testimonial = {
  id: number;
  type: 'image' | 'video' | 'unknown'; 
  src: string;
};

export interface Post {
  id: number;
  image: string;
  name: string;
  price: number;
}

export interface UserContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}
