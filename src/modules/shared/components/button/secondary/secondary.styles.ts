import styled from 'styled-components';


export const SecondaryButton =  styled.button`
    font-weight: ${({ theme }) => theme.typography.body.large.weight.semiBold};
    line-height: ${({ theme }) => theme.typography.body.large.lineHeight};
    
    stroke-width: 1px;
    stroke: ${({ theme }) => theme.colors.secondary.medium};
    color: ${({ theme }) => theme.colors.secondary.medium};
    border: 1px solid ${({ theme }) => theme.colors.secondary.medium};
    border-radius: 24px;
    background: unset;

    &:hover {
        color: ${({ theme }) => theme.colors.secondary.dark};
        stroke: ${({ theme }) => theme.colors.secondary.dark};
        border: 1px solid ${({ theme }) => theme.colors.secondary.dark};
    }
`;