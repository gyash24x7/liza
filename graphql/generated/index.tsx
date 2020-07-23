import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type AggregateNote = {
  count: Scalars['Int'];
};

export type AggregateUser = {
  count: Scalars['Int'];
};

export type BatchPayload = {
  count: Scalars['Int'];
};



export type Mutation = {
  createNote?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  signup?: Maybe<Scalars['String']>;
};


export type MutationCreateNoteArgs = {
  content: Scalars['String'];
  title: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Note = {
  author: User;
  content: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
};

export type NoteCreateInput = {
  author: UserCreateOneWithoutNotesInput;
  content: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type NoteCreateManyWithoutAuthorInput = {
  connect?: Maybe<Array<NoteWhereUniqueInput>>;
  create?: Maybe<Array<NoteCreateWithoutAuthorInput>>;
};

export type NoteCreateWithoutAuthorInput = {
  content: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type NoteFilter = {
  every?: Maybe<NoteWhereInput>;
  none?: Maybe<NoteWhereInput>;
  some?: Maybe<NoteWhereInput>;
};

export type NoteOrderByInput = {
  authorId?: Maybe<OrderByArg>;
  content?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  title?: Maybe<OrderByArg>;
};

export type NoteScalarWhereInput = {
  AND?: Maybe<Array<NoteScalarWhereInput>>;
  authorId?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<NoteScalarWhereInput>>;
  OR?: Maybe<Array<NoteScalarWhereInput>>;
  title?: Maybe<StringFilter>;
};

export type NoteUpdateInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutNotesInput>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type NoteUpdateManyDataInput = {
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type NoteUpdateManyMutationInput = {
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type NoteUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<NoteWhereUniqueInput>>;
  create?: Maybe<Array<NoteCreateWithoutAuthorInput>>;
  delete?: Maybe<Array<NoteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<NoteScalarWhereInput>>;
  disconnect?: Maybe<Array<NoteWhereUniqueInput>>;
  set?: Maybe<Array<NoteWhereUniqueInput>>;
  update?: Maybe<Array<NoteUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<NoteUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<NoteUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type NoteUpdateManyWithWhereNestedInput = {
  data: NoteUpdateManyDataInput;
  where: NoteScalarWhereInput;
};

export type NoteUpdateWithoutAuthorDataInput = {
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type NoteUpdateWithWhereUniqueWithoutAuthorInput = {
  data: NoteUpdateWithoutAuthorDataInput;
  where: NoteWhereUniqueInput;
};

export type NoteUpsertWithWhereUniqueWithoutAuthorInput = {
  create: NoteCreateWithoutAuthorInput;
  update: NoteUpdateWithoutAuthorDataInput;
  where: NoteWhereUniqueInput;
};

export type NoteWhereInput = {
  AND?: Maybe<Array<NoteWhereInput>>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<NoteWhereInput>>;
  OR?: Maybe<Array<NoteWhereInput>>;
  title?: Maybe<StringFilter>;
};

export type NoteWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  hello?: Maybe<Scalars['String']>;
  me?: Maybe<User>;
  myNotes?: Maybe<Array<Note>>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type User = {
  avatar: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  notes: Array<Note>;
};


export type UserNotesArgs = {
  after?: Maybe<NoteWhereUniqueInput>;
  before?: Maybe<NoteWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  avatar: Scalars['String'];
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  notes?: Maybe<NoteCreateManyWithoutAuthorInput>;
  password: Scalars['String'];
  salt: Scalars['String'];
};

export type UserCreateOneWithoutNotesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutNotesInput>;
};

export type UserCreateWithoutNotesInput = {
  avatar: Scalars['String'];
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  salt: Scalars['String'];
};

export type UserOrderByInput = {
  avatar?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  password?: Maybe<OrderByArg>;
  salt?: Maybe<OrderByArg>;
};

export type UserUpdateInput = {
  avatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<NoteUpdateManyWithoutAuthorInput>;
  password?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
};

export type UserUpdateManyMutationInput = {
  avatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
};

export type UserUpdateOneRequiredWithoutNotesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutNotesInput>;
  update?: Maybe<UserUpdateWithoutNotesDataInput>;
  upsert?: Maybe<UserUpsertWithoutNotesInput>;
};

export type UserUpdateWithoutNotesDataInput = {
  avatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
};

export type UserUpsertWithoutNotesInput = {
  create: UserCreateWithoutNotesInput;
  update: UserUpdateWithoutNotesDataInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  avatar?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  notes?: Maybe<NoteFilter>;
  OR?: Maybe<Array<UserWhereInput>>;
  password?: Maybe<StringFilter>;
  salt?: Maybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { login?: Maybe<string> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: Maybe<{ name: string, email: string, id: string }> };

export type SignupMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = { signup?: Maybe<string> };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    name
    email
    id
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
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export function refetchMeQuery(variables?: MeQueryVariables) {
      return { query: MeDocument, variables: variables }
    }
export const SignupDocument = gql`
    mutation Signup($name: String!, $email: String!, $password: String!) {
  signup(name: $name, email: $email, password: $password)
}
    `;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;