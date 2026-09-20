
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
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Guest
 * 
 */
export type Guest = $Result.DefaultSelection<Prisma.$GuestPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model OtaPlatform
 * 
 */
export type OtaPlatform = $Result.DefaultSelection<Prisma.$OtaPlatformPayload>
/**
 * Model OtaCommission
 * 
 */
export type OtaCommission = $Result.DefaultSelection<Prisma.$OtaCommissionPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model HousekeepingTask
 * 
 */
export type HousekeepingTask = $Result.DefaultSelection<Prisma.$HousekeepingTaskPayload>
/**
 * Model MaintenanceTicket
 * 
 */
export type MaintenanceTicket = $Result.DefaultSelection<Prisma.$MaintenanceTicketPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  RECEPTION: 'RECEPTION',
  MENAGE: 'MENAGE',
  MAINTENANCE: 'MAINTENANCE',
  COMPTA: 'COMPTA',
  BAR: 'BAR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const RoomStatus: {
  AVAILABLE: 'AVAILABLE',
  OCCUPIED: 'OCCUPIED',
  RESERVED: 'RESERVED',
  MAINTENANCE: 'MAINTENANCE',
  CLEANING: 'CLEANING'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]


export const ReservationSource: {
  DIRECT: 'DIRECT',
  OTA: 'OTA'
};

export type ReservationSource = (typeof ReservationSource)[keyof typeof ReservationSource]


