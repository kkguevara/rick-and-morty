import { ADD_FAV, FILTER, ORDEN, REMOVE_FAV } from './action-types'
const initialState = {
    myFavorites: [],
    allCharactersFav:[]

}


const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return{
               
                ...state,
                myFavorites: [...state.allCharactersFav, payload],
                allCharactersFav: [...state.allCharactersFav, payload]
            }

            case REMOVE_FAV:
                return {
                    ...state,
                    myFavorites: state.myFavorites.filter(fav => fav.id !==payload) 
                }
                case FILTER:
                    const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender ===payload )  
                    return {
                        ...state,
                        myFavorites: allCharactersFiltered

                    }
                case ORDEN:
                    const allCharactersFavCopy= [...state.allCharactersFav]
                    return {
                        ...state,
                        myFavorites:
                       payload === 'A'
                        ? allCharactersFavCopy.sort((a,b) => a.id - b.id )
                        : allCharactersFavCopy.sort ((a,b) => b.id - a.id ) 
                    }

        default:
            return{...state}

    }
}


export default reducer;