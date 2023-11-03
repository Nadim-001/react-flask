export default function GalleryCard({char}) {
  return (
    <div className="gallery-image">
      <div>
          <h2>{char.name}</h2>
          <span>{char.age}</span>
          <p>{char.catch_phrase}</p>
      </div>
    </div>
  )
};