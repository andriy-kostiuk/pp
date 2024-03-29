import { SelectOption } from './select-option';
import { Image } from './image';


export interface BreedResponse {
  id: string;
  name: string;
  image: Image;
}

export interface BreedOption extends BreedResponse, SelectOption {
}

export interface Breed {
  images: Image[];
  temperament: string;
  origin: string;
  weight: { metric: string };
  life_span: string;
  id: string;
  name: string;
}
