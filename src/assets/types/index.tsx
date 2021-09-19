export type SpreadsheetDataField = {
  $t: string;
};

export type SpreadsheetDataProducts = {
  gsx$nombre: SpreadsheetDataField;
  gsx$formula: SpreadsheetDataField;
};

export interface SpreadsheetData {
  title: SpreadsheetDataField;
  entry: Array<SpreadsheetDataProducts>;
}
