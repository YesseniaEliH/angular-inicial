import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { ComposerService } from '../services/composers.service';

@Component({
    selector: 'app-composers-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    constructor( private composerService: ComposerService) {}

    get characters(): Character[] {
        return [...this.composerService.characters];
    }

    onDeleteCharacter(id: string):void {
        this.composerService.deleteCharacterById(id)
    }

    onNewCharacter(character: Character):void {
        this.composerService.addCharacter(character)
    }
}