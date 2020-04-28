export type StringCategory = 'letter' | 'number' | 'special';

export interface CategorizedString {
  text: string;
  category: StringCategory;
}
