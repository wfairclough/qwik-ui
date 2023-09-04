import { component$ } from '@builder.io/qwik';
import { Toast as HeadlessToast } from '@qwik-ui/primitives';
import { daisyConfig } from './daisy.config';

export type TailwindToastVariants = 'info' | 'success' | 'warning' | 'error';
export type TailwindToastProps = {
  variant?: TailwindToastVariants;
  top?: boolean;
  end?: boolean;
  start?: boolean;
  middle?: boolean;
  bottom?: boolean;
  center?: boolean;
  class?: string;
  label?: string;
};

export type ToastProps = TailwindToastProps;
export const Toast = component$(
  ({
    class: classNames,
    label = 'New message',
    variant = 'info',
    top,
    start,
    center,
    end,
    middle,
    bottom,
    ...rest
  }: ToastProps) => {
    const { variants, positions } = daisyConfig;
    // TODO: discuss this
    return (
      <div
        class={[
          'toast absolute',
          {
            [positions.top]: top,
            [positions.middle]: middle,
            [positions.center]: center,
            [positions.bottom]: bottom,
            [positions.end]: end,
            [positions.start]: start,
          },
          classNames,
        ]}
      >
        <HeadlessToast label={label} class={['alert', variants[variant]]} {...rest} />
      </div>
    );
  },
);
