import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
};

export type Attendance = {
   __typename?: 'Attendance',
  id: Scalars['ID'],
  attendanceDate: Scalars['DateTime'],
  level?: Maybe<Scalars['Int']>,
  isLead?: Maybe<Scalars['Boolean']>,
  classSessionId?: Maybe<Scalars['Float']>,
  tariffId?: Maybe<Scalars['Int']>,
  user?: Maybe<User>,
};

export type ClassSession = {
   __typename?: 'ClassSession',
  id: Scalars['ID'],
  date: Scalars['DateTime'],
  danceClassId: Scalars['Int'],
  leads: Scalars['Int'],
  follows: Scalars['Int'],
  instructors?: Maybe<Array<User>>,
  users?: Maybe<Array<User>>,
  danceClass: DanceClass,
};

export type ClassSessionInput = {
  date: Scalars['DateTime'],
  danceClassId: Scalars['Int'],
  instructorId?: Maybe<Scalars['Int']>,
};

export type DanceClass = {
   __typename?: 'DanceClass',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  level: Scalars['Int'],
  classSessions?: Maybe<Array<ClassSession>>,
};

export type DanceClassInput = {
  name: Scalars['String'],
  description: Scalars['String'],
  level: Scalars['Int'],
};


export type LoginInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type LoginResponse = {
   __typename?: 'LoginResponse',
  accessToken: Scalars['String'],
  user: User,
};

export type Mutation = {
   __typename?: 'Mutation',
  register: User,
  login: LoginResponse,
  logout: Scalars['Boolean'],
  revokeRefreshTokensForUser: Scalars['Boolean'],
  createDanceClass: DanceClass,
  createClassSession: ClassSession,
  addPrice: Price,
};


export type MutationRegisterArgs = {
  data: RegisterInput
};


export type MutationLoginArgs = {
  data: LoginInput
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int']
};


export type MutationCreateDanceClassArgs = {
  data: DanceClassInput
};


export type MutationCreateClassSessionArgs = {
  data: ClassSessionInput
};


export type MutationAddPriceArgs = {
  data: PriceInput
};

export type Price = {
   __typename?: 'Price',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  isActive: Scalars['Boolean'],
  currentPrice: Scalars['Int'],
};

export type PriceInput = {
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  currentPrice: Scalars['Float'],
};

export type PriceRevision = {
   __typename?: 'PriceRevision',
  id: Scalars['ID'],
  priceId: Scalars['Int'],
  priceFrom: Scalars['DateTime'],
  priceTo?: Maybe<Scalars['DateTime']>,
  cost: Scalars['Float'],
};

export type Query = {
   __typename?: 'Query',
  hello: Scalars['String'],
  me?: Maybe<User>,
  bye: Scalars['String'],
  users: Array<User>,
  user?: Maybe<User>,
  danceClass: DanceClass,
  danceClasses: Array<DanceClass>,
  classSession: ClassSession,
  todaysClassSessions: Array<ClassSession>,
  classSessions: Array<ClassSession>,
  prices: Array<Price>,
  priceRevisions: Array<PriceRevision>,
};


export type QueryUserArgs = {
  userId: Scalars['Int']
};


export type QueryDanceClassArgs = {
  danceClassId: Scalars['Int']
};


export type QueryClassSessionArgs = {
  classSessionId: Scalars['Int']
};

export type RegisterInput = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  phone?: Maybe<Scalars['String']>,
};

export enum Source {
  Website = 'WEBSITE',
  Facebook = 'FACEBOOK',
  Mouth = 'MOUTH',
  Flyer = 'FLYER',
  Radio = 'RADIO',
  Other = 'OTHER'
}

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  email: Scalars['String'],
  tokenVersion: Scalars['Int'],
  isActive: Scalars['Boolean'],
  isSubscribed: Scalars['Boolean'],
  credits: Scalars['Int'],
  role: UserRole,
  discoverySource: Source,
  phone?: Maybe<Scalars['String']>,
  address?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
};

export enum UserRole {
  Admin = 'ADMIN',
  Support = 'SUPPORT',
  Instructor = 'INSTRUCTOR',
  Student = 'STUDENT'
}
export type ByeQueryVariables = {};


export type ByeQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'bye'>
);

export type ClassSessionsQueryVariables = {};


export type ClassSessionsQuery = (
  { __typename?: 'Query' }
  & { classSessions: Array<(
    { __typename?: 'ClassSession' }
    & Pick<ClassSession, 'id' | 'date' | 'leads' | 'follows'>
    & { instructors: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    )>>, danceClass: (
      { __typename?: 'DanceClass' }
      & Pick<DanceClass, 'name' | 'description' | 'level'>
    ), users: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    )>> }
  )> }
);

