import { CommentBlock } from '../../components/composite/CommentBlock';
import { ProductInfo } from '../../components/composite/ProductInfo';
import { ListComponents } from '../../components/UI/ListComponents';
import { PageLayout } from '../../layouts/page';
import * as UI from './styles';

export const Post = () => {
  return (
    <PageLayout>
      <ListComponents>
        <ProductInfo />
        <CommentBlock />
      </ListComponents>
    </PageLayout>
  );
};
