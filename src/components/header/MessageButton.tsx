import { IconButton } from '../buttons/IconButton';
import { FaBell } from 'react-icons/fa6';

type MessageButtonProps = { counter: number };

const Counter = ({ counter }: MessageButtonProps) => {
  if (counter === 0) return;
  return (
    <div className="absolute -right-2 -top-3 bg-custom_500_purple rounded-full size-6 flex items-center justify-center">
      <p className="text-xs font-light">{counter}</p>
    </div>
  );
};

export const MessageButton = ({ counter }: MessageButtonProps) => {
  return (
    <IconButton onClick={() => console.log('Clicked')}>
      <Counter counter={counter} />
      <FaBell className="text-custom_500_gray text-2xl" />
    </IconButton>
  );
};
