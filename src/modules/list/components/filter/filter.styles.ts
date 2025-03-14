import styled from "styled-components";
import convertPXToREM from "../../../shared/utils/convertPxToRem";

export const SortText = styled.span`
    color: ${({theme}) => theme.colors.neutral.extraDark};
    font-weight: bold;
    font-size: ${convertPXToREM(14)};
`;

export const Blog = styled.h2`
    font-size: 36px;
`;

export const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Hr = styled.hr`
    background: ${({ theme }) => theme.colors.neutral.extraLight};
	border: 0;
    margin: 0 0 16px 0;
    height: 1px;    
`;


export const Card = styled.div`
    border: 1px solid ${({theme}) => theme.colors.neutral.lightest};
    display: flex;
    flex-direction: column;
    min-width: 20%;
    height: fit-content;
    padding: 16px;
    border-radius: 16px;
`;

export const Title = styled.h3`
    font-size: ${convertPXToREM(20)};
    font-weight: 700;
    margin: 0;
`;

export const SubTitle = styled.span`
    font-size: ${convertPXToREM(16)};
    font-weight: 600;
    margin: 16px 0 12px 0;
`;

export const Item = styled.div`
    font-size: ${({theme}) => convertPXToREM(theme.typography.body.small.size)};
    line-height: ${({theme}) => theme.typography.body.small.lineHeight};
    font-weight: ${({theme}) => theme.typography.body.small.weight.regular};
    margin: 8px 0;
    border-radius: 8px;
    padding: 12px 8px;
    cursor: pointer;
    
    &:hover {
        color: ${({theme}) => theme.colors.accent1.dark};
        border: 1px solid ${({theme}) => theme.colors.neutral.extraLight};
    }

    &:active {
        color: ${({theme}) => theme.colors.accent1.dark};
        border: 1px solid ${({theme}) => theme.colors.accent1.dark};
        background: rgba(0, 191, 193, 0.5);
    }
`;