export const ReservationStatus: {
  PLANNED: 'PLANNED',
  CONFIRMED: 'CONFIRMED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

export type ReservationSource = $Enums.ReservationSource

export const ReservationSource: typeof $Enums.ReservationSource

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

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
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **Guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.GuestDelegate<ExtArgs>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs>;

  /**
   * `prisma.otaPlatform`: Exposes CRUD operations for the **OtaPlatform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtaPlatforms
    * const otaPlatforms = await prisma.otaPlatform.findMany()
    * ```
    */
  get otaPlatform(): Prisma.OtaPlatformDelegate<ExtArgs>;

  /**
   * `prisma.otaCommission`: Exposes CRUD operations for the **OtaCommission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtaCommissions
    * const otaCommissions = await prisma.otaCommission.findMany()
    * ```
    */
  get otaCommission(): Prisma.OtaCommissionDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs>;

  /**
   * `prisma.housekeepingTask`: Exposes CRUD operations for the **HousekeepingTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HousekeepingTasks
    * const housekeepingTasks = await prisma.housekeepingTask.findMany()
    * ```
    */
  get housekeepingTask(): Prisma.HousekeepingTaskDelegate<ExtArgs>;

  /**
   * `prisma.maintenanceTicket`: Exposes CRUD operations for the **MaintenanceTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceTickets
    * const maintenanceTickets = await prisma.maintenanceTicket.findMany()
    * ```
    */
  get maintenanceTicket(): Prisma.MaintenanceTicketDelegate<ExtArgs>;
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
    Settings: 'Settings',
    Room: 'Room',
    Guest: 'Guest',
    Reservation: 'Reservation',
    OtaPlatform: 'OtaPlatform',
    OtaCommission: 'OtaCommission',
    Invoice: 'Invoice',
    HousekeepingTask: 'HousekeepingTask',
    MaintenanceTicket: 'MaintenanceTicket'
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
      modelProps: "user" | "settings" | "room" | "guest" | "reservation" | "otaPlatform" | "otaCommission" | "invoice" | "housekeepingTask" | "maintenanceTicket"
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
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Guest: {
        payload: Prisma.$GuestPayload<ExtArgs>
        fields: Prisma.GuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findFirst: {
            args: Prisma.GuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findMany: {
            args: Prisma.GuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          create: {
            args: Prisma.GuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          createMany: {
            args: Prisma.GuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          delete: {
            args: Prisma.GuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          update: {
            args: Prisma.GuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          deleteMany: {
            args: Prisma.GuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          aggregate: {
            args: Prisma.GuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuest>
          }
          groupBy: {
            args: Prisma.GuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestCountArgs<ExtArgs>
            result: $Utils.Optional<GuestCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      OtaPlatform: {
        payload: Prisma.$OtaPlatformPayload<ExtArgs>
        fields: Prisma.OtaPlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtaPlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaPlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtaPlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaPlatformPayload>
          }
          findFirst: {
            args: Prisma.OtaPlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaPlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtaPlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaPlatformPayload>
          }
          findMany: {
            args: Prisma.OtaPlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaPlatformPayload>[]
          }
          create: {
            args: Prisma.OtaPlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaPlatformPayload>
          }
          createMany: {
            args: Prisma.OtaPlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtaPlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaPlatformPayload>[]
          }
          delete: {
            args: Prisma.OtaPlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaPlatformPayload>
          }
          update: {
            args: Prisma.OtaPlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaPlatformPayload>
          }
          deleteMany: {
            args: Prisma.OtaPlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtaPlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtaPlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaPlatformPayload>
          }
          aggregate: {
            args: Prisma.OtaPlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtaPlatform>
          }
          groupBy: {
            args: Prisma.OtaPlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtaPlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtaPlatformCountArgs<ExtArgs>
            result: $Utils.Optional<OtaPlatformCountAggregateOutputType> | number
          }
        }
      }
      OtaCommission: {
        payload: Prisma.$OtaCommissionPayload<ExtArgs>
        fields: Prisma.OtaCommissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtaCommissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaCommissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtaCommissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaCommissionPayload>
          }
          findFirst: {
            args: Prisma.OtaCommissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaCommissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtaCommissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaCommissionPayload>
          }
          findMany: {
            args: Prisma.OtaCommissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaCommissionPayload>[]
          }
          create: {
            args: Prisma.OtaCommissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaCommissionPayload>
          }
          createMany: {
            args: Prisma.OtaCommissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtaCommissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaCommissionPayload>[]
          }
          delete: {
            args: Prisma.OtaCommissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaCommissionPayload>
          }
          update: {
            args: Prisma.OtaCommissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaCommissionPayload>
          }
          deleteMany: {
            args: Prisma.OtaCommissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtaCommissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtaCommissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaCommissionPayload>
          }
          aggregate: {
            args: Prisma.OtaCommissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtaCommission>
          }
          groupBy: {
            args: Prisma.OtaCommissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtaCommissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtaCommissionCountArgs<ExtArgs>
            result: $Utils.Optional<OtaCommissionCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      HousekeepingTask: {
        payload: Prisma.$HousekeepingTaskPayload<ExtArgs>
        fields: Prisma.HousekeepingTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HousekeepingTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousekeepingTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HousekeepingTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousekeepingTaskPayload>
          }
          findFirst: {
            args: Prisma.HousekeepingTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousekeepingTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HousekeepingTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousekeepingTaskPayload>
          }
          findMany: {
            args: Prisma.HousekeepingTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousekeepingTaskPayload>[]
          }
          create: {
            args: Prisma.HousekeepingTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousekeepingTaskPayload>
          }
          createMany: {
            args: Prisma.HousekeepingTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HousekeepingTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousekeepingTaskPayload>[]
          }
          delete: {
            args: Prisma.HousekeepingTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousekeepingTaskPayload>
          }
          update: {
            args: Prisma.HousekeepingTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousekeepingTaskPayload>
          }
          deleteMany: {
            args: Prisma.HousekeepingTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HousekeepingTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HousekeepingTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousekeepingTaskPayload>
          }
          aggregate: {
            args: Prisma.HousekeepingTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHousekeepingTask>
          }
          groupBy: {
            args: Prisma.HousekeepingTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<HousekeepingTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.HousekeepingTaskCountArgs<ExtArgs>
            result: $Utils.Optional<HousekeepingTaskCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceTicket: {
        payload: Prisma.$MaintenanceTicketPayload<ExtArgs>
        fields: Prisma.MaintenanceTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>
          }
          findMany: {
            args: Prisma.MaintenanceTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>[]
          }
          create: {
            args: Prisma.MaintenanceTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>
          }
          createMany: {
            args: Prisma.MaintenanceTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>
          }
          update: {
            args: Prisma.MaintenanceTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaintenanceTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceTicket>
          }
          groupBy: {
            args: Prisma.MaintenanceTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceTicketCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceTicketCountAggregateOutputType> | number
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
    tasks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
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
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HousekeepingTaskWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    reservations: number
    maintenance: number
    housekeeping: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | RoomCountOutputTypeCountReservationsArgs
    maintenance?: boolean | RoomCountOutputTypeCountMaintenanceArgs
    housekeeping?: boolean | RoomCountOutputTypeCountHousekeepingArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMaintenanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceTicketWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountHousekeepingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HousekeepingTaskWhereInput
  }


  /**
   * Count Type GuestCountOutputType
   */

  export type GuestCountOutputType = {
    reservations: number
  }

  export type GuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | GuestCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestCountOutputType
     */
    select?: GuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type OtaPlatformCountOutputType
   */

  export type OtaPlatformCountOutputType = {
    reservations: number
  }

  export type OtaPlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | OtaPlatformCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * OtaPlatformCountOutputType without action
   */
  export type OtaPlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaPlatformCountOutputType
     */
    select?: OtaPlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OtaPlatformCountOutputType without action
   */
  export type OtaPlatformCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Models
   */

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
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
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
    email: string
    password: string
    name: string
    role: $Enums.Role
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
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    tasks?: boolean | User$tasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | User$tasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tasks: Prisma.$HousekeepingTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.Role
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
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousekeepingTaskPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousekeepingTask
     */
    select?: HousekeepingTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousekeepingTaskInclude<ExtArgs> | null
    where?: HousekeepingTaskWhereInput
    orderBy?: HousekeepingTaskOrderByWithRelationInput | HousekeepingTaskOrderByWithRelationInput[]
    cursor?: HousekeepingTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HousekeepingTaskScalarFieldEnum | HousekeepingTaskScalarFieldEnum[]
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
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    id: number | null
    vatRate: number | null
    touristTax: number | null
    exchangeRateEUR: number | null
    exchangeRateUSD: number | null
  }

  export type SettingsSumAggregateOutputType = {
    id: number | null
    vatRate: number | null
    touristTax: number | null
    exchangeRateEUR: number | null
    exchangeRateUSD: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: number | null
    vatRate: number | null
    touristTax: number | null
    exchangeRateEUR: number | null
    exchangeRateUSD: number | null
    updatedAt: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: number | null
    vatRate: number | null
    touristTax: number | null
    exchangeRateEUR: number | null
    exchangeRateUSD: number | null
    updatedAt: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    vatRate: number
    touristTax: number
    exchangeRateEUR: number
    exchangeRateUSD: number
    updatedAt: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    id?: true
    vatRate?: true
    touristTax?: true
    exchangeRateEUR?: true
    exchangeRateUSD?: true
  }

  export type SettingsSumAggregateInputType = {
    id?: true
    vatRate?: true
    touristTax?: true
    exchangeRateEUR?: true
    exchangeRateUSD?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    vatRate?: true
    touristTax?: true
    exchangeRateEUR?: true
    exchangeRateUSD?: true
    updatedAt?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    vatRate?: true
    touristTax?: true
    exchangeRateEUR?: true
    exchangeRateUSD?: true
    updatedAt?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    vatRate?: true
    touristTax?: true
    exchangeRateEUR?: true
    exchangeRateUSD?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: number
    vatRate: number
    touristTax: number
    exchangeRateEUR: number
    exchangeRateUSD: number
    updatedAt: Date
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vatRate?: boolean
    touristTax?: boolean
    exchangeRateEUR?: boolean
    exchangeRateUSD?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vatRate?: boolean
    touristTax?: boolean
    exchangeRateEUR?: boolean
    exchangeRateUSD?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    vatRate?: boolean
    touristTax?: boolean
    exchangeRateEUR?: boolean
    exchangeRateUSD?: boolean
    updatedAt?: boolean
  }


  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vatRate: number
      touristTax: number
      exchangeRateEUR: number
      exchangeRateUSD: number
      updatedAt: Date
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
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
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Settings model
   */ 
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'Int'>
    readonly vatRate: FieldRef<"Settings", 'Float'>
    readonly touristTax: FieldRef<"Settings", 'Float'>
    readonly exchangeRateEUR: FieldRef<"Settings", 'Float'>
    readonly exchangeRateUSD: FieldRef<"Settings", 'Float'>
    readonly updatedAt: FieldRef<"Settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    capacity: number | null
    basePriceMGA: number | null
  }

  export type RoomSumAggregateOutputType = {
    capacity: number | null
    basePriceMGA: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    number: string | null
    name: string | null
    type: string | null
    capacity: number | null
    basePriceMGA: number | null
    status: $Enums.RoomStatus | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    number: string | null
    name: string | null
    type: string | null
    capacity: number | null
    basePriceMGA: number | null
    status: $Enums.RoomStatus | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    number: number
    name: number
    type: number
    capacity: number
    basePriceMGA: number
    status: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    capacity?: true
    basePriceMGA?: true
  }

  export type RoomSumAggregateInputType = {
    capacity?: true
    basePriceMGA?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    number?: true
    name?: true
    type?: true
    capacity?: true
    basePriceMGA?: true
    status?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    number?: true
    name?: true
    type?: true
    capacity?: true
    basePriceMGA?: true
    status?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    number?: true
    name?: true
    type?: true
    capacity?: true
    basePriceMGA?: true
    status?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    number: string
    name: string | null
    type: string
    capacity: number
    basePriceMGA: number
    status: $Enums.RoomStatus
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    name?: boolean
    type?: boolean
    capacity?: boolean
    basePriceMGA?: boolean
    status?: boolean
    reservations?: boolean | Room$reservationsArgs<ExtArgs>
    maintenance?: boolean | Room$maintenanceArgs<ExtArgs>
    housekeeping?: boolean | Room$housekeepingArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    name?: boolean
    type?: boolean
    capacity?: boolean
    basePriceMGA?: boolean
    status?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    number?: boolean
    name?: boolean
    type?: boolean
    capacity?: boolean
    basePriceMGA?: boolean
    status?: boolean
  }

  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Room$reservationsArgs<ExtArgs>
    maintenance?: boolean | Room$maintenanceArgs<ExtArgs>
    housekeeping?: boolean | Room$housekeepingArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      maintenance: Prisma.$MaintenanceTicketPayload<ExtArgs>[]
      housekeeping: Prisma.$HousekeepingTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      name: string | null
      type: string
      capacity: number
      basePriceMGA: number
      status: $Enums.RoomStatus
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Room$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Room$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany"> | Null>
    maintenance<T extends Room$maintenanceArgs<ExtArgs> = {}>(args?: Subset<T, Room$maintenanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "findMany"> | Null>
    housekeeping<T extends Room$housekeepingArgs<ExtArgs> = {}>(args?: Subset<T, Room$housekeepingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousekeepingTaskPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Room model
   */ 
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly number: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly type: FieldRef<"Room", 'String'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly basePriceMGA: FieldRef<"Room", 'Float'>
    readonly status: FieldRef<"Room", 'RoomStatus'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
  }

  /**
   * Room.reservations
   */
  export type Room$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Room.maintenance
   */
  export type Room$maintenanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    where?: MaintenanceTicketWhereInput
    orderBy?: MaintenanceTicketOrderByWithRelationInput | MaintenanceTicketOrderByWithRelationInput[]
    cursor?: MaintenanceTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceTicketScalarFieldEnum | MaintenanceTicketScalarFieldEnum[]
  }

  /**
   * Room.housekeeping
   */
  export type Room$housekeepingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousekeepingTask
     */
    select?: HousekeepingTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousekeepingTaskInclude<ExtArgs> | null
    where?: HousekeepingTaskWhereInput
    orderBy?: HousekeepingTaskOrderByWithRelationInput | HousekeepingTaskOrderByWithRelationInput[]
    cursor?: HousekeepingTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HousekeepingTaskScalarFieldEnum | HousekeepingTaskScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    country: string | null
    guestType: string | null
  }

  export type GuestMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    country: string | null
    guestType: string | null
  }

  export type GuestCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    country: number
    guestType: number
    _all: number
  }


  export type GuestMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    country?: true
    guestType?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    country?: true
    guestType?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    country?: true
    guestType?: true
    _all?: true
  }

  export type GuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guest to aggregate.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guests
    **/
    _count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
        [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }




  export type GuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithAggregationInput | GuestOrderByWithAggregationInput[]
    by: GuestScalarFieldEnum[] | GuestScalarFieldEnum
    having?: GuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestCountAggregateInputType | true
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }

  export type GuestGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string | null
    phone: string | null
    country: string | null
    guestType: string
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestGroupByOutputType[P]>
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
        }
      >
    >


  export type GuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    guestType?: boolean
    reservations?: boolean | Guest$reservationsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    guestType?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    guestType?: boolean
  }

  export type GuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Guest$reservationsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guest"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string | null
      phone: string | null
      country: string | null
      guestType: string
    }, ExtArgs["result"]["guest"]>
    composites: {}
  }

  type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = $Result.GetResult<Prisma.$GuestPayload, S>

  type GuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GuestCountAggregateInputType | true
    }

  export interface GuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guest'], meta: { name: 'Guest' } }
    /**
     * Find zero or one Guest that matches the filter.
     * @param {GuestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestFindUniqueArgs>(args: SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Guest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GuestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestFindFirstArgs>(args?: SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestFindManyArgs>(args?: SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Guest.
     * @param {GuestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
     */
    create<T extends GuestCreateArgs>(args: SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Guests.
     * @param {GuestCreateManyArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestCreateManyArgs>(args?: SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guests and returns the data saved in the database.
     * @param {GuestCreateManyAndReturnArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Guest.
     * @param {GuestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
     */
    delete<T extends GuestDeleteArgs>(args: SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Guest.
     * @param {GuestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestUpdateArgs>(args: SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Guests.
     * @param {GuestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestDeleteManyArgs>(args?: SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestUpdateManyArgs>(args: SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Guest.
     * @param {GuestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
     */
    upsert<T extends GuestUpsertArgs>(args: SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends GuestCountArgs>(
      args?: Subset<T, GuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestGroupByArgs} args - Group by arguments.
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
      T extends GuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestGroupByArgs['orderBy'] }
        : { orderBy?: GuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guest model
   */
  readonly fields: GuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Guest$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Guest model
   */ 
  interface GuestFieldRefs {
    readonly id: FieldRef<"Guest", 'String'>
    readonly firstName: FieldRef<"Guest", 'String'>
    readonly lastName: FieldRef<"Guest", 'String'>
    readonly email: FieldRef<"Guest", 'String'>
    readonly phone: FieldRef<"Guest", 'String'>
    readonly country: FieldRef<"Guest", 'String'>
    readonly guestType: FieldRef<"Guest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Guest findUnique
   */
  export type GuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findUniqueOrThrow
   */
  export type GuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findFirst
   */
  export type GuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findFirstOrThrow
   */
  export type GuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findMany
   */
  export type GuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guests to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest create
   */
  export type GuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Guest.
     */
    data: XOR<GuestCreateInput, GuestUncheckedCreateInput>
  }

  /**
   * Guest createMany
   */
  export type GuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest createManyAndReturn
   */
  export type GuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest update
   */
  export type GuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Guest.
     */
    data: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
    /**
     * Choose, which Guest to update.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest updateMany
   */
  export type GuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
  }

  /**
   * Guest upsert
   */
  export type GuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Guest to update in case it exists.
     */
    where: GuestWhereUniqueInput
    /**
     * In case the Guest found by the `where` argument doesn't exist, create a new Guest with this data.
     */
    create: XOR<GuestCreateInput, GuestUncheckedCreateInput>
    /**
     * In case the Guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
  }

  /**
   * Guest delete
   */
  export type GuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter which Guest to delete.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest deleteMany
   */
  export type GuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guests to delete
     */
    where?: GuestWhereInput
  }

  /**
   * Guest.reservations
   */
  export type Guest$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Guest without action
   */
  export type GuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    guestsCount: number | null
  }

  export type ReservationSumAggregateOutputType = {
    guestsCount: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    guestId: string | null
    roomId: string | null
    checkIn: Date | null
    checkOut: Date | null
    guestsCount: number | null
    source: $Enums.ReservationSource | null
    status: $Enums.ReservationStatus | null
    otaPlatformId: string | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    guestId: string | null
    roomId: string | null
    checkIn: Date | null
    checkOut: Date | null
    guestsCount: number | null
    source: $Enums.ReservationSource | null
    status: $Enums.ReservationStatus | null
    otaPlatformId: string | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    guestId: number
    roomId: number
    checkIn: number
    checkOut: number
    guestsCount: number
    source: number
    status: number
    otaPlatformId: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    guestsCount?: true
  }

  export type ReservationSumAggregateInputType = {
    guestsCount?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    guestId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    guestsCount?: true
    source?: true
    status?: true
    otaPlatformId?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    guestId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    guestsCount?: true
    source?: true
    status?: true
    otaPlatformId?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    guestId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    guestsCount?: true
    source?: true
    status?: true
    otaPlatformId?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    guestId: string
    roomId: string
    checkIn: Date
    checkOut: Date
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    otaPlatformId: string | null
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guestsCount?: boolean
    source?: boolean
    status?: boolean
    otaPlatformId?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    otaPlatform?: boolean | Reservation$otaPlatformArgs<ExtArgs>
    invoice?: boolean | Reservation$invoiceArgs<ExtArgs>
    otaCommission?: boolean | Reservation$otaCommissionArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guestsCount?: boolean
    source?: boolean
    status?: boolean
    otaPlatformId?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    otaPlatform?: boolean | Reservation$otaPlatformArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    guestId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guestsCount?: boolean
    source?: boolean
    status?: boolean
    otaPlatformId?: boolean
  }

  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    otaPlatform?: boolean | Reservation$otaPlatformArgs<ExtArgs>
    invoice?: boolean | Reservation$invoiceArgs<ExtArgs>
    otaCommission?: boolean | Reservation$otaCommissionArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    otaPlatform?: boolean | Reservation$otaPlatformArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      guest: Prisma.$GuestPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      otaPlatform: Prisma.$OtaPlatformPayload<ExtArgs> | null
      invoice: Prisma.$InvoicePayload<ExtArgs> | null
      otaCommission: Prisma.$OtaCommissionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guestId: string
      roomId: string
      checkIn: Date
      checkOut: Date
      guestsCount: number
      source: $Enums.ReservationSource
      status: $Enums.ReservationStatus
      otaPlatformId: string | null
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    otaPlatform<T extends Reservation$otaPlatformArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$otaPlatformArgs<ExtArgs>>): Prisma__OtaPlatformClient<$Result.GetResult<Prisma.$OtaPlatformPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    invoice<T extends Reservation$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$invoiceArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    otaCommission<T extends Reservation$otaCommissionArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$otaCommissionArgs<ExtArgs>>): Prisma__OtaCommissionClient<$Result.GetResult<Prisma.$OtaCommissionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Reservation model
   */ 
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly guestId: FieldRef<"Reservation", 'String'>
    readonly roomId: FieldRef<"Reservation", 'String'>
    readonly checkIn: FieldRef<"Reservation", 'DateTime'>
    readonly checkOut: FieldRef<"Reservation", 'DateTime'>
    readonly guestsCount: FieldRef<"Reservation", 'Int'>
    readonly source: FieldRef<"Reservation", 'ReservationSource'>
    readonly status: FieldRef<"Reservation", 'ReservationStatus'>
    readonly otaPlatformId: FieldRef<"Reservation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
  }

  /**
   * Reservation.otaPlatform
   */
  export type Reservation$otaPlatformArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaPlatform
     */
    select?: OtaPlatformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaPlatformInclude<ExtArgs> | null
    where?: OtaPlatformWhereInput
  }

  /**
   * Reservation.invoice
   */
  export type Reservation$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
  }

  /**
   * Reservation.otaCommission
   */
  export type Reservation$otaCommissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaCommission
     */
    select?: OtaCommissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaCommissionInclude<ExtArgs> | null
    where?: OtaCommissionWhereInput
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model OtaPlatform
   */

  export type AggregateOtaPlatform = {
    _count: OtaPlatformCountAggregateOutputType | null
    _avg: OtaPlatformAvgAggregateOutputType | null
    _sum: OtaPlatformSumAggregateOutputType | null
    _min: OtaPlatformMinAggregateOutputType | null
    _max: OtaPlatformMaxAggregateOutputType | null
  }

  export type OtaPlatformAvgAggregateOutputType = {
    commissionRate: number | null
  }

  export type OtaPlatformSumAggregateOutputType = {
    commissionRate: number | null
  }

  export type OtaPlatformMinAggregateOutputType = {
    id: string | null
    name: string | null
    commissionType: string | null
    commissionRate: number | null
  }

  export type OtaPlatformMaxAggregateOutputType = {
    id: string | null
    name: string | null
    commissionType: string | null
    commissionRate: number | null
  }

  export type OtaPlatformCountAggregateOutputType = {
    id: number
    name: number
    commissionType: number
    commissionRate: number
    _all: number
  }


  export type OtaPlatformAvgAggregateInputType = {
    commissionRate?: true
  }

  export type OtaPlatformSumAggregateInputType = {
    commissionRate?: true
  }

  export type OtaPlatformMinAggregateInputType = {
    id?: true
    name?: true
    commissionType?: true
    commissionRate?: true
  }

  export type OtaPlatformMaxAggregateInputType = {
    id?: true
    name?: true
    commissionType?: true
    commissionRate?: true
  }

  export type OtaPlatformCountAggregateInputType = {
    id?: true
    name?: true
    commissionType?: true
    commissionRate?: true
    _all?: true
  }

  export type OtaPlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtaPlatform to aggregate.
     */
    where?: OtaPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtaPlatforms to fetch.
     */
    orderBy?: OtaPlatformOrderByWithRelationInput | OtaPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtaPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtaPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtaPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtaPlatforms
    **/
    _count?: true | OtaPlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtaPlatformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtaPlatformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtaPlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtaPlatformMaxAggregateInputType
  }

  export type GetOtaPlatformAggregateType<T extends OtaPlatformAggregateArgs> = {
        [P in keyof T & keyof AggregateOtaPlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtaPlatform[P]>
      : GetScalarType<T[P], AggregateOtaPlatform[P]>
  }




  export type OtaPlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtaPlatformWhereInput
    orderBy?: OtaPlatformOrderByWithAggregationInput | OtaPlatformOrderByWithAggregationInput[]
    by: OtaPlatformScalarFieldEnum[] | OtaPlatformScalarFieldEnum
    having?: OtaPlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtaPlatformCountAggregateInputType | true
    _avg?: OtaPlatformAvgAggregateInputType
    _sum?: OtaPlatformSumAggregateInputType
    _min?: OtaPlatformMinAggregateInputType
    _max?: OtaPlatformMaxAggregateInputType
  }

  export type OtaPlatformGroupByOutputType = {
    id: string
    name: string
    commissionType: string
    commissionRate: number
    _count: OtaPlatformCountAggregateOutputType | null
    _avg: OtaPlatformAvgAggregateOutputType | null
    _sum: OtaPlatformSumAggregateOutputType | null
    _min: OtaPlatformMinAggregateOutputType | null
    _max: OtaPlatformMaxAggregateOutputType | null
  }

  type GetOtaPlatformGroupByPayload<T extends OtaPlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtaPlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtaPlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtaPlatformGroupByOutputType[P]>
            : GetScalarType<T[P], OtaPlatformGroupByOutputType[P]>
        }
      >
    >


  export type OtaPlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    commissionType?: boolean
    commissionRate?: boolean
    reservations?: boolean | OtaPlatform$reservationsArgs<ExtArgs>
    _count?: boolean | OtaPlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otaPlatform"]>

  export type OtaPlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    commissionType?: boolean
    commissionRate?: boolean
  }, ExtArgs["result"]["otaPlatform"]>

  export type OtaPlatformSelectScalar = {
    id?: boolean
    name?: boolean
    commissionType?: boolean
    commissionRate?: boolean
  }

  export type OtaPlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | OtaPlatform$reservationsArgs<ExtArgs>
    _count?: boolean | OtaPlatformCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OtaPlatformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OtaPlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtaPlatform"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      commissionType: string
      commissionRate: number
    }, ExtArgs["result"]["otaPlatform"]>
    composites: {}
  }

  type OtaPlatformGetPayload<S extends boolean | null | undefined | OtaPlatformDefaultArgs> = $Result.GetResult<Prisma.$OtaPlatformPayload, S>

  type OtaPlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OtaPlatformFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OtaPlatformCountAggregateInputType | true
    }

  export interface OtaPlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtaPlatform'], meta: { name: 'OtaPlatform' } }
    /**
     * Find zero or one OtaPlatform that matches the filter.
     * @param {OtaPlatformFindUniqueArgs} args - Arguments to find a OtaPlatform
     * @example
     * // Get one OtaPlatform
     * const otaPlatform = await prisma.otaPlatform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtaPlatformFindUniqueArgs>(args: SelectSubset<T, OtaPlatformFindUniqueArgs<ExtArgs>>): Prisma__OtaPlatformClient<$Result.GetResult<Prisma.$OtaPlatformPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OtaPlatform that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OtaPlatformFindUniqueOrThrowArgs} args - Arguments to find a OtaPlatform
     * @example
     * // Get one OtaPlatform
     * const otaPlatform = await prisma.otaPlatform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtaPlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, OtaPlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtaPlatformClient<$Result.GetResult<Prisma.$OtaPlatformPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OtaPlatform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaPlatformFindFirstArgs} args - Arguments to find a OtaPlatform
     * @example
     * // Get one OtaPlatform
     * const otaPlatform = await prisma.otaPlatform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtaPlatformFindFirstArgs>(args?: SelectSubset<T, OtaPlatformFindFirstArgs<ExtArgs>>): Prisma__OtaPlatformClient<$Result.GetResult<Prisma.$OtaPlatformPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OtaPlatform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaPlatformFindFirstOrThrowArgs} args - Arguments to find a OtaPlatform
     * @example
     * // Get one OtaPlatform
     * const otaPlatform = await prisma.otaPlatform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtaPlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, OtaPlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtaPlatformClient<$Result.GetResult<Prisma.$OtaPlatformPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OtaPlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaPlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtaPlatforms
     * const otaPlatforms = await prisma.otaPlatform.findMany()
     * 
     * // Get first 10 OtaPlatforms
     * const otaPlatforms = await prisma.otaPlatform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otaPlatformWithIdOnly = await prisma.otaPlatform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtaPlatformFindManyArgs>(args?: SelectSubset<T, OtaPlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtaPlatformPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OtaPlatform.
     * @param {OtaPlatformCreateArgs} args - Arguments to create a OtaPlatform.
     * @example
     * // Create one OtaPlatform
     * const OtaPlatform = await prisma.otaPlatform.create({
     *   data: {
     *     // ... data to create a OtaPlatform
     *   }
     * })
     * 
     */
    create<T extends OtaPlatformCreateArgs>(args: SelectSubset<T, OtaPlatformCreateArgs<ExtArgs>>): Prisma__OtaPlatformClient<$Result.GetResult<Prisma.$OtaPlatformPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OtaPlatforms.
     * @param {OtaPlatformCreateManyArgs} args - Arguments to create many OtaPlatforms.
     * @example
     * // Create many OtaPlatforms
     * const otaPlatform = await prisma.otaPlatform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtaPlatformCreateManyArgs>(args?: SelectSubset<T, OtaPlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtaPlatforms and returns the data saved in the database.
     * @param {OtaPlatformCreateManyAndReturnArgs} args - Arguments to create many OtaPlatforms.
     * @example
     * // Create many OtaPlatforms
     * const otaPlatform = await prisma.otaPlatform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtaPlatforms and only return the `id`
     * const otaPlatformWithIdOnly = await prisma.otaPlatform.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtaPlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, OtaPlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtaPlatformPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OtaPlatform.
     * @param {OtaPlatformDeleteArgs} args - Arguments to delete one OtaPlatform.
     * @example
     * // Delete one OtaPlatform
     * const OtaPlatform = await prisma.otaPlatform.delete({
     *   where: {
     *     // ... filter to delete one OtaPlatform
     *   }
     * })
     * 
     */
    delete<T extends OtaPlatformDeleteArgs>(args: SelectSubset<T, OtaPlatformDeleteArgs<ExtArgs>>): Prisma__OtaPlatformClient<$Result.GetResult<Prisma.$OtaPlatformPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OtaPlatform.
     * @param {OtaPlatformUpdateArgs} args - Arguments to update one OtaPlatform.
     * @example
     * // Update one OtaPlatform
     * const otaPlatform = await prisma.otaPlatform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtaPlatformUpdateArgs>(args: SelectSubset<T, OtaPlatformUpdateArgs<ExtArgs>>): Prisma__OtaPlatformClient<$Result.GetResult<Prisma.$OtaPlatformPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OtaPlatforms.
     * @param {OtaPlatformDeleteManyArgs} args - Arguments to filter OtaPlatforms to delete.
     * @example
     * // Delete a few OtaPlatforms
     * const { count } = await prisma.otaPlatform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtaPlatformDeleteManyArgs>(args?: SelectSubset<T, OtaPlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtaPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaPlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtaPlatforms
     * const otaPlatform = await prisma.otaPlatform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtaPlatformUpdateManyArgs>(args: SelectSubset<T, OtaPlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OtaPlatform.
     * @param {OtaPlatformUpsertArgs} args - Arguments to update or create a OtaPlatform.
     * @example
     * // Update or create a OtaPlatform
     * const otaPlatform = await prisma.otaPlatform.upsert({
     *   create: {
     *     // ... data to create a OtaPlatform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtaPlatform we want to update
     *   }
     * })
     */
    upsert<T extends OtaPlatformUpsertArgs>(args: SelectSubset<T, OtaPlatformUpsertArgs<ExtArgs>>): Prisma__OtaPlatformClient<$Result.GetResult<Prisma.$OtaPlatformPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OtaPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaPlatformCountArgs} args - Arguments to filter OtaPlatforms to count.
     * @example
     * // Count the number of OtaPlatforms
     * const count = await prisma.otaPlatform.count({
     *   where: {
     *     // ... the filter for the OtaPlatforms we want to count
     *   }
     * })
    **/
    count<T extends OtaPlatformCountArgs>(
      args?: Subset<T, OtaPlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtaPlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtaPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaPlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtaPlatformAggregateArgs>(args: Subset<T, OtaPlatformAggregateArgs>): Prisma.PrismaPromise<GetOtaPlatformAggregateType<T>>

    /**
     * Group by OtaPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaPlatformGroupByArgs} args - Group by arguments.
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
      T extends OtaPlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtaPlatformGroupByArgs['orderBy'] }
        : { orderBy?: OtaPlatformGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtaPlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtaPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtaPlatform model
   */
  readonly fields: OtaPlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtaPlatform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtaPlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends OtaPlatform$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, OtaPlatform$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the OtaPlatform model
   */ 
  interface OtaPlatformFieldRefs {
    readonly id: FieldRef<"OtaPlatform", 'String'>
    readonly name: FieldRef<"OtaPlatform", 'String'>
    readonly commissionType: FieldRef<"OtaPlatform", 'String'>
    readonly commissionRate: FieldRef<"OtaPlatform", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * OtaPlatform findUnique
   */
  export type OtaPlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaPlatform
     */
    select?: OtaPlatformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaPlatformInclude<ExtArgs> | null
    /**
     * Filter, which OtaPlatform to fetch.
     */
    where: OtaPlatformWhereUniqueInput
  }

  /**
   * OtaPlatform findUniqueOrThrow
   */
  export type OtaPlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaPlatform
     */
    select?: OtaPlatformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaPlatformInclude<ExtArgs> | null
    /**
     * Filter, which OtaPlatform to fetch.
     */
    where: OtaPlatformWhereUniqueInput
  }

  /**
   * OtaPlatform findFirst
   */
  export type OtaPlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaPlatform
     */
    select?: OtaPlatformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaPlatformInclude<ExtArgs> | null
    /**
     * Filter, which OtaPlatform to fetch.
     */
    where?: OtaPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtaPlatforms to fetch.
     */
    orderBy?: OtaPlatformOrderByWithRelationInput | OtaPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtaPlatforms.
     */
    cursor?: OtaPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtaPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtaPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtaPlatforms.
     */
    distinct?: OtaPlatformScalarFieldEnum | OtaPlatformScalarFieldEnum[]
  }

  /**
   * OtaPlatform findFirstOrThrow
   */
  export type OtaPlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaPlatform
     */
    select?: OtaPlatformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaPlatformInclude<ExtArgs> | null
    /**
     * Filter, which OtaPlatform to fetch.
     */
    where?: OtaPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtaPlatforms to fetch.
     */
    orderBy?: OtaPlatformOrderByWithRelationInput | OtaPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtaPlatforms.
     */
    cursor?: OtaPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtaPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtaPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtaPlatforms.
     */
    distinct?: OtaPlatformScalarFieldEnum | OtaPlatformScalarFieldEnum[]
  }

  /**
   * OtaPlatform findMany
   */
  export type OtaPlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaPlatform
     */
    select?: OtaPlatformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaPlatformInclude<ExtArgs> | null
    /**
     * Filter, which OtaPlatforms to fetch.
     */
    where?: OtaPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtaPlatforms to fetch.
     */
    orderBy?: OtaPlatformOrderByWithRelationInput | OtaPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtaPlatforms.
     */
    cursor?: OtaPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtaPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtaPlatforms.
     */
    skip?: number
    distinct?: OtaPlatformScalarFieldEnum | OtaPlatformScalarFieldEnum[]
  }

  /**
   * OtaPlatform create
   */
  export type OtaPlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaPlatform
     */
    select?: OtaPlatformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaPlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a OtaPlatform.
     */
    data: XOR<OtaPlatformCreateInput, OtaPlatformUncheckedCreateInput>
  }

  /**
   * OtaPlatform createMany
   */
  export type OtaPlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtaPlatforms.
     */
    data: OtaPlatformCreateManyInput | OtaPlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtaPlatform createManyAndReturn
   */
  export type OtaPlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaPlatform
     */
    select?: OtaPlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OtaPlatforms.
     */
    data: OtaPlatformCreateManyInput | OtaPlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtaPlatform update
   */
  export type OtaPlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaPlatform
     */
    select?: OtaPlatformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaPlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a OtaPlatform.
     */
    data: XOR<OtaPlatformUpdateInput, OtaPlatformUncheckedUpdateInput>
    /**
     * Choose, which OtaPlatform to update.
     */
    where: OtaPlatformWhereUniqueInput
  }

  /**
   * OtaPlatform updateMany
   */
  export type OtaPlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtaPlatforms.
     */
    data: XOR<OtaPlatformUpdateManyMutationInput, OtaPlatformUncheckedUpdateManyInput>
    /**
     * Filter which OtaPlatforms to update
     */
    where?: OtaPlatformWhereInput
  }

  /**
   * OtaPlatform upsert
   */
  export type OtaPlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaPlatform
     */
    select?: OtaPlatformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaPlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the OtaPlatform to update in case it exists.
     */
    where: OtaPlatformWhereUniqueInput
    /**
     * In case the OtaPlatform found by the `where` argument doesn't exist, create a new OtaPlatform with this data.
     */
    create: XOR<OtaPlatformCreateInput, OtaPlatformUncheckedCreateInput>
    /**
     * In case the OtaPlatform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtaPlatformUpdateInput, OtaPlatformUncheckedUpdateInput>
  }

  /**
   * OtaPlatform delete
   */
  export type OtaPlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaPlatform
     */
    select?: OtaPlatformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaPlatformInclude<ExtArgs> | null
    /**
     * Filter which OtaPlatform to delete.
     */
    where: OtaPlatformWhereUniqueInput
  }

  /**
   * OtaPlatform deleteMany
   */
  export type OtaPlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtaPlatforms to delete
     */
    where?: OtaPlatformWhereInput
  }

  /**
   * OtaPlatform.reservations
   */
  export type OtaPlatform$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * OtaPlatform without action
   */
  export type OtaPlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaPlatform
     */
    select?: OtaPlatformSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaPlatformInclude<ExtArgs> | null
  }


  /**
   * Model OtaCommission
   */

  export type AggregateOtaCommission = {
    _count: OtaCommissionCountAggregateOutputType | null
    _avg: OtaCommissionAvgAggregateOutputType | null
    _sum: OtaCommissionSumAggregateOutputType | null
    _min: OtaCommissionMinAggregateOutputType | null
    _max: OtaCommissionMaxAggregateOutputType | null
  }

  export type OtaCommissionAvgAggregateOutputType = {
    amountMGA: number | null
  }

  export type OtaCommissionSumAggregateOutputType = {
    amountMGA: number | null
  }

  export type OtaCommissionMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    amountMGA: number | null
    status: string | null
  }

  export type OtaCommissionMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    amountMGA: number | null
    status: string | null
  }

  export type OtaCommissionCountAggregateOutputType = {
    id: number
    reservationId: number
    amountMGA: number
    status: number
    _all: number
  }


  export type OtaCommissionAvgAggregateInputType = {
    amountMGA?: true
  }

  export type OtaCommissionSumAggregateInputType = {
    amountMGA?: true
  }

  export type OtaCommissionMinAggregateInputType = {
    id?: true
    reservationId?: true
    amountMGA?: true
    status?: true
  }

  export type OtaCommissionMaxAggregateInputType = {
    id?: true
    reservationId?: true
    amountMGA?: true
    status?: true
  }

  export type OtaCommissionCountAggregateInputType = {
    id?: true
    reservationId?: true
    amountMGA?: true
    status?: true
    _all?: true
  }

  export type OtaCommissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtaCommission to aggregate.
     */
    where?: OtaCommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtaCommissions to fetch.
     */
    orderBy?: OtaCommissionOrderByWithRelationInput | OtaCommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtaCommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtaCommissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtaCommissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtaCommissions
    **/
    _count?: true | OtaCommissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtaCommissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtaCommissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtaCommissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtaCommissionMaxAggregateInputType
  }

  export type GetOtaCommissionAggregateType<T extends OtaCommissionAggregateArgs> = {
        [P in keyof T & keyof AggregateOtaCommission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtaCommission[P]>
      : GetScalarType<T[P], AggregateOtaCommission[P]>
  }




  export type OtaCommissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtaCommissionWhereInput
    orderBy?: OtaCommissionOrderByWithAggregationInput | OtaCommissionOrderByWithAggregationInput[]
    by: OtaCommissionScalarFieldEnum[] | OtaCommissionScalarFieldEnum
    having?: OtaCommissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtaCommissionCountAggregateInputType | true
    _avg?: OtaCommissionAvgAggregateInputType
    _sum?: OtaCommissionSumAggregateInputType
    _min?: OtaCommissionMinAggregateInputType
    _max?: OtaCommissionMaxAggregateInputType
  }

  export type OtaCommissionGroupByOutputType = {
    id: string
    reservationId: string
    amountMGA: number
    status: string
    _count: OtaCommissionCountAggregateOutputType | null
    _avg: OtaCommissionAvgAggregateOutputType | null
    _sum: OtaCommissionSumAggregateOutputType | null
    _min: OtaCommissionMinAggregateOutputType | null
    _max: OtaCommissionMaxAggregateOutputType | null
  }

  type GetOtaCommissionGroupByPayload<T extends OtaCommissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtaCommissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtaCommissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtaCommissionGroupByOutputType[P]>
            : GetScalarType<T[P], OtaCommissionGroupByOutputType[P]>
        }
      >
    >


  export type OtaCommissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    amountMGA?: boolean
    status?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otaCommission"]>

  export type OtaCommissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    amountMGA?: boolean
    status?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otaCommission"]>

  export type OtaCommissionSelectScalar = {
    id?: boolean
    reservationId?: boolean
    amountMGA?: boolean
    status?: boolean
  }

  export type OtaCommissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type OtaCommissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $OtaCommissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtaCommission"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      amountMGA: number
      status: string
    }, ExtArgs["result"]["otaCommission"]>
    composites: {}
  }

  type OtaCommissionGetPayload<S extends boolean | null | undefined | OtaCommissionDefaultArgs> = $Result.GetResult<Prisma.$OtaCommissionPayload, S>

  type OtaCommissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OtaCommissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OtaCommissionCountAggregateInputType | true
    }

  export interface OtaCommissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtaCommission'], meta: { name: 'OtaCommission' } }
    /**
     * Find zero or one OtaCommission that matches the filter.
     * @param {OtaCommissionFindUniqueArgs} args - Arguments to find a OtaCommission
     * @example
     * // Get one OtaCommission
     * const otaCommission = await prisma.otaCommission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtaCommissionFindUniqueArgs>(args: SelectSubset<T, OtaCommissionFindUniqueArgs<ExtArgs>>): Prisma__OtaCommissionClient<$Result.GetResult<Prisma.$OtaCommissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OtaCommission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OtaCommissionFindUniqueOrThrowArgs} args - Arguments to find a OtaCommission
     * @example
     * // Get one OtaCommission
     * const otaCommission = await prisma.otaCommission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtaCommissionFindUniqueOrThrowArgs>(args: SelectSubset<T, OtaCommissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtaCommissionClient<$Result.GetResult<Prisma.$OtaCommissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OtaCommission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaCommissionFindFirstArgs} args - Arguments to find a OtaCommission
     * @example
     * // Get one OtaCommission
     * const otaCommission = await prisma.otaCommission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtaCommissionFindFirstArgs>(args?: SelectSubset<T, OtaCommissionFindFirstArgs<ExtArgs>>): Prisma__OtaCommissionClient<$Result.GetResult<Prisma.$OtaCommissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OtaCommission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaCommissionFindFirstOrThrowArgs} args - Arguments to find a OtaCommission
     * @example
     * // Get one OtaCommission
     * const otaCommission = await prisma.otaCommission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtaCommissionFindFirstOrThrowArgs>(args?: SelectSubset<T, OtaCommissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtaCommissionClient<$Result.GetResult<Prisma.$OtaCommissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OtaCommissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaCommissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtaCommissions
     * const otaCommissions = await prisma.otaCommission.findMany()
     * 
     * // Get first 10 OtaCommissions
     * const otaCommissions = await prisma.otaCommission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otaCommissionWithIdOnly = await prisma.otaCommission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtaCommissionFindManyArgs>(args?: SelectSubset<T, OtaCommissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtaCommissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OtaCommission.
     * @param {OtaCommissionCreateArgs} args - Arguments to create a OtaCommission.
     * @example
     * // Create one OtaCommission
     * const OtaCommission = await prisma.otaCommission.create({
     *   data: {
     *     // ... data to create a OtaCommission
     *   }
     * })
     * 
     */
    create<T extends OtaCommissionCreateArgs>(args: SelectSubset<T, OtaCommissionCreateArgs<ExtArgs>>): Prisma__OtaCommissionClient<$Result.GetResult<Prisma.$OtaCommissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OtaCommissions.
     * @param {OtaCommissionCreateManyArgs} args - Arguments to create many OtaCommissions.
     * @example
     * // Create many OtaCommissions
     * const otaCommission = await prisma.otaCommission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtaCommissionCreateManyArgs>(args?: SelectSubset<T, OtaCommissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtaCommissions and returns the data saved in the database.
     * @param {OtaCommissionCreateManyAndReturnArgs} args - Arguments to create many OtaCommissions.
     * @example
     * // Create many OtaCommissions
     * const otaCommission = await prisma.otaCommission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtaCommissions and only return the `id`
     * const otaCommissionWithIdOnly = await prisma.otaCommission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtaCommissionCreateManyAndReturnArgs>(args?: SelectSubset<T, OtaCommissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtaCommissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OtaCommission.
     * @param {OtaCommissionDeleteArgs} args - Arguments to delete one OtaCommission.
     * @example
     * // Delete one OtaCommission
     * const OtaCommission = await prisma.otaCommission.delete({
     *   where: {
     *     // ... filter to delete one OtaCommission
     *   }
     * })
     * 
     */
    delete<T extends OtaCommissionDeleteArgs>(args: SelectSubset<T, OtaCommissionDeleteArgs<ExtArgs>>): Prisma__OtaCommissionClient<$Result.GetResult<Prisma.$OtaCommissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OtaCommission.
     * @param {OtaCommissionUpdateArgs} args - Arguments to update one OtaCommission.
     * @example
     * // Update one OtaCommission
     * const otaCommission = await prisma.otaCommission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtaCommissionUpdateArgs>(args: SelectSubset<T, OtaCommissionUpdateArgs<ExtArgs>>): Prisma__OtaCommissionClient<$Result.GetResult<Prisma.$OtaCommissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OtaCommissions.
     * @param {OtaCommissionDeleteManyArgs} args - Arguments to filter OtaCommissions to delete.
     * @example
     * // Delete a few OtaCommissions
     * const { count } = await prisma.otaCommission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtaCommissionDeleteManyArgs>(args?: SelectSubset<T, OtaCommissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtaCommissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaCommissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtaCommissions
     * const otaCommission = await prisma.otaCommission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtaCommissionUpdateManyArgs>(args: SelectSubset<T, OtaCommissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OtaCommission.
     * @param {OtaCommissionUpsertArgs} args - Arguments to update or create a OtaCommission.
     * @example
     * // Update or create a OtaCommission
     * const otaCommission = await prisma.otaCommission.upsert({
     *   create: {
     *     // ... data to create a OtaCommission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtaCommission we want to update
     *   }
     * })
     */
    upsert<T extends OtaCommissionUpsertArgs>(args: SelectSubset<T, OtaCommissionUpsertArgs<ExtArgs>>): Prisma__OtaCommissionClient<$Result.GetResult<Prisma.$OtaCommissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OtaCommissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaCommissionCountArgs} args - Arguments to filter OtaCommissions to count.
     * @example
     * // Count the number of OtaCommissions
     * const count = await prisma.otaCommission.count({
     *   where: {
     *     // ... the filter for the OtaCommissions we want to count
     *   }
     * })
    **/
    count<T extends OtaCommissionCountArgs>(
      args?: Subset<T, OtaCommissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtaCommissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtaCommission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaCommissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtaCommissionAggregateArgs>(args: Subset<T, OtaCommissionAggregateArgs>): Prisma.PrismaPromise<GetOtaCommissionAggregateType<T>>

    /**
     * Group by OtaCommission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaCommissionGroupByArgs} args - Group by arguments.
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
      T extends OtaCommissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtaCommissionGroupByArgs['orderBy'] }
        : { orderBy?: OtaCommissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtaCommissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtaCommissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtaCommission model
   */
  readonly fields: OtaCommissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtaCommission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtaCommissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OtaCommission model
   */ 
  interface OtaCommissionFieldRefs {
    readonly id: FieldRef<"OtaCommission", 'String'>
    readonly reservationId: FieldRef<"OtaCommission", 'String'>
    readonly amountMGA: FieldRef<"OtaCommission", 'Float'>
    readonly status: FieldRef<"OtaCommission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OtaCommission findUnique
   */
  export type OtaCommissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaCommission
     */
    select?: OtaCommissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaCommissionInclude<ExtArgs> | null
    /**
     * Filter, which OtaCommission to fetch.
     */
    where: OtaCommissionWhereUniqueInput
  }

  /**
   * OtaCommission findUniqueOrThrow
   */
  export type OtaCommissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaCommission
     */
    select?: OtaCommissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaCommissionInclude<ExtArgs> | null
    /**
     * Filter, which OtaCommission to fetch.
     */
    where: OtaCommissionWhereUniqueInput
  }

  /**
   * OtaCommission findFirst
   */
  export type OtaCommissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaCommission
     */
    select?: OtaCommissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaCommissionInclude<ExtArgs> | null
    /**
     * Filter, which OtaCommission to fetch.
     */
    where?: OtaCommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtaCommissions to fetch.
     */
    orderBy?: OtaCommissionOrderByWithRelationInput | OtaCommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtaCommissions.
     */
    cursor?: OtaCommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtaCommissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtaCommissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtaCommissions.
     */
    distinct?: OtaCommissionScalarFieldEnum | OtaCommissionScalarFieldEnum[]
  }

  /**
   * OtaCommission findFirstOrThrow
   */
  export type OtaCommissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaCommission
     */
    select?: OtaCommissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaCommissionInclude<ExtArgs> | null
    /**
     * Filter, which OtaCommission to fetch.
     */
    where?: OtaCommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtaCommissions to fetch.
     */
    orderBy?: OtaCommissionOrderByWithRelationInput | OtaCommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtaCommissions.
     */
    cursor?: OtaCommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtaCommissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtaCommissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtaCommissions.
     */
    distinct?: OtaCommissionScalarFieldEnum | OtaCommissionScalarFieldEnum[]
  }

  /**
   * OtaCommission findMany
   */
  export type OtaCommissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaCommission
     */
    select?: OtaCommissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaCommissionInclude<ExtArgs> | null
    /**
     * Filter, which OtaCommissions to fetch.
     */
    where?: OtaCommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtaCommissions to fetch.
     */
    orderBy?: OtaCommissionOrderByWithRelationInput | OtaCommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtaCommissions.
     */
    cursor?: OtaCommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtaCommissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtaCommissions.
     */
    skip?: number
    distinct?: OtaCommissionScalarFieldEnum | OtaCommissionScalarFieldEnum[]
  }

  /**
   * OtaCommission create
   */
  export type OtaCommissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaCommission
     */
    select?: OtaCommissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaCommissionInclude<ExtArgs> | null
    /**
     * The data needed to create a OtaCommission.
     */
    data: XOR<OtaCommissionCreateInput, OtaCommissionUncheckedCreateInput>
  }

  /**
   * OtaCommission createMany
   */
  export type OtaCommissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtaCommissions.
     */
    data: OtaCommissionCreateManyInput | OtaCommissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtaCommission createManyAndReturn
   */
  export type OtaCommissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaCommission
     */
    select?: OtaCommissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OtaCommissions.
     */
    data: OtaCommissionCreateManyInput | OtaCommissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaCommissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtaCommission update
   */
  export type OtaCommissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaCommission
     */
    select?: OtaCommissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaCommissionInclude<ExtArgs> | null
    /**
     * The data needed to update a OtaCommission.
     */
    data: XOR<OtaCommissionUpdateInput, OtaCommissionUncheckedUpdateInput>
    /**
     * Choose, which OtaCommission to update.
     */
    where: OtaCommissionWhereUniqueInput
  }

  /**
   * OtaCommission updateMany
   */
  export type OtaCommissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtaCommissions.
     */
    data: XOR<OtaCommissionUpdateManyMutationInput, OtaCommissionUncheckedUpdateManyInput>
    /**
     * Filter which OtaCommissions to update
     */
    where?: OtaCommissionWhereInput
  }

  /**
   * OtaCommission upsert
   */
  export type OtaCommissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaCommission
     */
    select?: OtaCommissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaCommissionInclude<ExtArgs> | null
    /**
     * The filter to search for the OtaCommission to update in case it exists.
     */
    where: OtaCommissionWhereUniqueInput
    /**
     * In case the OtaCommission found by the `where` argument doesn't exist, create a new OtaCommission with this data.
     */
    create: XOR<OtaCommissionCreateInput, OtaCommissionUncheckedCreateInput>
    /**
     * In case the OtaCommission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtaCommissionUpdateInput, OtaCommissionUncheckedUpdateInput>
  }

  /**
   * OtaCommission delete
   */
  export type OtaCommissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaCommission
     */
    select?: OtaCommissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaCommissionInclude<ExtArgs> | null
    /**
     * Filter which OtaCommission to delete.
     */
    where: OtaCommissionWhereUniqueInput
  }

  /**
   * OtaCommission deleteMany
   */
  export type OtaCommissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtaCommissions to delete
     */
    where?: OtaCommissionWhereInput
  }

  /**
   * OtaCommission without action
   */
  export type OtaCommissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaCommission
     */
    select?: OtaCommissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaCommissionInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amountHT_MGA: number | null
    vatAmount_MGA: number | null
    touristTaxMGA: number | null
    totalTTC_MGA: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    amountHT_MGA: number | null
    vatAmount_MGA: number | null
    touristTaxMGA: number | null
    totalTTC_MGA: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    reference: string | null
    reservationId: string | null
    amountHT_MGA: number | null
    vatAmount_MGA: number | null
    touristTaxMGA: number | null
    totalTTC_MGA: number | null
    status: string | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    reference: string | null
    reservationId: string | null
    amountHT_MGA: number | null
    vatAmount_MGA: number | null
    touristTaxMGA: number | null
    totalTTC_MGA: number | null
    status: string | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    reference: number
    reservationId: number
    amountHT_MGA: number
    vatAmount_MGA: number
    touristTaxMGA: number
    totalTTC_MGA: number
    status: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amountHT_MGA?: true
    vatAmount_MGA?: true
    touristTaxMGA?: true
    totalTTC_MGA?: true
  }

  export type InvoiceSumAggregateInputType = {
    amountHT_MGA?: true
    vatAmount_MGA?: true
    touristTaxMGA?: true
    totalTTC_MGA?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    reference?: true
    reservationId?: true
    amountHT_MGA?: true
    vatAmount_MGA?: true
    touristTaxMGA?: true
    totalTTC_MGA?: true
    status?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    reference?: true
    reservationId?: true
    amountHT_MGA?: true
    vatAmount_MGA?: true
    touristTaxMGA?: true
    totalTTC_MGA?: true
    status?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    reference?: true
    reservationId?: true
    amountHT_MGA?: true
    vatAmount_MGA?: true
    touristTaxMGA?: true
    totalTTC_MGA?: true
    status?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    reference: string
    reservationId: string
    amountHT_MGA: number
    vatAmount_MGA: number
    touristTaxMGA: number
    totalTTC_MGA: number
    status: string
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    reservationId?: boolean
    amountHT_MGA?: boolean
    vatAmount_MGA?: boolean
    touristTaxMGA?: boolean
    totalTTC_MGA?: boolean
    status?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    reservationId?: boolean
    amountHT_MGA?: boolean
    vatAmount_MGA?: boolean
    touristTaxMGA?: boolean
    totalTTC_MGA?: boolean
    status?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    reference?: boolean
    reservationId?: boolean
    amountHT_MGA?: boolean
    vatAmount_MGA?: boolean
    touristTaxMGA?: boolean
    totalTTC_MGA?: boolean
    status?: boolean
  }

  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference: string
      reservationId: string
      amountHT_MGA: number
      vatAmount_MGA: number
      touristTaxMGA: number
      totalTTC_MGA: number
      status: string
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Invoice model
   */ 
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly reference: FieldRef<"Invoice", 'String'>
    readonly reservationId: FieldRef<"Invoice", 'String'>
    readonly amountHT_MGA: FieldRef<"Invoice", 'Float'>
    readonly vatAmount_MGA: FieldRef<"Invoice", 'Float'>
    readonly touristTaxMGA: FieldRef<"Invoice", 'Float'>
    readonly totalTTC_MGA: FieldRef<"Invoice", 'Float'>
    readonly status: FieldRef<"Invoice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model HousekeepingTask
   */

  export type AggregateHousekeepingTask = {
    _count: HousekeepingTaskCountAggregateOutputType | null
    _min: HousekeepingTaskMinAggregateOutputType | null
    _max: HousekeepingTaskMaxAggregateOutputType | null
  }

  export type HousekeepingTaskMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    date: Date | null
    status: string | null
    userId: string | null
  }

  export type HousekeepingTaskMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    date: Date | null
    status: string | null
    userId: string | null
  }

  export type HousekeepingTaskCountAggregateOutputType = {
    id: number
    roomId: number
    date: number
    status: number
    userId: number
    _all: number
  }


  export type HousekeepingTaskMinAggregateInputType = {
    id?: true
    roomId?: true
    date?: true
    status?: true
    userId?: true
  }

  export type HousekeepingTaskMaxAggregateInputType = {
    id?: true
    roomId?: true
    date?: true
    status?: true
    userId?: true
  }

  export type HousekeepingTaskCountAggregateInputType = {
    id?: true
    roomId?: true
    date?: true
    status?: true
    userId?: true
    _all?: true
  }

  export type HousekeepingTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HousekeepingTask to aggregate.
     */
    where?: HousekeepingTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HousekeepingTasks to fetch.
     */
    orderBy?: HousekeepingTaskOrderByWithRelationInput | HousekeepingTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HousekeepingTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HousekeepingTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HousekeepingTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HousekeepingTasks
    **/
    _count?: true | HousekeepingTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HousekeepingTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HousekeepingTaskMaxAggregateInputType
  }

  export type GetHousekeepingTaskAggregateType<T extends HousekeepingTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateHousekeepingTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHousekeepingTask[P]>
      : GetScalarType<T[P], AggregateHousekeepingTask[P]>
  }




  export type HousekeepingTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HousekeepingTaskWhereInput
    orderBy?: HousekeepingTaskOrderByWithAggregationInput | HousekeepingTaskOrderByWithAggregationInput[]
    by: HousekeepingTaskScalarFieldEnum[] | HousekeepingTaskScalarFieldEnum
    having?: HousekeepingTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HousekeepingTaskCountAggregateInputType | true
    _min?: HousekeepingTaskMinAggregateInputType
    _max?: HousekeepingTaskMaxAggregateInputType
  }

  export type HousekeepingTaskGroupByOutputType = {
    id: string
    roomId: string
    date: Date
    status: string
    userId: string | null
    _count: HousekeepingTaskCountAggregateOutputType | null
    _min: HousekeepingTaskMinAggregateOutputType | null
    _max: HousekeepingTaskMaxAggregateOutputType | null
  }

  type GetHousekeepingTaskGroupByPayload<T extends HousekeepingTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HousekeepingTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HousekeepingTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HousekeepingTaskGroupByOutputType[P]>
            : GetScalarType<T[P], HousekeepingTaskGroupByOutputType[P]>
        }
      >
    >


  export type HousekeepingTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    date?: boolean
    status?: boolean
    userId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | HousekeepingTask$userArgs<ExtArgs>
  }, ExtArgs["result"]["housekeepingTask"]>

  export type HousekeepingTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    date?: boolean
    status?: boolean
    userId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | HousekeepingTask$userArgs<ExtArgs>
  }, ExtArgs["result"]["housekeepingTask"]>

  export type HousekeepingTaskSelectScalar = {
    id?: boolean
    roomId?: boolean
    date?: boolean
    status?: boolean
    userId?: boolean
  }

  export type HousekeepingTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | HousekeepingTask$userArgs<ExtArgs>
  }
  export type HousekeepingTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | HousekeepingTask$userArgs<ExtArgs>
  }

  export type $HousekeepingTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HousekeepingTask"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      date: Date
      status: string
      userId: string | null
    }, ExtArgs["result"]["housekeepingTask"]>
    composites: {}
  }

  type HousekeepingTaskGetPayload<S extends boolean | null | undefined | HousekeepingTaskDefaultArgs> = $Result.GetResult<Prisma.$HousekeepingTaskPayload, S>

  type HousekeepingTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HousekeepingTaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HousekeepingTaskCountAggregateInputType | true
    }

  export interface HousekeepingTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HousekeepingTask'], meta: { name: 'HousekeepingTask' } }
    /**
     * Find zero or one HousekeepingTask that matches the filter.
     * @param {HousekeepingTaskFindUniqueArgs} args - Arguments to find a HousekeepingTask
     * @example
     * // Get one HousekeepingTask
     * const housekeepingTask = await prisma.housekeepingTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HousekeepingTaskFindUniqueArgs>(args: SelectSubset<T, HousekeepingTaskFindUniqueArgs<ExtArgs>>): Prisma__HousekeepingTaskClient<$Result.GetResult<Prisma.$HousekeepingTaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HousekeepingTask that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HousekeepingTaskFindUniqueOrThrowArgs} args - Arguments to find a HousekeepingTask
     * @example
     * // Get one HousekeepingTask
     * const housekeepingTask = await prisma.housekeepingTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HousekeepingTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, HousekeepingTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HousekeepingTaskClient<$Result.GetResult<Prisma.$HousekeepingTaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HousekeepingTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousekeepingTaskFindFirstArgs} args - Arguments to find a HousekeepingTask
     * @example
     * // Get one HousekeepingTask
     * const housekeepingTask = await prisma.housekeepingTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HousekeepingTaskFindFirstArgs>(args?: SelectSubset<T, HousekeepingTaskFindFirstArgs<ExtArgs>>): Prisma__HousekeepingTaskClient<$Result.GetResult<Prisma.$HousekeepingTaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HousekeepingTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousekeepingTaskFindFirstOrThrowArgs} args - Arguments to find a HousekeepingTask
     * @example
     * // Get one HousekeepingTask
     * const housekeepingTask = await prisma.housekeepingTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HousekeepingTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, HousekeepingTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__HousekeepingTaskClient<$Result.GetResult<Prisma.$HousekeepingTaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HousekeepingTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousekeepingTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HousekeepingTasks
     * const housekeepingTasks = await prisma.housekeepingTask.findMany()
     * 
     * // Get first 10 HousekeepingTasks
     * const housekeepingTasks = await prisma.housekeepingTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const housekeepingTaskWithIdOnly = await prisma.housekeepingTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HousekeepingTaskFindManyArgs>(args?: SelectSubset<T, HousekeepingTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousekeepingTaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HousekeepingTask.
     * @param {HousekeepingTaskCreateArgs} args - Arguments to create a HousekeepingTask.
     * @example
     * // Create one HousekeepingTask
     * const HousekeepingTask = await prisma.housekeepingTask.create({
     *   data: {
     *     // ... data to create a HousekeepingTask
     *   }
     * })
     * 
     */
    create<T extends HousekeepingTaskCreateArgs>(args: SelectSubset<T, HousekeepingTaskCreateArgs<ExtArgs>>): Prisma__HousekeepingTaskClient<$Result.GetResult<Prisma.$HousekeepingTaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HousekeepingTasks.
     * @param {HousekeepingTaskCreateManyArgs} args - Arguments to create many HousekeepingTasks.
     * @example
     * // Create many HousekeepingTasks
     * const housekeepingTask = await prisma.housekeepingTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HousekeepingTaskCreateManyArgs>(args?: SelectSubset<T, HousekeepingTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HousekeepingTasks and returns the data saved in the database.
     * @param {HousekeepingTaskCreateManyAndReturnArgs} args - Arguments to create many HousekeepingTasks.
     * @example
     * // Create many HousekeepingTasks
     * const housekeepingTask = await prisma.housekeepingTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HousekeepingTasks and only return the `id`
     * const housekeepingTaskWithIdOnly = await prisma.housekeepingTask.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HousekeepingTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, HousekeepingTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousekeepingTaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a HousekeepingTask.
     * @param {HousekeepingTaskDeleteArgs} args - Arguments to delete one HousekeepingTask.
     * @example
     * // Delete one HousekeepingTask
     * const HousekeepingTask = await prisma.housekeepingTask.delete({
     *   where: {
     *     // ... filter to delete one HousekeepingTask
     *   }
     * })
     * 
     */
    delete<T extends HousekeepingTaskDeleteArgs>(args: SelectSubset<T, HousekeepingTaskDeleteArgs<ExtArgs>>): Prisma__HousekeepingTaskClient<$Result.GetResult<Prisma.$HousekeepingTaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HousekeepingTask.
     * @param {HousekeepingTaskUpdateArgs} args - Arguments to update one HousekeepingTask.
     * @example
     * // Update one HousekeepingTask
     * const housekeepingTask = await prisma.housekeepingTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HousekeepingTaskUpdateArgs>(args: SelectSubset<T, HousekeepingTaskUpdateArgs<ExtArgs>>): Prisma__HousekeepingTaskClient<$Result.GetResult<Prisma.$HousekeepingTaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HousekeepingTasks.
     * @param {HousekeepingTaskDeleteManyArgs} args - Arguments to filter HousekeepingTasks to delete.
     * @example
     * // Delete a few HousekeepingTasks
     * const { count } = await prisma.housekeepingTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HousekeepingTaskDeleteManyArgs>(args?: SelectSubset<T, HousekeepingTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HousekeepingTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousekeepingTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HousekeepingTasks
     * const housekeepingTask = await prisma.housekeepingTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HousekeepingTaskUpdateManyArgs>(args: SelectSubset<T, HousekeepingTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HousekeepingTask.
     * @param {HousekeepingTaskUpsertArgs} args - Arguments to update or create a HousekeepingTask.
     * @example
     * // Update or create a HousekeepingTask
     * const housekeepingTask = await prisma.housekeepingTask.upsert({
     *   create: {
     *     // ... data to create a HousekeepingTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HousekeepingTask we want to update
     *   }
     * })
     */
    upsert<T extends HousekeepingTaskUpsertArgs>(args: SelectSubset<T, HousekeepingTaskUpsertArgs<ExtArgs>>): Prisma__HousekeepingTaskClient<$Result.GetResult<Prisma.$HousekeepingTaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of HousekeepingTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousekeepingTaskCountArgs} args - Arguments to filter HousekeepingTasks to count.
     * @example
     * // Count the number of HousekeepingTasks
     * const count = await prisma.housekeepingTask.count({
     *   where: {
     *     // ... the filter for the HousekeepingTasks we want to count
     *   }
     * })
    **/
    count<T extends HousekeepingTaskCountArgs>(
      args?: Subset<T, HousekeepingTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HousekeepingTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HousekeepingTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousekeepingTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HousekeepingTaskAggregateArgs>(args: Subset<T, HousekeepingTaskAggregateArgs>): Prisma.PrismaPromise<GetHousekeepingTaskAggregateType<T>>

    /**
     * Group by HousekeepingTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HousekeepingTaskGroupByArgs} args - Group by arguments.
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
      T extends HousekeepingTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HousekeepingTaskGroupByArgs['orderBy'] }
        : { orderBy?: HousekeepingTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HousekeepingTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHousekeepingTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HousekeepingTask model
   */
  readonly fields: HousekeepingTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HousekeepingTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HousekeepingTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends HousekeepingTask$userArgs<ExtArgs> = {}>(args?: Subset<T, HousekeepingTask$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the HousekeepingTask model
   */ 
  interface HousekeepingTaskFieldRefs {
    readonly id: FieldRef<"HousekeepingTask", 'String'>
    readonly roomId: FieldRef<"HousekeepingTask", 'String'>
    readonly date: FieldRef<"HousekeepingTask", 'DateTime'>
    readonly status: FieldRef<"HousekeepingTask", 'String'>
    readonly userId: FieldRef<"HousekeepingTask", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HousekeepingTask findUnique
   */
  export type HousekeepingTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousekeepingTask
     */
    select?: HousekeepingTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousekeepingTaskInclude<ExtArgs> | null
    /**
     * Filter, which HousekeepingTask to fetch.
     */
    where: HousekeepingTaskWhereUniqueInput
  }

  /**
   * HousekeepingTask findUniqueOrThrow
   */
  export type HousekeepingTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousekeepingTask
     */
    select?: HousekeepingTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousekeepingTaskInclude<ExtArgs> | null
    /**
     * Filter, which HousekeepingTask to fetch.
     */
    where: HousekeepingTaskWhereUniqueInput
  }

  /**
   * HousekeepingTask findFirst
   */
  export type HousekeepingTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousekeepingTask
     */
    select?: HousekeepingTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousekeepingTaskInclude<ExtArgs> | null
    /**
     * Filter, which HousekeepingTask to fetch.
     */
    where?: HousekeepingTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HousekeepingTasks to fetch.
     */
    orderBy?: HousekeepingTaskOrderByWithRelationInput | HousekeepingTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HousekeepingTasks.
     */
    cursor?: HousekeepingTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HousekeepingTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HousekeepingTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HousekeepingTasks.
     */
    distinct?: HousekeepingTaskScalarFieldEnum | HousekeepingTaskScalarFieldEnum[]
  }

  /**
   * HousekeepingTask findFirstOrThrow
   */
  export type HousekeepingTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousekeepingTask
     */
    select?: HousekeepingTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousekeepingTaskInclude<ExtArgs> | null
    /**
     * Filter, which HousekeepingTask to fetch.
     */
    where?: HousekeepingTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HousekeepingTasks to fetch.
     */
    orderBy?: HousekeepingTaskOrderByWithRelationInput | HousekeepingTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HousekeepingTasks.
     */
    cursor?: HousekeepingTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HousekeepingTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HousekeepingTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HousekeepingTasks.
     */
    distinct?: HousekeepingTaskScalarFieldEnum | HousekeepingTaskScalarFieldEnum[]
  }

  /**
   * HousekeepingTask findMany
   */
  export type HousekeepingTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousekeepingTask
     */
    select?: HousekeepingTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousekeepingTaskInclude<ExtArgs> | null
    /**
     * Filter, which HousekeepingTasks to fetch.
     */
    where?: HousekeepingTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HousekeepingTasks to fetch.
     */
    orderBy?: HousekeepingTaskOrderByWithRelationInput | HousekeepingTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HousekeepingTasks.
     */
    cursor?: HousekeepingTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HousekeepingTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HousekeepingTasks.
     */
    skip?: number
    distinct?: HousekeepingTaskScalarFieldEnum | HousekeepingTaskScalarFieldEnum[]
  }

  /**
   * HousekeepingTask create
   */
  export type HousekeepingTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousekeepingTask
     */
    select?: HousekeepingTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousekeepingTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a HousekeepingTask.
     */
    data: XOR<HousekeepingTaskCreateInput, HousekeepingTaskUncheckedCreateInput>
  }

  /**
   * HousekeepingTask createMany
   */
  export type HousekeepingTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HousekeepingTasks.
     */
    data: HousekeepingTaskCreateManyInput | HousekeepingTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HousekeepingTask createManyAndReturn
   */
  export type HousekeepingTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousekeepingTask
     */
    select?: HousekeepingTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many HousekeepingTasks.
     */
    data: HousekeepingTaskCreateManyInput | HousekeepingTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousekeepingTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HousekeepingTask update
   */
  export type HousekeepingTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousekeepingTask
     */
    select?: HousekeepingTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousekeepingTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a HousekeepingTask.
     */
    data: XOR<HousekeepingTaskUpdateInput, HousekeepingTaskUncheckedUpdateInput>
    /**
     * Choose, which HousekeepingTask to update.
     */
    where: HousekeepingTaskWhereUniqueInput
  }

  /**
   * HousekeepingTask updateMany
   */
  export type HousekeepingTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HousekeepingTasks.
     */
    data: XOR<HousekeepingTaskUpdateManyMutationInput, HousekeepingTaskUncheckedUpdateManyInput>
    /**
     * Filter which HousekeepingTasks to update
     */
    where?: HousekeepingTaskWhereInput
  }

  /**
   * HousekeepingTask upsert
   */
  export type HousekeepingTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousekeepingTask
     */
    select?: HousekeepingTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousekeepingTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the HousekeepingTask to update in case it exists.
     */
    where: HousekeepingTaskWhereUniqueInput
    /**
     * In case the HousekeepingTask found by the `where` argument doesn't exist, create a new HousekeepingTask with this data.
     */
    create: XOR<HousekeepingTaskCreateInput, HousekeepingTaskUncheckedCreateInput>
    /**
     * In case the HousekeepingTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HousekeepingTaskUpdateInput, HousekeepingTaskUncheckedUpdateInput>
  }

  /**
   * HousekeepingTask delete
   */
  export type HousekeepingTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousekeepingTask
     */
    select?: HousekeepingTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousekeepingTaskInclude<ExtArgs> | null
    /**
     * Filter which HousekeepingTask to delete.
     */
    where: HousekeepingTaskWhereUniqueInput
  }

  /**
   * HousekeepingTask deleteMany
   */
  export type HousekeepingTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HousekeepingTasks to delete
     */
    where?: HousekeepingTaskWhereInput
  }

  /**
   * HousekeepingTask.user
   */
  export type HousekeepingTask$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * HousekeepingTask without action
   */
  export type HousekeepingTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HousekeepingTask
     */
    select?: HousekeepingTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HousekeepingTaskInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceTicket
   */

  export type AggregateMaintenanceTicket = {
    _count: MaintenanceTicketCountAggregateOutputType | null
    _min: MaintenanceTicketMinAggregateOutputType | null
    _max: MaintenanceTicketMaxAggregateOutputType | null
  }

  export type MaintenanceTicketMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    description: string | null
    priority: string | null
    status: string | null
    createdAt: Date | null
  }

  export type MaintenanceTicketMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    description: string | null
    priority: string | null
    status: string | null
    createdAt: Date | null
  }

  export type MaintenanceTicketCountAggregateOutputType = {
    id: number
    roomId: number
    description: number
    priority: number
    status: number
    createdAt: number
    _all: number
  }


  export type MaintenanceTicketMinAggregateInputType = {
    id?: true
    roomId?: true
    description?: true
    priority?: true
    status?: true
    createdAt?: true
  }

  export type MaintenanceTicketMaxAggregateInputType = {
    id?: true
    roomId?: true
    description?: true
    priority?: true
    status?: true
    createdAt?: true
  }

  export type MaintenanceTicketCountAggregateInputType = {
    id?: true
    roomId?: true
    description?: true
    priority?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type MaintenanceTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceTicket to aggregate.
     */
    where?: MaintenanceTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTickets to fetch.
     */
    orderBy?: MaintenanceTicketOrderByWithRelationInput | MaintenanceTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceTickets
    **/
    _count?: true | MaintenanceTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceTicketMaxAggregateInputType
  }

  export type GetMaintenanceTicketAggregateType<T extends MaintenanceTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceTicket[P]>
      : GetScalarType<T[P], AggregateMaintenanceTicket[P]>
  }




  export type MaintenanceTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceTicketWhereInput
    orderBy?: MaintenanceTicketOrderByWithAggregationInput | MaintenanceTicketOrderByWithAggregationInput[]
    by: MaintenanceTicketScalarFieldEnum[] | MaintenanceTicketScalarFieldEnum
    having?: MaintenanceTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceTicketCountAggregateInputType | true
    _min?: MaintenanceTicketMinAggregateInputType
    _max?: MaintenanceTicketMaxAggregateInputType
  }

  export type MaintenanceTicketGroupByOutputType = {
    id: string
    roomId: string
    description: string
    priority: string
    status: string
    createdAt: Date
    _count: MaintenanceTicketCountAggregateOutputType | null
    _min: MaintenanceTicketMinAggregateOutputType | null
    _max: MaintenanceTicketMaxAggregateOutputType | null
  }

  type GetMaintenanceTicketGroupByPayload<T extends MaintenanceTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceTicketGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceTicketGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceTicket"]>

  export type MaintenanceTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceTicket"]>

  export type MaintenanceTicketSelectScalar = {
    id?: boolean
    roomId?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type MaintenanceTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type MaintenanceTicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $MaintenanceTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceTicket"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      description: string
      priority: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["maintenanceTicket"]>
    composites: {}
  }

  type MaintenanceTicketGetPayload<S extends boolean | null | undefined | MaintenanceTicketDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceTicketPayload, S>

  type MaintenanceTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaintenanceTicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MaintenanceTicketCountAggregateInputType | true
    }

  export interface MaintenanceTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceTicket'], meta: { name: 'MaintenanceTicket' } }
    /**
     * Find zero or one MaintenanceTicket that matches the filter.
     * @param {MaintenanceTicketFindUniqueArgs} args - Arguments to find a MaintenanceTicket
     * @example
     * // Get one MaintenanceTicket
     * const maintenanceTicket = await prisma.maintenanceTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceTicketFindUniqueArgs>(args: SelectSubset<T, MaintenanceTicketFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MaintenanceTicket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MaintenanceTicketFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceTicket
     * @example
     * // Get one MaintenanceTicket
     * const maintenanceTicket = await prisma.maintenanceTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MaintenanceTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketFindFirstArgs} args - Arguments to find a MaintenanceTicket
     * @example
     * // Get one MaintenanceTicket
     * const maintenanceTicket = await prisma.maintenanceTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceTicketFindFirstArgs>(args?: SelectSubset<T, MaintenanceTicketFindFirstArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MaintenanceTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketFindFirstOrThrowArgs} args - Arguments to find a MaintenanceTicket
     * @example
     * // Get one MaintenanceTicket
     * const maintenanceTicket = await prisma.maintenanceTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MaintenanceTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceTickets
     * const maintenanceTickets = await prisma.maintenanceTicket.findMany()
     * 
     * // Get first 10 MaintenanceTickets
     * const maintenanceTickets = await prisma.maintenanceTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceTicketWithIdOnly = await prisma.maintenanceTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceTicketFindManyArgs>(args?: SelectSubset<T, MaintenanceTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MaintenanceTicket.
     * @param {MaintenanceTicketCreateArgs} args - Arguments to create a MaintenanceTicket.
     * @example
     * // Create one MaintenanceTicket
     * const MaintenanceTicket = await prisma.maintenanceTicket.create({
     *   data: {
     *     // ... data to create a MaintenanceTicket
     *   }
     * })
     * 
     */
    create<T extends MaintenanceTicketCreateArgs>(args: SelectSubset<T, MaintenanceTicketCreateArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MaintenanceTickets.
     * @param {MaintenanceTicketCreateManyArgs} args - Arguments to create many MaintenanceTickets.
     * @example
     * // Create many MaintenanceTickets
     * const maintenanceTicket = await prisma.maintenanceTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceTicketCreateManyArgs>(args?: SelectSubset<T, MaintenanceTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceTickets and returns the data saved in the database.
     * @param {MaintenanceTicketCreateManyAndReturnArgs} args - Arguments to create many MaintenanceTickets.
     * @example
     * // Create many MaintenanceTickets
     * const maintenanceTicket = await prisma.maintenanceTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceTickets and only return the `id`
     * const maintenanceTicketWithIdOnly = await prisma.maintenanceTicket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MaintenanceTicket.
     * @param {MaintenanceTicketDeleteArgs} args - Arguments to delete one MaintenanceTicket.
     * @example
     * // Delete one MaintenanceTicket
     * const MaintenanceTicket = await prisma.maintenanceTicket.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceTicket
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceTicketDeleteArgs>(args: SelectSubset<T, MaintenanceTicketDeleteArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MaintenanceTicket.
     * @param {MaintenanceTicketUpdateArgs} args - Arguments to update one MaintenanceTicket.
     * @example
     * // Update one MaintenanceTicket
     * const maintenanceTicket = await prisma.maintenanceTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceTicketUpdateArgs>(args: SelectSubset<T, MaintenanceTicketUpdateArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MaintenanceTickets.
     * @param {MaintenanceTicketDeleteManyArgs} args - Arguments to filter MaintenanceTickets to delete.
     * @example
     * // Delete a few MaintenanceTickets
     * const { count } = await prisma.maintenanceTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceTicketDeleteManyArgs>(args?: SelectSubset<T, MaintenanceTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceTickets
     * const maintenanceTicket = await prisma.maintenanceTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceTicketUpdateManyArgs>(args: SelectSubset<T, MaintenanceTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MaintenanceTicket.
     * @param {MaintenanceTicketUpsertArgs} args - Arguments to update or create a MaintenanceTicket.
     * @example
     * // Update or create a MaintenanceTicket
     * const maintenanceTicket = await prisma.maintenanceTicket.upsert({
     *   create: {
     *     // ... data to create a MaintenanceTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceTicket we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceTicketUpsertArgs>(args: SelectSubset<T, MaintenanceTicketUpsertArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MaintenanceTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketCountArgs} args - Arguments to filter MaintenanceTickets to count.
     * @example
     * // Count the number of MaintenanceTickets
     * const count = await prisma.maintenanceTicket.count({
     *   where: {
     *     // ... the filter for the MaintenanceTickets we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceTicketCountArgs>(
      args?: Subset<T, MaintenanceTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceTicketAggregateArgs>(args: Subset<T, MaintenanceTicketAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceTicketAggregateType<T>>

    /**
     * Group by MaintenanceTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceTicketGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceTicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceTicket model
   */
  readonly fields: MaintenanceTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MaintenanceTicket model
   */ 
  interface MaintenanceTicketFieldRefs {
    readonly id: FieldRef<"MaintenanceTicket", 'String'>
    readonly roomId: FieldRef<"MaintenanceTicket", 'String'>
    readonly description: FieldRef<"MaintenanceTicket", 'String'>
    readonly priority: FieldRef<"MaintenanceTicket", 'String'>
    readonly status: FieldRef<"MaintenanceTicket", 'String'>
    readonly createdAt: FieldRef<"MaintenanceTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceTicket findUnique
   */
  export type MaintenanceTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTicket to fetch.
     */
    where: MaintenanceTicketWhereUniqueInput
  }

  /**
   * MaintenanceTicket findUniqueOrThrow
   */
  export type MaintenanceTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTicket to fetch.
     */
    where: MaintenanceTicketWhereUniqueInput
  }

  /**
   * MaintenanceTicket findFirst
   */
  export type MaintenanceTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTicket to fetch.
     */
    where?: MaintenanceTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTickets to fetch.
     */
    orderBy?: MaintenanceTicketOrderByWithRelationInput | MaintenanceTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceTickets.
     */
    cursor?: MaintenanceTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceTickets.
     */
    distinct?: MaintenanceTicketScalarFieldEnum | MaintenanceTicketScalarFieldEnum[]
  }

  /**
   * MaintenanceTicket findFirstOrThrow
   */
  export type MaintenanceTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTicket to fetch.
     */
    where?: MaintenanceTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTickets to fetch.
     */
    orderBy?: MaintenanceTicketOrderByWithRelationInput | MaintenanceTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceTickets.
     */
    cursor?: MaintenanceTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceTickets.
     */
    distinct?: MaintenanceTicketScalarFieldEnum | MaintenanceTicketScalarFieldEnum[]
  }

  /**
   * MaintenanceTicket findMany
   */
  export type MaintenanceTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTickets to fetch.
     */
    where?: MaintenanceTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTickets to fetch.
     */
    orderBy?: MaintenanceTicketOrderByWithRelationInput | MaintenanceTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceTickets.
     */
    cursor?: MaintenanceTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTickets.
     */
    skip?: number
    distinct?: MaintenanceTicketScalarFieldEnum | MaintenanceTicketScalarFieldEnum[]
  }

  /**
   * MaintenanceTicket create
   */
  export type MaintenanceTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceTicket.
     */
    data: XOR<MaintenanceTicketCreateInput, MaintenanceTicketUncheckedCreateInput>
  }

  /**
   * MaintenanceTicket createMany
   */
  export type MaintenanceTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceTickets.
     */
    data: MaintenanceTicketCreateManyInput | MaintenanceTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceTicket createManyAndReturn
   */
  export type MaintenanceTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MaintenanceTickets.
     */
    data: MaintenanceTicketCreateManyInput | MaintenanceTicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceTicket update
   */
  export type MaintenanceTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceTicket.
     */
    data: XOR<MaintenanceTicketUpdateInput, MaintenanceTicketUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceTicket to update.
     */
    where: MaintenanceTicketWhereUniqueInput
  }

  /**
   * MaintenanceTicket updateMany
   */
  export type MaintenanceTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceTickets.
     */
    data: XOR<MaintenanceTicketUpdateManyMutationInput, MaintenanceTicketUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceTickets to update
     */
    where?: MaintenanceTicketWhereInput
  }

  /**
   * MaintenanceTicket upsert
   */
  export type MaintenanceTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceTicket to update in case it exists.
     */
    where: MaintenanceTicketWhereUniqueInput
    /**
     * In case the MaintenanceTicket found by the `where` argument doesn't exist, create a new MaintenanceTicket with this data.
     */
    create: XOR<MaintenanceTicketCreateInput, MaintenanceTicketUncheckedCreateInput>
    /**
     * In case the MaintenanceTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceTicketUpdateInput, MaintenanceTicketUncheckedUpdateInput>
  }

  /**
   * MaintenanceTicket delete
   */
  export type MaintenanceTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceTicket to delete.
     */
    where: MaintenanceTicketWhereUniqueInput
  }

  /**
   * MaintenanceTicket deleteMany
   */
  export type MaintenanceTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceTickets to delete
     */
    where?: MaintenanceTicketWhereInput
  }

  /**
   * MaintenanceTicket without action
   */
  export type MaintenanceTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    vatRate: 'vatRate',
    touristTax: 'touristTax',
    exchangeRateEUR: 'exchangeRateEUR',
    exchangeRateUSD: 'exchangeRateUSD',
    updatedAt: 'updatedAt'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    number: 'number',
    name: 'name',
    type: 'type',
    capacity: 'capacity',
    basePriceMGA: 'basePriceMGA',
    status: 'status'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    country: 'country',
    guestType: 'guestType'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    guestId: 'guestId',
    roomId: 'roomId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    guestsCount: 'guestsCount',
    source: 'source',
    status: 'status',
    otaPlatformId: 'otaPlatformId'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const OtaPlatformScalarFieldEnum: {
    id: 'id',
    name: 'name',
    commissionType: 'commissionType',
    commissionRate: 'commissionRate'
  };

  export type OtaPlatformScalarFieldEnum = (typeof OtaPlatformScalarFieldEnum)[keyof typeof OtaPlatformScalarFieldEnum]


  export const OtaCommissionScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    amountMGA: 'amountMGA',
    status: 'status'
  };

  export type OtaCommissionScalarFieldEnum = (typeof OtaCommissionScalarFieldEnum)[keyof typeof OtaCommissionScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    reservationId: 'reservationId',
    amountHT_MGA: 'amountHT_MGA',
    vatAmount_MGA: 'vatAmount_MGA',
    touristTaxMGA: 'touristTaxMGA',
    totalTTC_MGA: 'totalTTC_MGA',
    status: 'status'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const HousekeepingTaskScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    date: 'date',
    status: 'status',
    userId: 'userId'
  };

  export type HousekeepingTaskScalarFieldEnum = (typeof HousekeepingTaskScalarFieldEnum)[keyof typeof HousekeepingTaskScalarFieldEnum]


  export const MaintenanceTicketScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    description: 'description',
    priority: 'priority',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type MaintenanceTicketScalarFieldEnum = (typeof MaintenanceTicketScalarFieldEnum)[keyof typeof MaintenanceTicketScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    


  /**
   * Reference to a field of type 'RoomStatus[]'
   */
  export type ListEnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus[]'>
    


  /**
   * Reference to a field of type 'ReservationSource'
   */
  export type EnumReservationSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationSource'>
    


  /**
   * Reference to a field of type 'ReservationSource[]'
   */
  export type ListEnumReservationSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationSource[]'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'ReservationStatus[]'
   */
  export type ListEnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    tasks?: HousekeepingTaskListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    tasks?: HousekeepingTaskOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    tasks?: HousekeepingTaskListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: IntFilter<"Settings"> | number
    vatRate?: FloatFilter<"Settings"> | number
    touristTax?: FloatFilter<"Settings"> | number
    exchangeRateEUR?: FloatFilter<"Settings"> | number
    exchangeRateUSD?: FloatFilter<"Settings"> | number
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    vatRate?: SortOrder
    touristTax?: SortOrder
    exchangeRateEUR?: SortOrder
    exchangeRateUSD?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    vatRate?: FloatFilter<"Settings"> | number
    touristTax?: FloatFilter<"Settings"> | number
    exchangeRateEUR?: FloatFilter<"Settings"> | number
    exchangeRateUSD?: FloatFilter<"Settings"> | number
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
  }, "id">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    vatRate?: SortOrder
    touristTax?: SortOrder
    exchangeRateEUR?: SortOrder
    exchangeRateUSD?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Settings"> | number
    vatRate?: FloatWithAggregatesFilter<"Settings"> | number
    touristTax?: FloatWithAggregatesFilter<"Settings"> | number
    exchangeRateEUR?: FloatWithAggregatesFilter<"Settings"> | number
    exchangeRateUSD?: FloatWithAggregatesFilter<"Settings"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    number?: StringFilter<"Room"> | string
    name?: StringNullableFilter<"Room"> | string | null
    type?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    basePriceMGA?: FloatFilter<"Room"> | number
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    reservations?: ReservationListRelationFilter
    maintenance?: MaintenanceTicketListRelationFilter
    housekeeping?: HousekeepingTaskListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrder
    capacity?: SortOrder
    basePriceMGA?: SortOrder
    status?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    maintenance?: MaintenanceTicketOrderByRelationAggregateInput
    housekeeping?: HousekeepingTaskOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    number?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringNullableFilter<"Room"> | string | null
    type?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    basePriceMGA?: FloatFilter<"Room"> | number
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    reservations?: ReservationListRelationFilter
    maintenance?: MaintenanceTicketListRelationFilter
    housekeeping?: HousekeepingTaskListRelationFilter
  }, "id" | "number">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrder
    capacity?: SortOrder
    basePriceMGA?: SortOrder
    status?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    number?: StringWithAggregatesFilter<"Room"> | string
    name?: StringNullableWithAggregatesFilter<"Room"> | string | null
    type?: StringWithAggregatesFilter<"Room"> | string
    capacity?: IntWithAggregatesFilter<"Room"> | number
    basePriceMGA?: FloatWithAggregatesFilter<"Room"> | number
    status?: EnumRoomStatusWithAggregatesFilter<"Room"> | $Enums.RoomStatus
  }

  export type GuestWhereInput = {
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    id?: StringFilter<"Guest"> | string
    firstName?: StringFilter<"Guest"> | string
    lastName?: StringFilter<"Guest"> | string
    email?: StringNullableFilter<"Guest"> | string | null
    phone?: StringNullableFilter<"Guest"> | string | null
    country?: StringNullableFilter<"Guest"> | string | null
    guestType?: StringFilter<"Guest"> | string
    reservations?: ReservationListRelationFilter
  }

  export type GuestOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    guestType?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
  }

  export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    firstName?: StringFilter<"Guest"> | string
    lastName?: StringFilter<"Guest"> | string
    email?: StringNullableFilter<"Guest"> | string | null
    phone?: StringNullableFilter<"Guest"> | string | null
    country?: StringNullableFilter<"Guest"> | string | null
    guestType?: StringFilter<"Guest"> | string
    reservations?: ReservationListRelationFilter
  }, "id">

  export type GuestOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    guestType?: SortOrder
    _count?: GuestCountOrderByAggregateInput
    _max?: GuestMaxOrderByAggregateInput
    _min?: GuestMinOrderByAggregateInput
  }

  export type GuestScalarWhereWithAggregatesInput = {
    AND?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    OR?: GuestScalarWhereWithAggregatesInput[]
    NOT?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guest"> | string
    firstName?: StringWithAggregatesFilter<"Guest"> | string
    lastName?: StringWithAggregatesFilter<"Guest"> | string
    email?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    country?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    guestType?: StringWithAggregatesFilter<"Guest"> | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    guestId?: StringFilter<"Reservation"> | string
    roomId?: StringFilter<"Reservation"> | string
    checkIn?: DateTimeFilter<"Reservation"> | Date | string
    checkOut?: DateTimeFilter<"Reservation"> | Date | string
    guestsCount?: IntFilter<"Reservation"> | number
    source?: EnumReservationSourceFilter<"Reservation"> | $Enums.ReservationSource
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    otaPlatformId?: StringNullableFilter<"Reservation"> | string | null
    guest?: XOR<GuestRelationFilter, GuestWhereInput>
    room?: XOR<RoomRelationFilter, RoomWhereInput>
    otaPlatform?: XOR<OtaPlatformNullableRelationFilter, OtaPlatformWhereInput> | null
    invoice?: XOR<InvoiceNullableRelationFilter, InvoiceWhereInput> | null
    otaCommission?: XOR<OtaCommissionNullableRelationFilter, OtaCommissionWhereInput> | null
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    guestId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guestsCount?: SortOrder
    source?: SortOrder
    status?: SortOrder
    otaPlatformId?: SortOrderInput | SortOrder
    guest?: GuestOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    otaPlatform?: OtaPlatformOrderByWithRelationInput
    invoice?: InvoiceOrderByWithRelationInput
    otaCommission?: OtaCommissionOrderByWithRelationInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    guestId?: StringFilter<"Reservation"> | string
    roomId?: StringFilter<"Reservation"> | string
    checkIn?: DateTimeFilter<"Reservation"> | Date | string
    checkOut?: DateTimeFilter<"Reservation"> | Date | string
    guestsCount?: IntFilter<"Reservation"> | number
    source?: EnumReservationSourceFilter<"Reservation"> | $Enums.ReservationSource
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    otaPlatformId?: StringNullableFilter<"Reservation"> | string | null
    guest?: XOR<GuestRelationFilter, GuestWhereInput>
    room?: XOR<RoomRelationFilter, RoomWhereInput>
    otaPlatform?: XOR<OtaPlatformNullableRelationFilter, OtaPlatformWhereInput> | null
    invoice?: XOR<InvoiceNullableRelationFilter, InvoiceWhereInput> | null
    otaCommission?: XOR<OtaCommissionNullableRelationFilter, OtaCommissionWhereInput> | null
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    guestId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guestsCount?: SortOrder
    source?: SortOrder
    status?: SortOrder
    otaPlatformId?: SortOrderInput | SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    guestId?: StringWithAggregatesFilter<"Reservation"> | string
    roomId?: StringWithAggregatesFilter<"Reservation"> | string
    checkIn?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    guestsCount?: IntWithAggregatesFilter<"Reservation"> | number
    source?: EnumReservationSourceWithAggregatesFilter<"Reservation"> | $Enums.ReservationSource
    status?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    otaPlatformId?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
  }

  export type OtaPlatformWhereInput = {
    AND?: OtaPlatformWhereInput | OtaPlatformWhereInput[]
    OR?: OtaPlatformWhereInput[]
    NOT?: OtaPlatformWhereInput | OtaPlatformWhereInput[]
    id?: StringFilter<"OtaPlatform"> | string
    name?: StringFilter<"OtaPlatform"> | string
    commissionType?: StringFilter<"OtaPlatform"> | string
    commissionRate?: FloatFilter<"OtaPlatform"> | number
    reservations?: ReservationListRelationFilter
  }

  export type OtaPlatformOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    commissionType?: SortOrder
    commissionRate?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
  }

  export type OtaPlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtaPlatformWhereInput | OtaPlatformWhereInput[]
    OR?: OtaPlatformWhereInput[]
    NOT?: OtaPlatformWhereInput | OtaPlatformWhereInput[]
    name?: StringFilter<"OtaPlatform"> | string
    commissionType?: StringFilter<"OtaPlatform"> | string
    commissionRate?: FloatFilter<"OtaPlatform"> | number
    reservations?: ReservationListRelationFilter
  }, "id">

  export type OtaPlatformOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    commissionType?: SortOrder
    commissionRate?: SortOrder
    _count?: OtaPlatformCountOrderByAggregateInput
    _avg?: OtaPlatformAvgOrderByAggregateInput
    _max?: OtaPlatformMaxOrderByAggregateInput
    _min?: OtaPlatformMinOrderByAggregateInput
    _sum?: OtaPlatformSumOrderByAggregateInput
  }

  export type OtaPlatformScalarWhereWithAggregatesInput = {
    AND?: OtaPlatformScalarWhereWithAggregatesInput | OtaPlatformScalarWhereWithAggregatesInput[]
    OR?: OtaPlatformScalarWhereWithAggregatesInput[]
    NOT?: OtaPlatformScalarWhereWithAggregatesInput | OtaPlatformScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtaPlatform"> | string
    name?: StringWithAggregatesFilter<"OtaPlatform"> | string
    commissionType?: StringWithAggregatesFilter<"OtaPlatform"> | string
    commissionRate?: FloatWithAggregatesFilter<"OtaPlatform"> | number
  }

  export type OtaCommissionWhereInput = {
    AND?: OtaCommissionWhereInput | OtaCommissionWhereInput[]
    OR?: OtaCommissionWhereInput[]
    NOT?: OtaCommissionWhereInput | OtaCommissionWhereInput[]
    id?: StringFilter<"OtaCommission"> | string
    reservationId?: StringFilter<"OtaCommission"> | string
    amountMGA?: FloatFilter<"OtaCommission"> | number
    status?: StringFilter<"OtaCommission"> | string
    reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
  }

  export type OtaCommissionOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amountMGA?: SortOrder
    status?: SortOrder
    reservation?: ReservationOrderByWithRelationInput
  }

  export type OtaCommissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reservationId?: string
    AND?: OtaCommissionWhereInput | OtaCommissionWhereInput[]
    OR?: OtaCommissionWhereInput[]
    NOT?: OtaCommissionWhereInput | OtaCommissionWhereInput[]
    amountMGA?: FloatFilter<"OtaCommission"> | number
    status?: StringFilter<"OtaCommission"> | string
    reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
  }, "id" | "reservationId">

  export type OtaCommissionOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amountMGA?: SortOrder
    status?: SortOrder
    _count?: OtaCommissionCountOrderByAggregateInput
    _avg?: OtaCommissionAvgOrderByAggregateInput
    _max?: OtaCommissionMaxOrderByAggregateInput
    _min?: OtaCommissionMinOrderByAggregateInput
    _sum?: OtaCommissionSumOrderByAggregateInput
  }

  export type OtaCommissionScalarWhereWithAggregatesInput = {
    AND?: OtaCommissionScalarWhereWithAggregatesInput | OtaCommissionScalarWhereWithAggregatesInput[]
    OR?: OtaCommissionScalarWhereWithAggregatesInput[]
    NOT?: OtaCommissionScalarWhereWithAggregatesInput | OtaCommissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtaCommission"> | string
    reservationId?: StringWithAggregatesFilter<"OtaCommission"> | string
    amountMGA?: FloatWithAggregatesFilter<"OtaCommission"> | number
    status?: StringWithAggregatesFilter<"OtaCommission"> | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    reference?: StringFilter<"Invoice"> | string
    reservationId?: StringFilter<"Invoice"> | string
    amountHT_MGA?: FloatFilter<"Invoice"> | number
    vatAmount_MGA?: FloatFilter<"Invoice"> | number
    touristTaxMGA?: FloatFilter<"Invoice"> | number
    totalTTC_MGA?: FloatFilter<"Invoice"> | number
    status?: StringFilter<"Invoice"> | string
    reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    reservationId?: SortOrder
    amountHT_MGA?: SortOrder
    vatAmount_MGA?: SortOrder
    touristTaxMGA?: SortOrder
    totalTTC_MGA?: SortOrder
    status?: SortOrder
    reservation?: ReservationOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    reservationId?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    amountHT_MGA?: FloatFilter<"Invoice"> | number
    vatAmount_MGA?: FloatFilter<"Invoice"> | number
    touristTaxMGA?: FloatFilter<"Invoice"> | number
    totalTTC_MGA?: FloatFilter<"Invoice"> | number
    status?: StringFilter<"Invoice"> | string
    reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
  }, "id" | "reference" | "reservationId">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    reservationId?: SortOrder
    amountHT_MGA?: SortOrder
    vatAmount_MGA?: SortOrder
    touristTaxMGA?: SortOrder
    totalTTC_MGA?: SortOrder
    status?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    reference?: StringWithAggregatesFilter<"Invoice"> | string
    reservationId?: StringWithAggregatesFilter<"Invoice"> | string
    amountHT_MGA?: FloatWithAggregatesFilter<"Invoice"> | number
    vatAmount_MGA?: FloatWithAggregatesFilter<"Invoice"> | number
    touristTaxMGA?: FloatWithAggregatesFilter<"Invoice"> | number
    totalTTC_MGA?: FloatWithAggregatesFilter<"Invoice"> | number
    status?: StringWithAggregatesFilter<"Invoice"> | string
  }

  export type HousekeepingTaskWhereInput = {
    AND?: HousekeepingTaskWhereInput | HousekeepingTaskWhereInput[]
    OR?: HousekeepingTaskWhereInput[]
    NOT?: HousekeepingTaskWhereInput | HousekeepingTaskWhereInput[]
    id?: StringFilter<"HousekeepingTask"> | string
    roomId?: StringFilter<"HousekeepingTask"> | string
    date?: DateTimeFilter<"HousekeepingTask"> | Date | string
    status?: StringFilter<"HousekeepingTask"> | string
    userId?: StringNullableFilter<"HousekeepingTask"> | string | null
    room?: XOR<RoomRelationFilter, RoomWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type HousekeepingTaskOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    room?: RoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type HousekeepingTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HousekeepingTaskWhereInput | HousekeepingTaskWhereInput[]
    OR?: HousekeepingTaskWhereInput[]
    NOT?: HousekeepingTaskWhereInput | HousekeepingTaskWhereInput[]
    roomId?: StringFilter<"HousekeepingTask"> | string
    date?: DateTimeFilter<"HousekeepingTask"> | Date | string
    status?: StringFilter<"HousekeepingTask"> | string
    userId?: StringNullableFilter<"HousekeepingTask"> | string | null
    room?: XOR<RoomRelationFilter, RoomWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type HousekeepingTaskOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: HousekeepingTaskCountOrderByAggregateInput
    _max?: HousekeepingTaskMaxOrderByAggregateInput
    _min?: HousekeepingTaskMinOrderByAggregateInput
  }

  export type HousekeepingTaskScalarWhereWithAggregatesInput = {
    AND?: HousekeepingTaskScalarWhereWithAggregatesInput | HousekeepingTaskScalarWhereWithAggregatesInput[]
    OR?: HousekeepingTaskScalarWhereWithAggregatesInput[]
    NOT?: HousekeepingTaskScalarWhereWithAggregatesInput | HousekeepingTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HousekeepingTask"> | string
    roomId?: StringWithAggregatesFilter<"HousekeepingTask"> | string
    date?: DateTimeWithAggregatesFilter<"HousekeepingTask"> | Date | string
    status?: StringWithAggregatesFilter<"HousekeepingTask"> | string
    userId?: StringNullableWithAggregatesFilter<"HousekeepingTask"> | string | null
  }

  export type MaintenanceTicketWhereInput = {
    AND?: MaintenanceTicketWhereInput | MaintenanceTicketWhereInput[]
    OR?: MaintenanceTicketWhereInput[]
    NOT?: MaintenanceTicketWhereInput | MaintenanceTicketWhereInput[]
    id?: StringFilter<"MaintenanceTicket"> | string
    roomId?: StringFilter<"MaintenanceTicket"> | string
    description?: StringFilter<"MaintenanceTicket"> | string
    priority?: StringFilter<"MaintenanceTicket"> | string
    status?: StringFilter<"MaintenanceTicket"> | string
    createdAt?: DateTimeFilter<"MaintenanceTicket"> | Date | string
    room?: XOR<RoomRelationFilter, RoomWhereInput>
  }

  export type MaintenanceTicketOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type MaintenanceTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceTicketWhereInput | MaintenanceTicketWhereInput[]
    OR?: MaintenanceTicketWhereInput[]
    NOT?: MaintenanceTicketWhereInput | MaintenanceTicketWhereInput[]
    roomId?: StringFilter<"MaintenanceTicket"> | string
    description?: StringFilter<"MaintenanceTicket"> | string
    priority?: StringFilter<"MaintenanceTicket"> | string
    status?: StringFilter<"MaintenanceTicket"> | string
    createdAt?: DateTimeFilter<"MaintenanceTicket"> | Date | string
    room?: XOR<RoomRelationFilter, RoomWhereInput>
  }, "id">

  export type MaintenanceTicketOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: MaintenanceTicketCountOrderByAggregateInput
    _max?: MaintenanceTicketMaxOrderByAggregateInput
    _min?: MaintenanceTicketMinOrderByAggregateInput
  }

  export type MaintenanceTicketScalarWhereWithAggregatesInput = {
    AND?: MaintenanceTicketScalarWhereWithAggregatesInput | MaintenanceTicketScalarWhereWithAggregatesInput[]
    OR?: MaintenanceTicketScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceTicketScalarWhereWithAggregatesInput | MaintenanceTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaintenanceTicket"> | string
    roomId?: StringWithAggregatesFilter<"MaintenanceTicket"> | string
    description?: StringWithAggregatesFilter<"MaintenanceTicket"> | string
    priority?: StringWithAggregatesFilter<"MaintenanceTicket"> | string
    status?: StringWithAggregatesFilter<"MaintenanceTicket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceTicket"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    tasks?: HousekeepingTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    tasks?: HousekeepingTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tasks?: HousekeepingTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tasks?: HousekeepingTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SettingsCreateInput = {
    id?: number
    vatRate?: number
    touristTax?: number
    exchangeRateEUR: number
    exchangeRateUSD: number
    updatedAt?: Date | string
  }

  export type SettingsUncheckedCreateInput = {
    id?: number
    vatRate?: number
    touristTax?: number
    exchangeRateEUR: number
    exchangeRateUSD: number
    updatedAt?: Date | string
  }

  export type SettingsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    touristTax?: FloatFieldUpdateOperationsInput | number
    exchangeRateEUR?: FloatFieldUpdateOperationsInput | number
    exchangeRateUSD?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    touristTax?: FloatFieldUpdateOperationsInput | number
    exchangeRateEUR?: FloatFieldUpdateOperationsInput | number
    exchangeRateUSD?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateManyInput = {
    id?: number
    vatRate?: number
    touristTax?: number
    exchangeRateEUR: number
    exchangeRateUSD: number
    updatedAt?: Date | string
  }

  export type SettingsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    touristTax?: FloatFieldUpdateOperationsInput | number
    exchangeRateEUR?: FloatFieldUpdateOperationsInput | number
    exchangeRateUSD?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    touristTax?: FloatFieldUpdateOperationsInput | number
    exchangeRateEUR?: FloatFieldUpdateOperationsInput | number
    exchangeRateUSD?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    number: string
    name?: string | null
    type: string
    capacity: number
    basePriceMGA: number
    status?: $Enums.RoomStatus
    reservations?: ReservationCreateNestedManyWithoutRoomInput
    maintenance?: MaintenanceTicketCreateNestedManyWithoutRoomInput
    housekeeping?: HousekeepingTaskCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    number: string
    name?: string | null
    type: string
    capacity: number
    basePriceMGA: number
    status?: $Enums.RoomStatus
    reservations?: ReservationUncheckedCreateNestedManyWithoutRoomInput
    maintenance?: MaintenanceTicketUncheckedCreateNestedManyWithoutRoomInput
    housekeeping?: HousekeepingTaskUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePriceMGA?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    reservations?: ReservationUpdateManyWithoutRoomNestedInput
    maintenance?: MaintenanceTicketUpdateManyWithoutRoomNestedInput
    housekeeping?: HousekeepingTaskUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePriceMGA?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    reservations?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
    maintenance?: MaintenanceTicketUncheckedUpdateManyWithoutRoomNestedInput
    housekeeping?: HousekeepingTaskUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    number: string
    name?: string | null
    type: string
    capacity: number
    basePriceMGA: number
    status?: $Enums.RoomStatus
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePriceMGA?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePriceMGA?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
  }

  export type GuestCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    country?: string | null
    guestType: string
    reservations?: ReservationCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    country?: string | null
    guestType: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    guestType?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    guestType?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    country?: string | null
    guestType: string
  }

  export type GuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    guestType?: StringFieldUpdateOperationsInput | string
  }

  export type GuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    guestType?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    guest: GuestCreateNestedOneWithoutReservationsInput
    room: RoomCreateNestedOneWithoutReservationsInput
    otaPlatform?: OtaPlatformCreateNestedOneWithoutReservationsInput
    invoice?: InvoiceCreateNestedOneWithoutReservationInput
    otaCommission?: OtaCommissionCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    guestId: string
    roomId: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    otaPlatformId?: string | null
    invoice?: InvoiceUncheckedCreateNestedOneWithoutReservationInput
    otaCommission?: OtaCommissionUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    room?: RoomUpdateOneRequiredWithoutReservationsNestedInput
    otaPlatform?: OtaPlatformUpdateOneWithoutReservationsNestedInput
    invoice?: InvoiceUpdateOneWithoutReservationNestedInput
    otaCommission?: OtaCommissionUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    otaPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
    invoice?: InvoiceUncheckedUpdateOneWithoutReservationNestedInput
    otaCommission?: OtaCommissionUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    id?: string
    guestId: string
    roomId: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    otaPlatformId?: string | null
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    otaPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OtaPlatformCreateInput = {
    id?: string
    name: string
    commissionType: string
    commissionRate: number
    reservations?: ReservationCreateNestedManyWithoutOtaPlatformInput
  }

  export type OtaPlatformUncheckedCreateInput = {
    id?: string
    name: string
    commissionType: string
    commissionRate: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutOtaPlatformInput
  }

  export type OtaPlatformUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commissionType?: StringFieldUpdateOperationsInput | string
    commissionRate?: FloatFieldUpdateOperationsInput | number
    reservations?: ReservationUpdateManyWithoutOtaPlatformNestedInput
  }

  export type OtaPlatformUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commissionType?: StringFieldUpdateOperationsInput | string
    commissionRate?: FloatFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutOtaPlatformNestedInput
  }

  export type OtaPlatformCreateManyInput = {
    id?: string
    name: string
    commissionType: string
    commissionRate: number
  }

  export type OtaPlatformUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commissionType?: StringFieldUpdateOperationsInput | string
    commissionRate?: FloatFieldUpdateOperationsInput | number
  }

  export type OtaPlatformUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commissionType?: StringFieldUpdateOperationsInput | string
    commissionRate?: FloatFieldUpdateOperationsInput | number
  }

  export type OtaCommissionCreateInput = {
    id?: string
    amountMGA: number
    status: string
    reservation: ReservationCreateNestedOneWithoutOtaCommissionInput
  }

  export type OtaCommissionUncheckedCreateInput = {
    id?: string
    reservationId: string
    amountMGA: number
    status: string
  }

  export type OtaCommissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountMGA?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reservation?: ReservationUpdateOneRequiredWithoutOtaCommissionNestedInput
  }

  export type OtaCommissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    amountMGA?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OtaCommissionCreateManyInput = {
    id?: string
    reservationId: string
    amountMGA: number
    status: string
  }

  export type OtaCommissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountMGA?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OtaCommissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    amountMGA?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateInput = {
    id?: string
    reference: string
    amountHT_MGA: number
    vatAmount_MGA: number
    touristTaxMGA: number
    totalTTC_MGA: number
    status: string
    reservation: ReservationCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    reference: string
    reservationId: string
    amountHT_MGA: number
    vatAmount_MGA: number
    touristTaxMGA: number
    totalTTC_MGA: number
    status: string
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amountHT_MGA?: FloatFieldUpdateOperationsInput | number
    vatAmount_MGA?: FloatFieldUpdateOperationsInput | number
    touristTaxMGA?: FloatFieldUpdateOperationsInput | number
    totalTTC_MGA?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reservation?: ReservationUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    amountHT_MGA?: FloatFieldUpdateOperationsInput | number
    vatAmount_MGA?: FloatFieldUpdateOperationsInput | number
    touristTaxMGA?: FloatFieldUpdateOperationsInput | number
    totalTTC_MGA?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateManyInput = {
    id?: string
    reference: string
    reservationId: string
    amountHT_MGA: number
    vatAmount_MGA: number
    touristTaxMGA: number
    totalTTC_MGA: number
    status: string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amountHT_MGA?: FloatFieldUpdateOperationsInput | number
    vatAmount_MGA?: FloatFieldUpdateOperationsInput | number
    touristTaxMGA?: FloatFieldUpdateOperationsInput | number
    totalTTC_MGA?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    amountHT_MGA?: FloatFieldUpdateOperationsInput | number
    vatAmount_MGA?: FloatFieldUpdateOperationsInput | number
    touristTaxMGA?: FloatFieldUpdateOperationsInput | number
    totalTTC_MGA?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type HousekeepingTaskCreateInput = {
    id?: string
    date: Date | string
    status: string
    room: RoomCreateNestedOneWithoutHousekeepingInput
    user?: UserCreateNestedOneWithoutTasksInput
  }

  export type HousekeepingTaskUncheckedCreateInput = {
    id?: string
    roomId: string
    date: Date | string
    status: string
    userId?: string | null
  }

  export type HousekeepingTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutHousekeepingNestedInput
    user?: UserUpdateOneWithoutTasksNestedInput
  }

  export type HousekeepingTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HousekeepingTaskCreateManyInput = {
    id?: string
    roomId: string
    date: Date | string
    status: string
    userId?: string | null
  }

  export type HousekeepingTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type HousekeepingTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceTicketCreateInput = {
    id?: string
    description: string
    priority: string
    status: string
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutMaintenanceInput
  }

  export type MaintenanceTicketUncheckedCreateInput = {
    id?: string
    roomId: string
    description: string
    priority: string
    status: string
    createdAt?: Date | string
  }

  export type MaintenanceTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMaintenanceNestedInput
  }

  export type MaintenanceTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTicketCreateManyInput = {
    id?: string
    roomId: string
    description: string
    priority: string
    status: string
    createdAt?: Date | string
  }

  export type MaintenanceTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type HousekeepingTaskListRelationFilter = {
    every?: HousekeepingTaskWhereInput
    some?: HousekeepingTaskWhereInput
    none?: HousekeepingTaskWhereInput
  }

  export type HousekeepingTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    vatRate?: SortOrder
    touristTax?: SortOrder
    exchangeRateEUR?: SortOrder
    exchangeRateUSD?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    vatRate?: SortOrder
    touristTax?: SortOrder
    exchangeRateEUR?: SortOrder
    exchangeRateUSD?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    vatRate?: SortOrder
    touristTax?: SortOrder
    exchangeRateEUR?: SortOrder
    exchangeRateUSD?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    vatRate?: SortOrder
    touristTax?: SortOrder
    exchangeRateEUR?: SortOrder
    exchangeRateUSD?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    id?: SortOrder
    vatRate?: SortOrder
    touristTax?: SortOrder
    exchangeRateEUR?: SortOrder
    exchangeRateUSD?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type MaintenanceTicketListRelationFilter = {
    every?: MaintenanceTicketWhereInput
    some?: MaintenanceTicketWhereInput
    none?: MaintenanceTicketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    type?: SortOrder
    capacity?: SortOrder
    basePriceMGA?: SortOrder
    status?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    capacity?: SortOrder
    basePriceMGA?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    type?: SortOrder
    capacity?: SortOrder
    basePriceMGA?: SortOrder
    status?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    type?: SortOrder
    capacity?: SortOrder
    basePriceMGA?: SortOrder
    status?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    capacity?: SortOrder
    basePriceMGA?: SortOrder
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

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type GuestCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    guestType?: SortOrder
  }

  export type GuestMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    guestType?: SortOrder
  }

  export type GuestMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    guestType?: SortOrder
  }

  export type EnumReservationSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationSource | EnumReservationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationSource[] | ListEnumReservationSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationSource[] | ListEnumReservationSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationSourceFilter<$PrismaModel> | $Enums.ReservationSource
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type GuestRelationFilter = {
    is?: GuestWhereInput
    isNot?: GuestWhereInput
  }

  export type RoomRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type OtaPlatformNullableRelationFilter = {
    is?: OtaPlatformWhereInput | null
    isNot?: OtaPlatformWhereInput | null
  }

  export type InvoiceNullableRelationFilter = {
    is?: InvoiceWhereInput | null
    isNot?: InvoiceWhereInput | null
  }

  export type OtaCommissionNullableRelationFilter = {
    is?: OtaCommissionWhereInput | null
    isNot?: OtaCommissionWhereInput | null
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guestsCount?: SortOrder
    source?: SortOrder
    status?: SortOrder
    otaPlatformId?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    guestsCount?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guestsCount?: SortOrder
    source?: SortOrder
    status?: SortOrder
    otaPlatformId?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guestsCount?: SortOrder
    source?: SortOrder
    status?: SortOrder
    otaPlatformId?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    guestsCount?: SortOrder
  }

  export type EnumReservationSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationSource | EnumReservationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationSource[] | ListEnumReservationSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationSource[] | ListEnumReservationSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationSourceWithAggregatesFilter<$PrismaModel> | $Enums.ReservationSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationSourceFilter<$PrismaModel>
    _max?: NestedEnumReservationSourceFilter<$PrismaModel>
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type OtaPlatformCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    commissionType?: SortOrder
    commissionRate?: SortOrder
  }

  export type OtaPlatformAvgOrderByAggregateInput = {
    commissionRate?: SortOrder
  }

  export type OtaPlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    commissionType?: SortOrder
    commissionRate?: SortOrder
  }

  export type OtaPlatformMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    commissionType?: SortOrder
    commissionRate?: SortOrder
  }

  export type OtaPlatformSumOrderByAggregateInput = {
    commissionRate?: SortOrder
  }

  export type ReservationRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type OtaCommissionCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amountMGA?: SortOrder
    status?: SortOrder
  }

  export type OtaCommissionAvgOrderByAggregateInput = {
    amountMGA?: SortOrder
  }

  export type OtaCommissionMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amountMGA?: SortOrder
    status?: SortOrder
  }

  export type OtaCommissionMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amountMGA?: SortOrder
    status?: SortOrder
  }

  export type OtaCommissionSumOrderByAggregateInput = {
    amountMGA?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    reservationId?: SortOrder
    amountHT_MGA?: SortOrder
    vatAmount_MGA?: SortOrder
    touristTaxMGA?: SortOrder
    totalTTC_MGA?: SortOrder
    status?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amountHT_MGA?: SortOrder
    vatAmount_MGA?: SortOrder
    touristTaxMGA?: SortOrder
    totalTTC_MGA?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    reservationId?: SortOrder
    amountHT_MGA?: SortOrder
    vatAmount_MGA?: SortOrder
    touristTaxMGA?: SortOrder
    totalTTC_MGA?: SortOrder
    status?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    reservationId?: SortOrder
    amountHT_MGA?: SortOrder
    vatAmount_MGA?: SortOrder
    touristTaxMGA?: SortOrder
    totalTTC_MGA?: SortOrder
    status?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amountHT_MGA?: SortOrder
    vatAmount_MGA?: SortOrder
    touristTaxMGA?: SortOrder
    totalTTC_MGA?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type HousekeepingTaskCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type HousekeepingTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type HousekeepingTaskMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type MaintenanceTicketCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceTicketMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type HousekeepingTaskCreateNestedManyWithoutUserInput = {
    create?: XOR<HousekeepingTaskCreateWithoutUserInput, HousekeepingTaskUncheckedCreateWithoutUserInput> | HousekeepingTaskCreateWithoutUserInput[] | HousekeepingTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HousekeepingTaskCreateOrConnectWithoutUserInput | HousekeepingTaskCreateOrConnectWithoutUserInput[]
    createMany?: HousekeepingTaskCreateManyUserInputEnvelope
    connect?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
  }

  export type HousekeepingTaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HousekeepingTaskCreateWithoutUserInput, HousekeepingTaskUncheckedCreateWithoutUserInput> | HousekeepingTaskCreateWithoutUserInput[] | HousekeepingTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HousekeepingTaskCreateOrConnectWithoutUserInput | HousekeepingTaskCreateOrConnectWithoutUserInput[]
    createMany?: HousekeepingTaskCreateManyUserInputEnvelope
    connect?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type HousekeepingTaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<HousekeepingTaskCreateWithoutUserInput, HousekeepingTaskUncheckedCreateWithoutUserInput> | HousekeepingTaskCreateWithoutUserInput[] | HousekeepingTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HousekeepingTaskCreateOrConnectWithoutUserInput | HousekeepingTaskCreateOrConnectWithoutUserInput[]
    upsert?: HousekeepingTaskUpsertWithWhereUniqueWithoutUserInput | HousekeepingTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HousekeepingTaskCreateManyUserInputEnvelope
    set?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    disconnect?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    delete?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    connect?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    update?: HousekeepingTaskUpdateWithWhereUniqueWithoutUserInput | HousekeepingTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HousekeepingTaskUpdateManyWithWhereWithoutUserInput | HousekeepingTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HousekeepingTaskScalarWhereInput | HousekeepingTaskScalarWhereInput[]
  }

  export type HousekeepingTaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HousekeepingTaskCreateWithoutUserInput, HousekeepingTaskUncheckedCreateWithoutUserInput> | HousekeepingTaskCreateWithoutUserInput[] | HousekeepingTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HousekeepingTaskCreateOrConnectWithoutUserInput | HousekeepingTaskCreateOrConnectWithoutUserInput[]
    upsert?: HousekeepingTaskUpsertWithWhereUniqueWithoutUserInput | HousekeepingTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HousekeepingTaskCreateManyUserInputEnvelope
    set?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    disconnect?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    delete?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    connect?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    update?: HousekeepingTaskUpdateWithWhereUniqueWithoutUserInput | HousekeepingTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HousekeepingTaskUpdateManyWithWhereWithoutUserInput | HousekeepingTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HousekeepingTaskScalarWhereInput | HousekeepingTaskScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservationCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type MaintenanceTicketCreateNestedManyWithoutRoomInput = {
    create?: XOR<MaintenanceTicketCreateWithoutRoomInput, MaintenanceTicketUncheckedCreateWithoutRoomInput> | MaintenanceTicketCreateWithoutRoomInput[] | MaintenanceTicketUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MaintenanceTicketCreateOrConnectWithoutRoomInput | MaintenanceTicketCreateOrConnectWithoutRoomInput[]
    createMany?: MaintenanceTicketCreateManyRoomInputEnvelope
    connect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
  }

  export type HousekeepingTaskCreateNestedManyWithoutRoomInput = {
    create?: XOR<HousekeepingTaskCreateWithoutRoomInput, HousekeepingTaskUncheckedCreateWithoutRoomInput> | HousekeepingTaskCreateWithoutRoomInput[] | HousekeepingTaskUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: HousekeepingTaskCreateOrConnectWithoutRoomInput | HousekeepingTaskCreateOrConnectWithoutRoomInput[]
    createMany?: HousekeepingTaskCreateManyRoomInputEnvelope
    connect?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type MaintenanceTicketUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<MaintenanceTicketCreateWithoutRoomInput, MaintenanceTicketUncheckedCreateWithoutRoomInput> | MaintenanceTicketCreateWithoutRoomInput[] | MaintenanceTicketUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MaintenanceTicketCreateOrConnectWithoutRoomInput | MaintenanceTicketCreateOrConnectWithoutRoomInput[]
    createMany?: MaintenanceTicketCreateManyRoomInputEnvelope
    connect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
  }

  export type HousekeepingTaskUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<HousekeepingTaskCreateWithoutRoomInput, HousekeepingTaskUncheckedCreateWithoutRoomInput> | HousekeepingTaskCreateWithoutRoomInput[] | HousekeepingTaskUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: HousekeepingTaskCreateOrConnectWithoutRoomInput | HousekeepingTaskCreateOrConnectWithoutRoomInput[]
    createMany?: HousekeepingTaskCreateManyRoomInputEnvelope
    connect?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type ReservationUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutRoomInput | ReservationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutRoomInput | ReservationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutRoomInput | ReservationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type MaintenanceTicketUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MaintenanceTicketCreateWithoutRoomInput, MaintenanceTicketUncheckedCreateWithoutRoomInput> | MaintenanceTicketCreateWithoutRoomInput[] | MaintenanceTicketUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MaintenanceTicketCreateOrConnectWithoutRoomInput | MaintenanceTicketCreateOrConnectWithoutRoomInput[]
    upsert?: MaintenanceTicketUpsertWithWhereUniqueWithoutRoomInput | MaintenanceTicketUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MaintenanceTicketCreateManyRoomInputEnvelope
    set?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    disconnect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    delete?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    connect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    update?: MaintenanceTicketUpdateWithWhereUniqueWithoutRoomInput | MaintenanceTicketUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MaintenanceTicketUpdateManyWithWhereWithoutRoomInput | MaintenanceTicketUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MaintenanceTicketScalarWhereInput | MaintenanceTicketScalarWhereInput[]
  }

  export type HousekeepingTaskUpdateManyWithoutRoomNestedInput = {
    create?: XOR<HousekeepingTaskCreateWithoutRoomInput, HousekeepingTaskUncheckedCreateWithoutRoomInput> | HousekeepingTaskCreateWithoutRoomInput[] | HousekeepingTaskUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: HousekeepingTaskCreateOrConnectWithoutRoomInput | HousekeepingTaskCreateOrConnectWithoutRoomInput[]
    upsert?: HousekeepingTaskUpsertWithWhereUniqueWithoutRoomInput | HousekeepingTaskUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: HousekeepingTaskCreateManyRoomInputEnvelope
    set?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    disconnect?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    delete?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    connect?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    update?: HousekeepingTaskUpdateWithWhereUniqueWithoutRoomInput | HousekeepingTaskUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: HousekeepingTaskUpdateManyWithWhereWithoutRoomInput | HousekeepingTaskUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: HousekeepingTaskScalarWhereInput | HousekeepingTaskScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutRoomInput | ReservationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutRoomInput | ReservationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutRoomInput | ReservationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type MaintenanceTicketUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MaintenanceTicketCreateWithoutRoomInput, MaintenanceTicketUncheckedCreateWithoutRoomInput> | MaintenanceTicketCreateWithoutRoomInput[] | MaintenanceTicketUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MaintenanceTicketCreateOrConnectWithoutRoomInput | MaintenanceTicketCreateOrConnectWithoutRoomInput[]
    upsert?: MaintenanceTicketUpsertWithWhereUniqueWithoutRoomInput | MaintenanceTicketUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MaintenanceTicketCreateManyRoomInputEnvelope
    set?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    disconnect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    delete?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    connect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    update?: MaintenanceTicketUpdateWithWhereUniqueWithoutRoomInput | MaintenanceTicketUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MaintenanceTicketUpdateManyWithWhereWithoutRoomInput | MaintenanceTicketUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MaintenanceTicketScalarWhereInput | MaintenanceTicketScalarWhereInput[]
  }

  export type HousekeepingTaskUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<HousekeepingTaskCreateWithoutRoomInput, HousekeepingTaskUncheckedCreateWithoutRoomInput> | HousekeepingTaskCreateWithoutRoomInput[] | HousekeepingTaskUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: HousekeepingTaskCreateOrConnectWithoutRoomInput | HousekeepingTaskCreateOrConnectWithoutRoomInput[]
    upsert?: HousekeepingTaskUpsertWithWhereUniqueWithoutRoomInput | HousekeepingTaskUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: HousekeepingTaskCreateManyRoomInputEnvelope
    set?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    disconnect?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    delete?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    connect?: HousekeepingTaskWhereUniqueInput | HousekeepingTaskWhereUniqueInput[]
    update?: HousekeepingTaskUpdateWithWhereUniqueWithoutRoomInput | HousekeepingTaskUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: HousekeepingTaskUpdateManyWithWhereWithoutRoomInput | HousekeepingTaskUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: HousekeepingTaskScalarWhereInput | HousekeepingTaskScalarWhereInput[]
  }

  export type ReservationCreateNestedManyWithoutGuestInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUpdateManyWithoutGuestNestedInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutGuestInput | ReservationUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutGuestInput | ReservationUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutGuestInput | ReservationUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutGuestInput | ReservationUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutGuestInput | ReservationUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutGuestInput | ReservationUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type GuestCreateNestedOneWithoutReservationsInput = {
    create?: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutReservationsInput
    connect?: GuestWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutReservationsInput = {
    create?: XOR<RoomCreateWithoutReservationsInput, RoomUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReservationsInput
    connect?: RoomWhereUniqueInput
  }

  export type OtaPlatformCreateNestedOneWithoutReservationsInput = {
    create?: XOR<OtaPlatformCreateWithoutReservationsInput, OtaPlatformUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: OtaPlatformCreateOrConnectWithoutReservationsInput
    connect?: OtaPlatformWhereUniqueInput
  }

  export type InvoiceCreateNestedOneWithoutReservationInput = {
    create?: XOR<InvoiceCreateWithoutReservationInput, InvoiceUncheckedCreateWithoutReservationInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutReservationInput
    connect?: InvoiceWhereUniqueInput
  }

  export type OtaCommissionCreateNestedOneWithoutReservationInput = {
    create?: XOR<OtaCommissionCreateWithoutReservationInput, OtaCommissionUncheckedCreateWithoutReservationInput>
    connectOrCreate?: OtaCommissionCreateOrConnectWithoutReservationInput
    connect?: OtaCommissionWhereUniqueInput
  }

  export type InvoiceUncheckedCreateNestedOneWithoutReservationInput = {
    create?: XOR<InvoiceCreateWithoutReservationInput, InvoiceUncheckedCreateWithoutReservationInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutReservationInput
    connect?: InvoiceWhereUniqueInput
  }

  export type OtaCommissionUncheckedCreateNestedOneWithoutReservationInput = {
    create?: XOR<OtaCommissionCreateWithoutReservationInput, OtaCommissionUncheckedCreateWithoutReservationInput>
    connectOrCreate?: OtaCommissionCreateOrConnectWithoutReservationInput
    connect?: OtaCommissionWhereUniqueInput
  }

  export type EnumReservationSourceFieldUpdateOperationsInput = {
    set?: $Enums.ReservationSource
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type GuestUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutReservationsInput
    upsert?: GuestUpsertWithoutReservationsInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutReservationsInput, GuestUpdateWithoutReservationsInput>, GuestUncheckedUpdateWithoutReservationsInput>
  }

  export type RoomUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<RoomCreateWithoutReservationsInput, RoomUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReservationsInput
    upsert?: RoomUpsertWithoutReservationsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutReservationsInput, RoomUpdateWithoutReservationsInput>, RoomUncheckedUpdateWithoutReservationsInput>
  }

  export type OtaPlatformUpdateOneWithoutReservationsNestedInput = {
    create?: XOR<OtaPlatformCreateWithoutReservationsInput, OtaPlatformUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: OtaPlatformCreateOrConnectWithoutReservationsInput
    upsert?: OtaPlatformUpsertWithoutReservationsInput
    disconnect?: OtaPlatformWhereInput | boolean
    delete?: OtaPlatformWhereInput | boolean
    connect?: OtaPlatformWhereUniqueInput
    update?: XOR<XOR<OtaPlatformUpdateToOneWithWhereWithoutReservationsInput, OtaPlatformUpdateWithoutReservationsInput>, OtaPlatformUncheckedUpdateWithoutReservationsInput>
  }

  export type InvoiceUpdateOneWithoutReservationNestedInput = {
    create?: XOR<InvoiceCreateWithoutReservationInput, InvoiceUncheckedCreateWithoutReservationInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutReservationInput
    upsert?: InvoiceUpsertWithoutReservationInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutReservationInput, InvoiceUpdateWithoutReservationInput>, InvoiceUncheckedUpdateWithoutReservationInput>
  }

  export type OtaCommissionUpdateOneWithoutReservationNestedInput = {
    create?: XOR<OtaCommissionCreateWithoutReservationInput, OtaCommissionUncheckedCreateWithoutReservationInput>
    connectOrCreate?: OtaCommissionCreateOrConnectWithoutReservationInput
    upsert?: OtaCommissionUpsertWithoutReservationInput
    disconnect?: OtaCommissionWhereInput | boolean
    delete?: OtaCommissionWhereInput | boolean
    connect?: OtaCommissionWhereUniqueInput
    update?: XOR<XOR<OtaCommissionUpdateToOneWithWhereWithoutReservationInput, OtaCommissionUpdateWithoutReservationInput>, OtaCommissionUncheckedUpdateWithoutReservationInput>
  }

  export type InvoiceUncheckedUpdateOneWithoutReservationNestedInput = {
    create?: XOR<InvoiceCreateWithoutReservationInput, InvoiceUncheckedCreateWithoutReservationInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutReservationInput
    upsert?: InvoiceUpsertWithoutReservationInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutReservationInput, InvoiceUpdateWithoutReservationInput>, InvoiceUncheckedUpdateWithoutReservationInput>
  }

  export type OtaCommissionUncheckedUpdateOneWithoutReservationNestedInput = {
    create?: XOR<OtaCommissionCreateWithoutReservationInput, OtaCommissionUncheckedCreateWithoutReservationInput>
    connectOrCreate?: OtaCommissionCreateOrConnectWithoutReservationInput
    upsert?: OtaCommissionUpsertWithoutReservationInput
    disconnect?: OtaCommissionWhereInput | boolean
    delete?: OtaCommissionWhereInput | boolean
    connect?: OtaCommissionWhereUniqueInput
    update?: XOR<XOR<OtaCommissionUpdateToOneWithWhereWithoutReservationInput, OtaCommissionUpdateWithoutReservationInput>, OtaCommissionUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationCreateNestedManyWithoutOtaPlatformInput = {
    create?: XOR<ReservationCreateWithoutOtaPlatformInput, ReservationUncheckedCreateWithoutOtaPlatformInput> | ReservationCreateWithoutOtaPlatformInput[] | ReservationUncheckedCreateWithoutOtaPlatformInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutOtaPlatformInput | ReservationCreateOrConnectWithoutOtaPlatformInput[]
    createMany?: ReservationCreateManyOtaPlatformInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutOtaPlatformInput = {
    create?: XOR<ReservationCreateWithoutOtaPlatformInput, ReservationUncheckedCreateWithoutOtaPlatformInput> | ReservationCreateWithoutOtaPlatformInput[] | ReservationUncheckedCreateWithoutOtaPlatformInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutOtaPlatformInput | ReservationCreateOrConnectWithoutOtaPlatformInput[]
    createMany?: ReservationCreateManyOtaPlatformInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUpdateManyWithoutOtaPlatformNestedInput = {
    create?: XOR<ReservationCreateWithoutOtaPlatformInput, ReservationUncheckedCreateWithoutOtaPlatformInput> | ReservationCreateWithoutOtaPlatformInput[] | ReservationUncheckedCreateWithoutOtaPlatformInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutOtaPlatformInput | ReservationCreateOrConnectWithoutOtaPlatformInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutOtaPlatformInput | ReservationUpsertWithWhereUniqueWithoutOtaPlatformInput[]
    createMany?: ReservationCreateManyOtaPlatformInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutOtaPlatformInput | ReservationUpdateWithWhereUniqueWithoutOtaPlatformInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutOtaPlatformInput | ReservationUpdateManyWithWhereWithoutOtaPlatformInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutOtaPlatformNestedInput = {
    create?: XOR<ReservationCreateWithoutOtaPlatformInput, ReservationUncheckedCreateWithoutOtaPlatformInput> | ReservationCreateWithoutOtaPlatformInput[] | ReservationUncheckedCreateWithoutOtaPlatformInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutOtaPlatformInput | ReservationCreateOrConnectWithoutOtaPlatformInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutOtaPlatformInput | ReservationUpsertWithWhereUniqueWithoutOtaPlatformInput[]
    createMany?: ReservationCreateManyOtaPlatformInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutOtaPlatformInput | ReservationUpdateWithWhereUniqueWithoutOtaPlatformInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutOtaPlatformInput | ReservationUpdateManyWithWhereWithoutOtaPlatformInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationCreateNestedOneWithoutOtaCommissionInput = {
    create?: XOR<ReservationCreateWithoutOtaCommissionInput, ReservationUncheckedCreateWithoutOtaCommissionInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutOtaCommissionInput
    connect?: ReservationWhereUniqueInput
  }

  export type ReservationUpdateOneRequiredWithoutOtaCommissionNestedInput = {
    create?: XOR<ReservationCreateWithoutOtaCommissionInput, ReservationUncheckedCreateWithoutOtaCommissionInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutOtaCommissionInput
    upsert?: ReservationUpsertWithoutOtaCommissionInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutOtaCommissionInput, ReservationUpdateWithoutOtaCommissionInput>, ReservationUncheckedUpdateWithoutOtaCommissionInput>
  }

  export type ReservationCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<ReservationCreateWithoutInvoiceInput, ReservationUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutInvoiceInput
    connect?: ReservationWhereUniqueInput
  }

  export type ReservationUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<ReservationCreateWithoutInvoiceInput, ReservationUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutInvoiceInput
    upsert?: ReservationUpsertWithoutInvoiceInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutInvoiceInput, ReservationUpdateWithoutInvoiceInput>, ReservationUncheckedUpdateWithoutInvoiceInput>
  }

  export type RoomCreateNestedOneWithoutHousekeepingInput = {
    create?: XOR<RoomCreateWithoutHousekeepingInput, RoomUncheckedCreateWithoutHousekeepingInput>
    connectOrCreate?: RoomCreateOrConnectWithoutHousekeepingInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutHousekeepingNestedInput = {
    create?: XOR<RoomCreateWithoutHousekeepingInput, RoomUncheckedCreateWithoutHousekeepingInput>
    connectOrCreate?: RoomCreateOrConnectWithoutHousekeepingInput
    upsert?: RoomUpsertWithoutHousekeepingInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutHousekeepingInput, RoomUpdateWithoutHousekeepingInput>, RoomUncheckedUpdateWithoutHousekeepingInput>
  }

  export type UserUpdateOneWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type RoomCreateNestedOneWithoutMaintenanceInput = {
    create?: XOR<RoomCreateWithoutMaintenanceInput, RoomUncheckedCreateWithoutMaintenanceInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMaintenanceInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutMaintenanceNestedInput = {
    create?: XOR<RoomCreateWithoutMaintenanceInput, RoomUncheckedCreateWithoutMaintenanceInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMaintenanceInput
    upsert?: RoomUpsertWithoutMaintenanceInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMaintenanceInput, RoomUpdateWithoutMaintenanceInput>, RoomUncheckedUpdateWithoutMaintenanceInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
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

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type NestedEnumReservationSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationSource | EnumReservationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationSource[] | ListEnumReservationSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationSource[] | ListEnumReservationSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationSourceFilter<$PrismaModel> | $Enums.ReservationSource
  }

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedEnumReservationSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationSource | EnumReservationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationSource[] | ListEnumReservationSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationSource[] | ListEnumReservationSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationSourceWithAggregatesFilter<$PrismaModel> | $Enums.ReservationSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationSourceFilter<$PrismaModel>
    _max?: NestedEnumReservationSourceFilter<$PrismaModel>
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type HousekeepingTaskCreateWithoutUserInput = {
    id?: string
    date: Date | string
    status: string
    room: RoomCreateNestedOneWithoutHousekeepingInput
  }

  export type HousekeepingTaskUncheckedCreateWithoutUserInput = {
    id?: string
    roomId: string
    date: Date | string
    status: string
  }

  export type HousekeepingTaskCreateOrConnectWithoutUserInput = {
    where: HousekeepingTaskWhereUniqueInput
    create: XOR<HousekeepingTaskCreateWithoutUserInput, HousekeepingTaskUncheckedCreateWithoutUserInput>
  }

  export type HousekeepingTaskCreateManyUserInputEnvelope = {
    data: HousekeepingTaskCreateManyUserInput | HousekeepingTaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HousekeepingTaskUpsertWithWhereUniqueWithoutUserInput = {
    where: HousekeepingTaskWhereUniqueInput
    update: XOR<HousekeepingTaskUpdateWithoutUserInput, HousekeepingTaskUncheckedUpdateWithoutUserInput>
    create: XOR<HousekeepingTaskCreateWithoutUserInput, HousekeepingTaskUncheckedCreateWithoutUserInput>
  }

  export type HousekeepingTaskUpdateWithWhereUniqueWithoutUserInput = {
    where: HousekeepingTaskWhereUniqueInput
    data: XOR<HousekeepingTaskUpdateWithoutUserInput, HousekeepingTaskUncheckedUpdateWithoutUserInput>
  }

  export type HousekeepingTaskUpdateManyWithWhereWithoutUserInput = {
    where: HousekeepingTaskScalarWhereInput
    data: XOR<HousekeepingTaskUpdateManyMutationInput, HousekeepingTaskUncheckedUpdateManyWithoutUserInput>
  }

  export type HousekeepingTaskScalarWhereInput = {
    AND?: HousekeepingTaskScalarWhereInput | HousekeepingTaskScalarWhereInput[]
    OR?: HousekeepingTaskScalarWhereInput[]
    NOT?: HousekeepingTaskScalarWhereInput | HousekeepingTaskScalarWhereInput[]
    id?: StringFilter<"HousekeepingTask"> | string
    roomId?: StringFilter<"HousekeepingTask"> | string
    date?: DateTimeFilter<"HousekeepingTask"> | Date | string
    status?: StringFilter<"HousekeepingTask"> | string
    userId?: StringNullableFilter<"HousekeepingTask"> | string | null
  }

  export type ReservationCreateWithoutRoomInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    guest: GuestCreateNestedOneWithoutReservationsInput
    otaPlatform?: OtaPlatformCreateNestedOneWithoutReservationsInput
    invoice?: InvoiceCreateNestedOneWithoutReservationInput
    otaCommission?: OtaCommissionCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutRoomInput = {
    id?: string
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    otaPlatformId?: string | null
    invoice?: InvoiceUncheckedCreateNestedOneWithoutReservationInput
    otaCommission?: OtaCommissionUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutRoomInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput>
  }

  export type ReservationCreateManyRoomInputEnvelope = {
    data: ReservationCreateManyRoomInput | ReservationCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceTicketCreateWithoutRoomInput = {
    id?: string
    description: string
    priority: string
    status: string
    createdAt?: Date | string
  }

  export type MaintenanceTicketUncheckedCreateWithoutRoomInput = {
    id?: string
    description: string
    priority: string
    status: string
    createdAt?: Date | string
  }

  export type MaintenanceTicketCreateOrConnectWithoutRoomInput = {
    where: MaintenanceTicketWhereUniqueInput
    create: XOR<MaintenanceTicketCreateWithoutRoomInput, MaintenanceTicketUncheckedCreateWithoutRoomInput>
  }

  export type MaintenanceTicketCreateManyRoomInputEnvelope = {
    data: MaintenanceTicketCreateManyRoomInput | MaintenanceTicketCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type HousekeepingTaskCreateWithoutRoomInput = {
    id?: string
    date: Date | string
    status: string
    user?: UserCreateNestedOneWithoutTasksInput
  }

  export type HousekeepingTaskUncheckedCreateWithoutRoomInput = {
    id?: string
    date: Date | string
    status: string
    userId?: string | null
  }

  export type HousekeepingTaskCreateOrConnectWithoutRoomInput = {
    where: HousekeepingTaskWhereUniqueInput
    create: XOR<HousekeepingTaskCreateWithoutRoomInput, HousekeepingTaskUncheckedCreateWithoutRoomInput>
  }

  export type HousekeepingTaskCreateManyRoomInputEnvelope = {
    data: HousekeepingTaskCreateManyRoomInput | HousekeepingTaskCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutRoomInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutRoomInput, ReservationUncheckedUpdateWithoutRoomInput>
    create: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutRoomInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutRoomInput, ReservationUncheckedUpdateWithoutRoomInput>
  }

  export type ReservationUpdateManyWithWhereWithoutRoomInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutRoomInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: StringFilter<"Reservation"> | string
    guestId?: StringFilter<"Reservation"> | string
    roomId?: StringFilter<"Reservation"> | string
    checkIn?: DateTimeFilter<"Reservation"> | Date | string
    checkOut?: DateTimeFilter<"Reservation"> | Date | string
    guestsCount?: IntFilter<"Reservation"> | number
    source?: EnumReservationSourceFilter<"Reservation"> | $Enums.ReservationSource
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    otaPlatformId?: StringNullableFilter<"Reservation"> | string | null
  }

  export type MaintenanceTicketUpsertWithWhereUniqueWithoutRoomInput = {
    where: MaintenanceTicketWhereUniqueInput
    update: XOR<MaintenanceTicketUpdateWithoutRoomInput, MaintenanceTicketUncheckedUpdateWithoutRoomInput>
    create: XOR<MaintenanceTicketCreateWithoutRoomInput, MaintenanceTicketUncheckedCreateWithoutRoomInput>
  }

  export type MaintenanceTicketUpdateWithWhereUniqueWithoutRoomInput = {
    where: MaintenanceTicketWhereUniqueInput
    data: XOR<MaintenanceTicketUpdateWithoutRoomInput, MaintenanceTicketUncheckedUpdateWithoutRoomInput>
  }

  export type MaintenanceTicketUpdateManyWithWhereWithoutRoomInput = {
    where: MaintenanceTicketScalarWhereInput
    data: XOR<MaintenanceTicketUpdateManyMutationInput, MaintenanceTicketUncheckedUpdateManyWithoutRoomInput>
  }

  export type MaintenanceTicketScalarWhereInput = {
    AND?: MaintenanceTicketScalarWhereInput | MaintenanceTicketScalarWhereInput[]
    OR?: MaintenanceTicketScalarWhereInput[]
    NOT?: MaintenanceTicketScalarWhereInput | MaintenanceTicketScalarWhereInput[]
    id?: StringFilter<"MaintenanceTicket"> | string
    roomId?: StringFilter<"MaintenanceTicket"> | string
    description?: StringFilter<"MaintenanceTicket"> | string
    priority?: StringFilter<"MaintenanceTicket"> | string
    status?: StringFilter<"MaintenanceTicket"> | string
    createdAt?: DateTimeFilter<"MaintenanceTicket"> | Date | string
  }

  export type HousekeepingTaskUpsertWithWhereUniqueWithoutRoomInput = {
    where: HousekeepingTaskWhereUniqueInput
    update: XOR<HousekeepingTaskUpdateWithoutRoomInput, HousekeepingTaskUncheckedUpdateWithoutRoomInput>
    create: XOR<HousekeepingTaskCreateWithoutRoomInput, HousekeepingTaskUncheckedCreateWithoutRoomInput>
  }

  export type HousekeepingTaskUpdateWithWhereUniqueWithoutRoomInput = {
    where: HousekeepingTaskWhereUniqueInput
    data: XOR<HousekeepingTaskUpdateWithoutRoomInput, HousekeepingTaskUncheckedUpdateWithoutRoomInput>
  }

  export type HousekeepingTaskUpdateManyWithWhereWithoutRoomInput = {
    where: HousekeepingTaskScalarWhereInput
    data: XOR<HousekeepingTaskUpdateManyMutationInput, HousekeepingTaskUncheckedUpdateManyWithoutRoomInput>
  }

  export type ReservationCreateWithoutGuestInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    room: RoomCreateNestedOneWithoutReservationsInput
    otaPlatform?: OtaPlatformCreateNestedOneWithoutReservationsInput
    invoice?: InvoiceCreateNestedOneWithoutReservationInput
    otaCommission?: OtaCommissionCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutGuestInput = {
    id?: string
    roomId: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    otaPlatformId?: string | null
    invoice?: InvoiceUncheckedCreateNestedOneWithoutReservationInput
    otaCommission?: OtaCommissionUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutGuestInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput>
  }

  export type ReservationCreateManyGuestInputEnvelope = {
    data: ReservationCreateManyGuestInput | ReservationCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutGuestInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutGuestInput, ReservationUncheckedUpdateWithoutGuestInput>
    create: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutGuestInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutGuestInput, ReservationUncheckedUpdateWithoutGuestInput>
  }

  export type ReservationUpdateManyWithWhereWithoutGuestInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutGuestInput>
  }

  export type GuestCreateWithoutReservationsInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    country?: string | null
    guestType: string
  }

  export type GuestUncheckedCreateWithoutReservationsInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    country?: string | null
    guestType: string
  }

  export type GuestCreateOrConnectWithoutReservationsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
  }

  export type RoomCreateWithoutReservationsInput = {
    id?: string
    number: string
    name?: string | null
    type: string
    capacity: number
    basePriceMGA: number
    status?: $Enums.RoomStatus
    maintenance?: MaintenanceTicketCreateNestedManyWithoutRoomInput
    housekeeping?: HousekeepingTaskCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutReservationsInput = {
    id?: string
    number: string
    name?: string | null
    type: string
    capacity: number
    basePriceMGA: number
    status?: $Enums.RoomStatus
    maintenance?: MaintenanceTicketUncheckedCreateNestedManyWithoutRoomInput
    housekeeping?: HousekeepingTaskUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutReservationsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutReservationsInput, RoomUncheckedCreateWithoutReservationsInput>
  }

  export type OtaPlatformCreateWithoutReservationsInput = {
    id?: string
    name: string
    commissionType: string
    commissionRate: number
  }

  export type OtaPlatformUncheckedCreateWithoutReservationsInput = {
    id?: string
    name: string
    commissionType: string
    commissionRate: number
  }

  export type OtaPlatformCreateOrConnectWithoutReservationsInput = {
    where: OtaPlatformWhereUniqueInput
    create: XOR<OtaPlatformCreateWithoutReservationsInput, OtaPlatformUncheckedCreateWithoutReservationsInput>
  }

  export type InvoiceCreateWithoutReservationInput = {
    id?: string
    reference: string
    amountHT_MGA: number
    vatAmount_MGA: number
    touristTaxMGA: number
    totalTTC_MGA: number
    status: string
  }

  export type InvoiceUncheckedCreateWithoutReservationInput = {
    id?: string
    reference: string
    amountHT_MGA: number
    vatAmount_MGA: number
    touristTaxMGA: number
    totalTTC_MGA: number
    status: string
  }

  export type InvoiceCreateOrConnectWithoutReservationInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutReservationInput, InvoiceUncheckedCreateWithoutReservationInput>
  }

  export type OtaCommissionCreateWithoutReservationInput = {
    id?: string
    amountMGA: number
    status: string
  }

  export type OtaCommissionUncheckedCreateWithoutReservationInput = {
    id?: string
    amountMGA: number
    status: string
  }

  export type OtaCommissionCreateOrConnectWithoutReservationInput = {
    where: OtaCommissionWhereUniqueInput
    create: XOR<OtaCommissionCreateWithoutReservationInput, OtaCommissionUncheckedCreateWithoutReservationInput>
  }

  export type GuestUpsertWithoutReservationsInput = {
    update: XOR<GuestUpdateWithoutReservationsInput, GuestUncheckedUpdateWithoutReservationsInput>
    create: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutReservationsInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutReservationsInput, GuestUncheckedUpdateWithoutReservationsInput>
  }

  export type GuestUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    guestType?: StringFieldUpdateOperationsInput | string
  }

  export type GuestUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    guestType?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUpsertWithoutReservationsInput = {
    update: XOR<RoomUpdateWithoutReservationsInput, RoomUncheckedUpdateWithoutReservationsInput>
    create: XOR<RoomCreateWithoutReservationsInput, RoomUncheckedCreateWithoutReservationsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutReservationsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutReservationsInput, RoomUncheckedUpdateWithoutReservationsInput>
  }

  export type RoomUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePriceMGA?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    maintenance?: MaintenanceTicketUpdateManyWithoutRoomNestedInput
    housekeeping?: HousekeepingTaskUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePriceMGA?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    maintenance?: MaintenanceTicketUncheckedUpdateManyWithoutRoomNestedInput
    housekeeping?: HousekeepingTaskUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type OtaPlatformUpsertWithoutReservationsInput = {
    update: XOR<OtaPlatformUpdateWithoutReservationsInput, OtaPlatformUncheckedUpdateWithoutReservationsInput>
    create: XOR<OtaPlatformCreateWithoutReservationsInput, OtaPlatformUncheckedCreateWithoutReservationsInput>
    where?: OtaPlatformWhereInput
  }

  export type OtaPlatformUpdateToOneWithWhereWithoutReservationsInput = {
    where?: OtaPlatformWhereInput
    data: XOR<OtaPlatformUpdateWithoutReservationsInput, OtaPlatformUncheckedUpdateWithoutReservationsInput>
  }

  export type OtaPlatformUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commissionType?: StringFieldUpdateOperationsInput | string
    commissionRate?: FloatFieldUpdateOperationsInput | number
  }

  export type OtaPlatformUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commissionType?: StringFieldUpdateOperationsInput | string
    commissionRate?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceUpsertWithoutReservationInput = {
    update: XOR<InvoiceUpdateWithoutReservationInput, InvoiceUncheckedUpdateWithoutReservationInput>
    create: XOR<InvoiceCreateWithoutReservationInput, InvoiceUncheckedCreateWithoutReservationInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutReservationInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutReservationInput, InvoiceUncheckedUpdateWithoutReservationInput>
  }

  export type InvoiceUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amountHT_MGA?: FloatFieldUpdateOperationsInput | number
    vatAmount_MGA?: FloatFieldUpdateOperationsInput | number
    touristTaxMGA?: FloatFieldUpdateOperationsInput | number
    totalTTC_MGA?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amountHT_MGA?: FloatFieldUpdateOperationsInput | number
    vatAmount_MGA?: FloatFieldUpdateOperationsInput | number
    touristTaxMGA?: FloatFieldUpdateOperationsInput | number
    totalTTC_MGA?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OtaCommissionUpsertWithoutReservationInput = {
    update: XOR<OtaCommissionUpdateWithoutReservationInput, OtaCommissionUncheckedUpdateWithoutReservationInput>
    create: XOR<OtaCommissionCreateWithoutReservationInput, OtaCommissionUncheckedCreateWithoutReservationInput>
    where?: OtaCommissionWhereInput
  }

  export type OtaCommissionUpdateToOneWithWhereWithoutReservationInput = {
    where?: OtaCommissionWhereInput
    data: XOR<OtaCommissionUpdateWithoutReservationInput, OtaCommissionUncheckedUpdateWithoutReservationInput>
  }

  export type OtaCommissionUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountMGA?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OtaCommissionUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountMGA?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateWithoutOtaPlatformInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    guest: GuestCreateNestedOneWithoutReservationsInput
    room: RoomCreateNestedOneWithoutReservationsInput
    invoice?: InvoiceCreateNestedOneWithoutReservationInput
    otaCommission?: OtaCommissionCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutOtaPlatformInput = {
    id?: string
    guestId: string
    roomId: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    invoice?: InvoiceUncheckedCreateNestedOneWithoutReservationInput
    otaCommission?: OtaCommissionUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutOtaPlatformInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutOtaPlatformInput, ReservationUncheckedCreateWithoutOtaPlatformInput>
  }

  export type ReservationCreateManyOtaPlatformInputEnvelope = {
    data: ReservationCreateManyOtaPlatformInput | ReservationCreateManyOtaPlatformInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutOtaPlatformInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutOtaPlatformInput, ReservationUncheckedUpdateWithoutOtaPlatformInput>
    create: XOR<ReservationCreateWithoutOtaPlatformInput, ReservationUncheckedCreateWithoutOtaPlatformInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutOtaPlatformInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutOtaPlatformInput, ReservationUncheckedUpdateWithoutOtaPlatformInput>
  }

  export type ReservationUpdateManyWithWhereWithoutOtaPlatformInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutOtaPlatformInput>
  }

  export type ReservationCreateWithoutOtaCommissionInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    guest: GuestCreateNestedOneWithoutReservationsInput
    room: RoomCreateNestedOneWithoutReservationsInput
    otaPlatform?: OtaPlatformCreateNestedOneWithoutReservationsInput
    invoice?: InvoiceCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutOtaCommissionInput = {
    id?: string
    guestId: string
    roomId: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    otaPlatformId?: string | null
    invoice?: InvoiceUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutOtaCommissionInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutOtaCommissionInput, ReservationUncheckedCreateWithoutOtaCommissionInput>
  }

  export type ReservationUpsertWithoutOtaCommissionInput = {
    update: XOR<ReservationUpdateWithoutOtaCommissionInput, ReservationUncheckedUpdateWithoutOtaCommissionInput>
    create: XOR<ReservationCreateWithoutOtaCommissionInput, ReservationUncheckedCreateWithoutOtaCommissionInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutOtaCommissionInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutOtaCommissionInput, ReservationUncheckedUpdateWithoutOtaCommissionInput>
  }

  export type ReservationUpdateWithoutOtaCommissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    room?: RoomUpdateOneRequiredWithoutReservationsNestedInput
    otaPlatform?: OtaPlatformUpdateOneWithoutReservationsNestedInput
    invoice?: InvoiceUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutOtaCommissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    otaPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
    invoice?: InvoiceUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationCreateWithoutInvoiceInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    guest: GuestCreateNestedOneWithoutReservationsInput
    room: RoomCreateNestedOneWithoutReservationsInput
    otaPlatform?: OtaPlatformCreateNestedOneWithoutReservationsInput
    otaCommission?: OtaCommissionCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutInvoiceInput = {
    id?: string
    guestId: string
    roomId: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    otaPlatformId?: string | null
    otaCommission?: OtaCommissionUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutInvoiceInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutInvoiceInput, ReservationUncheckedCreateWithoutInvoiceInput>
  }

  export type ReservationUpsertWithoutInvoiceInput = {
    update: XOR<ReservationUpdateWithoutInvoiceInput, ReservationUncheckedUpdateWithoutInvoiceInput>
    create: XOR<ReservationCreateWithoutInvoiceInput, ReservationUncheckedCreateWithoutInvoiceInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutInvoiceInput, ReservationUncheckedUpdateWithoutInvoiceInput>
  }

  export type ReservationUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    room?: RoomUpdateOneRequiredWithoutReservationsNestedInput
    otaPlatform?: OtaPlatformUpdateOneWithoutReservationsNestedInput
    otaCommission?: OtaCommissionUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    otaPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
    otaCommission?: OtaCommissionUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type RoomCreateWithoutHousekeepingInput = {
    id?: string
    number: string
    name?: string | null
    type: string
    capacity: number
    basePriceMGA: number
    status?: $Enums.RoomStatus
    reservations?: ReservationCreateNestedManyWithoutRoomInput
    maintenance?: MaintenanceTicketCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutHousekeepingInput = {
    id?: string
    number: string
    name?: string | null
    type: string
    capacity: number
    basePriceMGA: number
    status?: $Enums.RoomStatus
    reservations?: ReservationUncheckedCreateNestedManyWithoutRoomInput
    maintenance?: MaintenanceTicketUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutHousekeepingInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHousekeepingInput, RoomUncheckedCreateWithoutHousekeepingInput>
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type RoomUpsertWithoutHousekeepingInput = {
    update: XOR<RoomUpdateWithoutHousekeepingInput, RoomUncheckedUpdateWithoutHousekeepingInput>
    create: XOR<RoomCreateWithoutHousekeepingInput, RoomUncheckedCreateWithoutHousekeepingInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutHousekeepingInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutHousekeepingInput, RoomUncheckedUpdateWithoutHousekeepingInput>
  }

  export type RoomUpdateWithoutHousekeepingInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePriceMGA?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    reservations?: ReservationUpdateManyWithoutRoomNestedInput
    maintenance?: MaintenanceTicketUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutHousekeepingInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePriceMGA?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    reservations?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
    maintenance?: MaintenanceTicketUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type RoomCreateWithoutMaintenanceInput = {
    id?: string
    number: string
    name?: string | null
    type: string
    capacity: number
    basePriceMGA: number
    status?: $Enums.RoomStatus
    reservations?: ReservationCreateNestedManyWithoutRoomInput
    housekeeping?: HousekeepingTaskCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMaintenanceInput = {
    id?: string
    number: string
    name?: string | null
    type: string
    capacity: number
    basePriceMGA: number
    status?: $Enums.RoomStatus
    reservations?: ReservationUncheckedCreateNestedManyWithoutRoomInput
    housekeeping?: HousekeepingTaskUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMaintenanceInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMaintenanceInput, RoomUncheckedCreateWithoutMaintenanceInput>
  }

  export type RoomUpsertWithoutMaintenanceInput = {
    update: XOR<RoomUpdateWithoutMaintenanceInput, RoomUncheckedUpdateWithoutMaintenanceInput>
    create: XOR<RoomCreateWithoutMaintenanceInput, RoomUncheckedCreateWithoutMaintenanceInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMaintenanceInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMaintenanceInput, RoomUncheckedUpdateWithoutMaintenanceInput>
  }

  export type RoomUpdateWithoutMaintenanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePriceMGA?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    reservations?: ReservationUpdateManyWithoutRoomNestedInput
    housekeeping?: HousekeepingTaskUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMaintenanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePriceMGA?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    reservations?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
    housekeeping?: HousekeepingTaskUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type HousekeepingTaskCreateManyUserInput = {
    id?: string
    roomId: string
    date: Date | string
    status: string
  }

  export type HousekeepingTaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutHousekeepingNestedInput
  }

  export type HousekeepingTaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type HousekeepingTaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateManyRoomInput = {
    id?: string
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    otaPlatformId?: string | null
  }

  export type MaintenanceTicketCreateManyRoomInput = {
    id?: string
    description: string
    priority: string
    status: string
    createdAt?: Date | string
  }

  export type HousekeepingTaskCreateManyRoomInput = {
    id?: string
    date: Date | string
    status: string
    userId?: string | null
  }

  export type ReservationUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    otaPlatform?: OtaPlatformUpdateOneWithoutReservationsNestedInput
    invoice?: InvoiceUpdateOneWithoutReservationNestedInput
    otaCommission?: OtaCommissionUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    otaPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
    invoice?: InvoiceUncheckedUpdateOneWithoutReservationNestedInput
    otaCommission?: OtaCommissionUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    otaPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceTicketUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTicketUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTicketUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HousekeepingTaskUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutTasksNestedInput
  }

  export type HousekeepingTaskUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HousekeepingTaskUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationCreateManyGuestInput = {
    id?: string
    roomId: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
    otaPlatformId?: string | null
  }

  export type ReservationUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    room?: RoomUpdateOneRequiredWithoutReservationsNestedInput
    otaPlatform?: OtaPlatformUpdateOneWithoutReservationsNestedInput
    invoice?: InvoiceUpdateOneWithoutReservationNestedInput
    otaCommission?: OtaCommissionUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    otaPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
    invoice?: InvoiceUncheckedUpdateOneWithoutReservationNestedInput
    otaCommission?: OtaCommissionUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    otaPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationCreateManyOtaPlatformInput = {
    id?: string
    guestId: string
    roomId: string
    checkIn: Date | string
    checkOut: Date | string
    guestsCount: number
    source: $Enums.ReservationSource
    status: $Enums.ReservationStatus
  }

  export type ReservationUpdateWithoutOtaPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    room?: RoomUpdateOneRequiredWithoutReservationsNestedInput
    invoice?: InvoiceUpdateOneWithoutReservationNestedInput
    otaCommission?: OtaCommissionUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutOtaPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    invoice?: InvoiceUncheckedUpdateOneWithoutReservationNestedInput
    otaCommission?: OtaCommissionUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutOtaPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guestsCount?: IntFieldUpdateOperationsInput | number
    source?: EnumReservationSourceFieldUpdateOperationsInput | $Enums.ReservationSource
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomCountOutputTypeDefaultArgs instead
     */
    export type RoomCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GuestCountOutputTypeDefaultArgs instead
     */
    export type GuestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GuestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OtaPlatformCountOutputTypeDefaultArgs instead
     */
    export type OtaPlatformCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OtaPlatformCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettingsDefaultArgs instead
     */
    export type SettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomDefaultArgs instead
     */
    export type RoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GuestDefaultArgs instead
     */
    export type GuestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GuestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationDefaultArgs instead
     */
    export type ReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OtaPlatformDefaultArgs instead
     */
    export type OtaPlatformArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OtaPlatformDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OtaCommissionDefaultArgs instead
     */
    export type OtaCommissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OtaCommissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceDefaultArgs instead
     */
    export type InvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HousekeepingTaskDefaultArgs instead
     */
    export type HousekeepingTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HousekeepingTaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaintenanceTicketDefaultArgs instead
     */
    export type MaintenanceTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaintenanceTicketDefaultArgs<ExtArgs>

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