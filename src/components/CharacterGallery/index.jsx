import { Link } from "react-router-dom";
import { GalleryCard } from "../";

export default function CharacterGallery({filteredCharacters}) {
  return (
      <div className='characters'>
          {filteredCharacters.map((char) => <Link to={`${char.id}`} key={char.id}><GalleryCard char={char} /></Link>)}
    </div>
  )
};