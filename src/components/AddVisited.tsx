import { useEffect, useMemo, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; url: string }) => void;
};

export default function AddVisited(props: Props) {
  const { isOpen, onClose, onSubmit } = props;
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setTitle("");
    setLink("");
  }, [isOpen]);

  const isReady = useMemo(() => {
    return Boolean(title && link);
  }, [title, link]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg='rgba(0,0,0,.6)' />
      <ModalContent w={512} bg="white">
        <ModalHeader>添加快捷方式</ModalHeader>
        <ModalBody>
          <VStack spacing={2}>
            <FormControl id="web-name">
              <FormLabel>名称</FormLabel>
              <Input
                placeholder="名称"
                value={title}
                onChange={({ target }) => setTitle(target.value)}
              />
            </FormControl>
            <FormControl id="web-site">
              <FormLabel>网址</FormLabel>
              <Input
                placeholder="网址"
                value={link}
                onChange={({ target }) => setLink(target.value)}
              />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button size="sm" variant="ghost" onClick={onClose}>
            取消
          </Button>
          <Button
            ml={3}
            onClick={() => {
              isReady && onSubmit({ name: title, url: link });
            }}
            size="sm"
          >
            完成
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}