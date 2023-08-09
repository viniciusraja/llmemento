import { CSSProperties, ReactNode, memo, useEffect } from "react";
import { useDrag } from "react-dnd";
import { ItemTypesValues } from "./itemTypes";
import { TemplateElement } from "../../templateTypes";
import { getEmptyImage } from "react-dnd-html5-backend";

type TemplateDraggableItemProps = {
  children: ReactNode;
  itemType: ItemTypesValues;
  draggableItem: TemplateElement;
};

function getStyles(
  left: number,
  top: number,
  isDragging: boolean
): CSSProperties {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : "",
  };
}

const TemplateDraggableItem = ({
  children,
  itemType,
  draggableItem,
}: TemplateDraggableItemProps) => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: itemType,
      item: {
        elementId: draggableItem?.id,
        initialPosition: draggableItem?.position,
        ...draggableItem,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [draggableItem?.id, draggableItem?.position]
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <div
      ref={drag}
      style={getStyles(
        draggableItem?.position?.x,
        draggableItem?.position?.y,
        isDragging
      )}
    >
      {children}
    </div>
  );
};

export default memo(TemplateDraggableItem);
