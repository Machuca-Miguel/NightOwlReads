// client/src/app/services/language.service.ts
import { Injectable } from '@angular/core';
import { LanguageCode, LanguageName } from '../common/enums/language-code';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private static readonly LANGUAGE_MAP: { [key in LanguageCode]: LanguageName } = {
    [LanguageCode.EN]: LanguageName.ENGLISH,
    [LanguageCode.ES]: LanguageName.SPANISH,
    [LanguageCode.FR]: LanguageName.FRENCH,
    [LanguageCode.DE]: LanguageName.GERMAN,
    [LanguageCode.IT]: LanguageName.ITALIAN,
    [LanguageCode.PT]: LanguageName.PORTUGUESE,
    [LanguageCode.ZH]: LanguageName.CHINESE,
    [LanguageCode.JA]: LanguageName.JAPANESE,
    [LanguageCode.RU]: LanguageName.RUSSIAN,
    // Agrega más códigos de idioma según sea necesario
  };

  constructor() {}

  public static getLanguageName(code: LanguageCode): LanguageName {
    return this.LANGUAGE_MAP[code];
  }
}