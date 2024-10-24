import { useState } from 'react';
import { ModalOverlay } from '../modal/ModalOverlay';

export const HeaderMenu = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleSearchModal = () => {
    setIsVisible(currentValue => !currentValue);
    console.log(isVisible);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search for content"
          onClick={toggleSearchModal}
          className="bg-custom_800_blue border-b w-[250px] placeholder-white font-light text-sm outline-none"
        />
      </div>
      <ModalOverlay rootElement="modal">
        <h1>MODAL</h1>
      </ModalOverlay>
    </>
  );
};
