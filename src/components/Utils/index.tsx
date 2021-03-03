import styled from 'styled-components';

export const Mobile = styled.div`
  ${({ theme }) => theme.media.min.tablet`
    display: none;
  `}
`;

export const MobileBR = styled.br`
  ${({ theme }) => theme.media.min.tablet`
    display: none;
    `}
`;

export const Desktop = styled.div`
  ${({ theme }) => theme.media.max.tablet`
    display: none;
  `}
`;

export const DesktopBR = styled.br`
  ${({ theme }) => theme.media.max.tablet`
  display: none;
  `}
`;
