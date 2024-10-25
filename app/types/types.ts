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
  type: 'image' | 'video' | 'unknown'; // Asegúrate de usar tipos literales
  src: string;
};