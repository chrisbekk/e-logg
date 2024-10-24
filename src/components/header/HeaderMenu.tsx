import { useEffect, useState } from 'react';
import { ModalOverlay } from '../modal/ModalOverlay';
import { Modal } from '../modal/Modal';
import { ModalFooter } from '../modal/ModalFooter';
import { ModalHeader } from '../modal/ModalHeader';
import { ModalBody } from '../modal/ModalBody';
import { IconButton } from '../buttons/IconButton';

import { FaGear } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';

import { MessageButton } from './MessageButton';

export const HeaderMenu = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [messageCount, setMessageCount] = useState<number>(2);
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
      <div className="h-full flex items-center gap-12">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search..."
          aria-label="Search for content"
          onClick={() => setIsVisible(true)}
          onChange={e => setSearchTerm(e.target.value)}
          className="bg-custom_800_blue border-b w-[250px] placeholder-white font-light text-sm outline-none"
        />
        <div className="flex gap-8">
          <IconButton onClick={() => console.log('Clicked')}>
            <FaGear className="text-custom_500_gray text-2xl" />
          </IconButton>
          <MessageButton counter={messageCount} />
          <IconButton onClick={() => console.log('Clicked')}>
            <FaUser className="text-custom_500_gray text-2xl" />
          </IconButton>
        </div>
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
