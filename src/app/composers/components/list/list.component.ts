import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Output, Input, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'composers-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { 
    @Input()
    public characterList: Character[] = [{
        id: 'xxx',
        name: 'Claudio Monteverdi',
        life: '1547-1643'
    }]

    @Output()
    public onDeleteId: EventEmitter<string> = new EventEmitter();

    
    onDeleteCharacter(id?:string):void {
        // Emitir el ID del personaje
        if (!id) return;
        this.onDeleteId.emit(id);
        console.log(id)
    }
}
