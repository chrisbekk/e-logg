import React, { ReactNode } from 'react';

type Type = 'default' | 'confirm' | 'warning' | 'fail';
type Size = 'default' | 'small' | 'large' | 'full';
type BaseButtonProps = {
  text: string;
  type?: Type;
  size?: Size;
  icon?: ReactNode | null;
  clickHandler: () => void;
};

export const BaseButton = ({
  text,
  type = 'default',
  size = 'default',
  icon = null,
  clickHandler,
}: BaseButtonProps) => {
  let buttonColor = 'bg-custom_500_purple hover:bg-custom_700_purple';
  let buttonSize = 'px-8 text-lg font-thin';
  const buttonLayout = icon ? 'flex items-center gap-4' : '';

  switch (type) {
    case 'confirm':
      buttonColor = 'bg-custom_color_confirm hover:bg-custom_color_700_confirm';
      break;
    case 'warning':
      buttonColor = 'bg-custom_color_warning hover:bg-custom_color_700_warning';
      break;
    case 'fail':
      buttonColor = 'bg-custom_color_fail hover:bg-custom_color_700_fail';
      break;
    default:
      break;
  }

  switch (size) {
    case 'small':
      buttonSize = 'px-4 text-base';
      break;
    case 'large':
      buttonSize = 'px-20 text-lg font-thin';
      break;
    case 'full':
      buttonSize = 'w-full text-lg font-thin';
      break;
    default:
      break;
  }

  return (
    <button
      onClick={clickHandler}
      className={`${buttonColor} ${buttonSize} ${buttonLayout} rounded-xl py-3 shadow-xl hover:transition-colors`}
    >
      <p>{icon}</p>
      {text}
    </button>
  );
};
