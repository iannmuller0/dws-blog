import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    position: relative;

    input {
        color: ${({ theme }) => theme.colors.neutral.extraDark};
        border: 1px solid ${({ theme }) => theme.colors.neutral.extraLight};
        padding: 8px 8px 8px 16px;
        border-radius: 25px;
     
        &:hover {
           border: 1px solid ${({ theme }) => theme.colors.accent1.medium};
            border-radius: 25px;
        }

        &:focus {
            outline: ${({ theme }) => theme.colors.accent1.medium};
        }
    }
`;

export const IconContainer = styled.div`
    background: ${({ theme }) => theme.colors.primary.light};
    padding: 5px 5px 2px 5px;
    border-radius: 25px;
    position: absolute;
    right: 6px;
    top: 3px;

    svg {
        stroke: white;
    }
`;
