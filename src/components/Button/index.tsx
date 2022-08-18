import './index.scss';
import cls from 'classnames';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  dark?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  primary,
  dark,
  ...props
}) => (
  <button
    className={cls('button', {
      button__primary: primary,
      button__dark: dark,
    })}
    {...props}
  >
    {children}
  </button>
);
