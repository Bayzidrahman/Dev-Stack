import { useCallback, useMemo, useState } from 'react';
import { notify } from '../utils/notify';

/**
 * Holds the "Your Stack" selection and the add / remove / clear actions.
 * Toasts are fired here so every caller gets consistent feedback.
 */
export default function useStack() {
  const [stack, setStack] = useState([]);

  const selectedIds = useMemo(() => new Set(stack.map((item) => item.id)), [stack]);

  const addToStack = useCallback(
    (tech) => {
      if (selectedIds.has(tech.id)) {
        notify.duplicate(tech.name);
        return;
      }
      setStack((prev) => [...prev, tech]);
      notify.added(tech.name);
    },
    [selectedIds],
  );

  const removeFromStack = useCallback(
    (id) => {
      const item = stack.find((tech) => tech.id === id);
      if (!item) return;
      setStack((prev) => prev.filter((tech) => tech.id !== id));
      notify.removed(item.name);
    },
    [stack],
  );

  const clearStack = useCallback(() => {
    if (stack.length === 0) return;
    setStack([]);
    notify.cleared();
  }, [stack]);

  return { stack, selectedIds, addToStack, removeFromStack, clearStack };
}
