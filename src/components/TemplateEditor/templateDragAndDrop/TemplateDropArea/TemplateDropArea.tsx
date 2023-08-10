import { Box, HStack } from "@chakra-ui/react";
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
      drop: (item, monitor) => {
        const { elementId, initialPosition } = item as any;
        const currentElementInitialPosition = initialPosition;

        const dropElementOffsetPosition =
          (monitor.getDifferenceFromInitialOffset() as XYCoord) ||
          currentElementInitialPosition;

        const xPosition = Math.round(
          currentElementInitialPosition?.x + dropElementOffsetPosition?.x
        );
        const yPosition = Math.round(
          currentElementInitialPosition?.y + dropElementOffsetPosition?.y
        );

        handleUpdateTemplateFields({
          elementId,
          data: { position: { x: xPosition, y: yPosition } },
        });

        return undefined;
      },
    }),
    [handleUpdateTemplateFields]
  );

  return (
    <HStack
      ref={drop}
      alignItems="center"
      justifyContent={"center"}
      overflow="hidden"
    >
      {children}
      {isActive && (
        <Box
          w="100%"
          position="absolute"
          borderBottom="2px"
          borderBottomStyle="dashed"
          borderBottomColor="red"
          overflow="hidden"
        />
      )}
      {isActive && (
        <Box
          h="100%"
          position="absolute"
          borderLeft="2px"
          borderLeftStyle="dashed"
          borderLeftColor="red"
        />
      )}
    </HStack>
  );
};

export default memo(TemplateDropArea);
