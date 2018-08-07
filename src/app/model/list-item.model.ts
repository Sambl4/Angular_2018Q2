import { Author } from './author.model';

export interface ListItem extends Author {
  id: number;
  title: string;
  description: string;
  rate: boolean;
  date: string;
  authors: Author[];
  duration: number;
  editMode: boolean;
}
