import styled from 'styled-components';
import type { IIconWrapper } from './interface';

export const Li =  styled.li`
    row-gap: 8px;
    padding: 4px 0 16px 0;
    border-radius: 4px;
    cursor: pointer;
`;

export const Ul =  styled.ul`
   background: #EFEFF2;
   min-width: 314px;
   height: 204px;
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
    background: ${({ theme }) => theme.colors.neutral.lightest};
    height: 32px;
    min-width: 110px;
    padding: 12px 12px 12px 16px;
    display: flex;
    align-items: center;
    row-gap: 4px;
    justify-content: center;
    position: relative;

    div {
        display: flex;
    }

    span {
        margin-right: 4px;
        font-size: 12px;
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
    transform:${({ isOpen }) => isOpen && 'rotate(180deg)'};
`;