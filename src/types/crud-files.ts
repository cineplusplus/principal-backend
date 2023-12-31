export interface Create<T extends object> {
  run(data: T): Promise<T>;
}

export interface CreateMany<
  T extends object,
  U extends string | number | symbol,
> {
  run(data: T[]): Promise<U[]>;
}

export interface ReadAll<T extends object> {
  run(): Promise<T[]>;
}

export interface ReadById<
  T extends object,
  U extends string | number | symbol,
> {
  run(id: U): Promise<T>;
}

export interface ReadByEmail<T extends object, U extends string> {
  run(email: U): Promise<T>;
}

export interface Update<T extends object, U extends string | number | symbol> {
  run(id: U, data: Partial<T>): Promise<T>;
}

export interface Delete<U extends string | number | symbol> {
  run(id: U): Promise<any>;
}

export interface DeleteManyFilter<T> {
  where: Partial<T>;
}

export interface DeleteMany {
  run<T extends object>(filter: DeleteManyFilter<T>): Promise<any>;
}
