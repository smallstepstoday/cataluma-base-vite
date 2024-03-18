import clsx from 'clsx';
import { tw } from 'utils';

const styles = {
  base: tw`bg-blue-500 px-4 py-2`,
};

export const Button = (props: any) => {
  return (
    <button className={styles.base} onClick={() => props.onClick?.()}>
      {props.children}
    </button>
  );
};

export default Button;
