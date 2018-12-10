/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateSkillInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  url?: string | null;
};

export type UpdateSkillInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  url?: string | null;
};

export type DeleteSkillInput = {
  id?: string | null;
};

export type ModelSkillFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  url?: ModelStringFilterInput | null;
  and?: Array<ModelSkillFilterInput | null> | null;
  or?: Array<ModelSkillFilterInput | null> | null;
  not?: ModelSkillFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateSkillMutation = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
  url: string | null;
};

export type UpdateSkillMutation = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
  url: string | null;
};

export type DeleteSkillMutation = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
  url: string | null;
};

export type GetSkillQuery = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
  url: string | null;
};

export type ListSkillsQuery = {
  __typename: string;
  items: Array<{
    __typename: "Skill";
    id: string;
    name: string;
    description: string | null;
    url: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateSkillSubscription = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
  url: string | null;
};

export type OnUpdateSkillSubscription = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
  url: string | null;
};

export type OnDeleteSkillSubscription = {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
  url: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateSkill(input: CreateSkillInput): Promise<CreateSkillMutation> {
    const statement = `mutation CreateSkill($input: CreateSkillInput!) {
        createSkill(input: $input) {
          __typename
          id
          name
          description
          url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSkillMutation>response.data.createSkill;
  }
  async UpdateSkill(input: UpdateSkillInput): Promise<UpdateSkillMutation> {
    const statement = `mutation UpdateSkill($input: UpdateSkillInput!) {
        updateSkill(input: $input) {
          __typename
          id
          name
          description
          url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSkillMutation>response.data.updateSkill;
  }
  async DeleteSkill(input: DeleteSkillInput): Promise<DeleteSkillMutation> {
    const statement = `mutation DeleteSkill($input: DeleteSkillInput!) {
        deleteSkill(input: $input) {
          __typename
          id
          name
          description
          url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSkillMutation>response.data.deleteSkill;
  }
  async GetSkill(id: string): Promise<GetSkillQuery> {
    const statement = `query GetSkill($id: ID!) {
        getSkill(id: $id) {
          __typename
          id
          name
          description
          url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSkillQuery>response.data.getSkill;
  }
  async ListSkills(
    filter?: ModelSkillFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSkillsQuery> {
    const statement = `query ListSkills($filter: ModelSkillFilterInput, $limit: Int, $nextToken: String) {
        listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            url
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSkillsQuery>response.data.listSkills;
  }
  OnCreateSkillListener: Observable<OnCreateSkillSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateSkill {
        onCreateSkill {
          __typename
          id
          name
          description
          url
        }
      }`
    )
  ) as Observable<OnCreateSkillSubscription>;

  OnUpdateSkillListener: Observable<OnUpdateSkillSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSkill {
        onUpdateSkill {
          __typename
          id
          name
          description
          url
        }
      }`
    )
  ) as Observable<OnUpdateSkillSubscription>;

  OnDeleteSkillListener: Observable<OnDeleteSkillSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSkill {
        onDeleteSkill {
          __typename
          id
          name
          description
          url
        }
      }`
    )
  ) as Observable<OnDeleteSkillSubscription>;
}
