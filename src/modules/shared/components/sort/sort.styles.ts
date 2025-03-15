import styled from "styled-components";

export const Sort = styled.button`
    color: ${({ theme }) => theme.colors.neutral.extraDark};
    border-radius: 24px;
    background: unset;
    padding: 8px;
    display: flex;
    min-width: fit-content;

    span {
        margin-right: 4px;
    }

    svg {
        fill: ${({ theme }) => theme.colors.accent1.medium};
    }

    &:hover {
        color: ${({ theme }) => theme.colors.neutral.extraLight};
        background: ${({ theme }) => theme.colors.accent1.medium};

        svg {
            fill: ${({ theme }) => theme.colors.neutral.extraLight};
        }

    }
`;
