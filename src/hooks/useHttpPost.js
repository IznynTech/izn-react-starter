/**
 * hooks/useHttpPost.js
 */
import React, { useState } from 'react';
import { usePageAlert } from '../components/Page/Alert';
import { useErrorHandler } from '../app/ErrorHandler';

export function useHttpPost(
  errorMsg = 'Error',
  successMsg = false,
  onFinally = null,
  onSuccess = null,
  onError = null,
) {
  const [loading, setLoading] = useState(false);
  const { setRequestError } = useErrorHandler();
  const { setType, setContent } = usePageAlert();

  const httpHandler = service => {
    // Show loading
    setLoading(true);
    // Run service
    service()
      // Success
      .then(response => {
        // Global callback
        if (onFinally) {
          onFinally();
        }
        // Show message
        if (successMsg) {
          setType('success');
          setContent(successMsg);
        }
        // Run callback
        if (onSuccess) {
          onSuccess(response);
        }
        // Hide loading
        setLoading(false);
      })
      // Error
      .catch(error => {
        // Global callback
        if (onFinally) {
          onFinally();
        }
        // Show error
        window.scrollTo(0, 0);
        if (onError) {
          onError(error);
        } else if (error.response.status === 422) {
          setType('error');
          if (typeof error.response.data.errors !== 'undefined') {
            const { errors } = error.response.data;
            let messages = [];
            Object.keys(errors).forEach(key => {
              const subs = errors[key];
              messages = messages.concat(subs);
            });

            setContent(
              <div>
                <p style={{ marginBottom: 10 }}>
                  <strong>Errors encountered while registration process.</strong>
                </p>
                <ol style={{ fontSize: 12, listStyle: 'disc inside', paddingLeft: 8 }}>
                  {messages.map((msg, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={`error-${index}`}>{msg}</li>
                  ))}
                </ol>
              </div>,
            );
          } else {
            setContent('Errors encountered while registration process. Please try again.');
          }
        } else {
          setRequestError(error, errorMsg);
        }

        // Hide loading
        setLoading(false);
      });
  };

  return { httpHandler, loading };
}

export default useHttpPost;
