import type {
  FilterByExternalDatabase, KodikResponse, SharedFields,
  ExternalDatabaseGenresType
} from './shared-types';

export interface GenresParams extends FilterByExternalDatabase, SharedFields {
  genres_type?: ExternalDatabaseGenresType;
}

export interface GenresResponseObject {
  title: string;
  count: number;
}

export type GenresResponse = KodikResponse<GenresResponseObject[]>;
