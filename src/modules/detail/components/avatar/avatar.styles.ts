import styled from "styled-components";
import convertPXToREM from "../../../shared/utils/convertPxToRem";

interface ITypography {
    color?: string,
    weight?: number,
}

export const Wrapper = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 12px;
`;

export const Typography = styled.span<ITypography>`
    color: ${({ color, theme }) => color === 'extraDark' ? theme.colors.neutral.extraDark : theme.colors.neutral.darkest};
    font-size: ${convertPXToREM(14)};
    font-weight: ${({ weight }) => weight};
    margin-top: 4px
`;