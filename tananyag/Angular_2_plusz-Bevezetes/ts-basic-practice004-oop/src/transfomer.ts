import { ITransformer } from './hero-interface';

export class TransformerHero implements ITransformer {
    id: number = 0;
    name: string = '';
    wings: number = 0;
    wheels: number = 0;
    clan: string = 'evils';

    constructor(id: number, name: string, wings: number, wheels: number, clan: string) {
        this.id = id;
        this.name = name;
        this.wings = wings;
        this.wheels = wheels;
        this.clan = clan;
    }
}
