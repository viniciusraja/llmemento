import { Box } from "@chakra-ui/react";
import { ReactNode, memo } from "react";
import { XYCoord, useDrop } from "react-dnd";
import useUpdateTemplateField from "../../hooks/useUpdateTemplateField";

type TemplateDropAreaProps = {
  children: ReactNode;
};

const TemplateDropArea = ({ children }: TemplateDropAreaProps) => {
  const { handleUpdateTemplateFields } = useUpdateTemplateField();

  const [{ isActive }, drop] = useDrop(
    () => ({
      accept: "text",
      collect: (monitor) => ({
        isActive: monitor.canDrop() && monitor.isOver(),
      }),
      drop: (
        item: { elementId: string; initialPosition: { x: number; y: number } },
        monitor
      ) => {
        const currentElementInitialPosition = item?.initialPosition;

        const dropElementOffsetPosition =
          (monitor.getDifferenceFromInitialOffset() as XYCoord) ||
          currentElementInitialPosition;

        const xPosition = Math.round(
          currentElementInitialPosition?.x + dropElementOffsetPosition?.x
        );
        const yPosition = Math.round(
          currentElementInitialPosition?.y + dropElementOffsetPosition?.y
        );

        // console.log({ xPosition, yPosition, item });

        handleUpdateTemplateFields({
          elementId: item?.elementId,
          data: { position: { x: xPosition, y: yPosition } },
        });

        return undefined;
      },
    }),
    [handleUpdateTemplateFields]
  );
  console.log(isActive, "asmdomasodmoamsdoasodm");

  return (
    <Box ref={drop}>
      {children}
      {isActive && (
        <Box
          w="100%"
          position="absolute"
          top="50%"
          borderBottom="2px"
          borderBottomStyle="dashed"
          borderBottomColor="white"
        />
      )}
      {isActive && (
        <Box
          h="100%"
          left="50%"
          position="absolute"
          borderLeft="1px"
          borderLeftStyle="dashed"
          borderLeftColor="white"
        />
      )}
    </Box>
  );
};

export default memo(TemplateDropArea);
