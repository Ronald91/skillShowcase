import { NgModule } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import amplify from "./../aws-exports";

const uri = amplify.aws_appsync_graphqlEndpoint;

const apiHeaders = new HttpHeaders({
  "x-api-key": amplify.aws_appsync_apiKey
});

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({
      uri,
      headers: apiHeaders
    }),

    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
