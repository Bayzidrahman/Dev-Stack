import { toast } from 'react-toastify';

// One place for every toast message used in the app.
export const notify = {
  added: (name) => toast.success(`${name} added to your stack`),
  duplicate: (name) =>
    toast.warn(`${name} is already in your stack`, { toastId: `duplicate-${name}` }),
  removed: (name) => toast.info(`${name} removed from your stack`),
  cleared: () => toast.error('All technologies removed from your stack'),
};
