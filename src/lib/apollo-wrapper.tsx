"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
  ApolloNextAppProvider,
} from "@apollo/client-integration-nextjs";

export function makeClient() {
  const httpLink = new HttpLink({
    uri: `${process.env.ERXES_API_URL}/graphql`,
    credentials: "include", 
    headers: {
      "erxes-app-token": process.env.ERXES_APP_TOKEN || "",
    },
    fetchOptions: { cache: "no-store" },
  });

  const link =
    typeof window === "undefined"
      ? ApolloLink.from([
          new SSRMultipartLink({ stripDefer: true }),
          httpLink,
        ])
      : httpLink;

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
