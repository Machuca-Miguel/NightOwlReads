export interface AuthorDoc {
  key: string;
  name: string;
  birth_date?: string;
  work_count: number;
  top_work?: string;
  top_subjects?: string[];
  ratings_average?: number;
  ratings_count?: number;
  want_to_read_count?: number;
  already_read_count?: number;
  currently_reading_count?: number;
  alternate_names?: string[];
}

export interface AuthorResponse {
  docs: AuthorDoc[];
}

export interface AuthorDetailsResponse extends AuthorDoc {
  death_date?: string;
  bio?: string;
  photos?: number[];
  wikipedia?: string;
  remote_ids?: {
    viaf?: string;
    wikidata?: string;
    isni?: string;
  };
  personal_name?: string;

}
