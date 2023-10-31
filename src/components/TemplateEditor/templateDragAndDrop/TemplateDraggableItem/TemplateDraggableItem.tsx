import { ReactNode, memo, useLayoutEffect } from "react";
import { useDrag } from "react-dnd";
import { ItemTypesValues } from "./itemTypes";
import { TemplateElement } from "../../templateTypes";
import { getEmptyImage } from "react-dnd-html5-backend";
import getDraggableItemStyles from "./utils/getDraggableItemStyles";

type TemplateDraggableItemProps = {
  children: ReactNode;
  itemType: ItemTypesValues;
  draggableItem: TemplateElement;
};

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

  const emptyDraggablePreview = getEmptyImage();
  preview(emptyDraggablePreview, { captureDraggingState: true });

  return (
    <div
      ref={drag}
      style={getDraggableItemStyles(
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
