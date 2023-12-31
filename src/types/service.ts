import {
  Create,
  CreateMany,
  Delete,
  DeleteMany,
  ReadAll,
  ReadByEmail,
  ReadById,
  Update,
} from './crud-files';

export default interface Service<
  T extends object,
  U extends string | number | symbol,
> {
  create?: Create<T>;
  createMany?: CreateMany<T, U>;
  delte?: Delete<U>;
  deleteMany?: DeleteMany;
  readAll?: ReadAll<T>;
  readById?: ReadById<T, U>;
  readByEmail?: ReadByEmail<T, string>;
  update?: Update<T, U>;
}
