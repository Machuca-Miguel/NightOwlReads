import { BaseModelId } from 'src/app/models/base-model';
import { AuthorDetailsResponse, AuthorDoc } from 'src/app/services/api/open-library-api.interfaces';

export interface AuthorInterface {
  key: string;
  name: string;
  birth_date: string;
  death_date?: string;
  bio?: string;
  work_count: number;
  top_work?: string;
  top_subjects?: string[];
  photos?: number[];
  alternate_names?: string[];
  personal_name?: string;
  ratings_average?: number;
  ratings_count?: number;
  want_to_read_count?: number;
  already_read_count?: number;
  currently_reading_count?: number;
  wikipedia?: string;
  remote_ids?: {
    viaf?: string;
    wikidata?: string;
    isni?: string;
  };
}

export class Author extends BaseModelId<AuthorInterface> implements AuthorInterface {
  public key!: string;
  public name!: string;
  public birth_date!: string;
  public death_date?: string;
  public bio?: string;
  public work_count!: number;
  public top_work?: string;
  public top_subjects?: string[];
  public photos?: number[];
  public alternate_names?: string[];
  public personal_name?: string;
  public ratings_average?: number;
  public ratings_count?: number;
  public want_to_read_count?: number;
  public already_read_count?: number;
  public currently_reading_count?: number;
  public wikipedia?: string;
  public remote_ids?: {
    viaf?: string;
    wikidata?: string;
    isni?: string;
  };

  constructor(author?: Partial<AuthorDoc | AuthorDetailsResponse>) {
    super(author);
    if (author) {
      this.populate(author);
    }
  }

  public static create(params: Partial<AuthorDoc | AuthorDetailsResponse>): Author {
    const author = new Author();
    author.populate(params);
    return author;
  }

  public override populate(params: Partial<AuthorDoc | AuthorDetailsResponse>): this {
    super.populate(params);
    this.key = params.key!;
    this.id = params.key!;
    this.name = params.name!;
    this.birth_date = params.birth_date!;
    this.death_date = 'death_date' in params ? params.death_date : undefined;
    this.bio = 'bio' in params && params.bio ? (typeof params.bio === 'string' ? params.bio : (params.bio as any).value) : undefined;
    this.work_count = params.work_count!;
    this.top_work = params.top_work;
    this.top_subjects = params.top_subjects;
    this.photos = 'photos' in params ? params.photos : undefined;
    this.alternate_names = 'alternate_names' in params ? params.alternate_names : undefined;
    this.personal_name = 'personal_name' in params ? params.personal_name : undefined;
    this.ratings_average = 'ratings_average' in params ? params.ratings_average : undefined;
    this.ratings_count = 'ratings_count' in params ? params.ratings_count : undefined;
    this.want_to_read_count = 'want_to_read_count' in params ? params.want_to_read_count : undefined;
    this.already_read_count = 'already_read_count' in params ? params.already_read_count : undefined;
    this.currently_reading_count = 'currently_reading_count' in params ? params.currently_reading_count : undefined;
    this.wikipedia = 'wikipedia' in params ? params.wikipedia : undefined;
    this.remote_ids = 'remote_ids' in params ? params.remote_ids : undefined;

    return this;
  }

  public mergeDetails(details: AuthorDetailsResponse): this {
    this.death_date = details.death_date || this.death_date;
    this.bio = details.bio ? (typeof details.bio === 'string' ? details.bio : (details.bio as any).value) : this.bio;
    this.work_count = details.work_count || this.work_count;
    this.top_work = details.top_work || this.top_work;
    this.top_subjects = details.top_subjects || this.top_subjects;
    this.photos = details.photos?.length ? details.photos : this.photos;
    this.alternate_names = details.alternate_names?.length ? details.alternate_names : this.alternate_names;
    this.personal_name = details.personal_name || this.personal_name;
    this.ratings_average = details.ratings_average || this.ratings_average;
    this.ratings_count = details.ratings_count || this.ratings_count;
    this.want_to_read_count = details.want_to_read_count || this.want_to_read_count;
    this.already_read_count = details.already_read_count || this.already_read_count;
    this.currently_reading_count = details.currently_reading_count || this.currently_reading_count;
    this.wikipedia = details.wikipedia || this.wikipedia;
    this.remote_ids = details.remote_ids || this.remote_ids;

    return this;
  }

  public getCategories() : string | null {
    if (!this.top_subjects || !this.top_subjects.length) {
      return null;
    }
    return this.top_subjects.join(', ');
  }
}
