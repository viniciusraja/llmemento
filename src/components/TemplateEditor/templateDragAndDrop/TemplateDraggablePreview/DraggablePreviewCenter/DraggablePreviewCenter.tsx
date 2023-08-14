import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type DraggablePreviewCenterProps = {
  children: ReactNode;
  draggableItemWidth: number;
  draggableItemHeight: number;
};

const DraggablePreviewCenter = ({
  children,
  draggableItemWidth,
  draggableItemHeight,
}: DraggablePreviewCenterProps) => {
  const aimCircleSize = 20;

  const topPosition =
    (draggableItemHeight - aimCircleSize) / 2 - draggableItemHeight;

  return (
    <>
      {children}
      <Box
        top={topPosition}
        left={(draggableItemWidth - aimCircleSize) / 2}
        position="relative"
        borderRadius="full"
        borderColor="gray.200"
        borderWidth="2px"
        bg="transparent"
        h={`${aimCircleSize}px`}
        display="flex"
        w={`${aimCircleSize}px`}
        alignItems="center"
        justifyContent="center"
      >
        <Box h="4px" w="4px" borderRadius="full" bg="white" />
      </Box>
    </>
  );
};

export default DraggablePreviewCenter;
