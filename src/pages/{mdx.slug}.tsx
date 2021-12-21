import React from 'react';
import { graphql } from 'gatsby';

import Consulting from '../templates/consulting';
import NotFound from './404';
import { PAGE_TYPE } from '../consts';

const Page = ({
    data: {
        mdx: { frontmatter },
    },
}) => {
    const { type } = frontmatter;

    if (type === PAGE_TYPE.Consulting) {
        return <Consulting data={frontmatter} />;
    }

    return <NotFound />;
};

export const query = graphql`
    query PageById($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                type
                title
            }
        }
    }
`;

export default Page;
