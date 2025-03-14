import styled from "styled-components";

export const SecondaryButton = styled.button`
    font-weight: ${({ theme }) => theme.typography.body.large.weight.semiBold};
    line-height: ${({ theme }) => theme.typography.body.large.lineHeight};
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    
    stroke-width: 1px;
    fill: ${({ theme }) => theme.colors.secondary.medium};
    color: ${({ theme }) => theme.colors.secondary.medium};
    border: 1px solid ${({ theme }) => theme.colors.secondary.medium};
    border-radius: 24px;
    background: unset;

    &:hover {
        color: ${({ theme }) => theme.colors.secondary.dark};
        fill: ${({ theme }) => theme.colors.secondary.dark};
        border: 1px solid ${({ theme }) => theme.colors.secondary.dark};
    }
`;
