import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { tw } from 'utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const styles = {
  base: tw`bg-green-500 px-4 py-2`,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, onClick, ...rest } = props;

    return (
      <button
        className={clsx(styles.base, className)}
        onClick={(e) => props.onClick?.(e)}
        ref={ref}
        {...rest}
      >
        {props.children}
      </button>
    );
  },
);

export default Button;
