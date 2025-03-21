import styled from "styled-components";
import convertPXToREM from "../../utils/convertPxToRem";
import convertPXToVH from "../../utils/convertPxToVh";
import convertPXToVW from "../../utils/convertPxToVw";

export const Wrapper = styled.div`
    border-radius: 16px 16px 0 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 12px;
    overflow: hidden;
    img {
        width: -webkit-fill-available;
    }

    @media (min-width: 1024px) {
        margin: 0;
        width: ${convertPXToVW(314)};
        max-height: ${convertPXToVH(425)};
        min-height: ${convertPXToVH(425)};    
        cursor: pointer;
        min-width: ${convertPXToVW(280)};
        max-width:${convertPXToVW(314)};
    }
`;

export const Info = styled.span`
    font-weight: ${({ theme }) => theme.typography.caption.weight.regular};
    font-size: ${({ theme }) => convertPXToREM(theme.typography.caption.size)};
    line-height: ${({ theme }) => theme.typography.caption.lineHeight};
    color: ${({ theme }) => theme.colors.neutral.extraDark}
`;

export const Title = styled.h3`
    font-weight: ${({ theme }) => theme.typography.h3.weight.bold};
    font-size: ${({ theme }) => convertPXToREM(theme.typography.h3.size)};
    line-height: ${({ theme }) => theme.typography.h3.lineHeight};
    margin: 16px 0;
`;

export const Description = styled.h3`
    font-weight: ${({ theme }) => theme.typography.body.small.weight.regular};
    font-size: ${({ theme }) => convertPXToREM(theme.typography.body.small.size)};
    line-height: ${({ theme }) => theme.typography.body.small.lineHeight};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; 
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Container = styled.div`
    margin: 16px;
`;

export const Dot = styled.div`
    height: 5px;
    width: 5px;
    margin: 1px 6px;
    background-color: ${({ theme }) => theme.colors.secondary.medium};
    border-radius: 50%;
    display: inline-block;
`;
