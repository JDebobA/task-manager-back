
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model PomodoroSession
 * 
 */
export type PomodoroSession = $Result.DefaultSelection<Prisma.$PomodoroSessionPayload>
/**
 * Model PomodoroRound
 * 
 */
export type PomodoroRound = $Result.DefaultSelection<Prisma.$PomodoroRoundPayload>
/**
 * Model Timeblock
 * 
 */
export type Timeblock = $Result.DefaultSelection<Prisma.$TimeblockPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Priority: {
  low: 'low',
  medium: 'medium',
  high: 'high'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.pomodoroSession`: Exposes CRUD operations for the **PomodoroSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PomodoroSessions
    * const pomodoroSessions = await prisma.pomodoroSession.findMany()
    * ```
    */
  get pomodoroSession(): Prisma.PomodoroSessionDelegate<ExtArgs>;

  /**
   * `prisma.pomodoroRound`: Exposes CRUD operations for the **PomodoroRound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PomodoroRounds
    * const pomodoroRounds = await prisma.pomodoroRound.findMany()
    * ```
    */
  get pomodoroRound(): Prisma.PomodoroRoundDelegate<ExtArgs>;

  /**
   * `prisma.timeblock`: Exposes CRUD operations for the **Timeblock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timeblocks
    * const timeblocks = await prisma.timeblock.findMany()
    * ```
    */
  get timeblock(): Prisma.TimeblockDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Task: 'Task',
    PomodoroSession: 'PomodoroSession',
    PomodoroRound: 'PomodoroRound',
    Timeblock: 'Timeblock'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "task" | "pomodoroSession" | "pomodoroRound" | "timeblock"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      PomodoroSession: {
        payload: Prisma.$PomodoroSessionPayload<ExtArgs>
        fields: Prisma.PomodoroSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PomodoroSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PomodoroSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>
          }
          findFirst: {
            args: Prisma.PomodoroSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PomodoroSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>
          }
          findMany: {
            args: Prisma.PomodoroSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>[]
          }
          create: {
            args: Prisma.PomodoroSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>
          }
          createMany: {
            args: Prisma.PomodoroSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PomodoroSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>[]
          }
          delete: {
            args: Prisma.PomodoroSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>
          }
          update: {
            args: Prisma.PomodoroSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>
          }
          deleteMany: {
            args: Prisma.PomodoroSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PomodoroSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PomodoroSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>
          }
          aggregate: {
            args: Prisma.PomodoroSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePomodoroSession>
          }
          groupBy: {
            args: Prisma.PomodoroSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PomodoroSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PomodoroSessionCountArgs<ExtArgs>
            result: $Utils.Optional<PomodoroSessionCountAggregateOutputType> | number
          }
        }
      }
      PomodoroRound: {
        payload: Prisma.$PomodoroRoundPayload<ExtArgs>
        fields: Prisma.PomodoroRoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PomodoroRoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroRoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PomodoroRoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroRoundPayload>
          }
          findFirst: {
            args: Prisma.PomodoroRoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroRoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PomodoroRoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroRoundPayload>
          }
          findMany: {
            args: Prisma.PomodoroRoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroRoundPayload>[]
          }
          create: {
            args: Prisma.PomodoroRoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroRoundPayload>
          }
          createMany: {
            args: Prisma.PomodoroRoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PomodoroRoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroRoundPayload>[]
          }
          delete: {
            args: Prisma.PomodoroRoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroRoundPayload>
          }
          update: {
            args: Prisma.PomodoroRoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroRoundPayload>
          }
          deleteMany: {
            args: Prisma.PomodoroRoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PomodoroRoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PomodoroRoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroRoundPayload>
          }
          aggregate: {
            args: Prisma.PomodoroRoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePomodoroRound>
          }
          groupBy: {
            args: Prisma.PomodoroRoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<PomodoroRoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.PomodoroRoundCountArgs<ExtArgs>
            result: $Utils.Optional<PomodoroRoundCountAggregateOutputType> | number
          }
        }
      }
      Timeblock: {
        payload: Prisma.$TimeblockPayload<ExtArgs>
        fields: Prisma.TimeblockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeblockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeblockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeblockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeblockPayload>
          }
          findFirst: {
            args: Prisma.TimeblockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeblockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeblockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeblockPayload>
          }
          findMany: {
            args: Prisma.TimeblockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeblockPayload>[]
          }
          create: {
            args: Prisma.TimeblockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeblockPayload>
          }
          createMany: {
            args: Prisma.TimeblockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeblockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeblockPayload>[]
          }
          delete: {
            args: Prisma.TimeblockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeblockPayload>
          }
          update: {
            args: Prisma.TimeblockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeblockPayload>
          }
          deleteMany: {
            args: Prisma.TimeblockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeblockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimeblockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeblockPayload>
          }
          aggregate: {
            args: Prisma.TimeblockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeblock>
          }
          groupBy: {
            args: Prisma.TimeblockGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeblockGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeblockCountArgs<ExtArgs>
            result: $Utils.Optional<TimeblockCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    task: number
    session: number
    timeBlock: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | UserCountOutputTypeCountTaskArgs
    session?: boolean | UserCountOutputTypeCountSessionArgs
    timeBlock?: boolean | UserCountOutputTypeCountTimeBlockArgs
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
  export type UserCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PomodoroSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeBlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeblockWhereInput
  }


  /**
   * Count Type PomodoroSessionCountOutputType
   */

  export type PomodoroSessionCountOutputType = {
    rounds: number
  }

  export type PomodoroSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rounds?: boolean | PomodoroSessionCountOutputTypeCountRoundsArgs
  }

  // Custom InputTypes
  /**
   * PomodoroSessionCountOutputType without action
   */
  export type PomodoroSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSessionCountOutputType
     */
    select?: PomodoroSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PomodoroSessionCountOutputType without action
   */
  export type PomodoroSessionCountOutputTypeCountRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PomodoroRoundWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    breakInterval: number | null
    intervalsCount: number | null
    workInterval: number | null
  }

  export type UserSumAggregateOutputType = {
    breakInterval: number | null
    intervalsCount: number | null
    workInterval: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    password: string | null
    breakInterval: number | null
    intervalsCount: number | null
    workInterval: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    password: string | null
    breakInterval: number | null
    intervalsCount: number | null
    workInterval: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    name: number
    password: number
    breakInterval: number
    intervalsCount: number
    workInterval: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    breakInterval?: true
    intervalsCount?: true
    workInterval?: true
  }

  export type UserSumAggregateInputType = {
    breakInterval?: true
    intervalsCount?: true
    workInterval?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
    breakInterval?: true
    intervalsCount?: true
    workInterval?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
    breakInterval?: true
    intervalsCount?: true
    workInterval?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
    breakInterval?: true
    intervalsCount?: true
    workInterval?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    name: string | null
    password: string
    breakInterval: number
    intervalsCount: number
    workInterval: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    breakInterval?: boolean
    intervalsCount?: boolean
    workInterval?: boolean
    task?: boolean | User$taskArgs<ExtArgs>
    session?: boolean | User$sessionArgs<ExtArgs>
    timeBlock?: boolean | User$timeBlockArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    breakInterval?: boolean
    intervalsCount?: boolean
    workInterval?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    breakInterval?: boolean
    intervalsCount?: boolean
    workInterval?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | User$taskArgs<ExtArgs>
    session?: boolean | User$sessionArgs<ExtArgs>
    timeBlock?: boolean | User$timeBlockArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>[]
      session: Prisma.$PomodoroSessionPayload<ExtArgs>[]
      timeBlock: Prisma.$TimeblockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      name: string | null
      password: string
      breakInterval: number
      intervalsCount: number
      workInterval: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends User$taskArgs<ExtArgs> = {}>(args?: Subset<T, User$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    session<T extends User$sessionArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "findMany"> | Null>
    timeBlock<T extends User$timeBlockArgs<ExtArgs> = {}>(args?: Subset<T, User$timeBlockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeblockPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly breakInterval: FieldRef<"User", 'Int'>
    readonly intervalsCount: FieldRef<"User", 'Int'>
    readonly workInterval: FieldRef<"User", 'Int'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
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
  }

  /**
   * User.task
   */
  export type User$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.session
   */
  export type User$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    where?: PomodoroSessionWhereInput
    orderBy?: PomodoroSessionOrderByWithRelationInput | PomodoroSessionOrderByWithRelationInput[]
    cursor?: PomodoroSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PomodoroSessionScalarFieldEnum | PomodoroSessionScalarFieldEnum[]
  }

  /**
   * User.timeBlock
   */
  export type User$timeBlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeblock
     */
    select?: TimeblockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeblockInclude<ExtArgs> | null
    where?: TimeblockWhereInput
    orderBy?: TimeblockOrderByWithRelationInput | TimeblockOrderByWithRelationInput[]
    cursor?: TimeblockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeblockScalarFieldEnum | TimeblockScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    isCompleted: boolean | null
    userId: string | null
    priority: $Enums.Priority | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    isCompleted: boolean | null
    userId: string | null
    priority: $Enums.Priority | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    isCompleted: number
    userId: number
    priority: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isCompleted?: true
    userId?: true
    priority?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isCompleted?: true
    userId?: true
    priority?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isCompleted?: true
    userId?: true
    priority?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string | null
    isCompleted: boolean
    userId: string
    priority: $Enums.Priority
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    isCompleted?: boolean
    userId?: boolean
    priority?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    isCompleted?: boolean
    userId?: boolean
    priority?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    isCompleted?: boolean
    userId?: boolean
    priority?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string | null
      isCompleted: boolean
      userId: string
      priority: $Enums.Priority
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly name: FieldRef<"Task", 'String'>
    readonly isCompleted: FieldRef<"Task", 'Boolean'>
    readonly userId: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'Priority'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model PomodoroSession
   */

  export type AggregatePomodoroSession = {
    _count: PomodoroSessionCountAggregateOutputType | null
    _min: PomodoroSessionMinAggregateOutputType | null
    _max: PomodoroSessionMaxAggregateOutputType | null
  }

  export type PomodoroSessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isComplited: boolean | null
    userId: string | null
  }

  export type PomodoroSessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isComplited: boolean | null
    userId: string | null
  }

  export type PomodoroSessionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isComplited: number
    userId: number
    _all: number
  }


  export type PomodoroSessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isComplited?: true
    userId?: true
  }

  export type PomodoroSessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isComplited?: true
    userId?: true
  }

  export type PomodoroSessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isComplited?: true
    userId?: true
    _all?: true
  }

  export type PomodoroSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PomodoroSession to aggregate.
     */
    where?: PomodoroSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroSessions to fetch.
     */
    orderBy?: PomodoroSessionOrderByWithRelationInput | PomodoroSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PomodoroSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PomodoroSessions
    **/
    _count?: true | PomodoroSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PomodoroSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PomodoroSessionMaxAggregateInputType
  }

  export type GetPomodoroSessionAggregateType<T extends PomodoroSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePomodoroSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePomodoroSession[P]>
      : GetScalarType<T[P], AggregatePomodoroSession[P]>
  }




  export type PomodoroSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PomodoroSessionWhereInput
    orderBy?: PomodoroSessionOrderByWithAggregationInput | PomodoroSessionOrderByWithAggregationInput[]
    by: PomodoroSessionScalarFieldEnum[] | PomodoroSessionScalarFieldEnum
    having?: PomodoroSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PomodoroSessionCountAggregateInputType | true
    _min?: PomodoroSessionMinAggregateInputType
    _max?: PomodoroSessionMaxAggregateInputType
  }

  export type PomodoroSessionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    isComplited: boolean
    userId: string | null
    _count: PomodoroSessionCountAggregateOutputType | null
    _min: PomodoroSessionMinAggregateOutputType | null
    _max: PomodoroSessionMaxAggregateOutputType | null
  }

  type GetPomodoroSessionGroupByPayload<T extends PomodoroSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PomodoroSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PomodoroSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PomodoroSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PomodoroSessionGroupByOutputType[P]>
        }
      >
    >


  export type PomodoroSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isComplited?: boolean
    userId?: boolean
    user?: boolean | PomodoroSession$userArgs<ExtArgs>
    rounds?: boolean | PomodoroSession$roundsArgs<ExtArgs>
    _count?: boolean | PomodoroSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pomodoroSession"]>

  export type PomodoroSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isComplited?: boolean
    userId?: boolean
    user?: boolean | PomodoroSession$userArgs<ExtArgs>
  }, ExtArgs["result"]["pomodoroSession"]>

  export type PomodoroSessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isComplited?: boolean
    userId?: boolean
  }

  export type PomodoroSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PomodoroSession$userArgs<ExtArgs>
    rounds?: boolean | PomodoroSession$roundsArgs<ExtArgs>
    _count?: boolean | PomodoroSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PomodoroSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PomodoroSession$userArgs<ExtArgs>
  }

  export type $PomodoroSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PomodoroSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      rounds: Prisma.$PomodoroRoundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      isComplited: boolean
      userId: string | null
    }, ExtArgs["result"]["pomodoroSession"]>
    composites: {}
  }

  type PomodoroSessionGetPayload<S extends boolean | null | undefined | PomodoroSessionDefaultArgs> = $Result.GetResult<Prisma.$PomodoroSessionPayload, S>

  type PomodoroSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PomodoroSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PomodoroSessionCountAggregateInputType | true
    }

  export interface PomodoroSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PomodoroSession'], meta: { name: 'PomodoroSession' } }
    /**
     * Find zero or one PomodoroSession that matches the filter.
     * @param {PomodoroSessionFindUniqueArgs} args - Arguments to find a PomodoroSession
     * @example
     * // Get one PomodoroSession
     * const pomodoroSession = await prisma.pomodoroSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PomodoroSessionFindUniqueArgs>(args: SelectSubset<T, PomodoroSessionFindUniqueArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PomodoroSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PomodoroSessionFindUniqueOrThrowArgs} args - Arguments to find a PomodoroSession
     * @example
     * // Get one PomodoroSession
     * const pomodoroSession = await prisma.pomodoroSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PomodoroSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, PomodoroSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PomodoroSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionFindFirstArgs} args - Arguments to find a PomodoroSession
     * @example
     * // Get one PomodoroSession
     * const pomodoroSession = await prisma.pomodoroSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PomodoroSessionFindFirstArgs>(args?: SelectSubset<T, PomodoroSessionFindFirstArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PomodoroSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionFindFirstOrThrowArgs} args - Arguments to find a PomodoroSession
     * @example
     * // Get one PomodoroSession
     * const pomodoroSession = await prisma.pomodoroSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PomodoroSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, PomodoroSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PomodoroSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PomodoroSessions
     * const pomodoroSessions = await prisma.pomodoroSession.findMany()
     * 
     * // Get first 10 PomodoroSessions
     * const pomodoroSessions = await prisma.pomodoroSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pomodoroSessionWithIdOnly = await prisma.pomodoroSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PomodoroSessionFindManyArgs>(args?: SelectSubset<T, PomodoroSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PomodoroSession.
     * @param {PomodoroSessionCreateArgs} args - Arguments to create a PomodoroSession.
     * @example
     * // Create one PomodoroSession
     * const PomodoroSession = await prisma.pomodoroSession.create({
     *   data: {
     *     // ... data to create a PomodoroSession
     *   }
     * })
     * 
     */
    create<T extends PomodoroSessionCreateArgs>(args: SelectSubset<T, PomodoroSessionCreateArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PomodoroSessions.
     * @param {PomodoroSessionCreateManyArgs} args - Arguments to create many PomodoroSessions.
     * @example
     * // Create many PomodoroSessions
     * const pomodoroSession = await prisma.pomodoroSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PomodoroSessionCreateManyArgs>(args?: SelectSubset<T, PomodoroSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PomodoroSessions and returns the data saved in the database.
     * @param {PomodoroSessionCreateManyAndReturnArgs} args - Arguments to create many PomodoroSessions.
     * @example
     * // Create many PomodoroSessions
     * const pomodoroSession = await prisma.pomodoroSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PomodoroSessions and only return the `id`
     * const pomodoroSessionWithIdOnly = await prisma.pomodoroSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PomodoroSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, PomodoroSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PomodoroSession.
     * @param {PomodoroSessionDeleteArgs} args - Arguments to delete one PomodoroSession.
     * @example
     * // Delete one PomodoroSession
     * const PomodoroSession = await prisma.pomodoroSession.delete({
     *   where: {
     *     // ... filter to delete one PomodoroSession
     *   }
     * })
     * 
     */
    delete<T extends PomodoroSessionDeleteArgs>(args: SelectSubset<T, PomodoroSessionDeleteArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PomodoroSession.
     * @param {PomodoroSessionUpdateArgs} args - Arguments to update one PomodoroSession.
     * @example
     * // Update one PomodoroSession
     * const pomodoroSession = await prisma.pomodoroSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PomodoroSessionUpdateArgs>(args: SelectSubset<T, PomodoroSessionUpdateArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PomodoroSessions.
     * @param {PomodoroSessionDeleteManyArgs} args - Arguments to filter PomodoroSessions to delete.
     * @example
     * // Delete a few PomodoroSessions
     * const { count } = await prisma.pomodoroSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PomodoroSessionDeleteManyArgs>(args?: SelectSubset<T, PomodoroSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PomodoroSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PomodoroSessions
     * const pomodoroSession = await prisma.pomodoroSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PomodoroSessionUpdateManyArgs>(args: SelectSubset<T, PomodoroSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PomodoroSession.
     * @param {PomodoroSessionUpsertArgs} args - Arguments to update or create a PomodoroSession.
     * @example
     * // Update or create a PomodoroSession
     * const pomodoroSession = await prisma.pomodoroSession.upsert({
     *   create: {
     *     // ... data to create a PomodoroSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PomodoroSession we want to update
     *   }
     * })
     */
    upsert<T extends PomodoroSessionUpsertArgs>(args: SelectSubset<T, PomodoroSessionUpsertArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PomodoroSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionCountArgs} args - Arguments to filter PomodoroSessions to count.
     * @example
     * // Count the number of PomodoroSessions
     * const count = await prisma.pomodoroSession.count({
     *   where: {
     *     // ... the filter for the PomodoroSessions we want to count
     *   }
     * })
    **/
    count<T extends PomodoroSessionCountArgs>(
      args?: Subset<T, PomodoroSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PomodoroSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PomodoroSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PomodoroSessionAggregateArgs>(args: Subset<T, PomodoroSessionAggregateArgs>): Prisma.PrismaPromise<GetPomodoroSessionAggregateType<T>>

    /**
     * Group by PomodoroSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionGroupByArgs} args - Group by arguments.
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
      T extends PomodoroSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PomodoroSessionGroupByArgs['orderBy'] }
        : { orderBy?: PomodoroSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PomodoroSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPomodoroSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PomodoroSession model
   */
  readonly fields: PomodoroSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PomodoroSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PomodoroSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends PomodoroSession$userArgs<ExtArgs> = {}>(args?: Subset<T, PomodoroSession$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    rounds<T extends PomodoroSession$roundsArgs<ExtArgs> = {}>(args?: Subset<T, PomodoroSession$roundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomodoroRoundPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PomodoroSession model
   */ 
  interface PomodoroSessionFieldRefs {
    readonly id: FieldRef<"PomodoroSession", 'String'>
    readonly createdAt: FieldRef<"PomodoroSession", 'DateTime'>
    readonly updatedAt: FieldRef<"PomodoroSession", 'DateTime'>
    readonly isComplited: FieldRef<"PomodoroSession", 'Boolean'>
    readonly userId: FieldRef<"PomodoroSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PomodoroSession findUnique
   */
  export type PomodoroSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSession to fetch.
     */
    where: PomodoroSessionWhereUniqueInput
  }

  /**
   * PomodoroSession findUniqueOrThrow
   */
  export type PomodoroSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSession to fetch.
     */
    where: PomodoroSessionWhereUniqueInput
  }

  /**
   * PomodoroSession findFirst
   */
  export type PomodoroSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSession to fetch.
     */
    where?: PomodoroSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroSessions to fetch.
     */
    orderBy?: PomodoroSessionOrderByWithRelationInput | PomodoroSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PomodoroSessions.
     */
    cursor?: PomodoroSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PomodoroSessions.
     */
    distinct?: PomodoroSessionScalarFieldEnum | PomodoroSessionScalarFieldEnum[]
  }

  /**
   * PomodoroSession findFirstOrThrow
   */
  export type PomodoroSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSession to fetch.
     */
    where?: PomodoroSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroSessions to fetch.
     */
    orderBy?: PomodoroSessionOrderByWithRelationInput | PomodoroSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PomodoroSessions.
     */
    cursor?: PomodoroSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PomodoroSessions.
     */
    distinct?: PomodoroSessionScalarFieldEnum | PomodoroSessionScalarFieldEnum[]
  }

  /**
   * PomodoroSession findMany
   */
  export type PomodoroSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSessions to fetch.
     */
    where?: PomodoroSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroSessions to fetch.
     */
    orderBy?: PomodoroSessionOrderByWithRelationInput | PomodoroSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PomodoroSessions.
     */
    cursor?: PomodoroSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroSessions.
     */
    skip?: number
    distinct?: PomodoroSessionScalarFieldEnum | PomodoroSessionScalarFieldEnum[]
  }

  /**
   * PomodoroSession create
   */
  export type PomodoroSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a PomodoroSession.
     */
    data: XOR<PomodoroSessionCreateInput, PomodoroSessionUncheckedCreateInput>
  }

  /**
   * PomodoroSession createMany
   */
  export type PomodoroSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PomodoroSessions.
     */
    data: PomodoroSessionCreateManyInput | PomodoroSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PomodoroSession createManyAndReturn
   */
  export type PomodoroSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PomodoroSessions.
     */
    data: PomodoroSessionCreateManyInput | PomodoroSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PomodoroSession update
   */
  export type PomodoroSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a PomodoroSession.
     */
    data: XOR<PomodoroSessionUpdateInput, PomodoroSessionUncheckedUpdateInput>
    /**
     * Choose, which PomodoroSession to update.
     */
    where: PomodoroSessionWhereUniqueInput
  }

  /**
   * PomodoroSession updateMany
   */
  export type PomodoroSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PomodoroSessions.
     */
    data: XOR<PomodoroSessionUpdateManyMutationInput, PomodoroSessionUncheckedUpdateManyInput>
    /**
     * Filter which PomodoroSessions to update
     */
    where?: PomodoroSessionWhereInput
  }

  /**
   * PomodoroSession upsert
   */
  export type PomodoroSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the PomodoroSession to update in case it exists.
     */
    where: PomodoroSessionWhereUniqueInput
    /**
     * In case the PomodoroSession found by the `where` argument doesn't exist, create a new PomodoroSession with this data.
     */
    create: XOR<PomodoroSessionCreateInput, PomodoroSessionUncheckedCreateInput>
    /**
     * In case the PomodoroSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PomodoroSessionUpdateInput, PomodoroSessionUncheckedUpdateInput>
  }

  /**
   * PomodoroSession delete
   */
  export type PomodoroSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * Filter which PomodoroSession to delete.
     */
    where: PomodoroSessionWhereUniqueInput
  }

  /**
   * PomodoroSession deleteMany
   */
  export type PomodoroSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PomodoroSessions to delete
     */
    where?: PomodoroSessionWhereInput
  }

  /**
   * PomodoroSession.user
   */
  export type PomodoroSession$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PomodoroSession.rounds
   */
  export type PomodoroSession$roundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroRound
     */
    select?: PomodoroRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroRoundInclude<ExtArgs> | null
    where?: PomodoroRoundWhereInput
    orderBy?: PomodoroRoundOrderByWithRelationInput | PomodoroRoundOrderByWithRelationInput[]
    cursor?: PomodoroRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PomodoroRoundScalarFieldEnum | PomodoroRoundScalarFieldEnum[]
  }

  /**
   * PomodoroSession without action
   */
  export type PomodoroSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
  }


  /**
   * Model PomodoroRound
   */

  export type AggregatePomodoroRound = {
    _count: PomodoroRoundCountAggregateOutputType | null
    _avg: PomodoroRoundAvgAggregateOutputType | null
    _sum: PomodoroRoundSumAggregateOutputType | null
    _min: PomodoroRoundMinAggregateOutputType | null
    _max: PomodoroRoundMaxAggregateOutputType | null
  }

  export type PomodoroRoundAvgAggregateOutputType = {
    allMinutes: number | null
  }

  export type PomodoroRoundSumAggregateOutputType = {
    allMinutes: number | null
  }

  export type PomodoroRoundMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    allMinutes: number | null
    IsCompleted: boolean | null
    pomodoroSessionId: string | null
  }

  export type PomodoroRoundMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    allMinutes: number | null
    IsCompleted: boolean | null
    pomodoroSessionId: string | null
  }

  export type PomodoroRoundCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    allMinutes: number
    IsCompleted: number
    pomodoroSessionId: number
    _all: number
  }


  export type PomodoroRoundAvgAggregateInputType = {
    allMinutes?: true
  }

  export type PomodoroRoundSumAggregateInputType = {
    allMinutes?: true
  }

  export type PomodoroRoundMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    allMinutes?: true
    IsCompleted?: true
    pomodoroSessionId?: true
  }

  export type PomodoroRoundMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    allMinutes?: true
    IsCompleted?: true
    pomodoroSessionId?: true
  }

  export type PomodoroRoundCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    allMinutes?: true
    IsCompleted?: true
    pomodoroSessionId?: true
    _all?: true
  }

  export type PomodoroRoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PomodoroRound to aggregate.
     */
    where?: PomodoroRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroRounds to fetch.
     */
    orderBy?: PomodoroRoundOrderByWithRelationInput | PomodoroRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PomodoroRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PomodoroRounds
    **/
    _count?: true | PomodoroRoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PomodoroRoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PomodoroRoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PomodoroRoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PomodoroRoundMaxAggregateInputType
  }

  export type GetPomodoroRoundAggregateType<T extends PomodoroRoundAggregateArgs> = {
        [P in keyof T & keyof AggregatePomodoroRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePomodoroRound[P]>
      : GetScalarType<T[P], AggregatePomodoroRound[P]>
  }




  export type PomodoroRoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PomodoroRoundWhereInput
    orderBy?: PomodoroRoundOrderByWithAggregationInput | PomodoroRoundOrderByWithAggregationInput[]
    by: PomodoroRoundScalarFieldEnum[] | PomodoroRoundScalarFieldEnum
    having?: PomodoroRoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PomodoroRoundCountAggregateInputType | true
    _avg?: PomodoroRoundAvgAggregateInputType
    _sum?: PomodoroRoundSumAggregateInputType
    _min?: PomodoroRoundMinAggregateInputType
    _max?: PomodoroRoundMaxAggregateInputType
  }

  export type PomodoroRoundGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    allMinutes: number
    IsCompleted: boolean
    pomodoroSessionId: string
    _count: PomodoroRoundCountAggregateOutputType | null
    _avg: PomodoroRoundAvgAggregateOutputType | null
    _sum: PomodoroRoundSumAggregateOutputType | null
    _min: PomodoroRoundMinAggregateOutputType | null
    _max: PomodoroRoundMaxAggregateOutputType | null
  }

  type GetPomodoroRoundGroupByPayload<T extends PomodoroRoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PomodoroRoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PomodoroRoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PomodoroRoundGroupByOutputType[P]>
            : GetScalarType<T[P], PomodoroRoundGroupByOutputType[P]>
        }
      >
    >


  export type PomodoroRoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    allMinutes?: boolean
    IsCompleted?: boolean
    pomodoroSessionId?: boolean
    pomodoroSession?: boolean | PomodoroSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pomodoroRound"]>

  export type PomodoroRoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    allMinutes?: boolean
    IsCompleted?: boolean
    pomodoroSessionId?: boolean
    pomodoroSession?: boolean | PomodoroSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pomodoroRound"]>

  export type PomodoroRoundSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    allMinutes?: boolean
    IsCompleted?: boolean
    pomodoroSessionId?: boolean
  }

  export type PomodoroRoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pomodoroSession?: boolean | PomodoroSessionDefaultArgs<ExtArgs>
  }
  export type PomodoroRoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pomodoroSession?: boolean | PomodoroSessionDefaultArgs<ExtArgs>
  }

  export type $PomodoroRoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PomodoroRound"
    objects: {
      pomodoroSession: Prisma.$PomodoroSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      allMinutes: number
      IsCompleted: boolean
      pomodoroSessionId: string
    }, ExtArgs["result"]["pomodoroRound"]>
    composites: {}
  }

  type PomodoroRoundGetPayload<S extends boolean | null | undefined | PomodoroRoundDefaultArgs> = $Result.GetResult<Prisma.$PomodoroRoundPayload, S>

  type PomodoroRoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PomodoroRoundFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PomodoroRoundCountAggregateInputType | true
    }

  export interface PomodoroRoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PomodoroRound'], meta: { name: 'PomodoroRound' } }
    /**
     * Find zero or one PomodoroRound that matches the filter.
     * @param {PomodoroRoundFindUniqueArgs} args - Arguments to find a PomodoroRound
     * @example
     * // Get one PomodoroRound
     * const pomodoroRound = await prisma.pomodoroRound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PomodoroRoundFindUniqueArgs>(args: SelectSubset<T, PomodoroRoundFindUniqueArgs<ExtArgs>>): Prisma__PomodoroRoundClient<$Result.GetResult<Prisma.$PomodoroRoundPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PomodoroRound that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PomodoroRoundFindUniqueOrThrowArgs} args - Arguments to find a PomodoroRound
     * @example
     * // Get one PomodoroRound
     * const pomodoroRound = await prisma.pomodoroRound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PomodoroRoundFindUniqueOrThrowArgs>(args: SelectSubset<T, PomodoroRoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PomodoroRoundClient<$Result.GetResult<Prisma.$PomodoroRoundPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PomodoroRound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroRoundFindFirstArgs} args - Arguments to find a PomodoroRound
     * @example
     * // Get one PomodoroRound
     * const pomodoroRound = await prisma.pomodoroRound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PomodoroRoundFindFirstArgs>(args?: SelectSubset<T, PomodoroRoundFindFirstArgs<ExtArgs>>): Prisma__PomodoroRoundClient<$Result.GetResult<Prisma.$PomodoroRoundPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PomodoroRound that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroRoundFindFirstOrThrowArgs} args - Arguments to find a PomodoroRound
     * @example
     * // Get one PomodoroRound
     * const pomodoroRound = await prisma.pomodoroRound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PomodoroRoundFindFirstOrThrowArgs>(args?: SelectSubset<T, PomodoroRoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__PomodoroRoundClient<$Result.GetResult<Prisma.$PomodoroRoundPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PomodoroRounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroRoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PomodoroRounds
     * const pomodoroRounds = await prisma.pomodoroRound.findMany()
     * 
     * // Get first 10 PomodoroRounds
     * const pomodoroRounds = await prisma.pomodoroRound.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pomodoroRoundWithIdOnly = await prisma.pomodoroRound.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PomodoroRoundFindManyArgs>(args?: SelectSubset<T, PomodoroRoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomodoroRoundPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PomodoroRound.
     * @param {PomodoroRoundCreateArgs} args - Arguments to create a PomodoroRound.
     * @example
     * // Create one PomodoroRound
     * const PomodoroRound = await prisma.pomodoroRound.create({
     *   data: {
     *     // ... data to create a PomodoroRound
     *   }
     * })
     * 
     */
    create<T extends PomodoroRoundCreateArgs>(args: SelectSubset<T, PomodoroRoundCreateArgs<ExtArgs>>): Prisma__PomodoroRoundClient<$Result.GetResult<Prisma.$PomodoroRoundPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PomodoroRounds.
     * @param {PomodoroRoundCreateManyArgs} args - Arguments to create many PomodoroRounds.
     * @example
     * // Create many PomodoroRounds
     * const pomodoroRound = await prisma.pomodoroRound.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PomodoroRoundCreateManyArgs>(args?: SelectSubset<T, PomodoroRoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PomodoroRounds and returns the data saved in the database.
     * @param {PomodoroRoundCreateManyAndReturnArgs} args - Arguments to create many PomodoroRounds.
     * @example
     * // Create many PomodoroRounds
     * const pomodoroRound = await prisma.pomodoroRound.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PomodoroRounds and only return the `id`
     * const pomodoroRoundWithIdOnly = await prisma.pomodoroRound.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PomodoroRoundCreateManyAndReturnArgs>(args?: SelectSubset<T, PomodoroRoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomodoroRoundPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PomodoroRound.
     * @param {PomodoroRoundDeleteArgs} args - Arguments to delete one PomodoroRound.
     * @example
     * // Delete one PomodoroRound
     * const PomodoroRound = await prisma.pomodoroRound.delete({
     *   where: {
     *     // ... filter to delete one PomodoroRound
     *   }
     * })
     * 
     */
    delete<T extends PomodoroRoundDeleteArgs>(args: SelectSubset<T, PomodoroRoundDeleteArgs<ExtArgs>>): Prisma__PomodoroRoundClient<$Result.GetResult<Prisma.$PomodoroRoundPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PomodoroRound.
     * @param {PomodoroRoundUpdateArgs} args - Arguments to update one PomodoroRound.
     * @example
     * // Update one PomodoroRound
     * const pomodoroRound = await prisma.pomodoroRound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PomodoroRoundUpdateArgs>(args: SelectSubset<T, PomodoroRoundUpdateArgs<ExtArgs>>): Prisma__PomodoroRoundClient<$Result.GetResult<Prisma.$PomodoroRoundPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PomodoroRounds.
     * @param {PomodoroRoundDeleteManyArgs} args - Arguments to filter PomodoroRounds to delete.
     * @example
     * // Delete a few PomodoroRounds
     * const { count } = await prisma.pomodoroRound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PomodoroRoundDeleteManyArgs>(args?: SelectSubset<T, PomodoroRoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PomodoroRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroRoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PomodoroRounds
     * const pomodoroRound = await prisma.pomodoroRound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PomodoroRoundUpdateManyArgs>(args: SelectSubset<T, PomodoroRoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PomodoroRound.
     * @param {PomodoroRoundUpsertArgs} args - Arguments to update or create a PomodoroRound.
     * @example
     * // Update or create a PomodoroRound
     * const pomodoroRound = await prisma.pomodoroRound.upsert({
     *   create: {
     *     // ... data to create a PomodoroRound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PomodoroRound we want to update
     *   }
     * })
     */
    upsert<T extends PomodoroRoundUpsertArgs>(args: SelectSubset<T, PomodoroRoundUpsertArgs<ExtArgs>>): Prisma__PomodoroRoundClient<$Result.GetResult<Prisma.$PomodoroRoundPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PomodoroRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroRoundCountArgs} args - Arguments to filter PomodoroRounds to count.
     * @example
     * // Count the number of PomodoroRounds
     * const count = await prisma.pomodoroRound.count({
     *   where: {
     *     // ... the filter for the PomodoroRounds we want to count
     *   }
     * })
    **/
    count<T extends PomodoroRoundCountArgs>(
      args?: Subset<T, PomodoroRoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PomodoroRoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PomodoroRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroRoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PomodoroRoundAggregateArgs>(args: Subset<T, PomodoroRoundAggregateArgs>): Prisma.PrismaPromise<GetPomodoroRoundAggregateType<T>>

    /**
     * Group by PomodoroRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroRoundGroupByArgs} args - Group by arguments.
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
      T extends PomodoroRoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PomodoroRoundGroupByArgs['orderBy'] }
        : { orderBy?: PomodoroRoundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PomodoroRoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPomodoroRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PomodoroRound model
   */
  readonly fields: PomodoroRoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PomodoroRound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PomodoroRoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pomodoroSession<T extends PomodoroSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PomodoroSessionDefaultArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PomodoroRound model
   */ 
  interface PomodoroRoundFieldRefs {
    readonly id: FieldRef<"PomodoroRound", 'String'>
    readonly createdAt: FieldRef<"PomodoroRound", 'DateTime'>
    readonly updatedAt: FieldRef<"PomodoroRound", 'DateTime'>
    readonly allMinutes: FieldRef<"PomodoroRound", 'Int'>
    readonly IsCompleted: FieldRef<"PomodoroRound", 'Boolean'>
    readonly pomodoroSessionId: FieldRef<"PomodoroRound", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PomodoroRound findUnique
   */
  export type PomodoroRoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroRound
     */
    select?: PomodoroRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroRoundInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroRound to fetch.
     */
    where: PomodoroRoundWhereUniqueInput
  }

  /**
   * PomodoroRound findUniqueOrThrow
   */
  export type PomodoroRoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroRound
     */
    select?: PomodoroRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroRoundInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroRound to fetch.
     */
    where: PomodoroRoundWhereUniqueInput
  }

  /**
   * PomodoroRound findFirst
   */
  export type PomodoroRoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroRound
     */
    select?: PomodoroRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroRoundInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroRound to fetch.
     */
    where?: PomodoroRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroRounds to fetch.
     */
    orderBy?: PomodoroRoundOrderByWithRelationInput | PomodoroRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PomodoroRounds.
     */
    cursor?: PomodoroRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PomodoroRounds.
     */
    distinct?: PomodoroRoundScalarFieldEnum | PomodoroRoundScalarFieldEnum[]
  }

  /**
   * PomodoroRound findFirstOrThrow
   */
  export type PomodoroRoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroRound
     */
    select?: PomodoroRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroRoundInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroRound to fetch.
     */
    where?: PomodoroRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroRounds to fetch.
     */
    orderBy?: PomodoroRoundOrderByWithRelationInput | PomodoroRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PomodoroRounds.
     */
    cursor?: PomodoroRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PomodoroRounds.
     */
    distinct?: PomodoroRoundScalarFieldEnum | PomodoroRoundScalarFieldEnum[]
  }

  /**
   * PomodoroRound findMany
   */
  export type PomodoroRoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroRound
     */
    select?: PomodoroRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroRoundInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroRounds to fetch.
     */
    where?: PomodoroRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroRounds to fetch.
     */
    orderBy?: PomodoroRoundOrderByWithRelationInput | PomodoroRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PomodoroRounds.
     */
    cursor?: PomodoroRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroRounds.
     */
    skip?: number
    distinct?: PomodoroRoundScalarFieldEnum | PomodoroRoundScalarFieldEnum[]
  }

  /**
   * PomodoroRound create
   */
  export type PomodoroRoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroRound
     */
    select?: PomodoroRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroRoundInclude<ExtArgs> | null
    /**
     * The data needed to create a PomodoroRound.
     */
    data: XOR<PomodoroRoundCreateInput, PomodoroRoundUncheckedCreateInput>
  }

  /**
   * PomodoroRound createMany
   */
  export type PomodoroRoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PomodoroRounds.
     */
    data: PomodoroRoundCreateManyInput | PomodoroRoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PomodoroRound createManyAndReturn
   */
  export type PomodoroRoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroRound
     */
    select?: PomodoroRoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PomodoroRounds.
     */
    data: PomodoroRoundCreateManyInput | PomodoroRoundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroRoundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PomodoroRound update
   */
  export type PomodoroRoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroRound
     */
    select?: PomodoroRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroRoundInclude<ExtArgs> | null
    /**
     * The data needed to update a PomodoroRound.
     */
    data: XOR<PomodoroRoundUpdateInput, PomodoroRoundUncheckedUpdateInput>
    /**
     * Choose, which PomodoroRound to update.
     */
    where: PomodoroRoundWhereUniqueInput
  }

  /**
   * PomodoroRound updateMany
   */
  export type PomodoroRoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PomodoroRounds.
     */
    data: XOR<PomodoroRoundUpdateManyMutationInput, PomodoroRoundUncheckedUpdateManyInput>
    /**
     * Filter which PomodoroRounds to update
     */
    where?: PomodoroRoundWhereInput
  }

  /**
   * PomodoroRound upsert
   */
  export type PomodoroRoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroRound
     */
    select?: PomodoroRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroRoundInclude<ExtArgs> | null
    /**
     * The filter to search for the PomodoroRound to update in case it exists.
     */
    where: PomodoroRoundWhereUniqueInput
    /**
     * In case the PomodoroRound found by the `where` argument doesn't exist, create a new PomodoroRound with this data.
     */
    create: XOR<PomodoroRoundCreateInput, PomodoroRoundUncheckedCreateInput>
    /**
     * In case the PomodoroRound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PomodoroRoundUpdateInput, PomodoroRoundUncheckedUpdateInput>
  }

  /**
   * PomodoroRound delete
   */
  export type PomodoroRoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroRound
     */
    select?: PomodoroRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroRoundInclude<ExtArgs> | null
    /**
     * Filter which PomodoroRound to delete.
     */
    where: PomodoroRoundWhereUniqueInput
  }

  /**
   * PomodoroRound deleteMany
   */
  export type PomodoroRoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PomodoroRounds to delete
     */
    where?: PomodoroRoundWhereInput
  }

  /**
   * PomodoroRound without action
   */
  export type PomodoroRoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroRound
     */
    select?: PomodoroRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroRoundInclude<ExtArgs> | null
  }


  /**
   * Model Timeblock
   */

  export type AggregateTimeblock = {
    _count: TimeblockCountAggregateOutputType | null
    _min: TimeblockMinAggregateOutputType | null
    _max: TimeblockMaxAggregateOutputType | null
  }

  export type TimeblockMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    color: string | null
    userId: string | null
  }

  export type TimeblockMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    color: string | null
    userId: string | null
  }

  export type TimeblockCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    color: number
    userId: number
    _all: number
  }


  export type TimeblockMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    color?: true
    userId?: true
  }

  export type TimeblockMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    color?: true
    userId?: true
  }

  export type TimeblockCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    color?: true
    userId?: true
    _all?: true
  }

  export type TimeblockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timeblock to aggregate.
     */
    where?: TimeblockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timeblocks to fetch.
     */
    orderBy?: TimeblockOrderByWithRelationInput | TimeblockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeblockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timeblocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timeblocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timeblocks
    **/
    _count?: true | TimeblockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeblockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeblockMaxAggregateInputType
  }

  export type GetTimeblockAggregateType<T extends TimeblockAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeblock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeblock[P]>
      : GetScalarType<T[P], AggregateTimeblock[P]>
  }




  export type TimeblockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeblockWhereInput
    orderBy?: TimeblockOrderByWithAggregationInput | TimeblockOrderByWithAggregationInput[]
    by: TimeblockScalarFieldEnum[] | TimeblockScalarFieldEnum
    having?: TimeblockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeblockCountAggregateInputType | true
    _min?: TimeblockMinAggregateInputType
    _max?: TimeblockMaxAggregateInputType
  }

  export type TimeblockGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    color: string
    userId: string
    _count: TimeblockCountAggregateOutputType | null
    _min: TimeblockMinAggregateOutputType | null
    _max: TimeblockMaxAggregateOutputType | null
  }

  type GetTimeblockGroupByPayload<T extends TimeblockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeblockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeblockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeblockGroupByOutputType[P]>
            : GetScalarType<T[P], TimeblockGroupByOutputType[P]>
        }
      >
    >


  export type TimeblockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    color?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeblock"]>

  export type TimeblockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    color?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeblock"]>

  export type TimeblockSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    color?: boolean
    userId?: boolean
  }

  export type TimeblockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimeblockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TimeblockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timeblock"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      color: string
      userId: string
    }, ExtArgs["result"]["timeblock"]>
    composites: {}
  }

  type TimeblockGetPayload<S extends boolean | null | undefined | TimeblockDefaultArgs> = $Result.GetResult<Prisma.$TimeblockPayload, S>

  type TimeblockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimeblockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimeblockCountAggregateInputType | true
    }

  export interface TimeblockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timeblock'], meta: { name: 'Timeblock' } }
    /**
     * Find zero or one Timeblock that matches the filter.
     * @param {TimeblockFindUniqueArgs} args - Arguments to find a Timeblock
     * @example
     * // Get one Timeblock
     * const timeblock = await prisma.timeblock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeblockFindUniqueArgs>(args: SelectSubset<T, TimeblockFindUniqueArgs<ExtArgs>>): Prisma__TimeblockClient<$Result.GetResult<Prisma.$TimeblockPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Timeblock that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimeblockFindUniqueOrThrowArgs} args - Arguments to find a Timeblock
     * @example
     * // Get one Timeblock
     * const timeblock = await prisma.timeblock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeblockFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeblockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeblockClient<$Result.GetResult<Prisma.$TimeblockPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Timeblock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeblockFindFirstArgs} args - Arguments to find a Timeblock
     * @example
     * // Get one Timeblock
     * const timeblock = await prisma.timeblock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeblockFindFirstArgs>(args?: SelectSubset<T, TimeblockFindFirstArgs<ExtArgs>>): Prisma__TimeblockClient<$Result.GetResult<Prisma.$TimeblockPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Timeblock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeblockFindFirstOrThrowArgs} args - Arguments to find a Timeblock
     * @example
     * // Get one Timeblock
     * const timeblock = await prisma.timeblock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeblockFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeblockFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeblockClient<$Result.GetResult<Prisma.$TimeblockPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Timeblocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeblockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timeblocks
     * const timeblocks = await prisma.timeblock.findMany()
     * 
     * // Get first 10 Timeblocks
     * const timeblocks = await prisma.timeblock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeblockWithIdOnly = await prisma.timeblock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeblockFindManyArgs>(args?: SelectSubset<T, TimeblockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeblockPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Timeblock.
     * @param {TimeblockCreateArgs} args - Arguments to create a Timeblock.
     * @example
     * // Create one Timeblock
     * const Timeblock = await prisma.timeblock.create({
     *   data: {
     *     // ... data to create a Timeblock
     *   }
     * })
     * 
     */
    create<T extends TimeblockCreateArgs>(args: SelectSubset<T, TimeblockCreateArgs<ExtArgs>>): Prisma__TimeblockClient<$Result.GetResult<Prisma.$TimeblockPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Timeblocks.
     * @param {TimeblockCreateManyArgs} args - Arguments to create many Timeblocks.
     * @example
     * // Create many Timeblocks
     * const timeblock = await prisma.timeblock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeblockCreateManyArgs>(args?: SelectSubset<T, TimeblockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timeblocks and returns the data saved in the database.
     * @param {TimeblockCreateManyAndReturnArgs} args - Arguments to create many Timeblocks.
     * @example
     * // Create many Timeblocks
     * const timeblock = await prisma.timeblock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timeblocks and only return the `id`
     * const timeblockWithIdOnly = await prisma.timeblock.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeblockCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeblockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeblockPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Timeblock.
     * @param {TimeblockDeleteArgs} args - Arguments to delete one Timeblock.
     * @example
     * // Delete one Timeblock
     * const Timeblock = await prisma.timeblock.delete({
     *   where: {
     *     // ... filter to delete one Timeblock
     *   }
     * })
     * 
     */
    delete<T extends TimeblockDeleteArgs>(args: SelectSubset<T, TimeblockDeleteArgs<ExtArgs>>): Prisma__TimeblockClient<$Result.GetResult<Prisma.$TimeblockPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Timeblock.
     * @param {TimeblockUpdateArgs} args - Arguments to update one Timeblock.
     * @example
     * // Update one Timeblock
     * const timeblock = await prisma.timeblock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeblockUpdateArgs>(args: SelectSubset<T, TimeblockUpdateArgs<ExtArgs>>): Prisma__TimeblockClient<$Result.GetResult<Prisma.$TimeblockPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Timeblocks.
     * @param {TimeblockDeleteManyArgs} args - Arguments to filter Timeblocks to delete.
     * @example
     * // Delete a few Timeblocks
     * const { count } = await prisma.timeblock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeblockDeleteManyArgs>(args?: SelectSubset<T, TimeblockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timeblocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeblockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timeblocks
     * const timeblock = await prisma.timeblock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeblockUpdateManyArgs>(args: SelectSubset<T, TimeblockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Timeblock.
     * @param {TimeblockUpsertArgs} args - Arguments to update or create a Timeblock.
     * @example
     * // Update or create a Timeblock
     * const timeblock = await prisma.timeblock.upsert({
     *   create: {
     *     // ... data to create a Timeblock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timeblock we want to update
     *   }
     * })
     */
    upsert<T extends TimeblockUpsertArgs>(args: SelectSubset<T, TimeblockUpsertArgs<ExtArgs>>): Prisma__TimeblockClient<$Result.GetResult<Prisma.$TimeblockPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Timeblocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeblockCountArgs} args - Arguments to filter Timeblocks to count.
     * @example
     * // Count the number of Timeblocks
     * const count = await prisma.timeblock.count({
     *   where: {
     *     // ... the filter for the Timeblocks we want to count
     *   }
     * })
    **/
    count<T extends TimeblockCountArgs>(
      args?: Subset<T, TimeblockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeblockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timeblock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeblockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeblockAggregateArgs>(args: Subset<T, TimeblockAggregateArgs>): Prisma.PrismaPromise<GetTimeblockAggregateType<T>>

    /**
     * Group by Timeblock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeblockGroupByArgs} args - Group by arguments.
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
      T extends TimeblockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeblockGroupByArgs['orderBy'] }
        : { orderBy?: TimeblockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeblockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeblockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timeblock model
   */
  readonly fields: TimeblockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timeblock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeblockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Timeblock model
   */ 
  interface TimeblockFieldRefs {
    readonly id: FieldRef<"Timeblock", 'String'>
    readonly createdAt: FieldRef<"Timeblock", 'DateTime'>
    readonly updatedAt: FieldRef<"Timeblock", 'DateTime'>
    readonly name: FieldRef<"Timeblock", 'String'>
    readonly color: FieldRef<"Timeblock", 'String'>
    readonly userId: FieldRef<"Timeblock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Timeblock findUnique
   */
  export type TimeblockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeblock
     */
    select?: TimeblockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeblockInclude<ExtArgs> | null
    /**
     * Filter, which Timeblock to fetch.
     */
    where: TimeblockWhereUniqueInput
  }

  /**
   * Timeblock findUniqueOrThrow
   */
  export type TimeblockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeblock
     */
    select?: TimeblockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeblockInclude<ExtArgs> | null
    /**
     * Filter, which Timeblock to fetch.
     */
    where: TimeblockWhereUniqueInput
  }

  /**
   * Timeblock findFirst
   */
  export type TimeblockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeblock
     */
    select?: TimeblockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeblockInclude<ExtArgs> | null
    /**
     * Filter, which Timeblock to fetch.
     */
    where?: TimeblockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timeblocks to fetch.
     */
    orderBy?: TimeblockOrderByWithRelationInput | TimeblockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timeblocks.
     */
    cursor?: TimeblockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timeblocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timeblocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timeblocks.
     */
    distinct?: TimeblockScalarFieldEnum | TimeblockScalarFieldEnum[]
  }

  /**
   * Timeblock findFirstOrThrow
   */
  export type TimeblockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeblock
     */
    select?: TimeblockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeblockInclude<ExtArgs> | null
    /**
     * Filter, which Timeblock to fetch.
     */
    where?: TimeblockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timeblocks to fetch.
     */
    orderBy?: TimeblockOrderByWithRelationInput | TimeblockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timeblocks.
     */
    cursor?: TimeblockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timeblocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timeblocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timeblocks.
     */
    distinct?: TimeblockScalarFieldEnum | TimeblockScalarFieldEnum[]
  }

  /**
   * Timeblock findMany
   */
  export type TimeblockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeblock
     */
    select?: TimeblockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeblockInclude<ExtArgs> | null
    /**
     * Filter, which Timeblocks to fetch.
     */
    where?: TimeblockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timeblocks to fetch.
     */
    orderBy?: TimeblockOrderByWithRelationInput | TimeblockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timeblocks.
     */
    cursor?: TimeblockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timeblocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timeblocks.
     */
    skip?: number
    distinct?: TimeblockScalarFieldEnum | TimeblockScalarFieldEnum[]
  }

  /**
   * Timeblock create
   */
  export type TimeblockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeblock
     */
    select?: TimeblockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeblockInclude<ExtArgs> | null
    /**
     * The data needed to create a Timeblock.
     */
    data: XOR<TimeblockCreateInput, TimeblockUncheckedCreateInput>
  }

  /**
   * Timeblock createMany
   */
  export type TimeblockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timeblocks.
     */
    data: TimeblockCreateManyInput | TimeblockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timeblock createManyAndReturn
   */
  export type TimeblockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeblock
     */
    select?: TimeblockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Timeblocks.
     */
    data: TimeblockCreateManyInput | TimeblockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeblockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Timeblock update
   */
  export type TimeblockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeblock
     */
    select?: TimeblockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeblockInclude<ExtArgs> | null
    /**
     * The data needed to update a Timeblock.
     */
    data: XOR<TimeblockUpdateInput, TimeblockUncheckedUpdateInput>
    /**
     * Choose, which Timeblock to update.
     */
    where: TimeblockWhereUniqueInput
  }

  /**
   * Timeblock updateMany
   */
  export type TimeblockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timeblocks.
     */
    data: XOR<TimeblockUpdateManyMutationInput, TimeblockUncheckedUpdateManyInput>
    /**
     * Filter which Timeblocks to update
     */
    where?: TimeblockWhereInput
  }

  /**
   * Timeblock upsert
   */
  export type TimeblockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeblock
     */
    select?: TimeblockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeblockInclude<ExtArgs> | null
    /**
     * The filter to search for the Timeblock to update in case it exists.
     */
    where: TimeblockWhereUniqueInput
    /**
     * In case the Timeblock found by the `where` argument doesn't exist, create a new Timeblock with this data.
     */
    create: XOR<TimeblockCreateInput, TimeblockUncheckedCreateInput>
    /**
     * In case the Timeblock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeblockUpdateInput, TimeblockUncheckedUpdateInput>
  }

  /**
   * Timeblock delete
   */
  export type TimeblockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeblock
     */
    select?: TimeblockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeblockInclude<ExtArgs> | null
    /**
     * Filter which Timeblock to delete.
     */
    where: TimeblockWhereUniqueInput
  }

  /**
   * Timeblock deleteMany
   */
  export type TimeblockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timeblocks to delete
     */
    where?: TimeblockWhereInput
  }

  /**
   * Timeblock without action
   */
  export type TimeblockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeblock
     */
    select?: TimeblockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeblockInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    name: 'name',
    password: 'password',
    breakInterval: 'breakInterval',
    intervalsCount: 'intervalsCount',
    workInterval: 'workInterval'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    isCompleted: 'isCompleted',
    userId: 'userId',
    priority: 'priority'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const PomodoroSessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isComplited: 'isComplited',
    userId: 'userId'
  };

  export type PomodoroSessionScalarFieldEnum = (typeof PomodoroSessionScalarFieldEnum)[keyof typeof PomodoroSessionScalarFieldEnum]


  export const PomodoroRoundScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    allMinutes: 'allMinutes',
    IsCompleted: 'IsCompleted',
    pomodoroSessionId: 'pomodoroSessionId'
  };

  export type PomodoroRoundScalarFieldEnum = (typeof PomodoroRoundScalarFieldEnum)[keyof typeof PomodoroRoundScalarFieldEnum]


  export const TimeblockScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    color: 'color',
    userId: 'userId'
  };

  export type TimeblockScalarFieldEnum = (typeof TimeblockScalarFieldEnum)[keyof typeof TimeblockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    breakInterval?: IntFilter<"User"> | number
    intervalsCount?: IntFilter<"User"> | number
    workInterval?: IntFilter<"User"> | number
    task?: TaskListRelationFilter
    session?: PomodoroSessionListRelationFilter
    timeBlock?: TimeblockListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    breakInterval?: SortOrder
    intervalsCount?: SortOrder
    workInterval?: SortOrder
    task?: TaskOrderByRelationAggregateInput
    session?: PomodoroSessionOrderByRelationAggregateInput
    timeBlock?: TimeblockOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    breakInterval?: IntFilter<"User"> | number
    intervalsCount?: IntFilter<"User"> | number
    workInterval?: IntFilter<"User"> | number
    task?: TaskListRelationFilter
    session?: PomodoroSessionListRelationFilter
    timeBlock?: TimeblockListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    breakInterval?: SortOrder
    intervalsCount?: SortOrder
    workInterval?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    breakInterval?: IntWithAggregatesFilter<"User"> | number
    intervalsCount?: IntWithAggregatesFilter<"User"> | number
    workInterval?: IntWithAggregatesFilter<"User"> | number
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    name?: StringNullableFilter<"Task"> | string | null
    isCompleted?: BoolFilter<"Task"> | boolean
    userId?: StringFilter<"Task"> | string
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    priority?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    name?: StringNullableFilter<"Task"> | string | null
    isCompleted?: BoolFilter<"Task"> | boolean
    userId?: StringFilter<"Task"> | string
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    priority?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    name?: StringNullableWithAggregatesFilter<"Task"> | string | null
    isCompleted?: BoolWithAggregatesFilter<"Task"> | boolean
    userId?: StringWithAggregatesFilter<"Task"> | string
    priority?: EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority
  }

  export type PomodoroSessionWhereInput = {
    AND?: PomodoroSessionWhereInput | PomodoroSessionWhereInput[]
    OR?: PomodoroSessionWhereInput[]
    NOT?: PomodoroSessionWhereInput | PomodoroSessionWhereInput[]
    id?: StringFilter<"PomodoroSession"> | string
    createdAt?: DateTimeFilter<"PomodoroSession"> | Date | string
    updatedAt?: DateTimeFilter<"PomodoroSession"> | Date | string
    isComplited?: BoolFilter<"PomodoroSession"> | boolean
    userId?: StringNullableFilter<"PomodoroSession"> | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    rounds?: PomodoroRoundListRelationFilter
  }

  export type PomodoroSessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isComplited?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    rounds?: PomodoroRoundOrderByRelationAggregateInput
  }

  export type PomodoroSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PomodoroSessionWhereInput | PomodoroSessionWhereInput[]
    OR?: PomodoroSessionWhereInput[]
    NOT?: PomodoroSessionWhereInput | PomodoroSessionWhereInput[]
    createdAt?: DateTimeFilter<"PomodoroSession"> | Date | string
    updatedAt?: DateTimeFilter<"PomodoroSession"> | Date | string
    isComplited?: BoolFilter<"PomodoroSession"> | boolean
    userId?: StringNullableFilter<"PomodoroSession"> | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    rounds?: PomodoroRoundListRelationFilter
  }, "id">

  export type PomodoroSessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isComplited?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: PomodoroSessionCountOrderByAggregateInput
    _max?: PomodoroSessionMaxOrderByAggregateInput
    _min?: PomodoroSessionMinOrderByAggregateInput
  }

  export type PomodoroSessionScalarWhereWithAggregatesInput = {
    AND?: PomodoroSessionScalarWhereWithAggregatesInput | PomodoroSessionScalarWhereWithAggregatesInput[]
    OR?: PomodoroSessionScalarWhereWithAggregatesInput[]
    NOT?: PomodoroSessionScalarWhereWithAggregatesInput | PomodoroSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PomodoroSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PomodoroSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PomodoroSession"> | Date | string
    isComplited?: BoolWithAggregatesFilter<"PomodoroSession"> | boolean
    userId?: StringNullableWithAggregatesFilter<"PomodoroSession"> | string | null
  }

  export type PomodoroRoundWhereInput = {
    AND?: PomodoroRoundWhereInput | PomodoroRoundWhereInput[]
    OR?: PomodoroRoundWhereInput[]
    NOT?: PomodoroRoundWhereInput | PomodoroRoundWhereInput[]
    id?: StringFilter<"PomodoroRound"> | string
    createdAt?: DateTimeFilter<"PomodoroRound"> | Date | string
    updatedAt?: DateTimeFilter<"PomodoroRound"> | Date | string
    allMinutes?: IntFilter<"PomodoroRound"> | number
    IsCompleted?: BoolFilter<"PomodoroRound"> | boolean
    pomodoroSessionId?: StringFilter<"PomodoroRound"> | string
    pomodoroSession?: XOR<PomodoroSessionRelationFilter, PomodoroSessionWhereInput>
  }

  export type PomodoroRoundOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    allMinutes?: SortOrder
    IsCompleted?: SortOrder
    pomodoroSessionId?: SortOrder
    pomodoroSession?: PomodoroSessionOrderByWithRelationInput
  }

  export type PomodoroRoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PomodoroRoundWhereInput | PomodoroRoundWhereInput[]
    OR?: PomodoroRoundWhereInput[]
    NOT?: PomodoroRoundWhereInput | PomodoroRoundWhereInput[]
    createdAt?: DateTimeFilter<"PomodoroRound"> | Date | string
    updatedAt?: DateTimeFilter<"PomodoroRound"> | Date | string
    allMinutes?: IntFilter<"PomodoroRound"> | number
    IsCompleted?: BoolFilter<"PomodoroRound"> | boolean
    pomodoroSessionId?: StringFilter<"PomodoroRound"> | string
    pomodoroSession?: XOR<PomodoroSessionRelationFilter, PomodoroSessionWhereInput>
  }, "id">

  export type PomodoroRoundOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    allMinutes?: SortOrder
    IsCompleted?: SortOrder
    pomodoroSessionId?: SortOrder
    _count?: PomodoroRoundCountOrderByAggregateInput
    _avg?: PomodoroRoundAvgOrderByAggregateInput
    _max?: PomodoroRoundMaxOrderByAggregateInput
    _min?: PomodoroRoundMinOrderByAggregateInput
    _sum?: PomodoroRoundSumOrderByAggregateInput
  }

  export type PomodoroRoundScalarWhereWithAggregatesInput = {
    AND?: PomodoroRoundScalarWhereWithAggregatesInput | PomodoroRoundScalarWhereWithAggregatesInput[]
    OR?: PomodoroRoundScalarWhereWithAggregatesInput[]
    NOT?: PomodoroRoundScalarWhereWithAggregatesInput | PomodoroRoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PomodoroRound"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PomodoroRound"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PomodoroRound"> | Date | string
    allMinutes?: IntWithAggregatesFilter<"PomodoroRound"> | number
    IsCompleted?: BoolWithAggregatesFilter<"PomodoroRound"> | boolean
    pomodoroSessionId?: StringWithAggregatesFilter<"PomodoroRound"> | string
  }

  export type TimeblockWhereInput = {
    AND?: TimeblockWhereInput | TimeblockWhereInput[]
    OR?: TimeblockWhereInput[]
    NOT?: TimeblockWhereInput | TimeblockWhereInput[]
    id?: StringFilter<"Timeblock"> | string
    createdAt?: DateTimeFilter<"Timeblock"> | Date | string
    updatedAt?: DateTimeFilter<"Timeblock"> | Date | string
    name?: StringFilter<"Timeblock"> | string
    color?: StringFilter<"Timeblock"> | string
    userId?: StringFilter<"Timeblock"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TimeblockOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TimeblockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeblockWhereInput | TimeblockWhereInput[]
    OR?: TimeblockWhereInput[]
    NOT?: TimeblockWhereInput | TimeblockWhereInput[]
    createdAt?: DateTimeFilter<"Timeblock"> | Date | string
    updatedAt?: DateTimeFilter<"Timeblock"> | Date | string
    name?: StringFilter<"Timeblock"> | string
    color?: StringFilter<"Timeblock"> | string
    userId?: StringFilter<"Timeblock"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TimeblockOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    _count?: TimeblockCountOrderByAggregateInput
    _max?: TimeblockMaxOrderByAggregateInput
    _min?: TimeblockMinOrderByAggregateInput
  }

  export type TimeblockScalarWhereWithAggregatesInput = {
    AND?: TimeblockScalarWhereWithAggregatesInput | TimeblockScalarWhereWithAggregatesInput[]
    OR?: TimeblockScalarWhereWithAggregatesInput[]
    NOT?: TimeblockScalarWhereWithAggregatesInput | TimeblockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Timeblock"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Timeblock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Timeblock"> | Date | string
    name?: StringWithAggregatesFilter<"Timeblock"> | string
    color?: StringWithAggregatesFilter<"Timeblock"> | string
    userId?: StringWithAggregatesFilter<"Timeblock"> | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number
    intervalsCount?: number
    workInterval?: number
    task?: TaskCreateNestedManyWithoutUserInput
    session?: PomodoroSessionCreateNestedManyWithoutUserInput
    timeBlock?: TimeblockCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number
    intervalsCount?: number
    workInterval?: number
    task?: TaskUncheckedCreateNestedManyWithoutUserInput
    session?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    timeBlock?: TimeblockUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: IntFieldUpdateOperationsInput | number
    intervalsCount?: IntFieldUpdateOperationsInput | number
    workInterval?: IntFieldUpdateOperationsInput | number
    task?: TaskUpdateManyWithoutUserNestedInput
    session?: PomodoroSessionUpdateManyWithoutUserNestedInput
    timeBlock?: TimeblockUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: IntFieldUpdateOperationsInput | number
    intervalsCount?: IntFieldUpdateOperationsInput | number
    workInterval?: IntFieldUpdateOperationsInput | number
    task?: TaskUncheckedUpdateManyWithoutUserNestedInput
    session?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    timeBlock?: TimeblockUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number
    intervalsCount?: number
    workInterval?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: IntFieldUpdateOperationsInput | number
    intervalsCount?: IntFieldUpdateOperationsInput | number
    workInterval?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: IntFieldUpdateOperationsInput | number
    intervalsCount?: IntFieldUpdateOperationsInput | number
    workInterval?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    isCompleted: boolean
    priority: $Enums.Priority
    user: UserCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    isCompleted: boolean
    userId: string
    priority: $Enums.Priority
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    user?: UserUpdateOneRequiredWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
  }

  export type TaskCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    isCompleted: boolean
    userId: string
    priority: $Enums.Priority
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
  }

  export type PomodoroSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplited: boolean
    user?: UserCreateNestedOneWithoutSessionInput
    rounds?: PomodoroRoundCreateNestedManyWithoutPomodoroSessionInput
  }

  export type PomodoroSessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplited: boolean
    userId?: string | null
    rounds?: PomodoroRoundUncheckedCreateNestedManyWithoutPomodoroSessionInput
  }

  export type PomodoroSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplited?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutSessionNestedInput
    rounds?: PomodoroRoundUpdateManyWithoutPomodoroSessionNestedInput
  }

  export type PomodoroSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplited?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    rounds?: PomodoroRoundUncheckedUpdateManyWithoutPomodoroSessionNestedInput
  }

  export type PomodoroSessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplited: boolean
    userId?: string | null
  }

  export type PomodoroSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplited?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PomodoroSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplited?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PomodoroRoundCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    allMinutes: number
    IsCompleted: boolean
    pomodoroSession: PomodoroSessionCreateNestedOneWithoutRoundsInput
  }

  export type PomodoroRoundUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    allMinutes: number
    IsCompleted: boolean
    pomodoroSessionId: string
  }

  export type PomodoroRoundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allMinutes?: IntFieldUpdateOperationsInput | number
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
    pomodoroSession?: PomodoroSessionUpdateOneRequiredWithoutRoundsNestedInput
  }

  export type PomodoroRoundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allMinutes?: IntFieldUpdateOperationsInput | number
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
    pomodoroSessionId?: StringFieldUpdateOperationsInput | string
  }

  export type PomodoroRoundCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    allMinutes: number
    IsCompleted: boolean
    pomodoroSessionId: string
  }

  export type PomodoroRoundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allMinutes?: IntFieldUpdateOperationsInput | number
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PomodoroRoundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allMinutes?: IntFieldUpdateOperationsInput | number
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
    pomodoroSessionId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeblockCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string
    user: UserCreateNestedOneWithoutTimeBlockInput
  }

  export type TimeblockUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string
    userId: string
  }

  export type TimeblockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTimeBlockNestedInput
  }

  export type TimeblockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeblockCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string
    userId: string
  }

  export type TimeblockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type TimeblockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type PomodoroSessionListRelationFilter = {
    every?: PomodoroSessionWhereInput
    some?: PomodoroSessionWhereInput
    none?: PomodoroSessionWhereInput
  }

  export type TimeblockListRelationFilter = {
    every?: TimeblockWhereInput
    some?: TimeblockWhereInput
    none?: TimeblockWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PomodoroSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeblockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    breakInterval?: SortOrder
    intervalsCount?: SortOrder
    workInterval?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    breakInterval?: SortOrder
    intervalsCount?: SortOrder
    workInterval?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    breakInterval?: SortOrder
    intervalsCount?: SortOrder
    workInterval?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    breakInterval?: SortOrder
    intervalsCount?: SortOrder
    workInterval?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    breakInterval?: SortOrder
    intervalsCount?: SortOrder
    workInterval?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    priority?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    priority?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    isCompleted?: SortOrder
    userId?: SortOrder
    priority?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PomodoroRoundListRelationFilter = {
    every?: PomodoroRoundWhereInput
    some?: PomodoroRoundWhereInput
    none?: PomodoroRoundWhereInput
  }

  export type PomodoroRoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PomodoroSessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isComplited?: SortOrder
    userId?: SortOrder
  }

  export type PomodoroSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isComplited?: SortOrder
    userId?: SortOrder
  }

  export type PomodoroSessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isComplited?: SortOrder
    userId?: SortOrder
  }

  export type PomodoroSessionRelationFilter = {
    is?: PomodoroSessionWhereInput
    isNot?: PomodoroSessionWhereInput
  }

  export type PomodoroRoundCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    allMinutes?: SortOrder
    IsCompleted?: SortOrder
    pomodoroSessionId?: SortOrder
  }

  export type PomodoroRoundAvgOrderByAggregateInput = {
    allMinutes?: SortOrder
  }

  export type PomodoroRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    allMinutes?: SortOrder
    IsCompleted?: SortOrder
    pomodoroSessionId?: SortOrder
  }

  export type PomodoroRoundMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    allMinutes?: SortOrder
    IsCompleted?: SortOrder
    pomodoroSessionId?: SortOrder
  }

  export type PomodoroRoundSumOrderByAggregateInput = {
    allMinutes?: SortOrder
  }

  export type TimeblockCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrder
  }

  export type TimeblockMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrder
  }

  export type TimeblockMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrder
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type PomodoroSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<PomodoroSessionCreateWithoutUserInput, PomodoroSessionUncheckedCreateWithoutUserInput> | PomodoroSessionCreateWithoutUserInput[] | PomodoroSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PomodoroSessionCreateOrConnectWithoutUserInput | PomodoroSessionCreateOrConnectWithoutUserInput[]
    createMany?: PomodoroSessionCreateManyUserInputEnvelope
    connect?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
  }

  export type TimeblockCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeblockCreateWithoutUserInput, TimeblockUncheckedCreateWithoutUserInput> | TimeblockCreateWithoutUserInput[] | TimeblockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeblockCreateOrConnectWithoutUserInput | TimeblockCreateOrConnectWithoutUserInput[]
    createMany?: TimeblockCreateManyUserInputEnvelope
    connect?: TimeblockWhereUniqueInput | TimeblockWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type PomodoroSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PomodoroSessionCreateWithoutUserInput, PomodoroSessionUncheckedCreateWithoutUserInput> | PomodoroSessionCreateWithoutUserInput[] | PomodoroSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PomodoroSessionCreateOrConnectWithoutUserInput | PomodoroSessionCreateOrConnectWithoutUserInput[]
    createMany?: PomodoroSessionCreateManyUserInputEnvelope
    connect?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
  }

  export type TimeblockUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeblockCreateWithoutUserInput, TimeblockUncheckedCreateWithoutUserInput> | TimeblockCreateWithoutUserInput[] | TimeblockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeblockCreateOrConnectWithoutUserInput | TimeblockCreateOrConnectWithoutUserInput[]
    createMany?: TimeblockCreateManyUserInputEnvelope
    connect?: TimeblockWhereUniqueInput | TimeblockWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type PomodoroSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PomodoroSessionCreateWithoutUserInput, PomodoroSessionUncheckedCreateWithoutUserInput> | PomodoroSessionCreateWithoutUserInput[] | PomodoroSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PomodoroSessionCreateOrConnectWithoutUserInput | PomodoroSessionCreateOrConnectWithoutUserInput[]
    upsert?: PomodoroSessionUpsertWithWhereUniqueWithoutUserInput | PomodoroSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PomodoroSessionCreateManyUserInputEnvelope
    set?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    disconnect?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    delete?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    connect?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    update?: PomodoroSessionUpdateWithWhereUniqueWithoutUserInput | PomodoroSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PomodoroSessionUpdateManyWithWhereWithoutUserInput | PomodoroSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PomodoroSessionScalarWhereInput | PomodoroSessionScalarWhereInput[]
  }

  export type TimeblockUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeblockCreateWithoutUserInput, TimeblockUncheckedCreateWithoutUserInput> | TimeblockCreateWithoutUserInput[] | TimeblockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeblockCreateOrConnectWithoutUserInput | TimeblockCreateOrConnectWithoutUserInput[]
    upsert?: TimeblockUpsertWithWhereUniqueWithoutUserInput | TimeblockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeblockCreateManyUserInputEnvelope
    set?: TimeblockWhereUniqueInput | TimeblockWhereUniqueInput[]
    disconnect?: TimeblockWhereUniqueInput | TimeblockWhereUniqueInput[]
    delete?: TimeblockWhereUniqueInput | TimeblockWhereUniqueInput[]
    connect?: TimeblockWhereUniqueInput | TimeblockWhereUniqueInput[]
    update?: TimeblockUpdateWithWhereUniqueWithoutUserInput | TimeblockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeblockUpdateManyWithWhereWithoutUserInput | TimeblockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeblockScalarWhereInput | TimeblockScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PomodoroSessionCreateWithoutUserInput, PomodoroSessionUncheckedCreateWithoutUserInput> | PomodoroSessionCreateWithoutUserInput[] | PomodoroSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PomodoroSessionCreateOrConnectWithoutUserInput | PomodoroSessionCreateOrConnectWithoutUserInput[]
    upsert?: PomodoroSessionUpsertWithWhereUniqueWithoutUserInput | PomodoroSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PomodoroSessionCreateManyUserInputEnvelope
    set?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    disconnect?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    delete?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    connect?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    update?: PomodoroSessionUpdateWithWhereUniqueWithoutUserInput | PomodoroSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PomodoroSessionUpdateManyWithWhereWithoutUserInput | PomodoroSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PomodoroSessionScalarWhereInput | PomodoroSessionScalarWhereInput[]
  }

  export type TimeblockUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeblockCreateWithoutUserInput, TimeblockUncheckedCreateWithoutUserInput> | TimeblockCreateWithoutUserInput[] | TimeblockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeblockCreateOrConnectWithoutUserInput | TimeblockCreateOrConnectWithoutUserInput[]
    upsert?: TimeblockUpsertWithWhereUniqueWithoutUserInput | TimeblockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeblockCreateManyUserInputEnvelope
    set?: TimeblockWhereUniqueInput | TimeblockWhereUniqueInput[]
    disconnect?: TimeblockWhereUniqueInput | TimeblockWhereUniqueInput[]
    delete?: TimeblockWhereUniqueInput | TimeblockWhereUniqueInput[]
    connect?: TimeblockWhereUniqueInput | TimeblockWhereUniqueInput[]
    update?: TimeblockUpdateWithWhereUniqueWithoutUserInput | TimeblockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeblockUpdateManyWithWhereWithoutUserInput | TimeblockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeblockScalarWhereInput | TimeblockScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTaskInput = {
    create?: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type UserUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput
    upsert?: UserUpsertWithoutTaskInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskInput, UserUpdateWithoutTaskInput>, UserUncheckedUpdateWithoutTaskInput>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type PomodoroRoundCreateNestedManyWithoutPomodoroSessionInput = {
    create?: XOR<PomodoroRoundCreateWithoutPomodoroSessionInput, PomodoroRoundUncheckedCreateWithoutPomodoroSessionInput> | PomodoroRoundCreateWithoutPomodoroSessionInput[] | PomodoroRoundUncheckedCreateWithoutPomodoroSessionInput[]
    connectOrCreate?: PomodoroRoundCreateOrConnectWithoutPomodoroSessionInput | PomodoroRoundCreateOrConnectWithoutPomodoroSessionInput[]
    createMany?: PomodoroRoundCreateManyPomodoroSessionInputEnvelope
    connect?: PomodoroRoundWhereUniqueInput | PomodoroRoundWhereUniqueInput[]
  }

  export type PomodoroRoundUncheckedCreateNestedManyWithoutPomodoroSessionInput = {
    create?: XOR<PomodoroRoundCreateWithoutPomodoroSessionInput, PomodoroRoundUncheckedCreateWithoutPomodoroSessionInput> | PomodoroRoundCreateWithoutPomodoroSessionInput[] | PomodoroRoundUncheckedCreateWithoutPomodoroSessionInput[]
    connectOrCreate?: PomodoroRoundCreateOrConnectWithoutPomodoroSessionInput | PomodoroRoundCreateOrConnectWithoutPomodoroSessionInput[]
    createMany?: PomodoroRoundCreateManyPomodoroSessionInputEnvelope
    connect?: PomodoroRoundWhereUniqueInput | PomodoroRoundWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type PomodoroRoundUpdateManyWithoutPomodoroSessionNestedInput = {
    create?: XOR<PomodoroRoundCreateWithoutPomodoroSessionInput, PomodoroRoundUncheckedCreateWithoutPomodoroSessionInput> | PomodoroRoundCreateWithoutPomodoroSessionInput[] | PomodoroRoundUncheckedCreateWithoutPomodoroSessionInput[]
    connectOrCreate?: PomodoroRoundCreateOrConnectWithoutPomodoroSessionInput | PomodoroRoundCreateOrConnectWithoutPomodoroSessionInput[]
    upsert?: PomodoroRoundUpsertWithWhereUniqueWithoutPomodoroSessionInput | PomodoroRoundUpsertWithWhereUniqueWithoutPomodoroSessionInput[]
    createMany?: PomodoroRoundCreateManyPomodoroSessionInputEnvelope
    set?: PomodoroRoundWhereUniqueInput | PomodoroRoundWhereUniqueInput[]
    disconnect?: PomodoroRoundWhereUniqueInput | PomodoroRoundWhereUniqueInput[]
    delete?: PomodoroRoundWhereUniqueInput | PomodoroRoundWhereUniqueInput[]
    connect?: PomodoroRoundWhereUniqueInput | PomodoroRoundWhereUniqueInput[]
    update?: PomodoroRoundUpdateWithWhereUniqueWithoutPomodoroSessionInput | PomodoroRoundUpdateWithWhereUniqueWithoutPomodoroSessionInput[]
    updateMany?: PomodoroRoundUpdateManyWithWhereWithoutPomodoroSessionInput | PomodoroRoundUpdateManyWithWhereWithoutPomodoroSessionInput[]
    deleteMany?: PomodoroRoundScalarWhereInput | PomodoroRoundScalarWhereInput[]
  }

  export type PomodoroRoundUncheckedUpdateManyWithoutPomodoroSessionNestedInput = {
    create?: XOR<PomodoroRoundCreateWithoutPomodoroSessionInput, PomodoroRoundUncheckedCreateWithoutPomodoroSessionInput> | PomodoroRoundCreateWithoutPomodoroSessionInput[] | PomodoroRoundUncheckedCreateWithoutPomodoroSessionInput[]
    connectOrCreate?: PomodoroRoundCreateOrConnectWithoutPomodoroSessionInput | PomodoroRoundCreateOrConnectWithoutPomodoroSessionInput[]
    upsert?: PomodoroRoundUpsertWithWhereUniqueWithoutPomodoroSessionInput | PomodoroRoundUpsertWithWhereUniqueWithoutPomodoroSessionInput[]
    createMany?: PomodoroRoundCreateManyPomodoroSessionInputEnvelope
    set?: PomodoroRoundWhereUniqueInput | PomodoroRoundWhereUniqueInput[]
    disconnect?: PomodoroRoundWhereUniqueInput | PomodoroRoundWhereUniqueInput[]
    delete?: PomodoroRoundWhereUniqueInput | PomodoroRoundWhereUniqueInput[]
    connect?: PomodoroRoundWhereUniqueInput | PomodoroRoundWhereUniqueInput[]
    update?: PomodoroRoundUpdateWithWhereUniqueWithoutPomodoroSessionInput | PomodoroRoundUpdateWithWhereUniqueWithoutPomodoroSessionInput[]
    updateMany?: PomodoroRoundUpdateManyWithWhereWithoutPomodoroSessionInput | PomodoroRoundUpdateManyWithWhereWithoutPomodoroSessionInput[]
    deleteMany?: PomodoroRoundScalarWhereInput | PomodoroRoundScalarWhereInput[]
  }

  export type PomodoroSessionCreateNestedOneWithoutRoundsInput = {
    create?: XOR<PomodoroSessionCreateWithoutRoundsInput, PomodoroSessionUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: PomodoroSessionCreateOrConnectWithoutRoundsInput
    connect?: PomodoroSessionWhereUniqueInput
  }

  export type PomodoroSessionUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: XOR<PomodoroSessionCreateWithoutRoundsInput, PomodoroSessionUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: PomodoroSessionCreateOrConnectWithoutRoundsInput
    upsert?: PomodoroSessionUpsertWithoutRoundsInput
    connect?: PomodoroSessionWhereUniqueInput
    update?: XOR<XOR<PomodoroSessionUpdateToOneWithWhereWithoutRoundsInput, PomodoroSessionUpdateWithoutRoundsInput>, PomodoroSessionUncheckedUpdateWithoutRoundsInput>
  }

  export type UserCreateNestedOneWithoutTimeBlockInput = {
    create?: XOR<UserCreateWithoutTimeBlockInput, UserUncheckedCreateWithoutTimeBlockInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeBlockInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTimeBlockNestedInput = {
    create?: XOR<UserCreateWithoutTimeBlockInput, UserUncheckedCreateWithoutTimeBlockInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeBlockInput
    upsert?: UserUpsertWithoutTimeBlockInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimeBlockInput, UserUpdateWithoutTimeBlockInput>, UserUncheckedUpdateWithoutTimeBlockInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    isCompleted: boolean
    priority: $Enums.Priority
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    isCompleted: boolean
    priority: $Enums.Priority
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PomodoroSessionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplited: boolean
    rounds?: PomodoroRoundCreateNestedManyWithoutPomodoroSessionInput
  }

  export type PomodoroSessionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplited: boolean
    rounds?: PomodoroRoundUncheckedCreateNestedManyWithoutPomodoroSessionInput
  }

  export type PomodoroSessionCreateOrConnectWithoutUserInput = {
    where: PomodoroSessionWhereUniqueInput
    create: XOR<PomodoroSessionCreateWithoutUserInput, PomodoroSessionUncheckedCreateWithoutUserInput>
  }

  export type PomodoroSessionCreateManyUserInputEnvelope = {
    data: PomodoroSessionCreateManyUserInput | PomodoroSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimeblockCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string
  }

  export type TimeblockUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string
  }

  export type TimeblockCreateOrConnectWithoutUserInput = {
    where: TimeblockWhereUniqueInput
    create: XOR<TimeblockCreateWithoutUserInput, TimeblockUncheckedCreateWithoutUserInput>
  }

  export type TimeblockCreateManyUserInputEnvelope = {
    data: TimeblockCreateManyUserInput | TimeblockCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    name?: StringNullableFilter<"Task"> | string | null
    isCompleted?: BoolFilter<"Task"> | boolean
    userId?: StringFilter<"Task"> | string
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
  }

  export type PomodoroSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: PomodoroSessionWhereUniqueInput
    update: XOR<PomodoroSessionUpdateWithoutUserInput, PomodoroSessionUncheckedUpdateWithoutUserInput>
    create: XOR<PomodoroSessionCreateWithoutUserInput, PomodoroSessionUncheckedCreateWithoutUserInput>
  }

  export type PomodoroSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: PomodoroSessionWhereUniqueInput
    data: XOR<PomodoroSessionUpdateWithoutUserInput, PomodoroSessionUncheckedUpdateWithoutUserInput>
  }

  export type PomodoroSessionUpdateManyWithWhereWithoutUserInput = {
    where: PomodoroSessionScalarWhereInput
    data: XOR<PomodoroSessionUpdateManyMutationInput, PomodoroSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type PomodoroSessionScalarWhereInput = {
    AND?: PomodoroSessionScalarWhereInput | PomodoroSessionScalarWhereInput[]
    OR?: PomodoroSessionScalarWhereInput[]
    NOT?: PomodoroSessionScalarWhereInput | PomodoroSessionScalarWhereInput[]
    id?: StringFilter<"PomodoroSession"> | string
    createdAt?: DateTimeFilter<"PomodoroSession"> | Date | string
    updatedAt?: DateTimeFilter<"PomodoroSession"> | Date | string
    isComplited?: BoolFilter<"PomodoroSession"> | boolean
    userId?: StringNullableFilter<"PomodoroSession"> | string | null
  }

  export type TimeblockUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeblockWhereUniqueInput
    update: XOR<TimeblockUpdateWithoutUserInput, TimeblockUncheckedUpdateWithoutUserInput>
    create: XOR<TimeblockCreateWithoutUserInput, TimeblockUncheckedCreateWithoutUserInput>
  }

  export type TimeblockUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeblockWhereUniqueInput
    data: XOR<TimeblockUpdateWithoutUserInput, TimeblockUncheckedUpdateWithoutUserInput>
  }

  export type TimeblockUpdateManyWithWhereWithoutUserInput = {
    where: TimeblockScalarWhereInput
    data: XOR<TimeblockUpdateManyMutationInput, TimeblockUncheckedUpdateManyWithoutUserInput>
  }

  export type TimeblockScalarWhereInput = {
    AND?: TimeblockScalarWhereInput | TimeblockScalarWhereInput[]
    OR?: TimeblockScalarWhereInput[]
    NOT?: TimeblockScalarWhereInput | TimeblockScalarWhereInput[]
    id?: StringFilter<"Timeblock"> | string
    createdAt?: DateTimeFilter<"Timeblock"> | Date | string
    updatedAt?: DateTimeFilter<"Timeblock"> | Date | string
    name?: StringFilter<"Timeblock"> | string
    color?: StringFilter<"Timeblock"> | string
    userId?: StringFilter<"Timeblock"> | string
  }

  export type UserCreateWithoutTaskInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number
    intervalsCount?: number
    workInterval?: number
    session?: PomodoroSessionCreateNestedManyWithoutUserInput
    timeBlock?: TimeblockCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTaskInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number
    intervalsCount?: number
    workInterval?: number
    session?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    timeBlock?: TimeblockUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTaskInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
  }

  export type UserUpsertWithoutTaskInput = {
    update: XOR<UserUpdateWithoutTaskInput, UserUncheckedUpdateWithoutTaskInput>
    create: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskInput, UserUncheckedUpdateWithoutTaskInput>
  }

  export type UserUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: IntFieldUpdateOperationsInput | number
    intervalsCount?: IntFieldUpdateOperationsInput | number
    workInterval?: IntFieldUpdateOperationsInput | number
    session?: PomodoroSessionUpdateManyWithoutUserNestedInput
    timeBlock?: TimeblockUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: IntFieldUpdateOperationsInput | number
    intervalsCount?: IntFieldUpdateOperationsInput | number
    workInterval?: IntFieldUpdateOperationsInput | number
    session?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    timeBlock?: TimeblockUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number
    intervalsCount?: number
    workInterval?: number
    task?: TaskCreateNestedManyWithoutUserInput
    timeBlock?: TimeblockCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number
    intervalsCount?: number
    workInterval?: number
    task?: TaskUncheckedCreateNestedManyWithoutUserInput
    timeBlock?: TimeblockUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type PomodoroRoundCreateWithoutPomodoroSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    allMinutes: number
    IsCompleted: boolean
  }

  export type PomodoroRoundUncheckedCreateWithoutPomodoroSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    allMinutes: number
    IsCompleted: boolean
  }

  export type PomodoroRoundCreateOrConnectWithoutPomodoroSessionInput = {
    where: PomodoroRoundWhereUniqueInput
    create: XOR<PomodoroRoundCreateWithoutPomodoroSessionInput, PomodoroRoundUncheckedCreateWithoutPomodoroSessionInput>
  }

  export type PomodoroRoundCreateManyPomodoroSessionInputEnvelope = {
    data: PomodoroRoundCreateManyPomodoroSessionInput | PomodoroRoundCreateManyPomodoroSessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: IntFieldUpdateOperationsInput | number
    intervalsCount?: IntFieldUpdateOperationsInput | number
    workInterval?: IntFieldUpdateOperationsInput | number
    task?: TaskUpdateManyWithoutUserNestedInput
    timeBlock?: TimeblockUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: IntFieldUpdateOperationsInput | number
    intervalsCount?: IntFieldUpdateOperationsInput | number
    workInterval?: IntFieldUpdateOperationsInput | number
    task?: TaskUncheckedUpdateManyWithoutUserNestedInput
    timeBlock?: TimeblockUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PomodoroRoundUpsertWithWhereUniqueWithoutPomodoroSessionInput = {
    where: PomodoroRoundWhereUniqueInput
    update: XOR<PomodoroRoundUpdateWithoutPomodoroSessionInput, PomodoroRoundUncheckedUpdateWithoutPomodoroSessionInput>
    create: XOR<PomodoroRoundCreateWithoutPomodoroSessionInput, PomodoroRoundUncheckedCreateWithoutPomodoroSessionInput>
  }

  export type PomodoroRoundUpdateWithWhereUniqueWithoutPomodoroSessionInput = {
    where: PomodoroRoundWhereUniqueInput
    data: XOR<PomodoroRoundUpdateWithoutPomodoroSessionInput, PomodoroRoundUncheckedUpdateWithoutPomodoroSessionInput>
  }

  export type PomodoroRoundUpdateManyWithWhereWithoutPomodoroSessionInput = {
    where: PomodoroRoundScalarWhereInput
    data: XOR<PomodoroRoundUpdateManyMutationInput, PomodoroRoundUncheckedUpdateManyWithoutPomodoroSessionInput>
  }

  export type PomodoroRoundScalarWhereInput = {
    AND?: PomodoroRoundScalarWhereInput | PomodoroRoundScalarWhereInput[]
    OR?: PomodoroRoundScalarWhereInput[]
    NOT?: PomodoroRoundScalarWhereInput | PomodoroRoundScalarWhereInput[]
    id?: StringFilter<"PomodoroRound"> | string
    createdAt?: DateTimeFilter<"PomodoroRound"> | Date | string
    updatedAt?: DateTimeFilter<"PomodoroRound"> | Date | string
    allMinutes?: IntFilter<"PomodoroRound"> | number
    IsCompleted?: BoolFilter<"PomodoroRound"> | boolean
    pomodoroSessionId?: StringFilter<"PomodoroRound"> | string
  }

  export type PomodoroSessionCreateWithoutRoundsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplited: boolean
    user?: UserCreateNestedOneWithoutSessionInput
  }

  export type PomodoroSessionUncheckedCreateWithoutRoundsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplited: boolean
    userId?: string | null
  }

  export type PomodoroSessionCreateOrConnectWithoutRoundsInput = {
    where: PomodoroSessionWhereUniqueInput
    create: XOR<PomodoroSessionCreateWithoutRoundsInput, PomodoroSessionUncheckedCreateWithoutRoundsInput>
  }

  export type PomodoroSessionUpsertWithoutRoundsInput = {
    update: XOR<PomodoroSessionUpdateWithoutRoundsInput, PomodoroSessionUncheckedUpdateWithoutRoundsInput>
    create: XOR<PomodoroSessionCreateWithoutRoundsInput, PomodoroSessionUncheckedCreateWithoutRoundsInput>
    where?: PomodoroSessionWhereInput
  }

  export type PomodoroSessionUpdateToOneWithWhereWithoutRoundsInput = {
    where?: PomodoroSessionWhereInput
    data: XOR<PomodoroSessionUpdateWithoutRoundsInput, PomodoroSessionUncheckedUpdateWithoutRoundsInput>
  }

  export type PomodoroSessionUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplited?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutSessionNestedInput
  }

  export type PomodoroSessionUncheckedUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplited?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutTimeBlockInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number
    intervalsCount?: number
    workInterval?: number
    task?: TaskCreateNestedManyWithoutUserInput
    session?: PomodoroSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimeBlockInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    breakInterval?: number
    intervalsCount?: number
    workInterval?: number
    task?: TaskUncheckedCreateNestedManyWithoutUserInput
    session?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimeBlockInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeBlockInput, UserUncheckedCreateWithoutTimeBlockInput>
  }

  export type UserUpsertWithoutTimeBlockInput = {
    update: XOR<UserUpdateWithoutTimeBlockInput, UserUncheckedUpdateWithoutTimeBlockInput>
    create: XOR<UserCreateWithoutTimeBlockInput, UserUncheckedCreateWithoutTimeBlockInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimeBlockInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimeBlockInput, UserUncheckedUpdateWithoutTimeBlockInput>
  }

  export type UserUpdateWithoutTimeBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: IntFieldUpdateOperationsInput | number
    intervalsCount?: IntFieldUpdateOperationsInput | number
    workInterval?: IntFieldUpdateOperationsInput | number
    task?: TaskUpdateManyWithoutUserNestedInput
    session?: PomodoroSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    breakInterval?: IntFieldUpdateOperationsInput | number
    intervalsCount?: IntFieldUpdateOperationsInput | number
    workInterval?: IntFieldUpdateOperationsInput | number
    task?: TaskUncheckedUpdateManyWithoutUserNestedInput
    session?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    isCompleted: boolean
    priority: $Enums.Priority
  }

  export type PomodoroSessionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplited: boolean
  }

  export type TimeblockCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    color?: string
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
  }

  export type PomodoroSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplited?: BoolFieldUpdateOperationsInput | boolean
    rounds?: PomodoroRoundUpdateManyWithoutPomodoroSessionNestedInput
  }

  export type PomodoroSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplited?: BoolFieldUpdateOperationsInput | boolean
    rounds?: PomodoroRoundUncheckedUpdateManyWithoutPomodoroSessionNestedInput
  }

  export type PomodoroSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplited?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TimeblockUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type TimeblockUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type TimeblockUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type PomodoroRoundCreateManyPomodoroSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    allMinutes: number
    IsCompleted: boolean
  }

  export type PomodoroRoundUpdateWithoutPomodoroSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allMinutes?: IntFieldUpdateOperationsInput | number
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PomodoroRoundUncheckedUpdateWithoutPomodoroSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allMinutes?: IntFieldUpdateOperationsInput | number
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PomodoroRoundUncheckedUpdateManyWithoutPomodoroSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allMinutes?: IntFieldUpdateOperationsInput | number
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PomodoroSessionCountOutputTypeDefaultArgs instead
     */
    export type PomodoroSessionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PomodoroSessionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PomodoroSessionDefaultArgs instead
     */
    export type PomodoroSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PomodoroSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PomodoroRoundDefaultArgs instead
     */
    export type PomodoroRoundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PomodoroRoundDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimeblockDefaultArgs instead
     */
    export type TimeblockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimeblockDefaultArgs<ExtArgs>

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