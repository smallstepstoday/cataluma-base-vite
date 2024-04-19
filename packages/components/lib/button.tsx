import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { tw } from 'utils';

const styles = {
  base: tw`bg-green-500 px-4 py-2`,
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { className, onClick, ...rest } = props;

  return (
    <button
      className={clsx(styles.base, className)}
      onClick={(e) => onClick?.(e)}
      ref={ref}
      {...rest}
    >
      {props.children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
