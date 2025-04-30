import { RefObject, useEffect } from 'react';

const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  onClickOutside: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    if (onClickOutside !== undefined) {
      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        const element = ref.current;

        if (!(element?.contains(event.target as Element))) {
          removeEventListeners();
          onClickOutside(event);
        }
      };

      const removeEventListeners = () => {
        window.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('touchstart', handleClickOutside);
      };

      const timeoutId = window.setTimeout(() => {
        window.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('touchstart', handleClickOutside);
      }, 400);

      return () => {
        if (timeoutId) { window.clearTimeout(timeoutId); }
        removeEventListeners();
      };
    }
  }, [onClickOutside]);
};

export default useClickOutside;
