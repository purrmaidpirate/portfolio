import type { MediaItem } from "~/src/infinite-canvas/types";
import type { Project } from "./types";

export function projectToMediaItem(project: Project): MediaItem {
  return {
    url: project.thumbnail.url,
    width: project.thumbnail.width,
    height: project.thumbnail.height,
    slug: project.slug,
  };
}
