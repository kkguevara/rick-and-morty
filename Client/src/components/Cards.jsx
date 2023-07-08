import Card from './Card';

export default function Cards({characters, onClose}) {
   console.log(characters);

   return characters.map((character) => 
   <div>
      <Card
         id={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin}
         image={character.image}
         onClose={onClose}
      />
   </div>
   )
}
