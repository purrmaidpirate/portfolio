export type ProjectCategory =
  | "3d-animation"
  | "ar-xr"
  | "product-viz"
  | "mascot-branding"
  | "typography"
  | "projection-mapping"
  | "creative-tech";

export type ProjectImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
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
  featured: boolean;
};
