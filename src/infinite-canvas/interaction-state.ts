// Module-level mutable state shared between SceneController and MediaPlane
// for distinguishing clicks from drags
export const interactionState = {
  wasDragging: false,
  dragDistance: 0,
};
