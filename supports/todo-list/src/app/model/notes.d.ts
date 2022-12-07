declare interface Note {
  id: number;
  titre: string;
  texte: string;
  dateCreation: string;
  dateEcheance: string;
  fait: boolean;
}

declare type Notes = Note[];