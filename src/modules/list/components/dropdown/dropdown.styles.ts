import styled from "styled-components";
import type { IIconWrapper } from "./interface";
import convertPXToVW from "../../../shared/utils/convertPxToVw";
import convertPXToREM from "../../../shared/utils/convertPxToRem";

export const Li = styled.li`
    row-gap: 8px;
    padding: 8px 0;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
`;

export const Ul = styled.ul`
   background: #EFEFF2;
   min-width: ${convertPXToVW(314)};
   padding: 16px;
   margin: 10px 0;
   column-gap: 8px;
   border-radius: 16px;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   position: absolute;
   list-style-type: none;
   text-align: left;
`;

export const Header = styled.button`
    color: ${({ theme }) => theme.colors.secondary.medium};
    border-color: ${({ theme }) => theme.colors.secondary.medium};
    background: ${({ theme }) => theme.colors.neutral.lightest};
    min-width:  ${convertPXToVW(110)};
    padding: 8px;
    display: flex;
    align-items: center;
    row-gap: 4px;
    justify-content: center;
    position: relative;
    margin: 0 6px;

    div {
        display: flex;
    }

    span {
        margin-right: 4px;
        font-size: ${convertPXToREM(12)};
        font-weight: bold;
    };

    svg {
        fill: ${({ theme }) => theme.colors.secondary.medium};
    }

    &:hover {
        background: rgba(211, 20, 80, 0.5);
        color: ${({ theme }) => theme.colors.secondary.medium};
    }
`;

export const IconWrapper = styled.div<IIconWrapper>`
    transform:${({ isOpen }) => isOpen && "rotate(180deg)"};
`;
