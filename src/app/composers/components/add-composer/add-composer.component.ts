import { Component, EventEmitter,Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'composers-add',
  templateUrl: './add-composer.component.html',
  styleUrl: './add-composer.component.css'
})
export class AddComposerComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  
  public character: Character = {
    name: '',
    life: ''
  };

  emitCharacter():void{
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit({ ...this.character });
    this.character= { name:'', life:''};
  }
}
