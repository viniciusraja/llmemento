import { CSSProperties, memo } from "react";
import { XYCoord, useDragLayer } from "react-dnd";
import TextTemplateEditorElement from "../../TextTemplateEditorElement";
import { ITEM_TYPES } from "../TemplateDraggableItem/itemTypes";
import DraggablePreviewCenter from "./DraggablePreviewCenter";

const layerStyles: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

function snapToGrid(x: number, y: number): [number, number] {
  //TODO get the proportion for the template size and find the half
  const snappedX = Math.round(x / 16) * 16;
  const snappedY = Math.round(y / 16) * 16;
  return [snappedX, snappedY];
}

const getXYCoords = (
  initialOffset: XYCoord,
  currentOffset: XYCoord,
  isSnapToGrid?: boolean
) => {
  let { x, y } = currentOffset;

  if (isSnapToGrid) {
    x -= initialOffset.x;
    y -= initialOffset.y;
    [x, y] = snapToGrid(x, y);
    x += initialOffset.x;
    y += initialOffset.y;
  }

  return { x, y };
};

function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null,
  isSnapToGrid: boolean
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }

  const { x, y } = getXYCoords(initialOffset, currentOffset, isSnapToGrid);

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

const TemplateDraggablePreview = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));

  function renderItem() {
    const getPreviewBasedOnDraggableType = () => {
      if (itemType === ITEM_TYPES.TEXT)
        return <TextTemplateEditorElement {...item} />;
    };

    const previewDraggable = getPreviewBasedOnDraggableType();

    if (!!previewDraggable)
      return (
        <DraggablePreviewCenter
          draggableItemHeight={item?.size?.height}
          draggableItemWidth={item?.size?.width}
        >
          {previewDraggable}
        </DraggablePreviewCenter>
      );

    return null;
  }

  if (!isDragging) {
    return null;
  }

  return (
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset, currentOffset, false)}>
        {renderItem()}
      </div>
    </div>
  );
};

export default memo(TemplateDraggablePreview);
