import { CategorizedString, StringCategory } from './types';

const getCharacterMatchingCategory = (character: string): StringCategory => {
  const code = character.codePointAt(0);
  // A-Z or a-z
  if (code && ((code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
    return 'letter';
  }
  // 0-9
  if (code && (code >= 48 && code <= 57)) {
    return 'number';
  }
  return 'special';
};

export const getValueSplitInStringCategories = (
  value: string
): CategorizedString[] => {
  const groups: CategorizedString[] = [];
  let currentGroup: CategorizedString | null = null;

  for (let i = 0; i < value.length; i++) {
    const currentCharacter = value[i];
    const currentCategory = getCharacterMatchingCategory(currentCharacter);

    if (currentGroup && currentCategory === currentGroup.category) {
      currentGroup.text += currentCharacter;
    } else {
      currentGroup = {
        text: currentCharacter,
        category: currentCategory
      };
      groups.push(currentGroup);
    }
  }

  return groups;
};
