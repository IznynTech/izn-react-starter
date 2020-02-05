/**
 * hooks/useFormUpdate.js
 */
import { useForm } from 'react-hook-form';
import useHttpPost from './useHttpPost';

export function useFormUpdate(
  errorMsg = 'Error',
  successMsg = false,
  onFinally = null,
  onSuccess = null,
  onError = null,
) {
  const { reset } = useForm();
  const { httpHandler, loading } = useHttpPost(
    errorMsg,
    successMsg,
    () => {
      if (onFinally) {
        onFinally();
      } else {
        reset();
      }
    },
    onSuccess,
    onError,
  );

  return { httpHandler, loading };
}

export default useFormUpdate;
