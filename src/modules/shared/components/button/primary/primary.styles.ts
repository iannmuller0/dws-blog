import styled from "styled-components";

export const PrimaryButton = styled.button`
    font-weight: ${({ theme }) => theme.typography.body.large.weight.semiBold};
    line-height: ${({ theme }) => theme.typography.body.large.lineHeight};
    
    border-radius: 24px;
    color: ${({ theme }) => theme.colors.neutral.lightest};
    background: ${({ theme }) => theme.colors.secondary.medium};

    &:hover {
        background: ${({ theme }) => theme.colors.secondary.dark};
    }
`;
