import React from 'react'

function Lyrics({song}) {
  return (
    <section className="flex flex-col">
          {song?.sections[1]?.type === "LYRICS" ? (
            song?.sections[1]?.text.map((line, i) => (
              <p className="font-bold m-3" key={i}>
                {line}
              </p>
            ))
          ) : (
            <p className="font-bold">No lyrics found for this song</p>
          )}
        </section>
  )
}

export default Lyrics