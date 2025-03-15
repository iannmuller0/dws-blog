import styled from "styled-components";
import convertPXToREM from "../../../shared/utils/convertPxToRem";

export const Title = styled.h3`
    font-weight: ${({ theme }) => theme.typography.h3.weight.bold};
    font-size:${({ theme }) => convertPXToREM(theme.typography.h3.size)};
    line-height: ${({ theme }) => theme.typography.h3.lineHeight};
    margin: 16px 0;

    @media (min-width: 1024px) {
        font-size:${({ theme }) => convertPXToREM(theme.typography.h2.size)};
        margin: 64px 0 32px 0;
	}
`;

export const Wrapper = styled.div`
    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
	}
`;
