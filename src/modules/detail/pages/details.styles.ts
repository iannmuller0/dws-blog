import styled from "styled-components";
import convertPXToREM from "../../shared/utils/convertPxToRem";

export const Title = styled.h3`
    font-weight: ${({ theme }) => theme.typography.h3.weight.bold};
    font-size:${({ theme }) => convertPXToREM(theme.typography.h2.size)};
    line-height: ${({ theme }) => theme.typography.h3.lineHeight};
    margin: 16px 0;

    @media (min-width: 1024px) {
        font-size:${({ theme }) => convertPXToREM(theme.typography.h1.size)};
        margin: 0;
	}
`;

export const AuthorWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const ImgWrapper = styled.div`
    margin: 30px 0;
    border-radius: 12px;
    overflow: hidden;

    img {
        width: -webkit-fill-available;
    }

    @media (min-width: 1024px) {
        img {
            height: 394px;
        }
	}
`;

export const Container = styled.div`
    @media (min-width: 1024px) {
		padding: 0 240px;
	}
`;