import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blackburger.app.erxes.io",
      },
    ],
  },

  env: {
    ERXES_API_URL: "https://blackburger.app.erxes.io/api",
    NEXT_PUBLIC_ERXES_API_URL:
      "https://blackburger.app.erxes.io/gateway/graphql",
    ERXES_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6Ik5ldyIsImNyZWF0ZWRBdCI6IjIwMjUtMDgtMTRUMDU6MTI6MTYuOTU0WiIsInVzZXJHcm91cElkIjoiNEVIeWRUREFpczJMZFFuWm4iLCJleHBpcmVEYXRlIjoiMjAyNS0wOS0xNVQxMjozNTo1MS4yOTRaIiwibm9FeHBpcmUiOnRydWUsImFsbG93QWxsUGVybWlzc2lvbiI6dHJ1ZSwiX2lkIjoiUU5kd1FfN1ZNY0NLLUk4MHdub2lEIiwiX192IjowfSwiaWF0IjoxNzU1MzQ3NzY3fQ.M6PYGpWcH5LChBP_RY7wnbc0CaL4aQlTwUEd-gZGoHs",
    CLIENT_PORTAL_ID: "B7HNIsw6o-J9M4fLAFuGs",
    HOME_BURGER_CMS_ID: "tjNuLoHh7gAl0KzRpoWU2",
  },
};

export default nextConfig;
