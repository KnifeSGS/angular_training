import { HumanHero } from "./hero";
import { TransformerHero } from "./transfomer";

export const humans: HumanHero[] = [
    new HumanHero(1, 'Mack', 'male', 44, 100),
    new HumanHero(2, 'Joel', 'male', 44, 100),
    new HumanHero(3, 'Nicole', 'female', 44, 100),
];

export const transformers: TransformerHero[] = [
    new TransformerHero(4, 'Ultron', 2, 0, 'evils'),
    new TransformerHero(5, 'Magneton', 0, 4, 'goods'),
    new TransformerHero(6, 'Herotron', 0, 12, 'goods'),
];
