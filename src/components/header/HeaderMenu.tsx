import { useEffect, useState } from 'react';
import { ModalOverlay } from '../modal/ModalOverlay';
import { Modal } from '../modal/Modal';
import { ModalFooter } from '../modal/ModalFooter';
import { ModalHeader } from '../modal/ModalHeader';
import { ModalBody } from '../modal/ModalBody';

export const HeaderMenu = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const closeModal = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (!isVisible) {
      setSearchTerm('');
    }
  }, [isVisible, setSearchTerm]);

  return (
    <>
      <div>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search..."
          aria-label="Search for content"
          onClick={() => setIsVisible(true)}
          onChange={e => setSearchTerm(e.target.value)}
          className="bg-custom_800_blue border-b w-[250px] placeholder-white font-light text-sm outline-none"
        />
      </div>

      <ModalOverlay
        rootElement="modal"
        closeModal={closeModal}
        modalController={isVisible}
      >
        <Modal>
          <ModalHeader headerTitle="Search for Stuff">ss</ModalHeader>
          <ModalBody>{searchTerm}</ModalBody>
          <ModalFooter>Footer</ModalFooter>
        </Modal>
      </ModalOverlay>
    </>
  );
};
