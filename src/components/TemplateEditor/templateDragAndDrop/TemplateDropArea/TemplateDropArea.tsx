import { Box, HStack } from "@chakra-ui/react";
import { ReactNode, memo } from "react";
import { XYCoord, useDrop } from "react-dnd";
import useUpdateTemplateField from "../../hooks/useUpdateTemplateField";

type TemplateDropAreaProps = {
  children: ReactNode;
  width: number;
  height: number;
};

const TemplateDropArea = ({
  children,
  width,
  height,
}: TemplateDropAreaProps) => {
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
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent={"center"}
    >
      {children}
      {isActive && (
        <Box
          w={width}
          position="absolute"
          borderBottom="2px"
          borderBottomStyle="dashed"
          borderBottomColor="gray"
        />
      )}
      {isActive && (
        <Box
          h={height}
          position="absolute"
          borderLeft="2px"
          borderLeftStyle="dashed"
          borderLeftColor="gray"
        />
      )}
    </HStack>
  );
};

export default memo(TemplateDropArea);
