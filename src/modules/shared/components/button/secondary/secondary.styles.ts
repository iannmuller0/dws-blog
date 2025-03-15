import styled from "styled-components";

export const SecondaryButton = styled.button`
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    
    stroke-width: 1px;
    fill: ${({ theme }) => theme.colors.secondary.medium};
    color: ${({ theme }) => theme.colors.secondary.medium};
    border: 1px solid ${({ theme }) => theme.colors.secondary.medium};
    border-radius: 24px;
    background: unset;
    padding: 10px 12px;

    span {
        font-weight: ${({ theme }) => theme.typography.body.large.weight.semiBold};
        margin-left: 8px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.secondary.dark};
        fill: ${({ theme }) => theme.colors.secondary.dark};
        border: 1px solid ${({ theme }) => theme.colors.secondary.dark};
    }
`;
