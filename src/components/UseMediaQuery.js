import React, { useState, useEffect } from 'react'

function UseMediaQuery(query) {
    const [matches, setMatches] = useState(
        typeof window !== "undefined" && window.matchMedia(query).matches
    )

    useEffect(() => {
        if (typeof window === "undefined") return

        const mediaQuery = window.matchMedia(query)
        if (mediaQuery.matches !== matches) {
            setMatches(mediaQuery.matches)
        }

        const listener = () => setMatches(mediaQuery.matches)
        mediaQuery.addEventListener(listener)

        return () => mediaQuery.removeEventListener(listener)
    }, [query, matches])
  return (
    matches
  )
}

export default UseMediaQuery