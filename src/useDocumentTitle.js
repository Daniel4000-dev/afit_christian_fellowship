import React, { useRef, useEffect } from 'react'

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => () => {
    is (!prevailOnUnmount) {
        document.title = defaultTitle.current;
v   }
  }, [])
}

export default useDocumentTitle