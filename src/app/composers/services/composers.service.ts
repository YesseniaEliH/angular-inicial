import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root' // es un singleton no es necesario agregar a provider[]
})

export class ComposerService {
    public characters: Character[] = [{
        id: uuid(),
        name: 'Luigi Boccherini',
        life: '1743-1805'
    },{
        id: uuid(),
        name: 'Johann Pachelbel',
        life: '1653-1706'
    },{
        id: uuid(),
        name: 'Johann Sebastian Bach',
        life: '1685-1750'
    },{
        id: uuid(),
        name: 'Georg Friedrich Handel',
        life: '1685-1759'
    }]

    addCharacter(character:Character):void {
        const newCharacter: Character = { id: uuid(), ...character }
        this.characters = [...this.characters,newCharacter];
        console.log('on new character', this.characters);
        // this.characters.unshift(character);
    }
    
    deleteCharacterById(id:string):void {
        this.characters = this.characters.filter( character => character.id !== id)
    }
    
    // eliminación de elemento por el index
    // onDeleteCharacter(index:number):void {
    //     this.characters.splice(index,1);
    // }
}