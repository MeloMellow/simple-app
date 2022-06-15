import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css'],
})
export class PokeapiComponent implements OnInit {
  constructor(private pokeapiService: PokeapiService) {}

  pokemonName = new FormControl('', [Validators.required]);

  onSubmit() {}

  ngOnInit(): void {}
}
