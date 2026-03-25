export type ProjectCategory =
  | "3d-animation"
  | "ar-xr"
  | "product-viz"
  | "mascot-branding"
  | "typography"
  | "projection-mapping"
  | "creative-tech"
  | "visual-experiments";

export type ProjectImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
  videoSrc?: string;
};

export type ProjectSection = {
  heading?: string;
  body: string;
  image?: ProjectImage;
  images?: ProjectImage[];
  videos?: string[];
  imagePosition?: "left" | "right";
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  year: string;
  client: string;
  role: string;
  thumbnail: ProjectImage;
  images: ProjectImage[];
  sections?: ProjectSection[];
  video?: string;
  videos?: string[];
  footerImage?: ProjectImage;
  visualOnly?: boolean;
  featured: boolean;
};
