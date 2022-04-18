import { ApolloProvider as Provider } from '@apollo/client';
import useApolloProviderModule from './ApolloProvider.module';

const ApolloProvider: React.VFC = ({ children }) => {
  const { apolloService } = useApolloProviderModule();

  return <Provider client={apolloService.client}>{children}</Provider>;
};

export default ApolloProvider;
