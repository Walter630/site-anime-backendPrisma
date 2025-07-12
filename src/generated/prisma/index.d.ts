
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TiposUsuario
 * 
 */
export type TiposUsuario = $Result.DefaultSelection<Prisma.$TiposUsuarioPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Mangas
 * 
 */
export type Mangas = $Result.DefaultSelection<Prisma.$MangasPayload>
/**
 * Model Animes
 * 
 */
export type Animes = $Result.DefaultSelection<Prisma.$AnimesPayload>
/**
 * Model Historico
 * 
 */
export type Historico = $Result.DefaultSelection<Prisma.$HistoricoPayload>
/**
 * Model Favorito
 * 
 */
export type Favorito = $Result.DefaultSelection<Prisma.$FavoritoPayload>
/**
 * Model Comentario
 * 
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>
/**
 * Model Genero
 * 
 */
export type Genero = $Result.DefaultSelection<Prisma.$GeneroPayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TiposUsuarios
 * const tiposUsuarios = await prisma.tiposUsuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TiposUsuarios
   * const tiposUsuarios = await prisma.tiposUsuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tiposUsuario`: Exposes CRUD operations for the **TiposUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiposUsuarios
    * const tiposUsuarios = await prisma.tiposUsuario.findMany()
    * ```
    */
  get tiposUsuario(): Prisma.TiposUsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mangas`: Exposes CRUD operations for the **Mangas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mangases
    * const mangases = await prisma.mangas.findMany()
    * ```
    */
  get mangas(): Prisma.MangasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animes`: Exposes CRUD operations for the **Animes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animes
    * const animes = await prisma.animes.findMany()
    * ```
    */
  get animes(): Prisma.AnimesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historico`: Exposes CRUD operations for the **Historico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historicos
    * const historicos = await prisma.historico.findMany()
    * ```
    */
  get historico(): Prisma.HistoricoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorito`: Exposes CRUD operations for the **Favorito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoritos
    * const favoritos = await prisma.favorito.findMany()
    * ```
    */
  get favorito(): Prisma.FavoritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genero`: Exposes CRUD operations for the **Genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generos
    * const generos = await prisma.genero.findMany()
    * ```
    */
  get genero(): Prisma.GeneroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TiposUsuario: 'TiposUsuario',
    User: 'User',
    Mangas: 'Mangas',
    Animes: 'Animes',
    Historico: 'Historico',
    Favorito: 'Favorito',
    Comentario: 'Comentario',
    Genero: 'Genero',
    Notificacao: 'Notificacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tiposUsuario" | "user" | "mangas" | "animes" | "historico" | "favorito" | "comentario" | "genero" | "notificacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TiposUsuario: {
        payload: Prisma.$TiposUsuarioPayload<ExtArgs>
        fields: Prisma.TiposUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiposUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiposUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposUsuarioPayload>
          }
          findFirst: {
            args: Prisma.TiposUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiposUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposUsuarioPayload>
          }
          findMany: {
            args: Prisma.TiposUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposUsuarioPayload>[]
          }
          create: {
            args: Prisma.TiposUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposUsuarioPayload>
          }
          createMany: {
            args: Prisma.TiposUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TiposUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposUsuarioPayload>
          }
          update: {
            args: Prisma.TiposUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.TiposUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiposUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TiposUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposUsuarioPayload>
          }
          aggregate: {
            args: Prisma.TiposUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiposUsuario>
          }
          groupBy: {
            args: Prisma.TiposUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiposUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiposUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<TiposUsuarioCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Mangas: {
        payload: Prisma.$MangasPayload<ExtArgs>
        fields: Prisma.MangasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MangasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MangasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>
          }
          findFirst: {
            args: Prisma.MangasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MangasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>
          }
          findMany: {
            args: Prisma.MangasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>[]
          }
          create: {
            args: Prisma.MangasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>
          }
          createMany: {
            args: Prisma.MangasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MangasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>
          }
          update: {
            args: Prisma.MangasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>
          }
          deleteMany: {
            args: Prisma.MangasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MangasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MangasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>
          }
          aggregate: {
            args: Prisma.MangasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMangas>
          }
          groupBy: {
            args: Prisma.MangasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MangasGroupByOutputType>[]
          }
          count: {
            args: Prisma.MangasCountArgs<ExtArgs>
            result: $Utils.Optional<MangasCountAggregateOutputType> | number
          }
        }
      }
      Animes: {
        payload: Prisma.$AnimesPayload<ExtArgs>
        fields: Prisma.AnimesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          findFirst: {
            args: Prisma.AnimesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          findMany: {
            args: Prisma.AnimesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>[]
          }
          create: {
            args: Prisma.AnimesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          createMany: {
            args: Prisma.AnimesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AnimesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          update: {
            args: Prisma.AnimesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          deleteMany: {
            args: Prisma.AnimesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnimesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          aggregate: {
            args: Prisma.AnimesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimes>
          }
          groupBy: {
            args: Prisma.AnimesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimesCountArgs<ExtArgs>
            result: $Utils.Optional<AnimesCountAggregateOutputType> | number
          }
        }
      }
      Historico: {
        payload: Prisma.$HistoricoPayload<ExtArgs>
        fields: Prisma.HistoricoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          findFirst: {
            args: Prisma.HistoricoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          findMany: {
            args: Prisma.HistoricoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>[]
          }
          create: {
            args: Prisma.HistoricoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          createMany: {
            args: Prisma.HistoricoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistoricoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          update: {
            args: Prisma.HistoricoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoricoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          aggregate: {
            args: Prisma.HistoricoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico>
          }
          groupBy: {
            args: Prisma.HistoricoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoCountAggregateOutputType> | number
          }
        }
      }
      Favorito: {
        payload: Prisma.$FavoritoPayload<ExtArgs>
        fields: Prisma.FavoritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findFirst: {
            args: Prisma.FavoritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findMany: {
            args: Prisma.FavoritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          create: {
            args: Prisma.FavoritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          createMany: {
            args: Prisma.FavoritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FavoritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          update: {
            args: Prisma.FavoritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          deleteMany: {
            args: Prisma.FavoritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavoritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          aggregate: {
            args: Prisma.FavoritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorito>
          }
          groupBy: {
            args: Prisma.FavoritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritoCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritoCountAggregateOutputType> | number
          }
        }
      }
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>
        fields: Prisma.ComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
      Genero: {
        payload: Prisma.$GeneroPayload<ExtArgs>
        fields: Prisma.GeneroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findFirst: {
            args: Prisma.GeneroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findMany: {
            args: Prisma.GeneroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          create: {
            args: Prisma.GeneroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          createMany: {
            args: Prisma.GeneroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeneroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          update: {
            args: Prisma.GeneroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          deleteMany: {
            args: Prisma.GeneroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeneroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          aggregate: {
            args: Prisma.GeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenero>
          }
          groupBy: {
            args: Prisma.GeneroGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneroCountArgs<ExtArgs>
            result: $Utils.Optional<GeneroCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tiposUsuario?: TiposUsuarioOmit
    user?: UserOmit
    mangas?: MangasOmit
    animes?: AnimesOmit
    historico?: HistoricoOmit
    favorito?: FavoritoOmit
    comentario?: ComentarioOmit
    genero?: GeneroOmit
    notificacao?: NotificacaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TiposUsuarioCountOutputType
   */

  export type TiposUsuarioCountOutputType = {
    usuarios: number
  }

  export type TiposUsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | TiposUsuarioCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * TiposUsuarioCountOutputType without action
   */
  export type TiposUsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposUsuarioCountOutputType
     */
    select?: TiposUsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TiposUsuarioCountOutputType without action
   */
  export type TiposUsuarioCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    mangas: number
    animes: number
    historicos: number
    favoritos: number
    comentarios: number
    notificacoes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mangas?: boolean | UserCountOutputTypeCountMangasArgs
    animes?: boolean | UserCountOutputTypeCountAnimesArgs
    historicos?: boolean | UserCountOutputTypeCountHistoricosArgs
    favoritos?: boolean | UserCountOutputTypeCountFavoritosArgs
    comentarios?: boolean | UserCountOutputTypeCountComentariosArgs
    notificacoes?: boolean | UserCountOutputTypeCountNotificacoesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMangasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangasWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoricosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }


  /**
   * Count Type MangasCountOutputType
   */

  export type MangasCountOutputType = {
    generos: number
    favoritos: number
  }

  export type MangasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generos?: boolean | MangasCountOutputTypeCountGenerosArgs
    favoritos?: boolean | MangasCountOutputTypeCountFavoritosArgs
  }

  // Custom InputTypes
  /**
   * MangasCountOutputType without action
   */
  export type MangasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasCountOutputType
     */
    select?: MangasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MangasCountOutputType without action
   */
  export type MangasCountOutputTypeCountGenerosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroWhereInput
  }

  /**
   * MangasCountOutputType without action
   */
  export type MangasCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }


  /**
   * Count Type AnimesCountOutputType
   */

  export type AnimesCountOutputType = {
    generos: number
    favoritos: number
    comentarios: number
  }

  export type AnimesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generos?: boolean | AnimesCountOutputTypeCountGenerosArgs
    favoritos?: boolean | AnimesCountOutputTypeCountFavoritosArgs
    comentarios?: boolean | AnimesCountOutputTypeCountComentariosArgs
  }

  // Custom InputTypes
  /**
   * AnimesCountOutputType without action
   */
  export type AnimesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimesCountOutputType
     */
    select?: AnimesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimesCountOutputType without action
   */
  export type AnimesCountOutputTypeCountGenerosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroWhereInput
  }

  /**
   * AnimesCountOutputType without action
   */
  export type AnimesCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * AnimesCountOutputType without action
   */
  export type AnimesCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }


  /**
   * Count Type GeneroCountOutputType
   */

  export type GeneroCountOutputType = {
    animes: number
    mangas: number
  }

  export type GeneroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animes?: boolean | GeneroCountOutputTypeCountAnimesArgs
    mangas?: boolean | GeneroCountOutputTypeCountMangasArgs
  }

  // Custom InputTypes
  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroCountOutputType
     */
    select?: GeneroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountAnimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimesWhereInput
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountMangasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TiposUsuario
   */

  export type AggregateTiposUsuario = {
    _count: TiposUsuarioCountAggregateOutputType | null
    _min: TiposUsuarioMinAggregateOutputType | null
    _max: TiposUsuarioMaxAggregateOutputType | null
  }

  export type TiposUsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    ativado: boolean | null
  }

  export type TiposUsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    ativado: boolean | null
  }

  export type TiposUsuarioCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    ativado: number
    _all: number
  }


  export type TiposUsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    ativado?: true
  }

  export type TiposUsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    ativado?: true
  }

  export type TiposUsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    ativado?: true
    _all?: true
  }

  export type TiposUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiposUsuario to aggregate.
     */
    where?: TiposUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiposUsuarios to fetch.
     */
    orderBy?: TiposUsuarioOrderByWithRelationInput | TiposUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiposUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiposUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiposUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiposUsuarios
    **/
    _count?: true | TiposUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiposUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiposUsuarioMaxAggregateInputType
  }

  export type GetTiposUsuarioAggregateType<T extends TiposUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateTiposUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiposUsuario[P]>
      : GetScalarType<T[P], AggregateTiposUsuario[P]>
  }




  export type TiposUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiposUsuarioWhereInput
    orderBy?: TiposUsuarioOrderByWithAggregationInput | TiposUsuarioOrderByWithAggregationInput[]
    by: TiposUsuarioScalarFieldEnum[] | TiposUsuarioScalarFieldEnum
    having?: TiposUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiposUsuarioCountAggregateInputType | true
    _min?: TiposUsuarioMinAggregateInputType
    _max?: TiposUsuarioMaxAggregateInputType
  }

  export type TiposUsuarioGroupByOutputType = {
    id: string
    nome: string
    descricao: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    ativado: boolean
    _count: TiposUsuarioCountAggregateOutputType | null
    _min: TiposUsuarioMinAggregateOutputType | null
    _max: TiposUsuarioMaxAggregateOutputType | null
  }

  type GetTiposUsuarioGroupByPayload<T extends TiposUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiposUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiposUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiposUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], TiposUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type TiposUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ativado?: boolean
    usuarios?: boolean | TiposUsuario$usuariosArgs<ExtArgs>
    _count?: boolean | TiposUsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiposUsuario"]>



  export type TiposUsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ativado?: boolean
  }

  export type TiposUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "createdAt" | "updatedAt" | "deletedAt" | "ativado", ExtArgs["result"]["tiposUsuario"]>
  export type TiposUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | TiposUsuario$usuariosArgs<ExtArgs>
    _count?: boolean | TiposUsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TiposUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiposUsuario"
    objects: {
      usuarios: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      ativado: boolean
    }, ExtArgs["result"]["tiposUsuario"]>
    composites: {}
  }

  type TiposUsuarioGetPayload<S extends boolean | null | undefined | TiposUsuarioDefaultArgs> = $Result.GetResult<Prisma.$TiposUsuarioPayload, S>

  type TiposUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiposUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiposUsuarioCountAggregateInputType | true
    }

  export interface TiposUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiposUsuario'], meta: { name: 'TiposUsuario' } }
    /**
     * Find zero or one TiposUsuario that matches the filter.
     * @param {TiposUsuarioFindUniqueArgs} args - Arguments to find a TiposUsuario
     * @example
     * // Get one TiposUsuario
     * const tiposUsuario = await prisma.tiposUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiposUsuarioFindUniqueArgs>(args: SelectSubset<T, TiposUsuarioFindUniqueArgs<ExtArgs>>): Prisma__TiposUsuarioClient<$Result.GetResult<Prisma.$TiposUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiposUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiposUsuarioFindUniqueOrThrowArgs} args - Arguments to find a TiposUsuario
     * @example
     * // Get one TiposUsuario
     * const tiposUsuario = await prisma.tiposUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiposUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, TiposUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiposUsuarioClient<$Result.GetResult<Prisma.$TiposUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiposUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposUsuarioFindFirstArgs} args - Arguments to find a TiposUsuario
     * @example
     * // Get one TiposUsuario
     * const tiposUsuario = await prisma.tiposUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiposUsuarioFindFirstArgs>(args?: SelectSubset<T, TiposUsuarioFindFirstArgs<ExtArgs>>): Prisma__TiposUsuarioClient<$Result.GetResult<Prisma.$TiposUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiposUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposUsuarioFindFirstOrThrowArgs} args - Arguments to find a TiposUsuario
     * @example
     * // Get one TiposUsuario
     * const tiposUsuario = await prisma.tiposUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiposUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, TiposUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiposUsuarioClient<$Result.GetResult<Prisma.$TiposUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiposUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiposUsuarios
     * const tiposUsuarios = await prisma.tiposUsuario.findMany()
     * 
     * // Get first 10 TiposUsuarios
     * const tiposUsuarios = await prisma.tiposUsuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiposUsuarioWithIdOnly = await prisma.tiposUsuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TiposUsuarioFindManyArgs>(args?: SelectSubset<T, TiposUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiposUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiposUsuario.
     * @param {TiposUsuarioCreateArgs} args - Arguments to create a TiposUsuario.
     * @example
     * // Create one TiposUsuario
     * const TiposUsuario = await prisma.tiposUsuario.create({
     *   data: {
     *     // ... data to create a TiposUsuario
     *   }
     * })
     * 
     */
    create<T extends TiposUsuarioCreateArgs>(args: SelectSubset<T, TiposUsuarioCreateArgs<ExtArgs>>): Prisma__TiposUsuarioClient<$Result.GetResult<Prisma.$TiposUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiposUsuarios.
     * @param {TiposUsuarioCreateManyArgs} args - Arguments to create many TiposUsuarios.
     * @example
     * // Create many TiposUsuarios
     * const tiposUsuario = await prisma.tiposUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiposUsuarioCreateManyArgs>(args?: SelectSubset<T, TiposUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TiposUsuario.
     * @param {TiposUsuarioDeleteArgs} args - Arguments to delete one TiposUsuario.
     * @example
     * // Delete one TiposUsuario
     * const TiposUsuario = await prisma.tiposUsuario.delete({
     *   where: {
     *     // ... filter to delete one TiposUsuario
     *   }
     * })
     * 
     */
    delete<T extends TiposUsuarioDeleteArgs>(args: SelectSubset<T, TiposUsuarioDeleteArgs<ExtArgs>>): Prisma__TiposUsuarioClient<$Result.GetResult<Prisma.$TiposUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiposUsuario.
     * @param {TiposUsuarioUpdateArgs} args - Arguments to update one TiposUsuario.
     * @example
     * // Update one TiposUsuario
     * const tiposUsuario = await prisma.tiposUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiposUsuarioUpdateArgs>(args: SelectSubset<T, TiposUsuarioUpdateArgs<ExtArgs>>): Prisma__TiposUsuarioClient<$Result.GetResult<Prisma.$TiposUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiposUsuarios.
     * @param {TiposUsuarioDeleteManyArgs} args - Arguments to filter TiposUsuarios to delete.
     * @example
     * // Delete a few TiposUsuarios
     * const { count } = await prisma.tiposUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiposUsuarioDeleteManyArgs>(args?: SelectSubset<T, TiposUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiposUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiposUsuarios
     * const tiposUsuario = await prisma.tiposUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiposUsuarioUpdateManyArgs>(args: SelectSubset<T, TiposUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TiposUsuario.
     * @param {TiposUsuarioUpsertArgs} args - Arguments to update or create a TiposUsuario.
     * @example
     * // Update or create a TiposUsuario
     * const tiposUsuario = await prisma.tiposUsuario.upsert({
     *   create: {
     *     // ... data to create a TiposUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiposUsuario we want to update
     *   }
     * })
     */
    upsert<T extends TiposUsuarioUpsertArgs>(args: SelectSubset<T, TiposUsuarioUpsertArgs<ExtArgs>>): Prisma__TiposUsuarioClient<$Result.GetResult<Prisma.$TiposUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiposUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposUsuarioCountArgs} args - Arguments to filter TiposUsuarios to count.
     * @example
     * // Count the number of TiposUsuarios
     * const count = await prisma.tiposUsuario.count({
     *   where: {
     *     // ... the filter for the TiposUsuarios we want to count
     *   }
     * })
    **/
    count<T extends TiposUsuarioCountArgs>(
      args?: Subset<T, TiposUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiposUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiposUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiposUsuarioAggregateArgs>(args: Subset<T, TiposUsuarioAggregateArgs>): Prisma.PrismaPromise<GetTiposUsuarioAggregateType<T>>

    /**
     * Group by TiposUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposUsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TiposUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiposUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: TiposUsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TiposUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiposUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiposUsuario model
   */
  readonly fields: TiposUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiposUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiposUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends TiposUsuario$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, TiposUsuario$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TiposUsuario model
   */
  interface TiposUsuarioFieldRefs {
    readonly id: FieldRef<"TiposUsuario", 'String'>
    readonly nome: FieldRef<"TiposUsuario", 'String'>
    readonly descricao: FieldRef<"TiposUsuario", 'String'>
    readonly createdAt: FieldRef<"TiposUsuario", 'DateTime'>
    readonly updatedAt: FieldRef<"TiposUsuario", 'DateTime'>
    readonly deletedAt: FieldRef<"TiposUsuario", 'DateTime'>
    readonly ativado: FieldRef<"TiposUsuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TiposUsuario findUnique
   */
  export type TiposUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposUsuario
     */
    select?: TiposUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposUsuario
     */
    omit?: TiposUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which TiposUsuario to fetch.
     */
    where: TiposUsuarioWhereUniqueInput
  }

  /**
   * TiposUsuario findUniqueOrThrow
   */
  export type TiposUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposUsuario
     */
    select?: TiposUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposUsuario
     */
    omit?: TiposUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which TiposUsuario to fetch.
     */
    where: TiposUsuarioWhereUniqueInput
  }

  /**
   * TiposUsuario findFirst
   */
  export type TiposUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposUsuario
     */
    select?: TiposUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposUsuario
     */
    omit?: TiposUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which TiposUsuario to fetch.
     */
    where?: TiposUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiposUsuarios to fetch.
     */
    orderBy?: TiposUsuarioOrderByWithRelationInput | TiposUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiposUsuarios.
     */
    cursor?: TiposUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiposUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiposUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiposUsuarios.
     */
    distinct?: TiposUsuarioScalarFieldEnum | TiposUsuarioScalarFieldEnum[]
  }

  /**
   * TiposUsuario findFirstOrThrow
   */
  export type TiposUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposUsuario
     */
    select?: TiposUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposUsuario
     */
    omit?: TiposUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which TiposUsuario to fetch.
     */
    where?: TiposUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiposUsuarios to fetch.
     */
    orderBy?: TiposUsuarioOrderByWithRelationInput | TiposUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiposUsuarios.
     */
    cursor?: TiposUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiposUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiposUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiposUsuarios.
     */
    distinct?: TiposUsuarioScalarFieldEnum | TiposUsuarioScalarFieldEnum[]
  }

  /**
   * TiposUsuario findMany
   */
  export type TiposUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposUsuario
     */
    select?: TiposUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposUsuario
     */
    omit?: TiposUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which TiposUsuarios to fetch.
     */
    where?: TiposUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiposUsuarios to fetch.
     */
    orderBy?: TiposUsuarioOrderByWithRelationInput | TiposUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiposUsuarios.
     */
    cursor?: TiposUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiposUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiposUsuarios.
     */
    skip?: number
    distinct?: TiposUsuarioScalarFieldEnum | TiposUsuarioScalarFieldEnum[]
  }

  /**
   * TiposUsuario create
   */
  export type TiposUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposUsuario
     */
    select?: TiposUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposUsuario
     */
    omit?: TiposUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a TiposUsuario.
     */
    data: XOR<TiposUsuarioCreateInput, TiposUsuarioUncheckedCreateInput>
  }

  /**
   * TiposUsuario createMany
   */
  export type TiposUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiposUsuarios.
     */
    data: TiposUsuarioCreateManyInput | TiposUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiposUsuario update
   */
  export type TiposUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposUsuario
     */
    select?: TiposUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposUsuario
     */
    omit?: TiposUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a TiposUsuario.
     */
    data: XOR<TiposUsuarioUpdateInput, TiposUsuarioUncheckedUpdateInput>
    /**
     * Choose, which TiposUsuario to update.
     */
    where: TiposUsuarioWhereUniqueInput
  }

  /**
   * TiposUsuario updateMany
   */
  export type TiposUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiposUsuarios.
     */
    data: XOR<TiposUsuarioUpdateManyMutationInput, TiposUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which TiposUsuarios to update
     */
    where?: TiposUsuarioWhereInput
    /**
     * Limit how many TiposUsuarios to update.
     */
    limit?: number
  }

  /**
   * TiposUsuario upsert
   */
  export type TiposUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposUsuario
     */
    select?: TiposUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposUsuario
     */
    omit?: TiposUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the TiposUsuario to update in case it exists.
     */
    where: TiposUsuarioWhereUniqueInput
    /**
     * In case the TiposUsuario found by the `where` argument doesn't exist, create a new TiposUsuario with this data.
     */
    create: XOR<TiposUsuarioCreateInput, TiposUsuarioUncheckedCreateInput>
    /**
     * In case the TiposUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiposUsuarioUpdateInput, TiposUsuarioUncheckedUpdateInput>
  }

  /**
   * TiposUsuario delete
   */
  export type TiposUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposUsuario
     */
    select?: TiposUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposUsuario
     */
    omit?: TiposUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposUsuarioInclude<ExtArgs> | null
    /**
     * Filter which TiposUsuario to delete.
     */
    where: TiposUsuarioWhereUniqueInput
  }

  /**
   * TiposUsuario deleteMany
   */
  export type TiposUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiposUsuarios to delete
     */
    where?: TiposUsuarioWhereInput
    /**
     * Limit how many TiposUsuarios to delete.
     */
    limit?: number
  }

  /**
   * TiposUsuario.usuarios
   */
  export type TiposUsuario$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * TiposUsuario without action
   */
  export type TiposUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposUsuario
     */
    select?: TiposUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposUsuario
     */
    omit?: TiposUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposUsuarioInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    ativado: boolean | null
    tipoUsuarioId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    ativado: boolean | null
    tipoUsuarioId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    ativado: number
    tipoUsuarioId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    ativado?: true
    tipoUsuarioId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    ativado?: true
    tipoUsuarioId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    ativado?: true
    tipoUsuarioId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nome: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    ativado: boolean
    tipoUsuarioId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ativado?: boolean
    tipoUsuarioId?: boolean
    tipoUsuario?: boolean | User$tipoUsuarioArgs<ExtArgs>
    mangas?: boolean | User$mangasArgs<ExtArgs>
    animes?: boolean | User$animesArgs<ExtArgs>
    historicos?: boolean | User$historicosArgs<ExtArgs>
    favoritos?: boolean | User$favoritosArgs<ExtArgs>
    comentarios?: boolean | User$comentariosArgs<ExtArgs>
    notificacoes?: boolean | User$notificacoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ativado?: boolean
    tipoUsuarioId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "password" | "createdAt" | "updatedAt" | "deletedAt" | "ativado" | "tipoUsuarioId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoUsuario?: boolean | User$tipoUsuarioArgs<ExtArgs>
    mangas?: boolean | User$mangasArgs<ExtArgs>
    animes?: boolean | User$animesArgs<ExtArgs>
    historicos?: boolean | User$historicosArgs<ExtArgs>
    favoritos?: boolean | User$favoritosArgs<ExtArgs>
    comentarios?: boolean | User$comentariosArgs<ExtArgs>
    notificacoes?: boolean | User$notificacoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tipoUsuario: Prisma.$TiposUsuarioPayload<ExtArgs> | null
      mangas: Prisma.$MangasPayload<ExtArgs>[]
      animes: Prisma.$AnimesPayload<ExtArgs>[]
      historicos: Prisma.$HistoricoPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      ativado: boolean
      tipoUsuarioId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipoUsuario<T extends User$tipoUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, User$tipoUsuarioArgs<ExtArgs>>): Prisma__TiposUsuarioClient<$Result.GetResult<Prisma.$TiposUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mangas<T extends User$mangasArgs<ExtArgs> = {}>(args?: Subset<T, User$mangasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    animes<T extends User$animesArgs<ExtArgs> = {}>(args?: Subset<T, User$animesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historicos<T extends User$historicosArgs<ExtArgs> = {}>(args?: Subset<T, User$historicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritos<T extends User$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends User$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, User$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacoes<T extends User$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, User$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nome: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly ativado: FieldRef<"User", 'Boolean'>
    readonly tipoUsuarioId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tipoUsuario
   */
  export type User$tipoUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposUsuario
     */
    select?: TiposUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposUsuario
     */
    omit?: TiposUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposUsuarioInclude<ExtArgs> | null
    where?: TiposUsuarioWhereInput
  }

  /**
   * User.mangas
   */
  export type User$mangasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    where?: MangasWhereInput
    orderBy?: MangasOrderByWithRelationInput | MangasOrderByWithRelationInput[]
    cursor?: MangasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MangasScalarFieldEnum | MangasScalarFieldEnum[]
  }

  /**
   * User.animes
   */
  export type User$animesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    where?: AnimesWhereInput
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    cursor?: AnimesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }

  /**
   * User.historicos
   */
  export type User$historicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    where?: HistoricoWhereInput
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    cursor?: HistoricoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * User.favoritos
   */
  export type User$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * User.comentarios
   */
  export type User$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * User.notificacoes
   */
  export type User$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Mangas
   */

  export type AggregateMangas = {
    _count: MangasCountAggregateOutputType | null
    _min: MangasMinAggregateOutputType | null
    _max: MangasMaxAggregateOutputType | null
  }

  export type MangasMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MangasMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MangasCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MangasMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MangasMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MangasCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MangasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mangas to aggregate.
     */
    where?: MangasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mangases to fetch.
     */
    orderBy?: MangasOrderByWithRelationInput | MangasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MangasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mangases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mangases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mangases
    **/
    _count?: true | MangasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MangasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MangasMaxAggregateInputType
  }

  export type GetMangasAggregateType<T extends MangasAggregateArgs> = {
        [P in keyof T & keyof AggregateMangas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMangas[P]>
      : GetScalarType<T[P], AggregateMangas[P]>
  }




  export type MangasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangasWhereInput
    orderBy?: MangasOrderByWithAggregationInput | MangasOrderByWithAggregationInput[]
    by: MangasScalarFieldEnum[] | MangasScalarFieldEnum
    having?: MangasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MangasCountAggregateInputType | true
    _min?: MangasMinAggregateInputType
    _max?: MangasMaxAggregateInputType
  }

  export type MangasGroupByOutputType = {
    id: string
    title: string
    description: string
    image: string
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MangasCountAggregateOutputType | null
    _min: MangasMinAggregateOutputType | null
    _max: MangasMaxAggregateOutputType | null
  }

  type GetMangasGroupByPayload<T extends MangasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MangasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MangasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MangasGroupByOutputType[P]>
            : GetScalarType<T[P], MangasGroupByOutputType[P]>
        }
      >
    >


  export type MangasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Mangas$userArgs<ExtArgs>
    generos?: boolean | Mangas$generosArgs<ExtArgs>
    favoritos?: boolean | Mangas$favoritosArgs<ExtArgs>
    _count?: boolean | MangasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangas"]>



  export type MangasSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MangasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["mangas"]>
  export type MangasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Mangas$userArgs<ExtArgs>
    generos?: boolean | Mangas$generosArgs<ExtArgs>
    favoritos?: boolean | Mangas$favoritosArgs<ExtArgs>
    _count?: boolean | MangasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MangasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mangas"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      generos: Prisma.$GeneroPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      image: string
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mangas"]>
    composites: {}
  }

  type MangasGetPayload<S extends boolean | null | undefined | MangasDefaultArgs> = $Result.GetResult<Prisma.$MangasPayload, S>

  type MangasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MangasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MangasCountAggregateInputType | true
    }

  export interface MangasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mangas'], meta: { name: 'Mangas' } }
    /**
     * Find zero or one Mangas that matches the filter.
     * @param {MangasFindUniqueArgs} args - Arguments to find a Mangas
     * @example
     * // Get one Mangas
     * const mangas = await prisma.mangas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MangasFindUniqueArgs>(args: SelectSubset<T, MangasFindUniqueArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mangas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MangasFindUniqueOrThrowArgs} args - Arguments to find a Mangas
     * @example
     * // Get one Mangas
     * const mangas = await prisma.mangas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MangasFindUniqueOrThrowArgs>(args: SelectSubset<T, MangasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mangas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasFindFirstArgs} args - Arguments to find a Mangas
     * @example
     * // Get one Mangas
     * const mangas = await prisma.mangas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MangasFindFirstArgs>(args?: SelectSubset<T, MangasFindFirstArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mangas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasFindFirstOrThrowArgs} args - Arguments to find a Mangas
     * @example
     * // Get one Mangas
     * const mangas = await prisma.mangas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MangasFindFirstOrThrowArgs>(args?: SelectSubset<T, MangasFindFirstOrThrowArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mangases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mangases
     * const mangases = await prisma.mangas.findMany()
     * 
     * // Get first 10 Mangases
     * const mangases = await prisma.mangas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mangasWithIdOnly = await prisma.mangas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MangasFindManyArgs>(args?: SelectSubset<T, MangasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mangas.
     * @param {MangasCreateArgs} args - Arguments to create a Mangas.
     * @example
     * // Create one Mangas
     * const Mangas = await prisma.mangas.create({
     *   data: {
     *     // ... data to create a Mangas
     *   }
     * })
     * 
     */
    create<T extends MangasCreateArgs>(args: SelectSubset<T, MangasCreateArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mangases.
     * @param {MangasCreateManyArgs} args - Arguments to create many Mangases.
     * @example
     * // Create many Mangases
     * const mangas = await prisma.mangas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MangasCreateManyArgs>(args?: SelectSubset<T, MangasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mangas.
     * @param {MangasDeleteArgs} args - Arguments to delete one Mangas.
     * @example
     * // Delete one Mangas
     * const Mangas = await prisma.mangas.delete({
     *   where: {
     *     // ... filter to delete one Mangas
     *   }
     * })
     * 
     */
    delete<T extends MangasDeleteArgs>(args: SelectSubset<T, MangasDeleteArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mangas.
     * @param {MangasUpdateArgs} args - Arguments to update one Mangas.
     * @example
     * // Update one Mangas
     * const mangas = await prisma.mangas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MangasUpdateArgs>(args: SelectSubset<T, MangasUpdateArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mangases.
     * @param {MangasDeleteManyArgs} args - Arguments to filter Mangases to delete.
     * @example
     * // Delete a few Mangases
     * const { count } = await prisma.mangas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MangasDeleteManyArgs>(args?: SelectSubset<T, MangasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mangases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mangases
     * const mangas = await prisma.mangas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MangasUpdateManyArgs>(args: SelectSubset<T, MangasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mangas.
     * @param {MangasUpsertArgs} args - Arguments to update or create a Mangas.
     * @example
     * // Update or create a Mangas
     * const mangas = await prisma.mangas.upsert({
     *   create: {
     *     // ... data to create a Mangas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mangas we want to update
     *   }
     * })
     */
    upsert<T extends MangasUpsertArgs>(args: SelectSubset<T, MangasUpsertArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mangases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasCountArgs} args - Arguments to filter Mangases to count.
     * @example
     * // Count the number of Mangases
     * const count = await prisma.mangas.count({
     *   where: {
     *     // ... the filter for the Mangases we want to count
     *   }
     * })
    **/
    count<T extends MangasCountArgs>(
      args?: Subset<T, MangasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MangasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mangas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MangasAggregateArgs>(args: Subset<T, MangasAggregateArgs>): Prisma.PrismaPromise<GetMangasAggregateType<T>>

    /**
     * Group by Mangas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MangasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MangasGroupByArgs['orderBy'] }
        : { orderBy?: MangasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MangasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMangasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mangas model
   */
  readonly fields: MangasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mangas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MangasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Mangas$userArgs<ExtArgs> = {}>(args?: Subset<T, Mangas$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    generos<T extends Mangas$generosArgs<ExtArgs> = {}>(args?: Subset<T, Mangas$generosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritos<T extends Mangas$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Mangas$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mangas model
   */
  interface MangasFieldRefs {
    readonly id: FieldRef<"Mangas", 'String'>
    readonly title: FieldRef<"Mangas", 'String'>
    readonly description: FieldRef<"Mangas", 'String'>
    readonly image: FieldRef<"Mangas", 'String'>
    readonly userId: FieldRef<"Mangas", 'String'>
    readonly createdAt: FieldRef<"Mangas", 'DateTime'>
    readonly updatedAt: FieldRef<"Mangas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mangas findUnique
   */
  export type MangasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * Filter, which Mangas to fetch.
     */
    where: MangasWhereUniqueInput
  }

  /**
   * Mangas findUniqueOrThrow
   */
  export type MangasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * Filter, which Mangas to fetch.
     */
    where: MangasWhereUniqueInput
  }

  /**
   * Mangas findFirst
   */
  export type MangasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * Filter, which Mangas to fetch.
     */
    where?: MangasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mangases to fetch.
     */
    orderBy?: MangasOrderByWithRelationInput | MangasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mangases.
     */
    cursor?: MangasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mangases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mangases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mangases.
     */
    distinct?: MangasScalarFieldEnum | MangasScalarFieldEnum[]
  }

  /**
   * Mangas findFirstOrThrow
   */
  export type MangasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * Filter, which Mangas to fetch.
     */
    where?: MangasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mangases to fetch.
     */
    orderBy?: MangasOrderByWithRelationInput | MangasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mangases.
     */
    cursor?: MangasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mangases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mangases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mangases.
     */
    distinct?: MangasScalarFieldEnum | MangasScalarFieldEnum[]
  }

  /**
   * Mangas findMany
   */
  export type MangasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * Filter, which Mangases to fetch.
     */
    where?: MangasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mangases to fetch.
     */
    orderBy?: MangasOrderByWithRelationInput | MangasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mangases.
     */
    cursor?: MangasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mangases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mangases.
     */
    skip?: number
    distinct?: MangasScalarFieldEnum | MangasScalarFieldEnum[]
  }

  /**
   * Mangas create
   */
  export type MangasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * The data needed to create a Mangas.
     */
    data: XOR<MangasCreateInput, MangasUncheckedCreateInput>
  }

  /**
   * Mangas createMany
   */
  export type MangasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mangases.
     */
    data: MangasCreateManyInput | MangasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mangas update
   */
  export type MangasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * The data needed to update a Mangas.
     */
    data: XOR<MangasUpdateInput, MangasUncheckedUpdateInput>
    /**
     * Choose, which Mangas to update.
     */
    where: MangasWhereUniqueInput
  }

  /**
   * Mangas updateMany
   */
  export type MangasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mangases.
     */
    data: XOR<MangasUpdateManyMutationInput, MangasUncheckedUpdateManyInput>
    /**
     * Filter which Mangases to update
     */
    where?: MangasWhereInput
    /**
     * Limit how many Mangases to update.
     */
    limit?: number
  }

  /**
   * Mangas upsert
   */
  export type MangasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * The filter to search for the Mangas to update in case it exists.
     */
    where: MangasWhereUniqueInput
    /**
     * In case the Mangas found by the `where` argument doesn't exist, create a new Mangas with this data.
     */
    create: XOR<MangasCreateInput, MangasUncheckedCreateInput>
    /**
     * In case the Mangas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MangasUpdateInput, MangasUncheckedUpdateInput>
  }

  /**
   * Mangas delete
   */
  export type MangasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * Filter which Mangas to delete.
     */
    where: MangasWhereUniqueInput
  }

  /**
   * Mangas deleteMany
   */
  export type MangasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mangases to delete
     */
    where?: MangasWhereInput
    /**
     * Limit how many Mangases to delete.
     */
    limit?: number
  }

  /**
   * Mangas.user
   */
  export type Mangas$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Mangas.generos
   */
  export type Mangas$generosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    where?: GeneroWhereInput
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    cursor?: GeneroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Mangas.favoritos
   */
  export type Mangas$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Mangas without action
   */
  export type MangasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
  }


  /**
   * Model Animes
   */

  export type AggregateAnimes = {
    _count: AnimesCountAggregateOutputType | null
    _avg: AnimesAvgAggregateOutputType | null
    _sum: AnimesSumAggregateOutputType | null
    _min: AnimesMinAggregateOutputType | null
    _max: AnimesMaxAggregateOutputType | null
  }

  export type AnimesAvgAggregateOutputType = {
    episodios: number | null
  }

  export type AnimesSumAggregateOutputType = {
    episodios: number | null
  }

  export type AnimesMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    episodios: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    episodios: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    episodios: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnimesAvgAggregateInputType = {
    episodios?: true
  }

  export type AnimesSumAggregateInputType = {
    episodios?: true
  }

  export type AnimesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    episodios?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    episodios?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    episodios?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnimesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animes to aggregate.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animes
    **/
    _count?: true | AnimesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimesMaxAggregateInputType
  }

  export type GetAnimesAggregateType<T extends AnimesAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimes[P]>
      : GetScalarType<T[P], AggregateAnimes[P]>
  }




  export type AnimesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimesWhereInput
    orderBy?: AnimesOrderByWithAggregationInput | AnimesOrderByWithAggregationInput[]
    by: AnimesScalarFieldEnum[] | AnimesScalarFieldEnum
    having?: AnimesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimesCountAggregateInputType | true
    _avg?: AnimesAvgAggregateInputType
    _sum?: AnimesSumAggregateInputType
    _min?: AnimesMinAggregateInputType
    _max?: AnimesMaxAggregateInputType
  }

  export type AnimesGroupByOutputType = {
    id: string
    title: string
    description: string
    image: string
    episodios: number
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AnimesCountAggregateOutputType | null
    _avg: AnimesAvgAggregateOutputType | null
    _sum: AnimesSumAggregateOutputType | null
    _min: AnimesMinAggregateOutputType | null
    _max: AnimesMaxAggregateOutputType | null
  }

  type GetAnimesGroupByPayload<T extends AnimesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimesGroupByOutputType[P]>
            : GetScalarType<T[P], AnimesGroupByOutputType[P]>
        }
      >
    >


  export type AnimesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    episodios?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    generos?: boolean | Animes$generosArgs<ExtArgs>
    favoritos?: boolean | Animes$favoritosArgs<ExtArgs>
    comentarios?: boolean | Animes$comentariosArgs<ExtArgs>
    _count?: boolean | AnimesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animes"]>



  export type AnimesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    episodios?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnimesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image" | "episodios" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["animes"]>
  export type AnimesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    generos?: boolean | Animes$generosArgs<ExtArgs>
    favoritos?: boolean | Animes$favoritosArgs<ExtArgs>
    comentarios?: boolean | Animes$comentariosArgs<ExtArgs>
    _count?: boolean | AnimesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AnimesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      generos: Prisma.$GeneroPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      image: string
      episodios: number
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["animes"]>
    composites: {}
  }

  type AnimesGetPayload<S extends boolean | null | undefined | AnimesDefaultArgs> = $Result.GetResult<Prisma.$AnimesPayload, S>

  type AnimesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimesCountAggregateInputType | true
    }

  export interface AnimesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animes'], meta: { name: 'Animes' } }
    /**
     * Find zero or one Animes that matches the filter.
     * @param {AnimesFindUniqueArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimesFindUniqueArgs>(args: SelectSubset<T, AnimesFindUniqueArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Animes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimesFindUniqueOrThrowArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimesFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesFindFirstArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimesFindFirstArgs>(args?: SelectSubset<T, AnimesFindFirstArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesFindFirstOrThrowArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimesFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Animes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animes
     * const animes = await prisma.animes.findMany()
     * 
     * // Get first 10 Animes
     * const animes = await prisma.animes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animesWithIdOnly = await prisma.animes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimesFindManyArgs>(args?: SelectSubset<T, AnimesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Animes.
     * @param {AnimesCreateArgs} args - Arguments to create a Animes.
     * @example
     * // Create one Animes
     * const Animes = await prisma.animes.create({
     *   data: {
     *     // ... data to create a Animes
     *   }
     * })
     * 
     */
    create<T extends AnimesCreateArgs>(args: SelectSubset<T, AnimesCreateArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Animes.
     * @param {AnimesCreateManyArgs} args - Arguments to create many Animes.
     * @example
     * // Create many Animes
     * const animes = await prisma.animes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimesCreateManyArgs>(args?: SelectSubset<T, AnimesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Animes.
     * @param {AnimesDeleteArgs} args - Arguments to delete one Animes.
     * @example
     * // Delete one Animes
     * const Animes = await prisma.animes.delete({
     *   where: {
     *     // ... filter to delete one Animes
     *   }
     * })
     * 
     */
    delete<T extends AnimesDeleteArgs>(args: SelectSubset<T, AnimesDeleteArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Animes.
     * @param {AnimesUpdateArgs} args - Arguments to update one Animes.
     * @example
     * // Update one Animes
     * const animes = await prisma.animes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimesUpdateArgs>(args: SelectSubset<T, AnimesUpdateArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Animes.
     * @param {AnimesDeleteManyArgs} args - Arguments to filter Animes to delete.
     * @example
     * // Delete a few Animes
     * const { count } = await prisma.animes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimesDeleteManyArgs>(args?: SelectSubset<T, AnimesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animes
     * const animes = await prisma.animes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimesUpdateManyArgs>(args: SelectSubset<T, AnimesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Animes.
     * @param {AnimesUpsertArgs} args - Arguments to update or create a Animes.
     * @example
     * // Update or create a Animes
     * const animes = await prisma.animes.upsert({
     *   create: {
     *     // ... data to create a Animes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animes we want to update
     *   }
     * })
     */
    upsert<T extends AnimesUpsertArgs>(args: SelectSubset<T, AnimesUpsertArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesCountArgs} args - Arguments to filter Animes to count.
     * @example
     * // Count the number of Animes
     * const count = await prisma.animes.count({
     *   where: {
     *     // ... the filter for the Animes we want to count
     *   }
     * })
    **/
    count<T extends AnimesCountArgs>(
      args?: Subset<T, AnimesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnimesAggregateArgs>(args: Subset<T, AnimesAggregateArgs>): Prisma.PrismaPromise<GetAnimesAggregateType<T>>

    /**
     * Group by Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnimesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimesGroupByArgs['orderBy'] }
        : { orderBy?: AnimesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnimesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animes model
   */
  readonly fields: AnimesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generos<T extends Animes$generosArgs<ExtArgs> = {}>(args?: Subset<T, Animes$generosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritos<T extends Animes$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Animes$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Animes$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Animes$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Animes model
   */
  interface AnimesFieldRefs {
    readonly id: FieldRef<"Animes", 'String'>
    readonly title: FieldRef<"Animes", 'String'>
    readonly description: FieldRef<"Animes", 'String'>
    readonly image: FieldRef<"Animes", 'String'>
    readonly episodios: FieldRef<"Animes", 'Int'>
    readonly userId: FieldRef<"Animes", 'String'>
    readonly createdAt: FieldRef<"Animes", 'DateTime'>
    readonly updatedAt: FieldRef<"Animes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Animes findUnique
   */
  export type AnimesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where: AnimesWhereUniqueInput
  }

  /**
   * Animes findUniqueOrThrow
   */
  export type AnimesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where: AnimesWhereUniqueInput
  }

  /**
   * Animes findFirst
   */
  export type AnimesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animes.
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animes.
     */
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }

  /**
   * Animes findFirstOrThrow
   */
  export type AnimesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animes.
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animes.
     */
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }

  /**
   * Animes findMany
   */
  export type AnimesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animes.
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }

  /**
   * Animes create
   */
  export type AnimesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * The data needed to create a Animes.
     */
    data: XOR<AnimesCreateInput, AnimesUncheckedCreateInput>
  }

  /**
   * Animes createMany
   */
  export type AnimesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animes.
     */
    data: AnimesCreateManyInput | AnimesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animes update
   */
  export type AnimesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * The data needed to update a Animes.
     */
    data: XOR<AnimesUpdateInput, AnimesUncheckedUpdateInput>
    /**
     * Choose, which Animes to update.
     */
    where: AnimesWhereUniqueInput
  }

  /**
   * Animes updateMany
   */
  export type AnimesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animes.
     */
    data: XOR<AnimesUpdateManyMutationInput, AnimesUncheckedUpdateManyInput>
    /**
     * Filter which Animes to update
     */
    where?: AnimesWhereInput
    /**
     * Limit how many Animes to update.
     */
    limit?: number
  }

  /**
   * Animes upsert
   */
  export type AnimesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * The filter to search for the Animes to update in case it exists.
     */
    where: AnimesWhereUniqueInput
    /**
     * In case the Animes found by the `where` argument doesn't exist, create a new Animes with this data.
     */
    create: XOR<AnimesCreateInput, AnimesUncheckedCreateInput>
    /**
     * In case the Animes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimesUpdateInput, AnimesUncheckedUpdateInput>
  }

  /**
   * Animes delete
   */
  export type AnimesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter which Animes to delete.
     */
    where: AnimesWhereUniqueInput
  }

  /**
   * Animes deleteMany
   */
  export type AnimesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animes to delete
     */
    where?: AnimesWhereInput
    /**
     * Limit how many Animes to delete.
     */
    limit?: number
  }

  /**
   * Animes.generos
   */
  export type Animes$generosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    where?: GeneroWhereInput
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    cursor?: GeneroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Animes.favoritos
   */
  export type Animes$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Animes.comentarios
   */
  export type Animes$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Animes without action
   */
  export type AnimesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
  }


  /**
   * Model Historico
   */

  export type AggregateHistorico = {
    _count: HistoricoCountAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  export type HistoricoMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type HistoricoMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type HistoricoCountAggregateOutputType = {
    id: number
    title: number
    description: number
    userId: number
    createdAt: number
    _all: number
  }


  export type HistoricoMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    createdAt?: true
  }

  export type HistoricoMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    createdAt?: true
  }

  export type HistoricoCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type HistoricoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historico to aggregate.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Historicos
    **/
    _count?: true | HistoricoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoMaxAggregateInputType
  }

  export type GetHistoricoAggregateType<T extends HistoricoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico[P]>
      : GetScalarType<T[P], AggregateHistorico[P]>
  }




  export type HistoricoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
    orderBy?: HistoricoOrderByWithAggregationInput | HistoricoOrderByWithAggregationInput[]
    by: HistoricoScalarFieldEnum[] | HistoricoScalarFieldEnum
    having?: HistoricoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoCountAggregateInputType | true
    _min?: HistoricoMinAggregateInputType
    _max?: HistoricoMaxAggregateInputType
  }

  export type HistoricoGroupByOutputType = {
    id: string
    title: string
    description: string
    userId: string
    createdAt: Date
    _count: HistoricoCountAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  type GetHistoricoGroupByPayload<T extends HistoricoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>



  export type HistoricoSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type HistoricoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "userId" | "createdAt", ExtArgs["result"]["historico"]>
  export type HistoricoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HistoricoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historico"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["historico"]>
    composites: {}
  }

  type HistoricoGetPayload<S extends boolean | null | undefined | HistoricoDefaultArgs> = $Result.GetResult<Prisma.$HistoricoPayload, S>

  type HistoricoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoCountAggregateInputType | true
    }

  export interface HistoricoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Historico'], meta: { name: 'Historico' } }
    /**
     * Find zero or one Historico that matches the filter.
     * @param {HistoricoFindUniqueArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoFindUniqueArgs>(args: SelectSubset<T, HistoricoFindUniqueArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricoFindUniqueOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindFirstArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoFindFirstArgs>(args?: SelectSubset<T, HistoricoFindFirstArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindFirstOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historicos
     * const historicos = await prisma.historico.findMany()
     * 
     * // Get first 10 Historicos
     * const historicos = await prisma.historico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoWithIdOnly = await prisma.historico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoFindManyArgs>(args?: SelectSubset<T, HistoricoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historico.
     * @param {HistoricoCreateArgs} args - Arguments to create a Historico.
     * @example
     * // Create one Historico
     * const Historico = await prisma.historico.create({
     *   data: {
     *     // ... data to create a Historico
     *   }
     * })
     * 
     */
    create<T extends HistoricoCreateArgs>(args: SelectSubset<T, HistoricoCreateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historicos.
     * @param {HistoricoCreateManyArgs} args - Arguments to create many Historicos.
     * @example
     * // Create many Historicos
     * const historico = await prisma.historico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoCreateManyArgs>(args?: SelectSubset<T, HistoricoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Historico.
     * @param {HistoricoDeleteArgs} args - Arguments to delete one Historico.
     * @example
     * // Delete one Historico
     * const Historico = await prisma.historico.delete({
     *   where: {
     *     // ... filter to delete one Historico
     *   }
     * })
     * 
     */
    delete<T extends HistoricoDeleteArgs>(args: SelectSubset<T, HistoricoDeleteArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historico.
     * @param {HistoricoUpdateArgs} args - Arguments to update one Historico.
     * @example
     * // Update one Historico
     * const historico = await prisma.historico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoUpdateArgs>(args: SelectSubset<T, HistoricoUpdateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historicos.
     * @param {HistoricoDeleteManyArgs} args - Arguments to filter Historicos to delete.
     * @example
     * // Delete a few Historicos
     * const { count } = await prisma.historico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoDeleteManyArgs>(args?: SelectSubset<T, HistoricoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historicos
     * const historico = await prisma.historico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoUpdateManyArgs>(args: SelectSubset<T, HistoricoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Historico.
     * @param {HistoricoUpsertArgs} args - Arguments to update or create a Historico.
     * @example
     * // Update or create a Historico
     * const historico = await prisma.historico.upsert({
     *   create: {
     *     // ... data to create a Historico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoUpsertArgs>(args: SelectSubset<T, HistoricoUpsertArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoCountArgs} args - Arguments to filter Historicos to count.
     * @example
     * // Count the number of Historicos
     * const count = await prisma.historico.count({
     *   where: {
     *     // ... the filter for the Historicos we want to count
     *   }
     * })
    **/
    count<T extends HistoricoCountArgs>(
      args?: Subset<T, HistoricoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoricoAggregateArgs>(args: Subset<T, HistoricoAggregateArgs>): Prisma.PrismaPromise<GetHistoricoAggregateType<T>>

    /**
     * Group by Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoricoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoricoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Historico model
   */
  readonly fields: HistoricoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Historico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Historico model
   */
  interface HistoricoFieldRefs {
    readonly id: FieldRef<"Historico", 'String'>
    readonly title: FieldRef<"Historico", 'String'>
    readonly description: FieldRef<"Historico", 'String'>
    readonly userId: FieldRef<"Historico", 'String'>
    readonly createdAt: FieldRef<"Historico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Historico findUnique
   */
  export type HistoricoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico findUniqueOrThrow
   */
  export type HistoricoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico findFirst
   */
  export type HistoricoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico findFirstOrThrow
   */
  export type HistoricoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico findMany
   */
  export type HistoricoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historicos to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico create
   */
  export type HistoricoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The data needed to create a Historico.
     */
    data: XOR<HistoricoCreateInput, HistoricoUncheckedCreateInput>
  }

  /**
   * Historico createMany
   */
  export type HistoricoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Historicos.
     */
    data: HistoricoCreateManyInput | HistoricoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Historico update
   */
  export type HistoricoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The data needed to update a Historico.
     */
    data: XOR<HistoricoUpdateInput, HistoricoUncheckedUpdateInput>
    /**
     * Choose, which Historico to update.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico updateMany
   */
  export type HistoricoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Historicos.
     */
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyInput>
    /**
     * Filter which Historicos to update
     */
    where?: HistoricoWhereInput
    /**
     * Limit how many Historicos to update.
     */
    limit?: number
  }

  /**
   * Historico upsert
   */
  export type HistoricoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The filter to search for the Historico to update in case it exists.
     */
    where: HistoricoWhereUniqueInput
    /**
     * In case the Historico found by the `where` argument doesn't exist, create a new Historico with this data.
     */
    create: XOR<HistoricoCreateInput, HistoricoUncheckedCreateInput>
    /**
     * In case the Historico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoUpdateInput, HistoricoUncheckedUpdateInput>
  }

  /**
   * Historico delete
   */
  export type HistoricoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter which Historico to delete.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico deleteMany
   */
  export type HistoricoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historicos to delete
     */
    where?: HistoricoWhereInput
    /**
     * Limit how many Historicos to delete.
     */
    limit?: number
  }

  /**
   * Historico without action
   */
  export type HistoricoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
  }


  /**
   * Model Favorito
   */

  export type AggregateFavorito = {
    _count: FavoritoCountAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  export type FavoritoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    animeId: string | null
    mangaId: string | null
  }

  export type FavoritoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    animeId: string | null
    mangaId: string | null
  }

  export type FavoritoCountAggregateOutputType = {
    id: number
    userId: number
    animeId: number
    mangaId: number
    _all: number
  }


  export type FavoritoMinAggregateInputType = {
    id?: true
    userId?: true
    animeId?: true
    mangaId?: true
  }

  export type FavoritoMaxAggregateInputType = {
    id?: true
    userId?: true
    animeId?: true
    mangaId?: true
  }

  export type FavoritoCountAggregateInputType = {
    id?: true
    userId?: true
    animeId?: true
    mangaId?: true
    _all?: true
  }

  export type FavoritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorito to aggregate.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favoritos
    **/
    _count?: true | FavoritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritoMaxAggregateInputType
  }

  export type GetFavoritoAggregateType<T extends FavoritoAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorito[P]>
      : GetScalarType<T[P], AggregateFavorito[P]>
  }




  export type FavoritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithAggregationInput | FavoritoOrderByWithAggregationInput[]
    by: FavoritoScalarFieldEnum[] | FavoritoScalarFieldEnum
    having?: FavoritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritoCountAggregateInputType | true
    _min?: FavoritoMinAggregateInputType
    _max?: FavoritoMaxAggregateInputType
  }

  export type FavoritoGroupByOutputType = {
    id: string
    userId: string
    animeId: string | null
    mangaId: string | null
    _count: FavoritoCountAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  type GetFavoritoGroupByPayload<T extends FavoritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
        }
      >
    >


  export type FavoritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    animeId?: boolean
    mangaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    anime?: boolean | Favorito$animeArgs<ExtArgs>
    manga?: boolean | Favorito$mangaArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>



  export type FavoritoSelectScalar = {
    id?: boolean
    userId?: boolean
    animeId?: boolean
    mangaId?: boolean
  }

  export type FavoritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "animeId" | "mangaId", ExtArgs["result"]["favorito"]>
  export type FavoritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    anime?: boolean | Favorito$animeArgs<ExtArgs>
    manga?: boolean | Favorito$mangaArgs<ExtArgs>
  }

  export type $FavoritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorito"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      anime: Prisma.$AnimesPayload<ExtArgs> | null
      manga: Prisma.$MangasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      animeId: string | null
      mangaId: string | null
    }, ExtArgs["result"]["favorito"]>
    composites: {}
  }

  type FavoritoGetPayload<S extends boolean | null | undefined | FavoritoDefaultArgs> = $Result.GetResult<Prisma.$FavoritoPayload, S>

  type FavoritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritoCountAggregateInputType | true
    }

  export interface FavoritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorito'], meta: { name: 'Favorito' } }
    /**
     * Find zero or one Favorito that matches the filter.
     * @param {FavoritoFindUniqueArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritoFindUniqueArgs>(args: SelectSubset<T, FavoritoFindUniqueArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoritoFindUniqueOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritoFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritoFindFirstArgs>(args?: SelectSubset<T, FavoritoFindFirstArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritoFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoritos
     * const favoritos = await prisma.favorito.findMany()
     * 
     * // Get first 10 Favoritos
     * const favoritos = await prisma.favorito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritoWithIdOnly = await prisma.favorito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoritoFindManyArgs>(args?: SelectSubset<T, FavoritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorito.
     * @param {FavoritoCreateArgs} args - Arguments to create a Favorito.
     * @example
     * // Create one Favorito
     * const Favorito = await prisma.favorito.create({
     *   data: {
     *     // ... data to create a Favorito
     *   }
     * })
     * 
     */
    create<T extends FavoritoCreateArgs>(args: SelectSubset<T, FavoritoCreateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favoritos.
     * @param {FavoritoCreateManyArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritoCreateManyArgs>(args?: SelectSubset<T, FavoritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favorito.
     * @param {FavoritoDeleteArgs} args - Arguments to delete one Favorito.
     * @example
     * // Delete one Favorito
     * const Favorito = await prisma.favorito.delete({
     *   where: {
     *     // ... filter to delete one Favorito
     *   }
     * })
     * 
     */
    delete<T extends FavoritoDeleteArgs>(args: SelectSubset<T, FavoritoDeleteArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorito.
     * @param {FavoritoUpdateArgs} args - Arguments to update one Favorito.
     * @example
     * // Update one Favorito
     * const favorito = await prisma.favorito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritoUpdateArgs>(args: SelectSubset<T, FavoritoUpdateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favoritos.
     * @param {FavoritoDeleteManyArgs} args - Arguments to filter Favoritos to delete.
     * @example
     * // Delete a few Favoritos
     * const { count } = await prisma.favorito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritoDeleteManyArgs>(args?: SelectSubset<T, FavoritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritoUpdateManyArgs>(args: SelectSubset<T, FavoritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorito.
     * @param {FavoritoUpsertArgs} args - Arguments to update or create a Favorito.
     * @example
     * // Update or create a Favorito
     * const favorito = await prisma.favorito.upsert({
     *   create: {
     *     // ... data to create a Favorito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorito we want to update
     *   }
     * })
     */
    upsert<T extends FavoritoUpsertArgs>(args: SelectSubset<T, FavoritoUpsertArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoCountArgs} args - Arguments to filter Favoritos to count.
     * @example
     * // Count the number of Favoritos
     * const count = await prisma.favorito.count({
     *   where: {
     *     // ... the filter for the Favoritos we want to count
     *   }
     * })
    **/
    count<T extends FavoritoCountArgs>(
      args?: Subset<T, FavoritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoritoAggregateArgs>(args: Subset<T, FavoritoAggregateArgs>): Prisma.PrismaPromise<GetFavoritoAggregateType<T>>

    /**
     * Group by Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritoGroupByArgs['orderBy'] }
        : { orderBy?: FavoritoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorito model
   */
  readonly fields: FavoritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    anime<T extends Favorito$animeArgs<ExtArgs> = {}>(args?: Subset<T, Favorito$animeArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    manga<T extends Favorito$mangaArgs<ExtArgs> = {}>(args?: Subset<T, Favorito$mangaArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorito model
   */
  interface FavoritoFieldRefs {
    readonly id: FieldRef<"Favorito", 'String'>
    readonly userId: FieldRef<"Favorito", 'String'>
    readonly animeId: FieldRef<"Favorito", 'String'>
    readonly mangaId: FieldRef<"Favorito", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Favorito findUnique
   */
  export type FavoritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findUniqueOrThrow
   */
  export type FavoritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findFirst
   */
  export type FavoritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findFirstOrThrow
   */
  export type FavoritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findMany
   */
  export type FavoritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito create
   */
  export type FavoritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorito.
     */
    data: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
  }

  /**
   * Favorito createMany
   */
  export type FavoritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorito update
   */
  export type FavoritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorito.
     */
    data: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
    /**
     * Choose, which Favorito to update.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito updateMany
   */
  export type FavoritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
  }

  /**
   * Favorito upsert
   */
  export type FavoritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorito to update in case it exists.
     */
    where: FavoritoWhereUniqueInput
    /**
     * In case the Favorito found by the `where` argument doesn't exist, create a new Favorito with this data.
     */
    create: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
    /**
     * In case the Favorito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
  }

  /**
   * Favorito delete
   */
  export type FavoritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter which Favorito to delete.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito deleteMany
   */
  export type FavoritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favoritos to delete
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to delete.
     */
    limit?: number
  }

  /**
   * Favorito.anime
   */
  export type Favorito$animeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    where?: AnimesWhereInput
  }

  /**
   * Favorito.manga
   */
  export type Favorito$mangaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    where?: MangasWhereInput
  }

  /**
   * Favorito without action
   */
  export type FavoritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
  }


  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: string | null
    texto: string | null
    createdAt: Date | null
    userId: string | null
    animeId: string | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: string | null
    texto: string | null
    createdAt: Date | null
    userId: string | null
    animeId: string | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    texto: number
    createdAt: number
    userId: number
    animeId: number
    _all: number
  }


  export type ComentarioMinAggregateInputType = {
    id?: true
    texto?: true
    createdAt?: true
    userId?: true
    animeId?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    texto?: true
    createdAt?: true
    userId?: true
    animeId?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    texto?: true
    createdAt?: true
    userId?: true
    animeId?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type ComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithAggregationInput | ComentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: ComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: string
    texto: string
    createdAt: Date
    userId: string
    animeId: string | null
    _count: ComentarioCountAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    createdAt?: boolean
    userId?: boolean
    animeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    anime?: boolean | Comentario$animeArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>



  export type ComentarioSelectScalar = {
    id?: boolean
    texto?: boolean
    createdAt?: boolean
    userId?: boolean
    animeId?: boolean
  }

  export type ComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "texto" | "createdAt" | "userId" | "animeId", ExtArgs["result"]["comentario"]>
  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    anime?: boolean | Comentario$animeArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      anime: Prisma.$AnimesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      texto: string
      createdAt: Date
      userId: string
      animeId: string | null
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = $Result.GetResult<Prisma.$ComentarioPayload, S>

  type ComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface ComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentario'], meta: { name: 'Comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioFindUniqueArgs>(args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioFindFirstArgs>(args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioFindManyArgs>(args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends ComentarioCreateArgs>(args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioCreateManyArgs>(args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends ComentarioDeleteArgs>(args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioUpdateArgs>(args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioUpdateManyArgs>(args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioUpsertArgs>(args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentario model
   */
  readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    anime<T extends Comentario$animeArgs<ExtArgs> = {}>(args?: Subset<T, Comentario$animeArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comentario model
   */
  interface ComentarioFieldRefs {
    readonly id: FieldRef<"Comentario", 'String'>
    readonly texto: FieldRef<"Comentario", 'String'>
    readonly createdAt: FieldRef<"Comentario", 'DateTime'>
    readonly userId: FieldRef<"Comentario", 'String'>
    readonly animeId: FieldRef<"Comentario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
  }

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
  }

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
  }

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to delete.
     */
    limit?: number
  }

  /**
   * Comentario.anime
   */
  export type Comentario$animeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    where?: AnimesWhereInput
  }

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
  }


  /**
   * Model Genero
   */

  export type AggregateGenero = {
    _count: GeneroCountAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  export type GeneroMinAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type GeneroMaxAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type GeneroCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type GeneroMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type GeneroMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type GeneroCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type GeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genero to aggregate.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generos
    **/
    _count?: true | GeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneroMaxAggregateInputType
  }

  export type GetGeneroAggregateType<T extends GeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenero[P]>
      : GetScalarType<T[P], AggregateGenero[P]>
  }




  export type GeneroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroWhereInput
    orderBy?: GeneroOrderByWithAggregationInput | GeneroOrderByWithAggregationInput[]
    by: GeneroScalarFieldEnum[] | GeneroScalarFieldEnum
    having?: GeneroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneroCountAggregateInputType | true
    _min?: GeneroMinAggregateInputType
    _max?: GeneroMaxAggregateInputType
  }

  export type GeneroGroupByOutputType = {
    id: string
    nome: string
    _count: GeneroCountAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  type GetGeneroGroupByPayload<T extends GeneroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneroGroupByOutputType[P]>
            : GetScalarType<T[P], GeneroGroupByOutputType[P]>
        }
      >
    >


  export type GeneroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    animes?: boolean | Genero$animesArgs<ExtArgs>
    mangas?: boolean | Genero$mangasArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genero"]>



  export type GeneroSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type GeneroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["genero"]>
  export type GeneroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animes?: boolean | Genero$animesArgs<ExtArgs>
    mangas?: boolean | Genero$mangasArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GeneroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genero"
    objects: {
      animes: Prisma.$AnimesPayload<ExtArgs>[]
      mangas: Prisma.$MangasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
    }, ExtArgs["result"]["genero"]>
    composites: {}
  }

  type GeneroGetPayload<S extends boolean | null | undefined | GeneroDefaultArgs> = $Result.GetResult<Prisma.$GeneroPayload, S>

  type GeneroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneroCountAggregateInputType | true
    }

  export interface GeneroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genero'], meta: { name: 'Genero' } }
    /**
     * Find zero or one Genero that matches the filter.
     * @param {GeneroFindUniqueArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneroFindUniqueArgs>(args: SelectSubset<T, GeneroFindUniqueArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneroFindUniqueOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneroFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneroFindFirstArgs>(args?: SelectSubset<T, GeneroFindFirstArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneroFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneroFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generos
     * const generos = await prisma.genero.findMany()
     * 
     * // Get first 10 Generos
     * const generos = await prisma.genero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generoWithIdOnly = await prisma.genero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneroFindManyArgs>(args?: SelectSubset<T, GeneroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genero.
     * @param {GeneroCreateArgs} args - Arguments to create a Genero.
     * @example
     * // Create one Genero
     * const Genero = await prisma.genero.create({
     *   data: {
     *     // ... data to create a Genero
     *   }
     * })
     * 
     */
    create<T extends GeneroCreateArgs>(args: SelectSubset<T, GeneroCreateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generos.
     * @param {GeneroCreateManyArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const genero = await prisma.genero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneroCreateManyArgs>(args?: SelectSubset<T, GeneroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genero.
     * @param {GeneroDeleteArgs} args - Arguments to delete one Genero.
     * @example
     * // Delete one Genero
     * const Genero = await prisma.genero.delete({
     *   where: {
     *     // ... filter to delete one Genero
     *   }
     * })
     * 
     */
    delete<T extends GeneroDeleteArgs>(args: SelectSubset<T, GeneroDeleteArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genero.
     * @param {GeneroUpdateArgs} args - Arguments to update one Genero.
     * @example
     * // Update one Genero
     * const genero = await prisma.genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneroUpdateArgs>(args: SelectSubset<T, GeneroUpdateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generos.
     * @param {GeneroDeleteManyArgs} args - Arguments to filter Generos to delete.
     * @example
     * // Delete a few Generos
     * const { count } = await prisma.genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneroDeleteManyArgs>(args?: SelectSubset<T, GeneroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneroUpdateManyArgs>(args: SelectSubset<T, GeneroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genero.
     * @param {GeneroUpsertArgs} args - Arguments to update or create a Genero.
     * @example
     * // Update or create a Genero
     * const genero = await prisma.genero.upsert({
     *   create: {
     *     // ... data to create a Genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genero we want to update
     *   }
     * })
     */
    upsert<T extends GeneroUpsertArgs>(args: SelectSubset<T, GeneroUpsertArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroCountArgs} args - Arguments to filter Generos to count.
     * @example
     * // Count the number of Generos
     * const count = await prisma.genero.count({
     *   where: {
     *     // ... the filter for the Generos we want to count
     *   }
     * })
    **/
    count<T extends GeneroCountArgs>(
      args?: Subset<T, GeneroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeneroAggregateArgs>(args: Subset<T, GeneroAggregateArgs>): Prisma.PrismaPromise<GetGeneroAggregateType<T>>

    /**
     * Group by Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeneroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneroGroupByArgs['orderBy'] }
        : { orderBy?: GeneroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeneroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genero model
   */
  readonly fields: GeneroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animes<T extends Genero$animesArgs<ExtArgs> = {}>(args?: Subset<T, Genero$animesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mangas<T extends Genero$mangasArgs<ExtArgs> = {}>(args?: Subset<T, Genero$mangasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genero model
   */
  interface GeneroFieldRefs {
    readonly id: FieldRef<"Genero", 'String'>
    readonly nome: FieldRef<"Genero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genero findUnique
   */
  export type GeneroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findUniqueOrThrow
   */
  export type GeneroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findFirst
   */
  export type GeneroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findFirstOrThrow
   */
  export type GeneroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findMany
   */
  export type GeneroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Generos to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero create
   */
  export type GeneroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to create a Genero.
     */
    data: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
  }

  /**
   * Genero createMany
   */
  export type GeneroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generos.
     */
    data: GeneroCreateManyInput | GeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genero update
   */
  export type GeneroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to update a Genero.
     */
    data: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
    /**
     * Choose, which Genero to update.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero updateMany
   */
  export type GeneroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generos.
     */
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyInput>
    /**
     * Filter which Generos to update
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to update.
     */
    limit?: number
  }

  /**
   * Genero upsert
   */
  export type GeneroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The filter to search for the Genero to update in case it exists.
     */
    where: GeneroWhereUniqueInput
    /**
     * In case the Genero found by the `where` argument doesn't exist, create a new Genero with this data.
     */
    create: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
    /**
     * In case the Genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
  }

  /**
   * Genero delete
   */
  export type GeneroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter which Genero to delete.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero deleteMany
   */
  export type GeneroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generos to delete
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to delete.
     */
    limit?: number
  }

  /**
   * Genero.animes
   */
  export type Genero$animesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    where?: AnimesWhereInput
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    cursor?: AnimesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }

  /**
   * Genero.mangas
   */
  export type Genero$mangasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    where?: MangasWhereInput
    orderBy?: MangasOrderByWithRelationInput | MangasOrderByWithRelationInput[]
    cursor?: MangasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MangasScalarFieldEnum | MangasScalarFieldEnum[]
  }

  /**
   * Genero without action
   */
  export type GeneroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id: string | null
    mensagem: string | null
    lida: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id: string | null
    mensagem: string | null
    lida: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id: number
    mensagem: number
    lida: number
    createdAt: number
    userId: number
    _all: number
  }


  export type NotificacaoMinAggregateInputType = {
    id?: true
    mensagem?: true
    lida?: true
    createdAt?: true
    userId?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id?: true
    mensagem?: true
    lida?: true
    createdAt?: true
    userId?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id?: true
    mensagem?: true
    lida?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id: string
    mensagem: string
    lida: boolean
    createdAt: Date
    userId: string
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    lida?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>



  export type NotificacaoSelectScalar = {
    id?: boolean
    mensagem?: boolean
    lida?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type NotificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mensagem" | "lida" | "createdAt" | "userId", ExtArgs["result"]["notificacao"]>
  export type NotificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mensagem: string
      lida: boolean
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notificacao model
   */
  interface NotificacaoFieldRefs {
    readonly id: FieldRef<"Notificacao", 'String'>
    readonly mensagem: FieldRef<"Notificacao", 'String'>
    readonly lida: FieldRef<"Notificacao", 'Boolean'>
    readonly createdAt: FieldRef<"Notificacao", 'DateTime'>
    readonly userId: FieldRef<"Notificacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to delete.
     */
    limit?: number
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TiposUsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    ativado: 'ativado'
  };

  export type TiposUsuarioScalarFieldEnum = (typeof TiposUsuarioScalarFieldEnum)[keyof typeof TiposUsuarioScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    ativado: 'ativado',
    tipoUsuarioId: 'tipoUsuarioId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MangasScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MangasScalarFieldEnum = (typeof MangasScalarFieldEnum)[keyof typeof MangasScalarFieldEnum]


  export const AnimesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    episodios: 'episodios',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnimesScalarFieldEnum = (typeof AnimesScalarFieldEnum)[keyof typeof AnimesScalarFieldEnum]


  export const HistoricoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type HistoricoScalarFieldEnum = (typeof HistoricoScalarFieldEnum)[keyof typeof HistoricoScalarFieldEnum]


  export const FavoritoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    animeId: 'animeId',
    mangaId: 'mangaId'
  };

  export type FavoritoScalarFieldEnum = (typeof FavoritoScalarFieldEnum)[keyof typeof FavoritoScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    texto: 'texto',
    createdAt: 'createdAt',
    userId: 'userId',
    animeId: 'animeId'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const GeneroScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type GeneroScalarFieldEnum = (typeof GeneroScalarFieldEnum)[keyof typeof GeneroScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
    id: 'id',
    mensagem: 'mensagem',
    lida: 'lida',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TiposUsuarioOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type TiposUsuarioOrderByRelevanceFieldEnum = (typeof TiposUsuarioOrderByRelevanceFieldEnum)[keyof typeof TiposUsuarioOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    password: 'password',
    tipoUsuarioId: 'tipoUsuarioId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const MangasOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    userId: 'userId'
  };

  export type MangasOrderByRelevanceFieldEnum = (typeof MangasOrderByRelevanceFieldEnum)[keyof typeof MangasOrderByRelevanceFieldEnum]


  export const AnimesOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    userId: 'userId'
  };

  export type AnimesOrderByRelevanceFieldEnum = (typeof AnimesOrderByRelevanceFieldEnum)[keyof typeof AnimesOrderByRelevanceFieldEnum]


  export const HistoricoOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    userId: 'userId'
  };

  export type HistoricoOrderByRelevanceFieldEnum = (typeof HistoricoOrderByRelevanceFieldEnum)[keyof typeof HistoricoOrderByRelevanceFieldEnum]


  export const FavoritoOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    animeId: 'animeId',
    mangaId: 'mangaId'
  };

  export type FavoritoOrderByRelevanceFieldEnum = (typeof FavoritoOrderByRelevanceFieldEnum)[keyof typeof FavoritoOrderByRelevanceFieldEnum]


  export const ComentarioOrderByRelevanceFieldEnum: {
    id: 'id',
    texto: 'texto',
    userId: 'userId',
    animeId: 'animeId'
  };

  export type ComentarioOrderByRelevanceFieldEnum = (typeof ComentarioOrderByRelevanceFieldEnum)[keyof typeof ComentarioOrderByRelevanceFieldEnum]


  export const GeneroOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type GeneroOrderByRelevanceFieldEnum = (typeof GeneroOrderByRelevanceFieldEnum)[keyof typeof GeneroOrderByRelevanceFieldEnum]


  export const NotificacaoOrderByRelevanceFieldEnum: {
    id: 'id',
    mensagem: 'mensagem',
    userId: 'userId'
  };

  export type NotificacaoOrderByRelevanceFieldEnum = (typeof NotificacaoOrderByRelevanceFieldEnum)[keyof typeof NotificacaoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TiposUsuarioWhereInput = {
    AND?: TiposUsuarioWhereInput | TiposUsuarioWhereInput[]
    OR?: TiposUsuarioWhereInput[]
    NOT?: TiposUsuarioWhereInput | TiposUsuarioWhereInput[]
    id?: StringFilter<"TiposUsuario"> | string
    nome?: StringFilter<"TiposUsuario"> | string
    descricao?: StringNullableFilter<"TiposUsuario"> | string | null
    createdAt?: DateTimeFilter<"TiposUsuario"> | Date | string
    updatedAt?: DateTimeFilter<"TiposUsuario"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TiposUsuario"> | Date | string | null
    ativado?: BoolFilter<"TiposUsuario"> | boolean
    usuarios?: UserListRelationFilter
  }

  export type TiposUsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    ativado?: SortOrder
    usuarios?: UserOrderByRelationAggregateInput
    _relevance?: TiposUsuarioOrderByRelevanceInput
  }

  export type TiposUsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: TiposUsuarioWhereInput | TiposUsuarioWhereInput[]
    OR?: TiposUsuarioWhereInput[]
    NOT?: TiposUsuarioWhereInput | TiposUsuarioWhereInput[]
    descricao?: StringNullableFilter<"TiposUsuario"> | string | null
    createdAt?: DateTimeFilter<"TiposUsuario"> | Date | string
    updatedAt?: DateTimeFilter<"TiposUsuario"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TiposUsuario"> | Date | string | null
    ativado?: BoolFilter<"TiposUsuario"> | boolean
    usuarios?: UserListRelationFilter
  }, "id" | "nome">

  export type TiposUsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    ativado?: SortOrder
    _count?: TiposUsuarioCountOrderByAggregateInput
    _max?: TiposUsuarioMaxOrderByAggregateInput
    _min?: TiposUsuarioMinOrderByAggregateInput
  }

  export type TiposUsuarioScalarWhereWithAggregatesInput = {
    AND?: TiposUsuarioScalarWhereWithAggregatesInput | TiposUsuarioScalarWhereWithAggregatesInput[]
    OR?: TiposUsuarioScalarWhereWithAggregatesInput[]
    NOT?: TiposUsuarioScalarWhereWithAggregatesInput | TiposUsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TiposUsuario"> | string
    nome?: StringWithAggregatesFilter<"TiposUsuario"> | string
    descricao?: StringNullableWithAggregatesFilter<"TiposUsuario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TiposUsuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TiposUsuario"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TiposUsuario"> | Date | string | null
    ativado?: BoolWithAggregatesFilter<"TiposUsuario"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    ativado?: BoolFilter<"User"> | boolean
    tipoUsuarioId?: StringNullableFilter<"User"> | string | null
    tipoUsuario?: XOR<TiposUsuarioNullableScalarRelationFilter, TiposUsuarioWhereInput> | null
    mangas?: MangasListRelationFilter
    animes?: AnimesListRelationFilter
    historicos?: HistoricoListRelationFilter
    favoritos?: FavoritoListRelationFilter
    comentarios?: ComentarioListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    ativado?: SortOrder
    tipoUsuarioId?: SortOrderInput | SortOrder
    tipoUsuario?: TiposUsuarioOrderByWithRelationInput
    mangas?: MangasOrderByRelationAggregateInput
    animes?: AnimesOrderByRelationAggregateInput
    historicos?: HistoricoOrderByRelationAggregateInput
    favoritos?: FavoritoOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    ativado?: BoolFilter<"User"> | boolean
    tipoUsuarioId?: StringNullableFilter<"User"> | string | null
    tipoUsuario?: XOR<TiposUsuarioNullableScalarRelationFilter, TiposUsuarioWhereInput> | null
    mangas?: MangasListRelationFilter
    animes?: AnimesListRelationFilter
    historicos?: HistoricoListRelationFilter
    favoritos?: FavoritoListRelationFilter
    comentarios?: ComentarioListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }, "id" | "nome" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    ativado?: SortOrder
    tipoUsuarioId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nome?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    ativado?: BoolWithAggregatesFilter<"User"> | boolean
    tipoUsuarioId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type MangasWhereInput = {
    AND?: MangasWhereInput | MangasWhereInput[]
    OR?: MangasWhereInput[]
    NOT?: MangasWhereInput | MangasWhereInput[]
    id?: StringFilter<"Mangas"> | string
    title?: StringFilter<"Mangas"> | string
    description?: StringFilter<"Mangas"> | string
    image?: StringFilter<"Mangas"> | string
    userId?: StringNullableFilter<"Mangas"> | string | null
    createdAt?: DateTimeFilter<"Mangas"> | Date | string
    updatedAt?: DateTimeFilter<"Mangas"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    generos?: GeneroListRelationFilter
    favoritos?: FavoritoListRelationFilter
  }

  export type MangasOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    generos?: GeneroOrderByRelationAggregateInput
    favoritos?: FavoritoOrderByRelationAggregateInput
    _relevance?: MangasOrderByRelevanceInput
  }

  export type MangasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: MangasWhereInput | MangasWhereInput[]
    OR?: MangasWhereInput[]
    NOT?: MangasWhereInput | MangasWhereInput[]
    description?: StringFilter<"Mangas"> | string
    image?: StringFilter<"Mangas"> | string
    userId?: StringNullableFilter<"Mangas"> | string | null
    createdAt?: DateTimeFilter<"Mangas"> | Date | string
    updatedAt?: DateTimeFilter<"Mangas"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    generos?: GeneroListRelationFilter
    favoritos?: FavoritoListRelationFilter
  }, "id" | "title">

  export type MangasOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MangasCountOrderByAggregateInput
    _max?: MangasMaxOrderByAggregateInput
    _min?: MangasMinOrderByAggregateInput
  }

  export type MangasScalarWhereWithAggregatesInput = {
    AND?: MangasScalarWhereWithAggregatesInput | MangasScalarWhereWithAggregatesInput[]
    OR?: MangasScalarWhereWithAggregatesInput[]
    NOT?: MangasScalarWhereWithAggregatesInput | MangasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mangas"> | string
    title?: StringWithAggregatesFilter<"Mangas"> | string
    description?: StringWithAggregatesFilter<"Mangas"> | string
    image?: StringWithAggregatesFilter<"Mangas"> | string
    userId?: StringNullableWithAggregatesFilter<"Mangas"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Mangas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mangas"> | Date | string
  }

  export type AnimesWhereInput = {
    AND?: AnimesWhereInput | AnimesWhereInput[]
    OR?: AnimesWhereInput[]
    NOT?: AnimesWhereInput | AnimesWhereInput[]
    id?: StringFilter<"Animes"> | string
    title?: StringFilter<"Animes"> | string
    description?: StringFilter<"Animes"> | string
    image?: StringFilter<"Animes"> | string
    episodios?: IntFilter<"Animes"> | number
    userId?: StringFilter<"Animes"> | string
    createdAt?: DateTimeFilter<"Animes"> | Date | string
    updatedAt?: DateTimeFilter<"Animes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    generos?: GeneroListRelationFilter
    favoritos?: FavoritoListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }

  export type AnimesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    episodios?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    generos?: GeneroOrderByRelationAggregateInput
    favoritos?: FavoritoOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    _relevance?: AnimesOrderByRelevanceInput
  }

  export type AnimesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: AnimesWhereInput | AnimesWhereInput[]
    OR?: AnimesWhereInput[]
    NOT?: AnimesWhereInput | AnimesWhereInput[]
    description?: StringFilter<"Animes"> | string
    image?: StringFilter<"Animes"> | string
    episodios?: IntFilter<"Animes"> | number
    userId?: StringFilter<"Animes"> | string
    createdAt?: DateTimeFilter<"Animes"> | Date | string
    updatedAt?: DateTimeFilter<"Animes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    generos?: GeneroListRelationFilter
    favoritos?: FavoritoListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }, "id" | "title">

  export type AnimesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    episodios?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnimesCountOrderByAggregateInput
    _avg?: AnimesAvgOrderByAggregateInput
    _max?: AnimesMaxOrderByAggregateInput
    _min?: AnimesMinOrderByAggregateInput
    _sum?: AnimesSumOrderByAggregateInput
  }

  export type AnimesScalarWhereWithAggregatesInput = {
    AND?: AnimesScalarWhereWithAggregatesInput | AnimesScalarWhereWithAggregatesInput[]
    OR?: AnimesScalarWhereWithAggregatesInput[]
    NOT?: AnimesScalarWhereWithAggregatesInput | AnimesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Animes"> | string
    title?: StringWithAggregatesFilter<"Animes"> | string
    description?: StringWithAggregatesFilter<"Animes"> | string
    image?: StringWithAggregatesFilter<"Animes"> | string
    episodios?: IntWithAggregatesFilter<"Animes"> | number
    userId?: StringWithAggregatesFilter<"Animes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Animes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Animes"> | Date | string
  }

  export type HistoricoWhereInput = {
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    id?: StringFilter<"Historico"> | string
    title?: StringFilter<"Historico"> | string
    description?: StringFilter<"Historico"> | string
    userId?: StringFilter<"Historico"> | string
    createdAt?: DateTimeFilter<"Historico"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HistoricoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: HistoricoOrderByRelevanceInput
  }

  export type HistoricoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    title?: StringFilter<"Historico"> | string
    description?: StringFilter<"Historico"> | string
    userId?: StringFilter<"Historico"> | string
    createdAt?: DateTimeFilter<"Historico"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HistoricoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: HistoricoCountOrderByAggregateInput
    _max?: HistoricoMaxOrderByAggregateInput
    _min?: HistoricoMinOrderByAggregateInput
  }

  export type HistoricoScalarWhereWithAggregatesInput = {
    AND?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    OR?: HistoricoScalarWhereWithAggregatesInput[]
    NOT?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Historico"> | string
    title?: StringWithAggregatesFilter<"Historico"> | string
    description?: StringWithAggregatesFilter<"Historico"> | string
    userId?: StringWithAggregatesFilter<"Historico"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Historico"> | Date | string
  }

  export type FavoritoWhereInput = {
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    id?: StringFilter<"Favorito"> | string
    userId?: StringFilter<"Favorito"> | string
    animeId?: StringNullableFilter<"Favorito"> | string | null
    mangaId?: StringNullableFilter<"Favorito"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    anime?: XOR<AnimesNullableScalarRelationFilter, AnimesWhereInput> | null
    manga?: XOR<MangasNullableScalarRelationFilter, MangasWhereInput> | null
  }

  export type FavoritoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    animeId?: SortOrderInput | SortOrder
    mangaId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    anime?: AnimesOrderByWithRelationInput
    manga?: MangasOrderByWithRelationInput
    _relevance?: FavoritoOrderByRelevanceInput
  }

  export type FavoritoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    userId?: StringFilter<"Favorito"> | string
    animeId?: StringNullableFilter<"Favorito"> | string | null
    mangaId?: StringNullableFilter<"Favorito"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    anime?: XOR<AnimesNullableScalarRelationFilter, AnimesWhereInput> | null
    manga?: XOR<MangasNullableScalarRelationFilter, MangasWhereInput> | null
  }, "id">

  export type FavoritoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    animeId?: SortOrderInput | SortOrder
    mangaId?: SortOrderInput | SortOrder
    _count?: FavoritoCountOrderByAggregateInput
    _max?: FavoritoMaxOrderByAggregateInput
    _min?: FavoritoMinOrderByAggregateInput
  }

  export type FavoritoScalarWhereWithAggregatesInput = {
    AND?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    OR?: FavoritoScalarWhereWithAggregatesInput[]
    NOT?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorito"> | string
    userId?: StringWithAggregatesFilter<"Favorito"> | string
    animeId?: StringNullableWithAggregatesFilter<"Favorito"> | string | null
    mangaId?: StringNullableWithAggregatesFilter<"Favorito"> | string | null
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: StringFilter<"Comentario"> | string
    texto?: StringFilter<"Comentario"> | string
    createdAt?: DateTimeFilter<"Comentario"> | Date | string
    userId?: StringFilter<"Comentario"> | string
    animeId?: StringNullableFilter<"Comentario"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    anime?: XOR<AnimesNullableScalarRelationFilter, AnimesWhereInput> | null
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    animeId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    anime?: AnimesOrderByWithRelationInput
    _relevance?: ComentarioOrderByRelevanceInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    texto?: StringFilter<"Comentario"> | string
    createdAt?: DateTimeFilter<"Comentario"> | Date | string
    userId?: StringFilter<"Comentario"> | string
    animeId?: StringNullableFilter<"Comentario"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    anime?: XOR<AnimesNullableScalarRelationFilter, AnimesWhereInput> | null
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    animeId?: SortOrderInput | SortOrder
    _count?: ComentarioCountOrderByAggregateInput
    _max?: ComentarioMaxOrderByAggregateInput
    _min?: ComentarioMinOrderByAggregateInput
  }

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    OR?: ComentarioScalarWhereWithAggregatesInput[]
    NOT?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comentario"> | string
    texto?: StringWithAggregatesFilter<"Comentario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
    userId?: StringWithAggregatesFilter<"Comentario"> | string
    animeId?: StringNullableWithAggregatesFilter<"Comentario"> | string | null
  }

  export type GeneroWhereInput = {
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    id?: StringFilter<"Genero"> | string
    nome?: StringFilter<"Genero"> | string
    animes?: AnimesListRelationFilter
    mangas?: MangasListRelationFilter
  }

  export type GeneroOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    animes?: AnimesOrderByRelationAggregateInput
    mangas?: MangasOrderByRelationAggregateInput
    _relevance?: GeneroOrderByRelevanceInput
  }

  export type GeneroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    nome?: StringFilter<"Genero"> | string
    animes?: AnimesListRelationFilter
    mangas?: MangasListRelationFilter
  }, "id">

  export type GeneroOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: GeneroCountOrderByAggregateInput
    _max?: GeneroMaxOrderByAggregateInput
    _min?: GeneroMinOrderByAggregateInput
  }

  export type GeneroScalarWhereWithAggregatesInput = {
    AND?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    OR?: GeneroScalarWhereWithAggregatesInput[]
    NOT?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genero"> | string
    nome?: StringWithAggregatesFilter<"Genero"> | string
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    userId?: StringFilter<"Notificacao"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificacaoOrderByWithRelationInput = {
    id?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: NotificacaoOrderByRelevanceInput
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    mensagem?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    userId?: StringFilter<"Notificacao"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notificacao"> | string
    mensagem?: StringWithAggregatesFilter<"Notificacao"> | string
    lida?: BoolWithAggregatesFilter<"Notificacao"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
    userId?: StringWithAggregatesFilter<"Notificacao"> | string
  }

  export type TiposUsuarioCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    usuarios?: UserCreateNestedManyWithoutTipoUsuarioInput
  }

  export type TiposUsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    usuarios?: UserUncheckedCreateNestedManyWithoutTipoUsuarioInput
  }

  export type TiposUsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    usuarios?: UserUpdateManyWithoutTipoUsuarioNestedInput
  }

  export type TiposUsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    usuarios?: UserUncheckedUpdateManyWithoutTipoUsuarioNestedInput
  }

  export type TiposUsuarioCreateManyInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
  }

  export type TiposUsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TiposUsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuario?: TiposUsuarioCreateNestedOneWithoutUsuariosInput
    mangas?: MangasCreateNestedManyWithoutUserInput
    animes?: AnimesCreateNestedManyWithoutUserInput
    historicos?: HistoricoCreateNestedManyWithoutUserInput
    favoritos?: FavoritoCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuarioId?: string | null
    mangas?: MangasUncheckedCreateNestedManyWithoutUserInput
    animes?: AnimesUncheckedCreateNestedManyWithoutUserInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutUserInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuario?: TiposUsuarioUpdateOneWithoutUsuariosNestedInput
    mangas?: MangasUpdateManyWithoutUserNestedInput
    animes?: AnimesUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    mangas?: MangasUncheckedUpdateManyWithoutUserNestedInput
    animes?: AnimesUncheckedUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuarioId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuarioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MangasCreateInput = {
    id?: string
    title: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutMangasInput
    generos?: GeneroCreateNestedManyWithoutMangasInput
    favoritos?: FavoritoCreateNestedManyWithoutMangaInput
  }

  export type MangasUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    image: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroUncheckedCreateNestedManyWithoutMangasInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutMangaInput
  }

  export type MangasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMangasNestedInput
    generos?: GeneroUpdateManyWithoutMangasNestedInput
    favoritos?: FavoritoUpdateManyWithoutMangaNestedInput
  }

  export type MangasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUncheckedUpdateManyWithoutMangasNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutMangaNestedInput
  }

  export type MangasCreateManyInput = {
    id?: string
    title: string
    description: string
    image: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MangasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimesCreateInput = {
    id?: string
    title: string
    description: string
    image: string
    episodios: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnimesInput
    generos?: GeneroCreateNestedManyWithoutAnimesInput
    favoritos?: FavoritoCreateNestedManyWithoutAnimeInput
    comentarios?: ComentarioCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    image: string
    episodios: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroUncheckedCreateNestedManyWithoutAnimesInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutAnimeInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimesNestedInput
    generos?: GeneroUpdateManyWithoutAnimesNestedInput
    favoritos?: FavoritoUpdateManyWithoutAnimeNestedInput
    comentarios?: ComentarioUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUncheckedUpdateManyWithoutAnimesNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutAnimeNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesCreateManyInput = {
    id?: string
    title: string
    description: string
    image: string
    episodios: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHistoricosInput
  }

  export type HistoricoUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    userId: string
    createdAt?: Date | string
  }

  export type HistoricoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHistoricosNestedInput
  }

  export type HistoricoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoCreateManyInput = {
    id?: string
    title: string
    description: string
    userId: string
    createdAt?: Date | string
  }

  export type HistoricoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutFavoritosInput
    anime?: AnimesCreateNestedOneWithoutFavoritosInput
    manga?: MangasCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateInput = {
    id?: string
    userId: string
    animeId?: string | null
    mangaId?: string | null
  }

  export type FavoritoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFavoritosNestedInput
    anime?: AnimesUpdateOneWithoutFavoritosNestedInput
    manga?: MangasUpdateOneWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    animeId?: NullableStringFieldUpdateOperationsInput | string | null
    mangaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoritoCreateManyInput = {
    id?: string
    userId: string
    animeId?: string | null
    mangaId?: string | null
  }

  export type FavoritoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    animeId?: NullableStringFieldUpdateOperationsInput | string | null
    mangaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComentarioCreateInput = {
    id?: string
    texto: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutComentariosInput
    anime?: AnimesCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: string
    texto: string
    createdAt?: Date | string
    userId: string
    animeId?: string | null
  }

  export type ComentarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutComentariosNestedInput
    anime?: AnimesUpdateOneWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    animeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComentarioCreateManyInput = {
    id?: string
    texto: string
    createdAt?: Date | string
    userId: string
    animeId?: string | null
  }

  export type ComentarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    animeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneroCreateInput = {
    id?: string
    nome: string
    animes?: AnimesCreateNestedManyWithoutGenerosInput
    mangas?: MangasCreateNestedManyWithoutGenerosInput
  }

  export type GeneroUncheckedCreateInput = {
    id?: string
    nome: string
    animes?: AnimesUncheckedCreateNestedManyWithoutGenerosInput
    mangas?: MangasUncheckedCreateNestedManyWithoutGenerosInput
  }

  export type GeneroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    animes?: AnimesUpdateManyWithoutGenerosNestedInput
    mangas?: MangasUpdateManyWithoutGenerosNestedInput
  }

  export type GeneroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    animes?: AnimesUncheckedUpdateManyWithoutGenerosNestedInput
    mangas?: MangasUncheckedUpdateManyWithoutGenerosNestedInput
  }

  export type GeneroCreateManyInput = {
    id?: string
    nome: string
  }

  export type GeneroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type NotificacaoCreateInput = {
    id?: string
    mensagem: string
    lida?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateInput = {
    id?: string
    mensagem: string
    lida?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type NotificacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificacaoCreateManyInput = {
    id?: string
    mensagem: string
    lida?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type NotificacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TiposUsuarioOrderByRelevanceInput = {
    fields: TiposUsuarioOrderByRelevanceFieldEnum | TiposUsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TiposUsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    ativado?: SortOrder
  }

  export type TiposUsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    ativado?: SortOrder
  }

  export type TiposUsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    ativado?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TiposUsuarioNullableScalarRelationFilter = {
    is?: TiposUsuarioWhereInput | null
    isNot?: TiposUsuarioWhereInput | null
  }

  export type MangasListRelationFilter = {
    every?: MangasWhereInput
    some?: MangasWhereInput
    none?: MangasWhereInput
  }

  export type AnimesListRelationFilter = {
    every?: AnimesWhereInput
    some?: AnimesWhereInput
    none?: AnimesWhereInput
  }

  export type HistoricoListRelationFilter = {
    every?: HistoricoWhereInput
    some?: HistoricoWhereInput
    none?: HistoricoWhereInput
  }

  export type FavoritoListRelationFilter = {
    every?: FavoritoWhereInput
    some?: FavoritoWhereInput
    none?: FavoritoWhereInput
  }

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput
    some?: ComentarioWhereInput
    none?: ComentarioWhereInput
  }

  export type NotificacaoListRelationFilter = {
    every?: NotificacaoWhereInput
    some?: NotificacaoWhereInput
    none?: NotificacaoWhereInput
  }

  export type MangasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    ativado?: SortOrder
    tipoUsuarioId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    ativado?: SortOrder
    tipoUsuarioId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    ativado?: SortOrder
    tipoUsuarioId?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GeneroListRelationFilter = {
    every?: GeneroWhereInput
    some?: GeneroWhereInput
    none?: GeneroWhereInput
  }

  export type GeneroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MangasOrderByRelevanceInput = {
    fields: MangasOrderByRelevanceFieldEnum | MangasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MangasCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MangasMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MangasMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AnimesOrderByRelevanceInput = {
    fields: AnimesOrderByRelevanceFieldEnum | AnimesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AnimesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    episodios?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimesAvgOrderByAggregateInput = {
    episodios?: SortOrder
  }

  export type AnimesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    episodios?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    episodios?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimesSumOrderByAggregateInput = {
    episodios?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type HistoricoOrderByRelevanceInput = {
    fields: HistoricoOrderByRelevanceFieldEnum | HistoricoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HistoricoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type HistoricoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type HistoricoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnimesNullableScalarRelationFilter = {
    is?: AnimesWhereInput | null
    isNot?: AnimesWhereInput | null
  }

  export type MangasNullableScalarRelationFilter = {
    is?: MangasWhereInput | null
    isNot?: MangasWhereInput | null
  }

  export type FavoritoOrderByRelevanceInput = {
    fields: FavoritoOrderByRelevanceFieldEnum | FavoritoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FavoritoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    animeId?: SortOrder
    mangaId?: SortOrder
  }

  export type FavoritoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    animeId?: SortOrder
    mangaId?: SortOrder
  }

  export type FavoritoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    animeId?: SortOrder
    mangaId?: SortOrder
  }

  export type ComentarioOrderByRelevanceInput = {
    fields: ComentarioOrderByRelevanceFieldEnum | ComentarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    animeId?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    animeId?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    animeId?: SortOrder
  }

  export type GeneroOrderByRelevanceInput = {
    fields: GeneroOrderByRelevanceFieldEnum | GeneroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GeneroCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type GeneroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type GeneroMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type NotificacaoOrderByRelevanceInput = {
    fields: NotificacaoOrderByRelevanceFieldEnum | NotificacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type UserCreateNestedManyWithoutTipoUsuarioInput = {
    create?: XOR<UserCreateWithoutTipoUsuarioInput, UserUncheckedCreateWithoutTipoUsuarioInput> | UserCreateWithoutTipoUsuarioInput[] | UserUncheckedCreateWithoutTipoUsuarioInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTipoUsuarioInput | UserCreateOrConnectWithoutTipoUsuarioInput[]
    createMany?: UserCreateManyTipoUsuarioInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTipoUsuarioInput = {
    create?: XOR<UserCreateWithoutTipoUsuarioInput, UserUncheckedCreateWithoutTipoUsuarioInput> | UserCreateWithoutTipoUsuarioInput[] | UserUncheckedCreateWithoutTipoUsuarioInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTipoUsuarioInput | UserCreateOrConnectWithoutTipoUsuarioInput[]
    createMany?: UserCreateManyTipoUsuarioInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateManyWithoutTipoUsuarioNestedInput = {
    create?: XOR<UserCreateWithoutTipoUsuarioInput, UserUncheckedCreateWithoutTipoUsuarioInput> | UserCreateWithoutTipoUsuarioInput[] | UserUncheckedCreateWithoutTipoUsuarioInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTipoUsuarioInput | UserCreateOrConnectWithoutTipoUsuarioInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTipoUsuarioInput | UserUpsertWithWhereUniqueWithoutTipoUsuarioInput[]
    createMany?: UserCreateManyTipoUsuarioInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTipoUsuarioInput | UserUpdateWithWhereUniqueWithoutTipoUsuarioInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTipoUsuarioInput | UserUpdateManyWithWhereWithoutTipoUsuarioInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTipoUsuarioNestedInput = {
    create?: XOR<UserCreateWithoutTipoUsuarioInput, UserUncheckedCreateWithoutTipoUsuarioInput> | UserCreateWithoutTipoUsuarioInput[] | UserUncheckedCreateWithoutTipoUsuarioInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTipoUsuarioInput | UserCreateOrConnectWithoutTipoUsuarioInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTipoUsuarioInput | UserUpsertWithWhereUniqueWithoutTipoUsuarioInput[]
    createMany?: UserCreateManyTipoUsuarioInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTipoUsuarioInput | UserUpdateWithWhereUniqueWithoutTipoUsuarioInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTipoUsuarioInput | UserUpdateManyWithWhereWithoutTipoUsuarioInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TiposUsuarioCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<TiposUsuarioCreateWithoutUsuariosInput, TiposUsuarioUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: TiposUsuarioCreateOrConnectWithoutUsuariosInput
    connect?: TiposUsuarioWhereUniqueInput
  }

  export type MangasCreateNestedManyWithoutUserInput = {
    create?: XOR<MangasCreateWithoutUserInput, MangasUncheckedCreateWithoutUserInput> | MangasCreateWithoutUserInput[] | MangasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MangasCreateOrConnectWithoutUserInput | MangasCreateOrConnectWithoutUserInput[]
    createMany?: MangasCreateManyUserInputEnvelope
    connect?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
  }

  export type AnimesCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimesCreateWithoutUserInput, AnimesUncheckedCreateWithoutUserInput> | AnimesCreateWithoutUserInput[] | AnimesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimesCreateOrConnectWithoutUserInput | AnimesCreateOrConnectWithoutUserInput[]
    createMany?: AnimesCreateManyUserInputEnvelope
    connect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
  }

  export type HistoricoCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoricoCreateWithoutUserInput, HistoricoUncheckedCreateWithoutUserInput> | HistoricoCreateWithoutUserInput[] | HistoricoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutUserInput | HistoricoCreateOrConnectWithoutUserInput[]
    createMany?: HistoricoCreateManyUserInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput> | FavoritoCreateWithoutUserInput[] | FavoritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUserInput | FavoritoCreateOrConnectWithoutUserInput[]
    createMany?: FavoritoCreateManyUserInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutUserInput = {
    create?: XOR<ComentarioCreateWithoutUserInput, ComentarioUncheckedCreateWithoutUserInput> | ComentarioCreateWithoutUserInput[] | ComentarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUserInput | ComentarioCreateOrConnectWithoutUserInput[]
    createMany?: ComentarioCreateManyUserInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type NotificacaoCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput> | NotificacaoCreateWithoutUserInput[] | NotificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUserInput | NotificacaoCreateOrConnectWithoutUserInput[]
    createMany?: NotificacaoCreateManyUserInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type MangasUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MangasCreateWithoutUserInput, MangasUncheckedCreateWithoutUserInput> | MangasCreateWithoutUserInput[] | MangasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MangasCreateOrConnectWithoutUserInput | MangasCreateOrConnectWithoutUserInput[]
    createMany?: MangasCreateManyUserInputEnvelope
    connect?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
  }

  export type AnimesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimesCreateWithoutUserInput, AnimesUncheckedCreateWithoutUserInput> | AnimesCreateWithoutUserInput[] | AnimesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimesCreateOrConnectWithoutUserInput | AnimesCreateOrConnectWithoutUserInput[]
    createMany?: AnimesCreateManyUserInputEnvelope
    connect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
  }

  export type HistoricoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoricoCreateWithoutUserInput, HistoricoUncheckedCreateWithoutUserInput> | HistoricoCreateWithoutUserInput[] | HistoricoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutUserInput | HistoricoCreateOrConnectWithoutUserInput[]
    createMany?: HistoricoCreateManyUserInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput> | FavoritoCreateWithoutUserInput[] | FavoritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUserInput | FavoritoCreateOrConnectWithoutUserInput[]
    createMany?: FavoritoCreateManyUserInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ComentarioCreateWithoutUserInput, ComentarioUncheckedCreateWithoutUserInput> | ComentarioCreateWithoutUserInput[] | ComentarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUserInput | ComentarioCreateOrConnectWithoutUserInput[]
    createMany?: ComentarioCreateManyUserInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput> | NotificacaoCreateWithoutUserInput[] | NotificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUserInput | NotificacaoCreateOrConnectWithoutUserInput[]
    createMany?: NotificacaoCreateManyUserInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type TiposUsuarioUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<TiposUsuarioCreateWithoutUsuariosInput, TiposUsuarioUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: TiposUsuarioCreateOrConnectWithoutUsuariosInput
    upsert?: TiposUsuarioUpsertWithoutUsuariosInput
    disconnect?: TiposUsuarioWhereInput | boolean
    delete?: TiposUsuarioWhereInput | boolean
    connect?: TiposUsuarioWhereUniqueInput
    update?: XOR<XOR<TiposUsuarioUpdateToOneWithWhereWithoutUsuariosInput, TiposUsuarioUpdateWithoutUsuariosInput>, TiposUsuarioUncheckedUpdateWithoutUsuariosInput>
  }

  export type MangasUpdateManyWithoutUserNestedInput = {
    create?: XOR<MangasCreateWithoutUserInput, MangasUncheckedCreateWithoutUserInput> | MangasCreateWithoutUserInput[] | MangasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MangasCreateOrConnectWithoutUserInput | MangasCreateOrConnectWithoutUserInput[]
    upsert?: MangasUpsertWithWhereUniqueWithoutUserInput | MangasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MangasCreateManyUserInputEnvelope
    set?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    disconnect?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    delete?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    connect?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    update?: MangasUpdateWithWhereUniqueWithoutUserInput | MangasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MangasUpdateManyWithWhereWithoutUserInput | MangasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MangasScalarWhereInput | MangasScalarWhereInput[]
  }

  export type AnimesUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimesCreateWithoutUserInput, AnimesUncheckedCreateWithoutUserInput> | AnimesCreateWithoutUserInput[] | AnimesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimesCreateOrConnectWithoutUserInput | AnimesCreateOrConnectWithoutUserInput[]
    upsert?: AnimesUpsertWithWhereUniqueWithoutUserInput | AnimesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimesCreateManyUserInputEnvelope
    set?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    disconnect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    delete?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    connect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    update?: AnimesUpdateWithWhereUniqueWithoutUserInput | AnimesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimesUpdateManyWithWhereWithoutUserInput | AnimesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimesScalarWhereInput | AnimesScalarWhereInput[]
  }

  export type HistoricoUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoricoCreateWithoutUserInput, HistoricoUncheckedCreateWithoutUserInput> | HistoricoCreateWithoutUserInput[] | HistoricoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutUserInput | HistoricoCreateOrConnectWithoutUserInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutUserInput | HistoricoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoricoCreateManyUserInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutUserInput | HistoricoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutUserInput | HistoricoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput> | FavoritoCreateWithoutUserInput[] | FavoritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUserInput | FavoritoCreateOrConnectWithoutUserInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUserInput | FavoritoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoritoCreateManyUserInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUserInput | FavoritoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUserInput | FavoritoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComentarioCreateWithoutUserInput, ComentarioUncheckedCreateWithoutUserInput> | ComentarioCreateWithoutUserInput[] | ComentarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUserInput | ComentarioCreateOrConnectWithoutUserInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutUserInput | ComentarioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComentarioCreateManyUserInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutUserInput | ComentarioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutUserInput | ComentarioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type NotificacaoUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput> | NotificacaoCreateWithoutUserInput[] | NotificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUserInput | NotificacaoCreateOrConnectWithoutUserInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUserInput | NotificacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificacaoCreateManyUserInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUserInput | NotificacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUserInput | NotificacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type MangasUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MangasCreateWithoutUserInput, MangasUncheckedCreateWithoutUserInput> | MangasCreateWithoutUserInput[] | MangasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MangasCreateOrConnectWithoutUserInput | MangasCreateOrConnectWithoutUserInput[]
    upsert?: MangasUpsertWithWhereUniqueWithoutUserInput | MangasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MangasCreateManyUserInputEnvelope
    set?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    disconnect?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    delete?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    connect?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    update?: MangasUpdateWithWhereUniqueWithoutUserInput | MangasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MangasUpdateManyWithWhereWithoutUserInput | MangasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MangasScalarWhereInput | MangasScalarWhereInput[]
  }

  export type AnimesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimesCreateWithoutUserInput, AnimesUncheckedCreateWithoutUserInput> | AnimesCreateWithoutUserInput[] | AnimesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimesCreateOrConnectWithoutUserInput | AnimesCreateOrConnectWithoutUserInput[]
    upsert?: AnimesUpsertWithWhereUniqueWithoutUserInput | AnimesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimesCreateManyUserInputEnvelope
    set?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    disconnect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    delete?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    connect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    update?: AnimesUpdateWithWhereUniqueWithoutUserInput | AnimesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimesUpdateManyWithWhereWithoutUserInput | AnimesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimesScalarWhereInput | AnimesScalarWhereInput[]
  }

  export type HistoricoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoricoCreateWithoutUserInput, HistoricoUncheckedCreateWithoutUserInput> | HistoricoCreateWithoutUserInput[] | HistoricoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutUserInput | HistoricoCreateOrConnectWithoutUserInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutUserInput | HistoricoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoricoCreateManyUserInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutUserInput | HistoricoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutUserInput | HistoricoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput> | FavoritoCreateWithoutUserInput[] | FavoritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUserInput | FavoritoCreateOrConnectWithoutUserInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUserInput | FavoritoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoritoCreateManyUserInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUserInput | FavoritoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUserInput | FavoritoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComentarioCreateWithoutUserInput, ComentarioUncheckedCreateWithoutUserInput> | ComentarioCreateWithoutUserInput[] | ComentarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUserInput | ComentarioCreateOrConnectWithoutUserInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutUserInput | ComentarioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComentarioCreateManyUserInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutUserInput | ComentarioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutUserInput | ComentarioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type NotificacaoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput> | NotificacaoCreateWithoutUserInput[] | NotificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUserInput | NotificacaoCreateOrConnectWithoutUserInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUserInput | NotificacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificacaoCreateManyUserInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUserInput | NotificacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUserInput | NotificacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMangasInput = {
    create?: XOR<UserCreateWithoutMangasInput, UserUncheckedCreateWithoutMangasInput>
    connectOrCreate?: UserCreateOrConnectWithoutMangasInput
    connect?: UserWhereUniqueInput
  }

  export type GeneroCreateNestedManyWithoutMangasInput = {
    create?: XOR<GeneroCreateWithoutMangasInput, GeneroUncheckedCreateWithoutMangasInput> | GeneroCreateWithoutMangasInput[] | GeneroUncheckedCreateWithoutMangasInput[]
    connectOrCreate?: GeneroCreateOrConnectWithoutMangasInput | GeneroCreateOrConnectWithoutMangasInput[]
    connect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutMangaInput = {
    create?: XOR<FavoritoCreateWithoutMangaInput, FavoritoUncheckedCreateWithoutMangaInput> | FavoritoCreateWithoutMangaInput[] | FavoritoUncheckedCreateWithoutMangaInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutMangaInput | FavoritoCreateOrConnectWithoutMangaInput[]
    createMany?: FavoritoCreateManyMangaInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type GeneroUncheckedCreateNestedManyWithoutMangasInput = {
    create?: XOR<GeneroCreateWithoutMangasInput, GeneroUncheckedCreateWithoutMangasInput> | GeneroCreateWithoutMangasInput[] | GeneroUncheckedCreateWithoutMangasInput[]
    connectOrCreate?: GeneroCreateOrConnectWithoutMangasInput | GeneroCreateOrConnectWithoutMangasInput[]
    connect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutMangaInput = {
    create?: XOR<FavoritoCreateWithoutMangaInput, FavoritoUncheckedCreateWithoutMangaInput> | FavoritoCreateWithoutMangaInput[] | FavoritoUncheckedCreateWithoutMangaInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutMangaInput | FavoritoCreateOrConnectWithoutMangaInput[]
    createMany?: FavoritoCreateManyMangaInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutMangasNestedInput = {
    create?: XOR<UserCreateWithoutMangasInput, UserUncheckedCreateWithoutMangasInput>
    connectOrCreate?: UserCreateOrConnectWithoutMangasInput
    upsert?: UserUpsertWithoutMangasInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMangasInput, UserUpdateWithoutMangasInput>, UserUncheckedUpdateWithoutMangasInput>
  }

  export type GeneroUpdateManyWithoutMangasNestedInput = {
    create?: XOR<GeneroCreateWithoutMangasInput, GeneroUncheckedCreateWithoutMangasInput> | GeneroCreateWithoutMangasInput[] | GeneroUncheckedCreateWithoutMangasInput[]
    connectOrCreate?: GeneroCreateOrConnectWithoutMangasInput | GeneroCreateOrConnectWithoutMangasInput[]
    upsert?: GeneroUpsertWithWhereUniqueWithoutMangasInput | GeneroUpsertWithWhereUniqueWithoutMangasInput[]
    set?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    disconnect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    delete?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    connect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    update?: GeneroUpdateWithWhereUniqueWithoutMangasInput | GeneroUpdateWithWhereUniqueWithoutMangasInput[]
    updateMany?: GeneroUpdateManyWithWhereWithoutMangasInput | GeneroUpdateManyWithWhereWithoutMangasInput[]
    deleteMany?: GeneroScalarWhereInput | GeneroScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutMangaNestedInput = {
    create?: XOR<FavoritoCreateWithoutMangaInput, FavoritoUncheckedCreateWithoutMangaInput> | FavoritoCreateWithoutMangaInput[] | FavoritoUncheckedCreateWithoutMangaInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutMangaInput | FavoritoCreateOrConnectWithoutMangaInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutMangaInput | FavoritoUpsertWithWhereUniqueWithoutMangaInput[]
    createMany?: FavoritoCreateManyMangaInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutMangaInput | FavoritoUpdateWithWhereUniqueWithoutMangaInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutMangaInput | FavoritoUpdateManyWithWhereWithoutMangaInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type GeneroUncheckedUpdateManyWithoutMangasNestedInput = {
    create?: XOR<GeneroCreateWithoutMangasInput, GeneroUncheckedCreateWithoutMangasInput> | GeneroCreateWithoutMangasInput[] | GeneroUncheckedCreateWithoutMangasInput[]
    connectOrCreate?: GeneroCreateOrConnectWithoutMangasInput | GeneroCreateOrConnectWithoutMangasInput[]
    upsert?: GeneroUpsertWithWhereUniqueWithoutMangasInput | GeneroUpsertWithWhereUniqueWithoutMangasInput[]
    set?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    disconnect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    delete?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    connect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    update?: GeneroUpdateWithWhereUniqueWithoutMangasInput | GeneroUpdateWithWhereUniqueWithoutMangasInput[]
    updateMany?: GeneroUpdateManyWithWhereWithoutMangasInput | GeneroUpdateManyWithWhereWithoutMangasInput[]
    deleteMany?: GeneroScalarWhereInput | GeneroScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutMangaNestedInput = {
    create?: XOR<FavoritoCreateWithoutMangaInput, FavoritoUncheckedCreateWithoutMangaInput> | FavoritoCreateWithoutMangaInput[] | FavoritoUncheckedCreateWithoutMangaInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutMangaInput | FavoritoCreateOrConnectWithoutMangaInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutMangaInput | FavoritoUpsertWithWhereUniqueWithoutMangaInput[]
    createMany?: FavoritoCreateManyMangaInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutMangaInput | FavoritoUpdateWithWhereUniqueWithoutMangaInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutMangaInput | FavoritoUpdateManyWithWhereWithoutMangaInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAnimesInput = {
    create?: XOR<UserCreateWithoutAnimesInput, UserUncheckedCreateWithoutAnimesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimesInput
    connect?: UserWhereUniqueInput
  }

  export type GeneroCreateNestedManyWithoutAnimesInput = {
    create?: XOR<GeneroCreateWithoutAnimesInput, GeneroUncheckedCreateWithoutAnimesInput> | GeneroCreateWithoutAnimesInput[] | GeneroUncheckedCreateWithoutAnimesInput[]
    connectOrCreate?: GeneroCreateOrConnectWithoutAnimesInput | GeneroCreateOrConnectWithoutAnimesInput[]
    connect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutAnimeInput = {
    create?: XOR<FavoritoCreateWithoutAnimeInput, FavoritoUncheckedCreateWithoutAnimeInput> | FavoritoCreateWithoutAnimeInput[] | FavoritoUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutAnimeInput | FavoritoCreateOrConnectWithoutAnimeInput[]
    createMany?: FavoritoCreateManyAnimeInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutAnimeInput = {
    create?: XOR<ComentarioCreateWithoutAnimeInput, ComentarioUncheckedCreateWithoutAnimeInput> | ComentarioCreateWithoutAnimeInput[] | ComentarioUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAnimeInput | ComentarioCreateOrConnectWithoutAnimeInput[]
    createMany?: ComentarioCreateManyAnimeInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type GeneroUncheckedCreateNestedManyWithoutAnimesInput = {
    create?: XOR<GeneroCreateWithoutAnimesInput, GeneroUncheckedCreateWithoutAnimesInput> | GeneroCreateWithoutAnimesInput[] | GeneroUncheckedCreateWithoutAnimesInput[]
    connectOrCreate?: GeneroCreateOrConnectWithoutAnimesInput | GeneroCreateOrConnectWithoutAnimesInput[]
    connect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<FavoritoCreateWithoutAnimeInput, FavoritoUncheckedCreateWithoutAnimeInput> | FavoritoCreateWithoutAnimeInput[] | FavoritoUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutAnimeInput | FavoritoCreateOrConnectWithoutAnimeInput[]
    createMany?: FavoritoCreateManyAnimeInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<ComentarioCreateWithoutAnimeInput, ComentarioUncheckedCreateWithoutAnimeInput> | ComentarioCreateWithoutAnimeInput[] | ComentarioUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAnimeInput | ComentarioCreateOrConnectWithoutAnimeInput[]
    createMany?: ComentarioCreateManyAnimeInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAnimesNestedInput = {
    create?: XOR<UserCreateWithoutAnimesInput, UserUncheckedCreateWithoutAnimesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimesInput
    upsert?: UserUpsertWithoutAnimesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnimesInput, UserUpdateWithoutAnimesInput>, UserUncheckedUpdateWithoutAnimesInput>
  }

  export type GeneroUpdateManyWithoutAnimesNestedInput = {
    create?: XOR<GeneroCreateWithoutAnimesInput, GeneroUncheckedCreateWithoutAnimesInput> | GeneroCreateWithoutAnimesInput[] | GeneroUncheckedCreateWithoutAnimesInput[]
    connectOrCreate?: GeneroCreateOrConnectWithoutAnimesInput | GeneroCreateOrConnectWithoutAnimesInput[]
    upsert?: GeneroUpsertWithWhereUniqueWithoutAnimesInput | GeneroUpsertWithWhereUniqueWithoutAnimesInput[]
    set?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    disconnect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    delete?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    connect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    update?: GeneroUpdateWithWhereUniqueWithoutAnimesInput | GeneroUpdateWithWhereUniqueWithoutAnimesInput[]
    updateMany?: GeneroUpdateManyWithWhereWithoutAnimesInput | GeneroUpdateManyWithWhereWithoutAnimesInput[]
    deleteMany?: GeneroScalarWhereInput | GeneroScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<FavoritoCreateWithoutAnimeInput, FavoritoUncheckedCreateWithoutAnimeInput> | FavoritoCreateWithoutAnimeInput[] | FavoritoUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutAnimeInput | FavoritoCreateOrConnectWithoutAnimeInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutAnimeInput | FavoritoUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: FavoritoCreateManyAnimeInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutAnimeInput | FavoritoUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutAnimeInput | FavoritoUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<ComentarioCreateWithoutAnimeInput, ComentarioUncheckedCreateWithoutAnimeInput> | ComentarioCreateWithoutAnimeInput[] | ComentarioUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAnimeInput | ComentarioCreateOrConnectWithoutAnimeInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutAnimeInput | ComentarioUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: ComentarioCreateManyAnimeInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutAnimeInput | ComentarioUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutAnimeInput | ComentarioUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type GeneroUncheckedUpdateManyWithoutAnimesNestedInput = {
    create?: XOR<GeneroCreateWithoutAnimesInput, GeneroUncheckedCreateWithoutAnimesInput> | GeneroCreateWithoutAnimesInput[] | GeneroUncheckedCreateWithoutAnimesInput[]
    connectOrCreate?: GeneroCreateOrConnectWithoutAnimesInput | GeneroCreateOrConnectWithoutAnimesInput[]
    upsert?: GeneroUpsertWithWhereUniqueWithoutAnimesInput | GeneroUpsertWithWhereUniqueWithoutAnimesInput[]
    set?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    disconnect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    delete?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    connect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    update?: GeneroUpdateWithWhereUniqueWithoutAnimesInput | GeneroUpdateWithWhereUniqueWithoutAnimesInput[]
    updateMany?: GeneroUpdateManyWithWhereWithoutAnimesInput | GeneroUpdateManyWithWhereWithoutAnimesInput[]
    deleteMany?: GeneroScalarWhereInput | GeneroScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<FavoritoCreateWithoutAnimeInput, FavoritoUncheckedCreateWithoutAnimeInput> | FavoritoCreateWithoutAnimeInput[] | FavoritoUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutAnimeInput | FavoritoCreateOrConnectWithoutAnimeInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutAnimeInput | FavoritoUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: FavoritoCreateManyAnimeInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutAnimeInput | FavoritoUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutAnimeInput | FavoritoUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<ComentarioCreateWithoutAnimeInput, ComentarioUncheckedCreateWithoutAnimeInput> | ComentarioCreateWithoutAnimeInput[] | ComentarioUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAnimeInput | ComentarioCreateOrConnectWithoutAnimeInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutAnimeInput | ComentarioUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: ComentarioCreateManyAnimeInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutAnimeInput | ComentarioUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutAnimeInput | ComentarioUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHistoricosInput = {
    create?: XOR<UserCreateWithoutHistoricosInput, UserUncheckedCreateWithoutHistoricosInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoricosInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHistoricosNestedInput = {
    create?: XOR<UserCreateWithoutHistoricosInput, UserUncheckedCreateWithoutHistoricosInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoricosInput
    upsert?: UserUpsertWithoutHistoricosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoricosInput, UserUpdateWithoutHistoricosInput>, UserUncheckedUpdateWithoutHistoricosInput>
  }

  export type UserCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<UserCreateWithoutFavoritosInput, UserUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritosInput
    connect?: UserWhereUniqueInput
  }

  export type AnimesCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<AnimesCreateWithoutFavoritosInput, AnimesUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: AnimesCreateOrConnectWithoutFavoritosInput
    connect?: AnimesWhereUniqueInput
  }

  export type MangasCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<MangasCreateWithoutFavoritosInput, MangasUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: MangasCreateOrConnectWithoutFavoritosInput
    connect?: MangasWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<UserCreateWithoutFavoritosInput, UserUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritosInput
    upsert?: UserUpsertWithoutFavoritosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritosInput, UserUpdateWithoutFavoritosInput>, UserUncheckedUpdateWithoutFavoritosInput>
  }

  export type AnimesUpdateOneWithoutFavoritosNestedInput = {
    create?: XOR<AnimesCreateWithoutFavoritosInput, AnimesUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: AnimesCreateOrConnectWithoutFavoritosInput
    upsert?: AnimesUpsertWithoutFavoritosInput
    disconnect?: AnimesWhereInput | boolean
    delete?: AnimesWhereInput | boolean
    connect?: AnimesWhereUniqueInput
    update?: XOR<XOR<AnimesUpdateToOneWithWhereWithoutFavoritosInput, AnimesUpdateWithoutFavoritosInput>, AnimesUncheckedUpdateWithoutFavoritosInput>
  }

  export type MangasUpdateOneWithoutFavoritosNestedInput = {
    create?: XOR<MangasCreateWithoutFavoritosInput, MangasUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: MangasCreateOrConnectWithoutFavoritosInput
    upsert?: MangasUpsertWithoutFavoritosInput
    disconnect?: MangasWhereInput | boolean
    delete?: MangasWhereInput | boolean
    connect?: MangasWhereUniqueInput
    update?: XOR<XOR<MangasUpdateToOneWithWhereWithoutFavoritosInput, MangasUpdateWithoutFavoritosInput>, MangasUncheckedUpdateWithoutFavoritosInput>
  }

  export type UserCreateNestedOneWithoutComentariosInput = {
    create?: XOR<UserCreateWithoutComentariosInput, UserUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UserCreateOrConnectWithoutComentariosInput
    connect?: UserWhereUniqueInput
  }

  export type AnimesCreateNestedOneWithoutComentariosInput = {
    create?: XOR<AnimesCreateWithoutComentariosInput, AnimesUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: AnimesCreateOrConnectWithoutComentariosInput
    connect?: AnimesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<UserCreateWithoutComentariosInput, UserUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UserCreateOrConnectWithoutComentariosInput
    upsert?: UserUpsertWithoutComentariosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutComentariosInput, UserUpdateWithoutComentariosInput>, UserUncheckedUpdateWithoutComentariosInput>
  }

  export type AnimesUpdateOneWithoutComentariosNestedInput = {
    create?: XOR<AnimesCreateWithoutComentariosInput, AnimesUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: AnimesCreateOrConnectWithoutComentariosInput
    upsert?: AnimesUpsertWithoutComentariosInput
    disconnect?: AnimesWhereInput | boolean
    delete?: AnimesWhereInput | boolean
    connect?: AnimesWhereUniqueInput
    update?: XOR<XOR<AnimesUpdateToOneWithWhereWithoutComentariosInput, AnimesUpdateWithoutComentariosInput>, AnimesUncheckedUpdateWithoutComentariosInput>
  }

  export type AnimesCreateNestedManyWithoutGenerosInput = {
    create?: XOR<AnimesCreateWithoutGenerosInput, AnimesUncheckedCreateWithoutGenerosInput> | AnimesCreateWithoutGenerosInput[] | AnimesUncheckedCreateWithoutGenerosInput[]
    connectOrCreate?: AnimesCreateOrConnectWithoutGenerosInput | AnimesCreateOrConnectWithoutGenerosInput[]
    connect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
  }

  export type MangasCreateNestedManyWithoutGenerosInput = {
    create?: XOR<MangasCreateWithoutGenerosInput, MangasUncheckedCreateWithoutGenerosInput> | MangasCreateWithoutGenerosInput[] | MangasUncheckedCreateWithoutGenerosInput[]
    connectOrCreate?: MangasCreateOrConnectWithoutGenerosInput | MangasCreateOrConnectWithoutGenerosInput[]
    connect?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
  }

  export type AnimesUncheckedCreateNestedManyWithoutGenerosInput = {
    create?: XOR<AnimesCreateWithoutGenerosInput, AnimesUncheckedCreateWithoutGenerosInput> | AnimesCreateWithoutGenerosInput[] | AnimesUncheckedCreateWithoutGenerosInput[]
    connectOrCreate?: AnimesCreateOrConnectWithoutGenerosInput | AnimesCreateOrConnectWithoutGenerosInput[]
    connect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
  }

  export type MangasUncheckedCreateNestedManyWithoutGenerosInput = {
    create?: XOR<MangasCreateWithoutGenerosInput, MangasUncheckedCreateWithoutGenerosInput> | MangasCreateWithoutGenerosInput[] | MangasUncheckedCreateWithoutGenerosInput[]
    connectOrCreate?: MangasCreateOrConnectWithoutGenerosInput | MangasCreateOrConnectWithoutGenerosInput[]
    connect?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
  }

  export type AnimesUpdateManyWithoutGenerosNestedInput = {
    create?: XOR<AnimesCreateWithoutGenerosInput, AnimesUncheckedCreateWithoutGenerosInput> | AnimesCreateWithoutGenerosInput[] | AnimesUncheckedCreateWithoutGenerosInput[]
    connectOrCreate?: AnimesCreateOrConnectWithoutGenerosInput | AnimesCreateOrConnectWithoutGenerosInput[]
    upsert?: AnimesUpsertWithWhereUniqueWithoutGenerosInput | AnimesUpsertWithWhereUniqueWithoutGenerosInput[]
    set?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    disconnect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    delete?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    connect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    update?: AnimesUpdateWithWhereUniqueWithoutGenerosInput | AnimesUpdateWithWhereUniqueWithoutGenerosInput[]
    updateMany?: AnimesUpdateManyWithWhereWithoutGenerosInput | AnimesUpdateManyWithWhereWithoutGenerosInput[]
    deleteMany?: AnimesScalarWhereInput | AnimesScalarWhereInput[]
  }

  export type MangasUpdateManyWithoutGenerosNestedInput = {
    create?: XOR<MangasCreateWithoutGenerosInput, MangasUncheckedCreateWithoutGenerosInput> | MangasCreateWithoutGenerosInput[] | MangasUncheckedCreateWithoutGenerosInput[]
    connectOrCreate?: MangasCreateOrConnectWithoutGenerosInput | MangasCreateOrConnectWithoutGenerosInput[]
    upsert?: MangasUpsertWithWhereUniqueWithoutGenerosInput | MangasUpsertWithWhereUniqueWithoutGenerosInput[]
    set?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    disconnect?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    delete?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    connect?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    update?: MangasUpdateWithWhereUniqueWithoutGenerosInput | MangasUpdateWithWhereUniqueWithoutGenerosInput[]
    updateMany?: MangasUpdateManyWithWhereWithoutGenerosInput | MangasUpdateManyWithWhereWithoutGenerosInput[]
    deleteMany?: MangasScalarWhereInput | MangasScalarWhereInput[]
  }

  export type AnimesUncheckedUpdateManyWithoutGenerosNestedInput = {
    create?: XOR<AnimesCreateWithoutGenerosInput, AnimesUncheckedCreateWithoutGenerosInput> | AnimesCreateWithoutGenerosInput[] | AnimesUncheckedCreateWithoutGenerosInput[]
    connectOrCreate?: AnimesCreateOrConnectWithoutGenerosInput | AnimesCreateOrConnectWithoutGenerosInput[]
    upsert?: AnimesUpsertWithWhereUniqueWithoutGenerosInput | AnimesUpsertWithWhereUniqueWithoutGenerosInput[]
    set?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    disconnect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    delete?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    connect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    update?: AnimesUpdateWithWhereUniqueWithoutGenerosInput | AnimesUpdateWithWhereUniqueWithoutGenerosInput[]
    updateMany?: AnimesUpdateManyWithWhereWithoutGenerosInput | AnimesUpdateManyWithWhereWithoutGenerosInput[]
    deleteMany?: AnimesScalarWhereInput | AnimesScalarWhereInput[]
  }

  export type MangasUncheckedUpdateManyWithoutGenerosNestedInput = {
    create?: XOR<MangasCreateWithoutGenerosInput, MangasUncheckedCreateWithoutGenerosInput> | MangasCreateWithoutGenerosInput[] | MangasUncheckedCreateWithoutGenerosInput[]
    connectOrCreate?: MangasCreateOrConnectWithoutGenerosInput | MangasCreateOrConnectWithoutGenerosInput[]
    upsert?: MangasUpsertWithWhereUniqueWithoutGenerosInput | MangasUpsertWithWhereUniqueWithoutGenerosInput[]
    set?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    disconnect?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    delete?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    connect?: MangasWhereUniqueInput | MangasWhereUniqueInput[]
    update?: MangasUpdateWithWhereUniqueWithoutGenerosInput | MangasUpdateWithWhereUniqueWithoutGenerosInput[]
    updateMany?: MangasUpdateManyWithWhereWithoutGenerosInput | MangasUpdateManyWithWhereWithoutGenerosInput[]
    deleteMany?: MangasScalarWhereInput | MangasScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificacoesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificacoesNestedInput = {
    create?: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificacoesInput
    upsert?: UserUpsertWithoutNotificacoesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificacoesInput, UserUpdateWithoutNotificacoesInput>, UserUncheckedUpdateWithoutNotificacoesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserCreateWithoutTipoUsuarioInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    mangas?: MangasCreateNestedManyWithoutUserInput
    animes?: AnimesCreateNestedManyWithoutUserInput
    historicos?: HistoricoCreateNestedManyWithoutUserInput
    favoritos?: FavoritoCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTipoUsuarioInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    mangas?: MangasUncheckedCreateNestedManyWithoutUserInput
    animes?: AnimesUncheckedCreateNestedManyWithoutUserInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutUserInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTipoUsuarioInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTipoUsuarioInput, UserUncheckedCreateWithoutTipoUsuarioInput>
  }

  export type UserCreateManyTipoUsuarioInputEnvelope = {
    data: UserCreateManyTipoUsuarioInput | UserCreateManyTipoUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTipoUsuarioInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTipoUsuarioInput, UserUncheckedUpdateWithoutTipoUsuarioInput>
    create: XOR<UserCreateWithoutTipoUsuarioInput, UserUncheckedCreateWithoutTipoUsuarioInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTipoUsuarioInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTipoUsuarioInput, UserUncheckedUpdateWithoutTipoUsuarioInput>
  }

  export type UserUpdateManyWithWhereWithoutTipoUsuarioInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTipoUsuarioInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    ativado?: BoolFilter<"User"> | boolean
    tipoUsuarioId?: StringNullableFilter<"User"> | string | null
  }

  export type TiposUsuarioCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
  }

  export type TiposUsuarioUncheckedCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
  }

  export type TiposUsuarioCreateOrConnectWithoutUsuariosInput = {
    where: TiposUsuarioWhereUniqueInput
    create: XOR<TiposUsuarioCreateWithoutUsuariosInput, TiposUsuarioUncheckedCreateWithoutUsuariosInput>
  }

  export type MangasCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroCreateNestedManyWithoutMangasInput
    favoritos?: FavoritoCreateNestedManyWithoutMangaInput
  }

  export type MangasUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroUncheckedCreateNestedManyWithoutMangasInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutMangaInput
  }

  export type MangasCreateOrConnectWithoutUserInput = {
    where: MangasWhereUniqueInput
    create: XOR<MangasCreateWithoutUserInput, MangasUncheckedCreateWithoutUserInput>
  }

  export type MangasCreateManyUserInputEnvelope = {
    data: MangasCreateManyUserInput | MangasCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnimesCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    image: string
    episodios: number
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroCreateNestedManyWithoutAnimesInput
    favoritos?: FavoritoCreateNestedManyWithoutAnimeInput
    comentarios?: ComentarioCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    image: string
    episodios: number
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroUncheckedCreateNestedManyWithoutAnimesInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutAnimeInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimesCreateOrConnectWithoutUserInput = {
    where: AnimesWhereUniqueInput
    create: XOR<AnimesCreateWithoutUserInput, AnimesUncheckedCreateWithoutUserInput>
  }

  export type AnimesCreateManyUserInputEnvelope = {
    data: AnimesCreateManyUserInput | AnimesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
  }

  export type HistoricoUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
  }

  export type HistoricoCreateOrConnectWithoutUserInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutUserInput, HistoricoUncheckedCreateWithoutUserInput>
  }

  export type HistoricoCreateManyUserInputEnvelope = {
    data: HistoricoCreateManyUserInput | HistoricoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoritoCreateWithoutUserInput = {
    id?: string
    anime?: AnimesCreateNestedOneWithoutFavoritosInput
    manga?: MangasCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutUserInput = {
    id?: string
    animeId?: string | null
    mangaId?: string | null
  }

  export type FavoritoCreateOrConnectWithoutUserInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput>
  }

  export type FavoritoCreateManyUserInputEnvelope = {
    data: FavoritoCreateManyUserInput | FavoritoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutUserInput = {
    id?: string
    texto: string
    createdAt?: Date | string
    anime?: AnimesCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateWithoutUserInput = {
    id?: string
    texto: string
    createdAt?: Date | string
    animeId?: string | null
  }

  export type ComentarioCreateOrConnectWithoutUserInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutUserInput, ComentarioUncheckedCreateWithoutUserInput>
  }

  export type ComentarioCreateManyUserInputEnvelope = {
    data: ComentarioCreateManyUserInput | ComentarioCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificacaoCreateWithoutUserInput = {
    id?: string
    mensagem: string
    lida?: boolean
    createdAt?: Date | string
  }

  export type NotificacaoUncheckedCreateWithoutUserInput = {
    id?: string
    mensagem: string
    lida?: boolean
    createdAt?: Date | string
  }

  export type NotificacaoCreateOrConnectWithoutUserInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput>
  }

  export type NotificacaoCreateManyUserInputEnvelope = {
    data: NotificacaoCreateManyUserInput | NotificacaoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TiposUsuarioUpsertWithoutUsuariosInput = {
    update: XOR<TiposUsuarioUpdateWithoutUsuariosInput, TiposUsuarioUncheckedUpdateWithoutUsuariosInput>
    create: XOR<TiposUsuarioCreateWithoutUsuariosInput, TiposUsuarioUncheckedCreateWithoutUsuariosInput>
    where?: TiposUsuarioWhereInput
  }

  export type TiposUsuarioUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: TiposUsuarioWhereInput
    data: XOR<TiposUsuarioUpdateWithoutUsuariosInput, TiposUsuarioUncheckedUpdateWithoutUsuariosInput>
  }

  export type TiposUsuarioUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TiposUsuarioUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MangasUpsertWithWhereUniqueWithoutUserInput = {
    where: MangasWhereUniqueInput
    update: XOR<MangasUpdateWithoutUserInput, MangasUncheckedUpdateWithoutUserInput>
    create: XOR<MangasCreateWithoutUserInput, MangasUncheckedCreateWithoutUserInput>
  }

  export type MangasUpdateWithWhereUniqueWithoutUserInput = {
    where: MangasWhereUniqueInput
    data: XOR<MangasUpdateWithoutUserInput, MangasUncheckedUpdateWithoutUserInput>
  }

  export type MangasUpdateManyWithWhereWithoutUserInput = {
    where: MangasScalarWhereInput
    data: XOR<MangasUpdateManyMutationInput, MangasUncheckedUpdateManyWithoutUserInput>
  }

  export type MangasScalarWhereInput = {
    AND?: MangasScalarWhereInput | MangasScalarWhereInput[]
    OR?: MangasScalarWhereInput[]
    NOT?: MangasScalarWhereInput | MangasScalarWhereInput[]
    id?: StringFilter<"Mangas"> | string
    title?: StringFilter<"Mangas"> | string
    description?: StringFilter<"Mangas"> | string
    image?: StringFilter<"Mangas"> | string
    userId?: StringNullableFilter<"Mangas"> | string | null
    createdAt?: DateTimeFilter<"Mangas"> | Date | string
    updatedAt?: DateTimeFilter<"Mangas"> | Date | string
  }

  export type AnimesUpsertWithWhereUniqueWithoutUserInput = {
    where: AnimesWhereUniqueInput
    update: XOR<AnimesUpdateWithoutUserInput, AnimesUncheckedUpdateWithoutUserInput>
    create: XOR<AnimesCreateWithoutUserInput, AnimesUncheckedCreateWithoutUserInput>
  }

  export type AnimesUpdateWithWhereUniqueWithoutUserInput = {
    where: AnimesWhereUniqueInput
    data: XOR<AnimesUpdateWithoutUserInput, AnimesUncheckedUpdateWithoutUserInput>
  }

  export type AnimesUpdateManyWithWhereWithoutUserInput = {
    where: AnimesScalarWhereInput
    data: XOR<AnimesUpdateManyMutationInput, AnimesUncheckedUpdateManyWithoutUserInput>
  }

  export type AnimesScalarWhereInput = {
    AND?: AnimesScalarWhereInput | AnimesScalarWhereInput[]
    OR?: AnimesScalarWhereInput[]
    NOT?: AnimesScalarWhereInput | AnimesScalarWhereInput[]
    id?: StringFilter<"Animes"> | string
    title?: StringFilter<"Animes"> | string
    description?: StringFilter<"Animes"> | string
    image?: StringFilter<"Animes"> | string
    episodios?: IntFilter<"Animes"> | number
    userId?: StringFilter<"Animes"> | string
    createdAt?: DateTimeFilter<"Animes"> | Date | string
    updatedAt?: DateTimeFilter<"Animes"> | Date | string
  }

  export type HistoricoUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoricoWhereUniqueInput
    update: XOR<HistoricoUpdateWithoutUserInput, HistoricoUncheckedUpdateWithoutUserInput>
    create: XOR<HistoricoCreateWithoutUserInput, HistoricoUncheckedCreateWithoutUserInput>
  }

  export type HistoricoUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoricoWhereUniqueInput
    data: XOR<HistoricoUpdateWithoutUserInput, HistoricoUncheckedUpdateWithoutUserInput>
  }

  export type HistoricoUpdateManyWithWhereWithoutUserInput = {
    where: HistoricoScalarWhereInput
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyWithoutUserInput>
  }

  export type HistoricoScalarWhereInput = {
    AND?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
    OR?: HistoricoScalarWhereInput[]
    NOT?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
    id?: StringFilter<"Historico"> | string
    title?: StringFilter<"Historico"> | string
    description?: StringFilter<"Historico"> | string
    userId?: StringFilter<"Historico"> | string
    createdAt?: DateTimeFilter<"Historico"> | Date | string
  }

  export type FavoritoUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutUserInput, FavoritoUncheckedUpdateWithoutUserInput>
    create: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutUserInput, FavoritoUncheckedUpdateWithoutUserInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutUserInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoritoScalarWhereInput = {
    AND?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    OR?: FavoritoScalarWhereInput[]
    NOT?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    id?: StringFilter<"Favorito"> | string
    userId?: StringFilter<"Favorito"> | string
    animeId?: StringNullableFilter<"Favorito"> | string | null
    mangaId?: StringNullableFilter<"Favorito"> | string | null
  }

  export type ComentarioUpsertWithWhereUniqueWithoutUserInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutUserInput, ComentarioUncheckedUpdateWithoutUserInput>
    create: XOR<ComentarioCreateWithoutUserInput, ComentarioUncheckedCreateWithoutUserInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutUserInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutUserInput, ComentarioUncheckedUpdateWithoutUserInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutUserInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutUserInput>
  }

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    OR?: ComentarioScalarWhereInput[]
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    id?: StringFilter<"Comentario"> | string
    texto?: StringFilter<"Comentario"> | string
    createdAt?: DateTimeFilter<"Comentario"> | Date | string
    userId?: StringFilter<"Comentario"> | string
    animeId?: StringNullableFilter<"Comentario"> | string | null
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutUserInput, NotificacaoUncheckedUpdateWithoutUserInput>
    create: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutUserInput, NotificacaoUncheckedUpdateWithoutUserInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutUserInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificacaoScalarWhereInput = {
    AND?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    OR?: NotificacaoScalarWhereInput[]
    NOT?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    userId?: StringFilter<"Notificacao"> | string
  }

  export type UserCreateWithoutMangasInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuario?: TiposUsuarioCreateNestedOneWithoutUsuariosInput
    animes?: AnimesCreateNestedManyWithoutUserInput
    historicos?: HistoricoCreateNestedManyWithoutUserInput
    favoritos?: FavoritoCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMangasInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuarioId?: string | null
    animes?: AnimesUncheckedCreateNestedManyWithoutUserInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutUserInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMangasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMangasInput, UserUncheckedCreateWithoutMangasInput>
  }

  export type GeneroCreateWithoutMangasInput = {
    id?: string
    nome: string
    animes?: AnimesCreateNestedManyWithoutGenerosInput
  }

  export type GeneroUncheckedCreateWithoutMangasInput = {
    id?: string
    nome: string
    animes?: AnimesUncheckedCreateNestedManyWithoutGenerosInput
  }

  export type GeneroCreateOrConnectWithoutMangasInput = {
    where: GeneroWhereUniqueInput
    create: XOR<GeneroCreateWithoutMangasInput, GeneroUncheckedCreateWithoutMangasInput>
  }

  export type FavoritoCreateWithoutMangaInput = {
    id?: string
    user: UserCreateNestedOneWithoutFavoritosInput
    anime?: AnimesCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutMangaInput = {
    id?: string
    userId: string
    animeId?: string | null
  }

  export type FavoritoCreateOrConnectWithoutMangaInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutMangaInput, FavoritoUncheckedCreateWithoutMangaInput>
  }

  export type FavoritoCreateManyMangaInputEnvelope = {
    data: FavoritoCreateManyMangaInput | FavoritoCreateManyMangaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMangasInput = {
    update: XOR<UserUpdateWithoutMangasInput, UserUncheckedUpdateWithoutMangasInput>
    create: XOR<UserCreateWithoutMangasInput, UserUncheckedCreateWithoutMangasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMangasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMangasInput, UserUncheckedUpdateWithoutMangasInput>
  }

  export type UserUpdateWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuario?: TiposUsuarioUpdateOneWithoutUsuariosNestedInput
    animes?: AnimesUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    animes?: AnimesUncheckedUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GeneroUpsertWithWhereUniqueWithoutMangasInput = {
    where: GeneroWhereUniqueInput
    update: XOR<GeneroUpdateWithoutMangasInput, GeneroUncheckedUpdateWithoutMangasInput>
    create: XOR<GeneroCreateWithoutMangasInput, GeneroUncheckedCreateWithoutMangasInput>
  }

  export type GeneroUpdateWithWhereUniqueWithoutMangasInput = {
    where: GeneroWhereUniqueInput
    data: XOR<GeneroUpdateWithoutMangasInput, GeneroUncheckedUpdateWithoutMangasInput>
  }

  export type GeneroUpdateManyWithWhereWithoutMangasInput = {
    where: GeneroScalarWhereInput
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyWithoutMangasInput>
  }

  export type GeneroScalarWhereInput = {
    AND?: GeneroScalarWhereInput | GeneroScalarWhereInput[]
    OR?: GeneroScalarWhereInput[]
    NOT?: GeneroScalarWhereInput | GeneroScalarWhereInput[]
    id?: StringFilter<"Genero"> | string
    nome?: StringFilter<"Genero"> | string
  }

  export type FavoritoUpsertWithWhereUniqueWithoutMangaInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutMangaInput, FavoritoUncheckedUpdateWithoutMangaInput>
    create: XOR<FavoritoCreateWithoutMangaInput, FavoritoUncheckedCreateWithoutMangaInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutMangaInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutMangaInput, FavoritoUncheckedUpdateWithoutMangaInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutMangaInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutMangaInput>
  }

  export type UserCreateWithoutAnimesInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuario?: TiposUsuarioCreateNestedOneWithoutUsuariosInput
    mangas?: MangasCreateNestedManyWithoutUserInput
    historicos?: HistoricoCreateNestedManyWithoutUserInput
    favoritos?: FavoritoCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnimesInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuarioId?: string | null
    mangas?: MangasUncheckedCreateNestedManyWithoutUserInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutUserInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnimesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnimesInput, UserUncheckedCreateWithoutAnimesInput>
  }

  export type GeneroCreateWithoutAnimesInput = {
    id?: string
    nome: string
    mangas?: MangasCreateNestedManyWithoutGenerosInput
  }

  export type GeneroUncheckedCreateWithoutAnimesInput = {
    id?: string
    nome: string
    mangas?: MangasUncheckedCreateNestedManyWithoutGenerosInput
  }

  export type GeneroCreateOrConnectWithoutAnimesInput = {
    where: GeneroWhereUniqueInput
    create: XOR<GeneroCreateWithoutAnimesInput, GeneroUncheckedCreateWithoutAnimesInput>
  }

  export type FavoritoCreateWithoutAnimeInput = {
    id?: string
    user: UserCreateNestedOneWithoutFavoritosInput
    manga?: MangasCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutAnimeInput = {
    id?: string
    userId: string
    mangaId?: string | null
  }

  export type FavoritoCreateOrConnectWithoutAnimeInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutAnimeInput, FavoritoUncheckedCreateWithoutAnimeInput>
  }

  export type FavoritoCreateManyAnimeInputEnvelope = {
    data: FavoritoCreateManyAnimeInput | FavoritoCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutAnimeInput = {
    id?: string
    texto: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateWithoutAnimeInput = {
    id?: string
    texto: string
    createdAt?: Date | string
    userId: string
  }

  export type ComentarioCreateOrConnectWithoutAnimeInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutAnimeInput, ComentarioUncheckedCreateWithoutAnimeInput>
  }

  export type ComentarioCreateManyAnimeInputEnvelope = {
    data: ComentarioCreateManyAnimeInput | ComentarioCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAnimesInput = {
    update: XOR<UserUpdateWithoutAnimesInput, UserUncheckedUpdateWithoutAnimesInput>
    create: XOR<UserCreateWithoutAnimesInput, UserUncheckedCreateWithoutAnimesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnimesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnimesInput, UserUncheckedUpdateWithoutAnimesInput>
  }

  export type UserUpdateWithoutAnimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuario?: TiposUsuarioUpdateOneWithoutUsuariosNestedInput
    mangas?: MangasUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    mangas?: MangasUncheckedUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GeneroUpsertWithWhereUniqueWithoutAnimesInput = {
    where: GeneroWhereUniqueInput
    update: XOR<GeneroUpdateWithoutAnimesInput, GeneroUncheckedUpdateWithoutAnimesInput>
    create: XOR<GeneroCreateWithoutAnimesInput, GeneroUncheckedCreateWithoutAnimesInput>
  }

  export type GeneroUpdateWithWhereUniqueWithoutAnimesInput = {
    where: GeneroWhereUniqueInput
    data: XOR<GeneroUpdateWithoutAnimesInput, GeneroUncheckedUpdateWithoutAnimesInput>
  }

  export type GeneroUpdateManyWithWhereWithoutAnimesInput = {
    where: GeneroScalarWhereInput
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyWithoutAnimesInput>
  }

  export type FavoritoUpsertWithWhereUniqueWithoutAnimeInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutAnimeInput, FavoritoUncheckedUpdateWithoutAnimeInput>
    create: XOR<FavoritoCreateWithoutAnimeInput, FavoritoUncheckedCreateWithoutAnimeInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutAnimeInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutAnimeInput, FavoritoUncheckedUpdateWithoutAnimeInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutAnimeInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutAnimeInput>
  }

  export type ComentarioUpsertWithWhereUniqueWithoutAnimeInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutAnimeInput, ComentarioUncheckedUpdateWithoutAnimeInput>
    create: XOR<ComentarioCreateWithoutAnimeInput, ComentarioUncheckedCreateWithoutAnimeInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutAnimeInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutAnimeInput, ComentarioUncheckedUpdateWithoutAnimeInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutAnimeInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutAnimeInput>
  }

  export type UserCreateWithoutHistoricosInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuario?: TiposUsuarioCreateNestedOneWithoutUsuariosInput
    mangas?: MangasCreateNestedManyWithoutUserInput
    animes?: AnimesCreateNestedManyWithoutUserInput
    favoritos?: FavoritoCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoricosInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuarioId?: string | null
    mangas?: MangasUncheckedCreateNestedManyWithoutUserInput
    animes?: AnimesUncheckedCreateNestedManyWithoutUserInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoricosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoricosInput, UserUncheckedCreateWithoutHistoricosInput>
  }

  export type UserUpsertWithoutHistoricosInput = {
    update: XOR<UserUpdateWithoutHistoricosInput, UserUncheckedUpdateWithoutHistoricosInput>
    create: XOR<UserCreateWithoutHistoricosInput, UserUncheckedCreateWithoutHistoricosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoricosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoricosInput, UserUncheckedUpdateWithoutHistoricosInput>
  }

  export type UserUpdateWithoutHistoricosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuario?: TiposUsuarioUpdateOneWithoutUsuariosNestedInput
    mangas?: MangasUpdateManyWithoutUserNestedInput
    animes?: AnimesUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoricosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    mangas?: MangasUncheckedUpdateManyWithoutUserNestedInput
    animes?: AnimesUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFavoritosInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuario?: TiposUsuarioCreateNestedOneWithoutUsuariosInput
    mangas?: MangasCreateNestedManyWithoutUserInput
    animes?: AnimesCreateNestedManyWithoutUserInput
    historicos?: HistoricoCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritosInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuarioId?: string | null
    mangas?: MangasUncheckedCreateNestedManyWithoutUserInput
    animes?: AnimesUncheckedCreateNestedManyWithoutUserInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritosInput, UserUncheckedCreateWithoutFavoritosInput>
  }

  export type AnimesCreateWithoutFavoritosInput = {
    id?: string
    title: string
    description: string
    image: string
    episodios: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnimesInput
    generos?: GeneroCreateNestedManyWithoutAnimesInput
    comentarios?: ComentarioCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUncheckedCreateWithoutFavoritosInput = {
    id?: string
    title: string
    description: string
    image: string
    episodios: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroUncheckedCreateNestedManyWithoutAnimesInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimesCreateOrConnectWithoutFavoritosInput = {
    where: AnimesWhereUniqueInput
    create: XOR<AnimesCreateWithoutFavoritosInput, AnimesUncheckedCreateWithoutFavoritosInput>
  }

  export type MangasCreateWithoutFavoritosInput = {
    id?: string
    title: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutMangasInput
    generos?: GeneroCreateNestedManyWithoutMangasInput
  }

  export type MangasUncheckedCreateWithoutFavoritosInput = {
    id?: string
    title: string
    description: string
    image: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroUncheckedCreateNestedManyWithoutMangasInput
  }

  export type MangasCreateOrConnectWithoutFavoritosInput = {
    where: MangasWhereUniqueInput
    create: XOR<MangasCreateWithoutFavoritosInput, MangasUncheckedCreateWithoutFavoritosInput>
  }

  export type UserUpsertWithoutFavoritosInput = {
    update: XOR<UserUpdateWithoutFavoritosInput, UserUncheckedUpdateWithoutFavoritosInput>
    create: XOR<UserCreateWithoutFavoritosInput, UserUncheckedCreateWithoutFavoritosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritosInput, UserUncheckedUpdateWithoutFavoritosInput>
  }

  export type UserUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuario?: TiposUsuarioUpdateOneWithoutUsuariosNestedInput
    mangas?: MangasUpdateManyWithoutUserNestedInput
    animes?: AnimesUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    mangas?: MangasUncheckedUpdateManyWithoutUserNestedInput
    animes?: AnimesUncheckedUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnimesUpsertWithoutFavoritosInput = {
    update: XOR<AnimesUpdateWithoutFavoritosInput, AnimesUncheckedUpdateWithoutFavoritosInput>
    create: XOR<AnimesCreateWithoutFavoritosInput, AnimesUncheckedCreateWithoutFavoritosInput>
    where?: AnimesWhereInput
  }

  export type AnimesUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: AnimesWhereInput
    data: XOR<AnimesUpdateWithoutFavoritosInput, AnimesUncheckedUpdateWithoutFavoritosInput>
  }

  export type AnimesUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimesNestedInput
    generos?: GeneroUpdateManyWithoutAnimesNestedInput
    comentarios?: ComentarioUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUncheckedUpdateManyWithoutAnimesNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type MangasUpsertWithoutFavoritosInput = {
    update: XOR<MangasUpdateWithoutFavoritosInput, MangasUncheckedUpdateWithoutFavoritosInput>
    create: XOR<MangasCreateWithoutFavoritosInput, MangasUncheckedCreateWithoutFavoritosInput>
    where?: MangasWhereInput
  }

  export type MangasUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: MangasWhereInput
    data: XOR<MangasUpdateWithoutFavoritosInput, MangasUncheckedUpdateWithoutFavoritosInput>
  }

  export type MangasUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMangasNestedInput
    generos?: GeneroUpdateManyWithoutMangasNestedInput
  }

  export type MangasUncheckedUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUncheckedUpdateManyWithoutMangasNestedInput
  }

  export type UserCreateWithoutComentariosInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuario?: TiposUsuarioCreateNestedOneWithoutUsuariosInput
    mangas?: MangasCreateNestedManyWithoutUserInput
    animes?: AnimesCreateNestedManyWithoutUserInput
    historicos?: HistoricoCreateNestedManyWithoutUserInput
    favoritos?: FavoritoCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutComentariosInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuarioId?: string | null
    mangas?: MangasUncheckedCreateNestedManyWithoutUserInput
    animes?: AnimesUncheckedCreateNestedManyWithoutUserInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutUserInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutComentariosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutComentariosInput, UserUncheckedCreateWithoutComentariosInput>
  }

  export type AnimesCreateWithoutComentariosInput = {
    id?: string
    title: string
    description: string
    image: string
    episodios: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnimesInput
    generos?: GeneroCreateNestedManyWithoutAnimesInput
    favoritos?: FavoritoCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUncheckedCreateWithoutComentariosInput = {
    id?: string
    title: string
    description: string
    image: string
    episodios: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroUncheckedCreateNestedManyWithoutAnimesInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimesCreateOrConnectWithoutComentariosInput = {
    where: AnimesWhereUniqueInput
    create: XOR<AnimesCreateWithoutComentariosInput, AnimesUncheckedCreateWithoutComentariosInput>
  }

  export type UserUpsertWithoutComentariosInput = {
    update: XOR<UserUpdateWithoutComentariosInput, UserUncheckedUpdateWithoutComentariosInput>
    create: XOR<UserCreateWithoutComentariosInput, UserUncheckedCreateWithoutComentariosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutComentariosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutComentariosInput, UserUncheckedUpdateWithoutComentariosInput>
  }

  export type UserUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuario?: TiposUsuarioUpdateOneWithoutUsuariosNestedInput
    mangas?: MangasUpdateManyWithoutUserNestedInput
    animes?: AnimesUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    mangas?: MangasUncheckedUpdateManyWithoutUserNestedInput
    animes?: AnimesUncheckedUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnimesUpsertWithoutComentariosInput = {
    update: XOR<AnimesUpdateWithoutComentariosInput, AnimesUncheckedUpdateWithoutComentariosInput>
    create: XOR<AnimesCreateWithoutComentariosInput, AnimesUncheckedCreateWithoutComentariosInput>
    where?: AnimesWhereInput
  }

  export type AnimesUpdateToOneWithWhereWithoutComentariosInput = {
    where?: AnimesWhereInput
    data: XOR<AnimesUpdateWithoutComentariosInput, AnimesUncheckedUpdateWithoutComentariosInput>
  }

  export type AnimesUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimesNestedInput
    generos?: GeneroUpdateManyWithoutAnimesNestedInput
    favoritos?: FavoritoUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUncheckedUpdateManyWithoutAnimesNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesCreateWithoutGenerosInput = {
    id?: string
    title: string
    description: string
    image: string
    episodios: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnimesInput
    favoritos?: FavoritoCreateNestedManyWithoutAnimeInput
    comentarios?: ComentarioCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUncheckedCreateWithoutGenerosInput = {
    id?: string
    title: string
    description: string
    image: string
    episodios: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutAnimeInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimesCreateOrConnectWithoutGenerosInput = {
    where: AnimesWhereUniqueInput
    create: XOR<AnimesCreateWithoutGenerosInput, AnimesUncheckedCreateWithoutGenerosInput>
  }

  export type MangasCreateWithoutGenerosInput = {
    id?: string
    title: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutMangasInput
    favoritos?: FavoritoCreateNestedManyWithoutMangaInput
  }

  export type MangasUncheckedCreateWithoutGenerosInput = {
    id?: string
    title: string
    description: string
    image: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutMangaInput
  }

  export type MangasCreateOrConnectWithoutGenerosInput = {
    where: MangasWhereUniqueInput
    create: XOR<MangasCreateWithoutGenerosInput, MangasUncheckedCreateWithoutGenerosInput>
  }

  export type AnimesUpsertWithWhereUniqueWithoutGenerosInput = {
    where: AnimesWhereUniqueInput
    update: XOR<AnimesUpdateWithoutGenerosInput, AnimesUncheckedUpdateWithoutGenerosInput>
    create: XOR<AnimesCreateWithoutGenerosInput, AnimesUncheckedCreateWithoutGenerosInput>
  }

  export type AnimesUpdateWithWhereUniqueWithoutGenerosInput = {
    where: AnimesWhereUniqueInput
    data: XOR<AnimesUpdateWithoutGenerosInput, AnimesUncheckedUpdateWithoutGenerosInput>
  }

  export type AnimesUpdateManyWithWhereWithoutGenerosInput = {
    where: AnimesScalarWhereInput
    data: XOR<AnimesUpdateManyMutationInput, AnimesUncheckedUpdateManyWithoutGenerosInput>
  }

  export type MangasUpsertWithWhereUniqueWithoutGenerosInput = {
    where: MangasWhereUniqueInput
    update: XOR<MangasUpdateWithoutGenerosInput, MangasUncheckedUpdateWithoutGenerosInput>
    create: XOR<MangasCreateWithoutGenerosInput, MangasUncheckedCreateWithoutGenerosInput>
  }

  export type MangasUpdateWithWhereUniqueWithoutGenerosInput = {
    where: MangasWhereUniqueInput
    data: XOR<MangasUpdateWithoutGenerosInput, MangasUncheckedUpdateWithoutGenerosInput>
  }

  export type MangasUpdateManyWithWhereWithoutGenerosInput = {
    where: MangasScalarWhereInput
    data: XOR<MangasUpdateManyMutationInput, MangasUncheckedUpdateManyWithoutGenerosInput>
  }

  export type UserCreateWithoutNotificacoesInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuario?: TiposUsuarioCreateNestedOneWithoutUsuariosInput
    mangas?: MangasCreateNestedManyWithoutUserInput
    animes?: AnimesCreateNestedManyWithoutUserInput
    historicos?: HistoricoCreateNestedManyWithoutUserInput
    favoritos?: FavoritoCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificacoesInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
    tipoUsuarioId?: string | null
    mangas?: MangasUncheckedCreateNestedManyWithoutUserInput
    animes?: AnimesUncheckedCreateNestedManyWithoutUserInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutUserInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificacoesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
  }

  export type UserUpsertWithoutNotificacoesInput = {
    update: XOR<UserUpdateWithoutNotificacoesInput, UserUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificacoesInput, UserUncheckedUpdateWithoutNotificacoesInput>
  }

  export type UserUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuario?: TiposUsuarioUpdateOneWithoutUsuariosNestedInput
    mangas?: MangasUpdateManyWithoutUserNestedInput
    animes?: AnimesUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    mangas?: MangasUncheckedUpdateManyWithoutUserNestedInput
    animes?: AnimesUncheckedUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyTipoUsuarioInput = {
    id?: string
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ativado?: boolean
  }

  export type UserUpdateWithoutTipoUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    mangas?: MangasUpdateManyWithoutUserNestedInput
    animes?: AnimesUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTipoUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    mangas?: MangasUncheckedUpdateManyWithoutUserNestedInput
    animes?: AnimesUncheckedUpdateManyWithoutUserNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTipoUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MangasCreateManyUserInput = {
    id?: string
    title: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimesCreateManyUserInput = {
    id?: string
    title: string
    description: string
    image: string
    episodios: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoricoCreateManyUserInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
  }

  export type FavoritoCreateManyUserInput = {
    id?: string
    animeId?: string | null
    mangaId?: string | null
  }

  export type ComentarioCreateManyUserInput = {
    id?: string
    texto: string
    createdAt?: Date | string
    animeId?: string | null
  }

  export type NotificacaoCreateManyUserInput = {
    id?: string
    mensagem: string
    lida?: boolean
    createdAt?: Date | string
  }

  export type MangasUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUpdateManyWithoutMangasNestedInput
    favoritos?: FavoritoUpdateManyWithoutMangaNestedInput
  }

  export type MangasUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUncheckedUpdateManyWithoutMangasNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutMangaNestedInput
  }

  export type MangasUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUpdateManyWithoutAnimesNestedInput
    favoritos?: FavoritoUpdateManyWithoutAnimeNestedInput
    comentarios?: ComentarioUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUncheckedUpdateManyWithoutAnimesNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutAnimeNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    anime?: AnimesUpdateOneWithoutFavoritosNestedInput
    manga?: MangasUpdateOneWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: NullableStringFieldUpdateOperationsInput | string | null
    mangaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoritoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: NullableStringFieldUpdateOperationsInput | string | null
    mangaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComentarioUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anime?: AnimesUpdateOneWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComentarioUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificacaoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateManyMangaInput = {
    id?: string
    userId: string
    animeId?: string | null
  }

  export type GeneroUpdateWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    animes?: AnimesUpdateManyWithoutGenerosNestedInput
  }

  export type GeneroUncheckedUpdateWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    animes?: AnimesUncheckedUpdateManyWithoutGenerosNestedInput
  }

  export type GeneroUncheckedUpdateManyWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoUpdateWithoutMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFavoritosNestedInput
    anime?: AnimesUpdateOneWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    animeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoritoUncheckedUpdateManyWithoutMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    animeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoritoCreateManyAnimeInput = {
    id?: string
    userId: string
    mangaId?: string | null
  }

  export type ComentarioCreateManyAnimeInput = {
    id?: string
    texto: string
    createdAt?: Date | string
    userId: string
  }

  export type GeneroUpdateWithoutAnimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    mangas?: MangasUpdateManyWithoutGenerosNestedInput
  }

  export type GeneroUncheckedUpdateWithoutAnimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    mangas?: MangasUncheckedUpdateManyWithoutGenerosNestedInput
  }

  export type GeneroUncheckedUpdateManyWithoutAnimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoUpdateWithoutAnimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFavoritosNestedInput
    manga?: MangasUpdateOneWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutAnimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mangaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoritoUncheckedUpdateManyWithoutAnimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mangaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComentarioUpdateWithoutAnimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutAnimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ComentarioUncheckedUpdateManyWithoutAnimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AnimesUpdateWithoutGenerosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimesNestedInput
    favoritos?: FavoritoUpdateManyWithoutAnimeNestedInput
    comentarios?: ComentarioUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateWithoutGenerosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutAnimeNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateManyWithoutGenerosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    episodios?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangasUpdateWithoutGenerosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMangasNestedInput
    favoritos?: FavoritoUpdateManyWithoutMangaNestedInput
  }

  export type MangasUncheckedUpdateWithoutGenerosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutMangaNestedInput
  }

  export type MangasUncheckedUpdateManyWithoutGenerosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}