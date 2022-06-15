import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { share } from 'rxjs/internal/operators/share';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { notify } from 'src/app/swal-notification';

type PokemonStats = {
  name: string;
  value: string | number;
};

type Pokemon = {
  name: string;
  img: string;
  height: string | number;
  weight: string | number;
  stats: Array<PokemonStats>;
};
@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css'],
})
export class PokeapiComponent implements OnInit {
  constructor(private pokeapiService: PokeapiService) {}

  pokemonName = new FormControl('', [Validators.required]);
  pokemon?: Pokemon;

  onSubmit() {
    if (!this.pokemonName.value) {
      const err = new Error('Missing Pokemon Name Param');
      console.log(err);
      return;
    }
    const request = this.pokeapiService
      .get(this.pokemonName.value.toLowerCase())
      .pipe(share());
    request.subscribe({
      next: (response) => {
        this.pokemon = {
          name: response.name,
          img: response.sprites.other['official-artwork'].front_default,
          height: response.height,
          weight: response.weight,
          stats: [],
        };
        response.stats.map((obj: any) => {
          this.pokemon?.stats.push({
            name: obj.stat.name,
            value: obj.base_stat,
          });
        });
      },
      error: (err) => {
        if (err.status == 404) {
          notify.pokemonNotFound();
        }
      },
    });
  }

  ngOnInit(): void {}
}
