import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useGetProductsQuery, useMeQuery } from '../../graphql/generated/graphql';
import { getServerPageGetProducts, ssrGetProducts } from '../../graphql/generated/page';
import { withApollo } from '../../lib/withApollo';

function Home({ data }) {
  const { user } = useUser();
  const { data: me } = useMeQuery();

  return (
    <div>
      <h1>Welcome to the app!</h1>

      <pre>
        {JSON.stringify(me, null, 2)}
      </pre>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // return getServerPageGetProducts(null, ctx);

    return {
      props: {}
    }
  }
});

export default withApollo(
  ssrGetProducts.withPage()(Home)
);