export type DanceClassesQueryVariables = {};


export type DanceClassesQuery = (
  { __typename?: 'Query' }
  & { danceClasses: Array<(
    { __typename?: 'DanceClass' }
    & Pick<DanceClass, 'id' | 'name' | 'description' | 'level'>
  )> }
);

export type HelloQueryVariables = {};


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    ) }
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export type PricesQueryVariables = {};


export type PricesQuery = (
  { __typename?: 'Query' }
  & { prices: Array<(
    { __typename?: 'Price' }
    & Pick<Price, 'id' | 'name' | 'description' | 'currentPrice' | 'isActive'>
  )> }
);

export type RegisterMutationVariables = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  ) }
);

export type UserQueryVariables = {
  userId: Scalars['Int']
};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'isActive' | 'credits'>
  )> }
);

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'isActive'>
  )> }
);

export const ByeDocument = gql`
    query Bye {
  bye
}
    `;

    export function useByeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ByeQuery, ByeQueryVariables>) {
      return ApolloReactHooks.useQuery<ByeQuery, ByeQueryVariables>(ByeDocument, baseOptions);
    }
      export function useByeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ByeQuery, ByeQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<ByeQuery, ByeQueryVariables>(ByeDocument, baseOptions);
      }
      
export type ByeQueryHookResult = ReturnType<typeof useByeQuery>;
export type ByeQueryResult = ApolloReactCommon.QueryResult<ByeQuery, ByeQueryVariables>;
export const ClassSessionsDocument = gql`
    query ClassSessions {
  classSessions {
    id
    date
    instructors {
      id
      name
    }
    leads
    follows
    danceClass {
      name
      description
      level
    }
    users {
      id
      name
    }
  }
}
    `;

    export function useClassSessionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClassSessionsQuery, ClassSessionsQueryVariables>) {
      return ApolloReactHooks.useQuery<ClassSessionsQuery, ClassSessionsQueryVariables>(ClassSessionsDocument, baseOptions);
    }
      export function useClassSessionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ClassSessionsQuery, ClassSessionsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<ClassSessionsQuery, ClassSessionsQueryVariables>(ClassSessionsDocument, baseOptions);
      }
      
export type ClassSessionsQueryHookResult = ReturnType<typeof useClassSessionsQuery>;
export type ClassSessionsQueryResult = ApolloReactCommon.QueryResult<ClassSessionsQuery, ClassSessionsQueryVariables>;
export const DanceClassesDocument = gql`
    query DanceClasses {
  danceClasses {
    id
    name
    description
    level
  }
}
    `;

    export function useDanceClassesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DanceClassesQuery, DanceClassesQueryVariables>) {
      return ApolloReactHooks.useQuery<DanceClassesQuery, DanceClassesQueryVariables>(DanceClassesDocument, baseOptions);
    }
      export function useDanceClassesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DanceClassesQuery, DanceClassesQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<DanceClassesQuery, DanceClassesQueryVariables>(DanceClassesDocument, baseOptions);
      }
      
export type DanceClassesQueryHookResult = ReturnType<typeof useDanceClassesQuery>;
export type DanceClassesQueryResult = ApolloReactCommon.QueryResult<DanceClassesQuery, DanceClassesQueryVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

    export function useHelloQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
      return ApolloReactHooks.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
    }
      export function useHelloLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
      
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloQueryResult = ApolloReactCommon.QueryResult<HelloQuery, HelloQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    accessToken
    user {
      id
      email
    }
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

    export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
      return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
    }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

    export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
      return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
    }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
  }
}
    `;

    export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
      return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
    }
      export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
      
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const PricesDocument = gql`
    query Prices {
  prices {
    id
    name
    description
    currentPrice
    isActive
  }
}
    `;

    export function usePricesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PricesQuery, PricesQueryVariables>) {
      return ApolloReactHooks.useQuery<PricesQuery, PricesQueryVariables>(PricesDocument, baseOptions);
    }
      export function usePricesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PricesQuery, PricesQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PricesQuery, PricesQueryVariables>(PricesDocument, baseOptions);
      }
      
export type PricesQueryHookResult = ReturnType<typeof usePricesQuery>;
export type PricesQueryResult = ApolloReactCommon.QueryResult<PricesQuery, PricesQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($name: String!, $email: String!, $password: String!) {
  register(data: {name: $name, email: $email, password: $password}) {
    id
    name
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

    export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
      return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
    }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UserDocument = gql`
    query User($userId: Int!) {
  user(userId: $userId) {
    id
    name
    email
    isActive
    credits
  }
}
    `;

    export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
      return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
    }
      export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
      
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    name
    isActive
  }
}
    `;

    export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
      return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
    }
      export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
      
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;