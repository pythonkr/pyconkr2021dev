import React from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
    color: #4cc5f4;
    &:hover {
        text-decoration: underline;
    }
`

const StyledLink: React.FC<{url: string}> =({ url, children }) => {
    return <Link href={url}>{children}</Link>
}

export default StyledLink
